import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import {
  authenticateDeveloper,
  authenticateFirebaseDeveloper,
  isAuthorizedDeveloper,
  verifySessionToken,
  revokeSessionToken,
  getStoredTopics,
  createTopic,
  updateTopic,
  deleteTopic,
  getDeveloperStats,
  getStoredAISettings,
  saveStoredAISettings
} from './server/developerStore';
import { generateStructuredAnimation } from './server/geminiService';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // In-memory store for student sync
  const studentSyncStore: Record<string, any> = {};

  // Developer Authorization Middleware
  const requireDeveloperAuth = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: Developer credentials required.' });
    }
    const token = authHeader.split(' ')[1];
    const session = verifySessionToken(token);
    if (!session) {
      return res.status(403).json({ error: 'Forbidden: Invalid or expired developer session.' });
    }
    (req as any).developer = session;
    next();
  };

  // --- PUBLIC / STUDENT API ROUTES ---

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'healthy',
      app: 'Eureka Science Lab',
      timestamp: new Date().toISOString()
    });
  });

  // Student progress sync endpoints
  app.post('/api/student/sync', (req, res) => {
    const { profile, progress } = req.body;
    if (profile && profile.name) {
      studentSyncStore[profile.name] = {
        profile,
        progress,
        syncedAt: new Date().toISOString()
      };
      return res.json({ success: true, message: 'Profile synced successfully.' });
    }
    return res.status(400).json({ error: 'Missing profile payload' });
  });

  app.get('/api/student/sync/:name', (req, res) => {
    const name = req.params.name;
    const data = studentSyncStore[name];
    if (data) {
      return res.json(data);
    }
    return res.status(404).json({ error: 'No synced profile found' });
  });

  // Student Dynamic Published Curriculum Endpoint
  // Strictly returns ONLY published content matching the student's grade.
  // Drafts, archived topics, and developer settings are NEVER accessible here.
  app.get('/api/student/curriculum', (req, res) => {
    const grade = req.query.grade ? parseInt(req.query.grade as string, 10) : undefined;
    let published = getStoredTopics(false); // only status === 'published'
    if (grade) {
      published = published.filter((t) => t.grade === grade);
    }
    res.json({ topics: published });
  });

  // --- SECURE DEVELOPER API ROUTES (Protected) ---

  // 1. Developer Authentication
  app.post('/api/developer/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Developer username and password are required.' });
    }
    const result = authenticateDeveloper(username, password);
    if (!result) {
      return res.status(401).json({ error: 'Invalid developer credentials. Access denied.' });
    }
    res.json(result);
  });

  // 1b. Firebase Verified Developer Authentication
  app.post('/api/developer/auth/firebase-login', (req, res) => {
    const { email, uid, displayName } = req.body;
    if (!email && !uid) {
      return res.status(400).json({ error: 'Developer identity required.' });
    }
    const result = authenticateFirebaseDeveloper(email, uid, displayName);
    if (!result) {
      return res.status(403).json({
        error: 'Forbidden: Account does not have verified developer privileges.'
      });
    }
    res.json(result);
  });

  // 1c. Secure Role Verification (ensures student accounts are denied developer access)
  app.post('/api/developer/auth/check-access', (req, res) => {
    const { email, uid } = req.body;
    if (!email && !uid) {
      return res.json({ isDeveloper: false, isStudent: true, message: 'Unauthenticated' });
    }
    const authorized = isAuthorizedDeveloper(email, uid);
    if (!authorized) {
      return res.status(403).json({
        isDeveloper: false,
        isStudent: true,
        error: 'Student accounts cannot access administrative routes or curriculum management.'
      });
    }
    return res.json({ isDeveloper: true, isStudent: false });
  });

  app.get('/api/developer/auth/verify', requireDeveloperAuth, (req, res) => {
    res.json({ valid: true, developer: (req as any).developer });
  });

  app.post('/api/developer/auth/logout', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      revokeSessionToken(authHeader.split(' ')[1]);
    }
    res.json({ success: true, message: 'Logged out successfully.' });
  });

  // 2. Developer Dashboard Metrics (Real Database Stats)
  app.get('/api/developer/stats', requireDeveloperAuth, (_req, res) => {
    res.json(getDeveloperStats());
  });

  // 3. Developer Content Management
  app.get('/api/developer/content/topics', requireDeveloperAuth, (_req, res) => {
    res.json(getStoredTopics(true)); // Include all (draft, published, archived)
  });

  app.post('/api/developer/content/topics', requireDeveloperAuth, (req, res) => {
    try {
      const topic = createTopic(req.body);
      res.status(201).json(topic);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create topic.' });
    }
  });

  app.put('/api/developer/content/topics/:id', requireDeveloperAuth, (req, res) => {
    const updated = updateTopic(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Topic not found.' });
    res.json(updated);
  });

  app.delete('/api/developer/content/topics/:id', requireDeveloperAuth, (req, res) => {
    const ok = deleteTopic(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Topic not found.' });
    res.json({ success: true });
  });

  // Topic Publishing Actions
  app.post('/api/developer/content/topics/:id/publish', requireDeveloperAuth, (req, res) => {
    const all = getStoredTopics(true);
    const target = all.find((t) => t.id === req.params.id);
    if (!target) return res.status(404).json({ error: 'Topic not found.' });

    // Strict validation before publishing
    if (!target.name?.trim()) {
      return res.status(400).json({ error: 'Topic name is required before publishing.' });
    }
    if (!target.grade) {
      return res.status(400).json({ error: 'Grade level is required before publishing.' });
    }
    if (!target.animationSpec || !target.animationSpec.objects || target.animationSpec.objects.length === 0) {
      return res.status(400).json({
        error: 'A validated structured animation specification with interactive instruments is required.'
      });
    }

    const updated = updateTopic(req.params.id, { status: 'published' });
    res.json({ success: true, topic: updated });
  });

  app.post('/api/developer/content/topics/:id/unpublish', requireDeveloperAuth, (req, res) => {
    const updated = updateTopic(req.params.id, { status: 'unpublished' });
    if (!updated) return res.status(404).json({ error: 'Topic not found.' });
    res.json({ success: true, topic: updated });
  });

  app.post('/api/developer/content/topics/:id/archive', requireDeveloperAuth, (req, res) => {
    const updated = updateTopic(req.params.id, { status: 'archived' });
    if (!updated) return res.status(404).json({ error: 'Topic not found.' });
    res.json({ success: true, topic: updated });
  });

  // 4. AI Animation Creator Pipeline
  app.post('/api/developer/generate-animation', requireDeveloperAuth, async (req, res) => {
    try {
      const { topicName, topicDescription, animationRequest, grade, subject } = req.body;
      if (!topicName || !animationRequest) {
        return res.status(400).json({ error: 'Topic Name and Animation Request prompt are required.' });
      }

      const animationSpec = await generateStructuredAnimation({
        topicName,
        topicDescription: topicDescription || '',
        animationRequest,
        grade: grade ? Number(grade) : 9,
        subject: subject || 'Physics'
      });

      res.json({ success: true, animationSpec });
    } catch (err: any) {
      console.warn('Developer generate-animation failed:', err);
      res.status(500).json({ error: 'Failed to generate animation: ' + (err?.message || 'Server error') });
    }
  });

  // 5. Developer AI Settings
  app.get('/api/developer/ai/settings', requireDeveloperAuth, (_req, res) => {
    res.json(getStoredAISettings());
  });

  app.post('/api/developer/ai/settings', requireDeveloperAuth, (req, res) => {
    const updated = saveStoredAISettings(req.body);
    res.json({ success: true, settings: updated });
  });

  // Vite middleware in dev or static files in production
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[EUREKA] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
