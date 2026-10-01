import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { TopicRecord, AISettings, DeveloperStats, DeveloperUser } from '../src/types/developer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '..', 'server_data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const TOPICS_FILE = path.join(DATA_DIR, 'topics.json');
const DEV_AUTH_FILE = path.join(DATA_DIR, 'developer_auth.json');
const AI_SETTINGS_FILE = path.join(DATA_DIR, 'ai_settings.json');

// Session store in memory
interface SessionData {
  developerId: string;
  username: string;
  role: 'developer_admin' | 'content_manager';
  permissions: string[];
  expiresAt: number;
}
const activeSessions = new Map<string, SessionData>();

// Hash password with salt
function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

// Initialize default developer account if not exists
function initDevAuth() {
  let authData: { accounts: any[]; authorizedFirebaseUids: string[] } = {
    accounts: [],
    authorizedFirebaseUids: []
  };

  if (fs.existsSync(DEV_AUTH_FILE)) {
    try {
      authData = JSON.parse(fs.readFileSync(DEV_AUTH_FILE, 'utf-8'));
      if (!Array.isArray(authData.accounts)) authData.accounts = [];
      if (!Array.isArray(authData.authorizedFirebaseUids)) authData.authorizedFirebaseUids = [];
    } catch {
      authData = { accounts: [], authorizedFirebaseUids: [] };
    }
  }

  const defaultPassword = process.env.DEV_ADMIN_PASSWORD || 'EurekaDev2026!';

  // Ensure Luke Gerard developer admin account
  const hasLuke = authData.accounts.some(
    (acc: any) =>
      acc.email?.toLowerCase() === 'fernandeslukegerard@gmail.com' ||
      acc.username?.toLowerCase() === 'fernandeslukegerard'
  );

  if (!hasLuke) {
    const saltLuke = crypto.randomBytes(16).toString('hex');
    authData.accounts.push({
      id: 'dev_luke_gerard',
      username: 'fernandeslukegerard',
      email: 'fernandeslukegerard@gmail.com',
      salt: saltLuke,
      passwordHash: hashPassword(defaultPassword, saltLuke),
      role: 'developer_admin',
      permissions: ['manage_curriculum', 'ai_generate', 'publish_content', 'manage_settings'],
      createdAt: new Date().toISOString()
    });
  }

  // Ensure default eureka_dev account
  const hasDefault = authData.accounts.some(
    (acc: any) => acc.username?.toLowerCase() === 'eureka_dev'
  );

  if (!hasDefault) {
    const saltDef = crypto.randomBytes(16).toString('hex');
    authData.accounts.push({
      id: 'dev_primary_01',
      username: 'eureka_dev',
      email: 'developer@eureka.internal',
      salt: saltDef,
      passwordHash: hashPassword(defaultPassword, saltDef),
      role: 'developer_admin',
      permissions: ['manage_curriculum', 'ai_generate', 'publish_content', 'manage_settings'],
      createdAt: new Date().toISOString()
    });
  }

  fs.writeFileSync(DEV_AUTH_FILE, JSON.stringify(authData, null, 2), 'utf-8');
}

initDevAuth();

// Initialize AI Settings if not exists
function initAISettings() {
  if (!fs.existsSync(AI_SETTINGS_FILE)) {
    const defaultSettings: AISettings = {
      provider: 'google_gemini',
      model: 'gemini-3.8-flash',
      temperature: 0.7,
      maxTokens: 2048,
      systemInstruction:
        'You are the lead STEM curriculum and animation architect for Eureka Science Lab. You design interactive, scientifically accurate, engaging animations with calibrated dials, gauges, sliders, and verification procedures.'
    };
    fs.writeFileSync(AI_SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2), 'utf-8');
  }
}

initAISettings();

// Initialize sample published topic if empty so students and developers have an immediate example
function initTopics() {
  if (!fs.existsSync(TOPICS_FILE)) {
    const sampleTopics: TopicRecord[] = [
      {
        id: 'topic_phys_1_preflight',
        grade: 9,
        subjectId: 'physics',
        subjectName: 'Physics',
        chapterId: 'phys_ch1_measurement',
        chapterNumber: 1,
        chapterName: 'Physical Quantities & Measurement Techniques',
        name: 'Pre-Flight Avionics & Physical Measurement Lab',
        description:
          'Students inspect aircraft pitot-static systems, barometric pressure altimeters, and airspeed calibration before flight takeoff.',
        learningObjectives: [
          'Understand standard physical units for atmospheric pressure (hPa) and airspeed (knots).',
          'Calibrate barometric altimeter to mean sea level standard (1013 hPa).',
          'Analyze why precision measurement prevents aircraft sensor errors.'
        ],
        content:
          'In aviation, altimeters calculate altitude using hydrostatic pressure variations: ΔP = ρ·g·Δh. Pilots calibrate the Kollsman window to local QNH (1013.25 hPa) to ensure accurate elevation readings.',
        academicConcept: 'Hydrostatic pressure and barometric measurement in fluids',
        interactiveActivity: {
          instructions:
            'Inspect the barometric altimeter dial, adjust the pressure sub-scale to standard 1013 hPa, and calibrate the pitot tube.',
          goal: 'Verify all three avionics instruments to clear the aircraft for runway takeoff.'
        },
        animationSpec: {
          scene: {
            theme: 'aviation_hangar',
            title: 'Aircraft Pre-Flight Measurement Station',
            backgroundStyle: 'hangar_runway',
            primaryColor: '#2563eb'
          },
          objects: [
            {
              id: 'altimeter',
              name: 'Barometric Altimeter',
              type: 'gauge',
              quantity: 'Atmospheric Pressure',
              initialValue: 1000,
              targetValue: 1013,
              min: 950,
              max: 1050,
              step: 1,
              unit: 'hPa',
              status: 'pending',
              tooltip: 'Set standard barometric reference pressure to 1013 hPa.'
            },
            {
              id: 'airspeed_meter',
              name: 'Pitot-Static Airspeed Indicator',
              type: 'gauge',
              quantity: 'Calibrated Airspeed',
              initialValue: 0,
              targetValue: 0,
              min: 0,
              max: 200,
              step: 5,
              unit: 'knots',
              status: 'calibrated',
              tooltip: 'Indicates dynamic pressure generated by forward aircraft velocity.'
            },
            {
              id: 'pitot_heater',
              name: 'Pitot Sensor Probe Heater',
              type: 'switch',
              quantity: 'Sensor Probe Power',
              initialValue: 0,
              targetValue: 1,
              min: 0,
              max: 1,
              step: 1,
              unit: 'state',
              status: 'pending',
              tooltip: 'Activate probe heater to prevent ice accumulation on measurement apertures.'
            }
          ],
          interactions: [
            {
              id: 'calibrate_altimeter',
              targetObjectId: 'altimeter',
              label: 'Calibrate Altimeter to 1013 hPa',
              actionType: 'calibrate',
              hint: 'Adjust dial until standard atmospheric sea-level pressure is reached.',
              feedbackOnSuccess: 'Altimeter calibrated to 1013 hPa sea-level datum.'
            },
            {
              id: 'activate_probe',
              targetObjectId: 'pitot_heater',
              label: 'Engage Pitot Tube Heater',
              actionType: 'toggle',
              hint: 'Turn switch to ACTIVE state to ensure clean airflow reading.',
              feedbackOnSuccess: 'Pitot tube heating element is online.'
            }
          ],
          educationalHighlights: [
            {
              concept: 'Standard Sea-Level Pressure',
              detail: 'Standard atmospheric pressure at sea level is 1013.25 hPa (101.325 kPa or 1 atmosphere).'
            },
            {
              concept: 'Pitot-Static Principle',
              detail: 'Dynamic pressure q = 1/2·ρ·v² allows airspeed computation from total and static pressure difference.'
            }
          ],
          successCriteria: {
            requiredChecks: 2,
            completionMessage:
              'All pre-flight avionics instruments verified! Aircraft cleared for takeoff run.'
          }
        },
        questions: [
          {
            id: 'q1',
            questionText: 'What is the standard sea-level atmospheric pressure value in hPa?',
            options: ['980 hPa', '1013 hPa', '1050 hPa', '1200 hPa'],
            correctAnswer: '1013 hPa',
            marks: 2,
            feedback: 'Standard atmospheric pressure at sea level is defined as 1013.25 hPa.'
          }
        ],
        status: 'published',
        version: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      }
    ];

    fs.writeFileSync(TOPICS_FILE, JSON.stringify(sampleTopics, null, 2), 'utf-8');
  }
}

initTopics();

// Topic storage operations
export function getStoredTopics(includeAll: boolean = false): TopicRecord[] {
  try {
    if (!fs.existsSync(TOPICS_FILE)) return [];
    const raw = fs.readFileSync(TOPICS_FILE, 'utf-8');
    const topics: TopicRecord[] = JSON.parse(raw);
    if (includeAll) {
      return topics;
    }
    // Student read mode: only published topics
    return topics.filter((t) => t.status === 'published');
  } catch (e) {
    console.warn('Error reading topics store:', e);
    return [];
  }
}

export function saveStoredTopics(topics: TopicRecord[]): void {
  try {
    fs.writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2), 'utf-8');
  } catch (e) {
    console.warn('Error saving topics store:', e);
  }
}

export function createTopic(topicData: Partial<TopicRecord>): TopicRecord {
  const all = getStoredTopics(true);
  const now = new Date().toISOString();
  const id = topicData.id || `topic_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const newTopic: TopicRecord = {
    id,
    grade: topicData.grade || 9,
    subjectId: topicData.subjectId || 'physics',
    subjectName: topicData.subjectName || 'Physics',
    chapterId: topicData.chapterId || 'ch_1',
    chapterNumber: topicData.chapterNumber || 1,
    chapterName: topicData.chapterName || 'Chapter 1',
    name: topicData.name || 'Untitled Topic',
    description: topicData.description || '',
    learningObjectives: topicData.learningObjectives || [],
    content: topicData.content || '',
    academicConcept: topicData.academicConcept || '',
    interactiveActivity: topicData.interactiveActivity || {
      instructions: 'Complete the interactive simulator.',
      goal: 'Achieve verification.'
    },
    animationSpec: topicData.animationSpec || {
      scene: { theme: 'laboratory', title: 'Interactive Simulator', backgroundStyle: 'lab_bench' },
      objects: [],
      interactions: [],
      educationalHighlights: [],
      successCriteria: { requiredChecks: 1, completionMessage: 'Simulation complete.' }
    },
    questions: topicData.questions || [],
    status: topicData.status || 'draft',
    version: 1,
    createdAt: now,
    updatedAt: now,
    publishedAt: topicData.status === 'published' ? now : undefined
  };

  all.unshift(newTopic);
  saveStoredTopics(all);
  return newTopic;
}

export function updateTopic(id: string, updates: Partial<TopicRecord>): TopicRecord | null {
  const all = getStoredTopics(true);
  const index = all.findIndex((t) => t.id === id);
  if (index === -1) return null;

  const current = all[index];
  const now = new Date().toISOString();

  // If publishing now
  let publishedAt = current.publishedAt;
  if (updates.status === 'published' && current.status !== 'published') {
    publishedAt = now;
  }

  const updated: TopicRecord = {
    ...current,
    ...updates,
    id: current.id,
    version: (current.version || 1) + 1,
    updatedAt: now,
    publishedAt
  };

  all[index] = updated;
  saveStoredTopics(all);
  return updated;
}

export function deleteTopic(id: string): boolean {
  const all = getStoredTopics(true);
  const filtered = all.filter((t) => t.id !== id);
  if (filtered.length === all.length) return false;
  saveStoredTopics(filtered);
  return true;
}

// Developer Auth verification
export function authenticateDeveloper(usernameOrEmail: string, pass: string): { token: string; developer: DeveloperUser } | null {
  try {
    initDevAuth();
    const raw = fs.readFileSync(DEV_AUTH_FILE, 'utf-8');
    const authData = JSON.parse(raw);

    const account = authData.accounts.find(
      (acc: any) =>
        acc.username.toLowerCase() === usernameOrEmail.toLowerCase().trim() ||
        acc.email.toLowerCase() === usernameOrEmail.toLowerCase().trim()
    );

    if (!account) return null;

    const computed = hashPassword(pass, account.salt);
    if (computed !== account.passwordHash) return null;

    // Generate secure session token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    const session: SessionData = {
      developerId: account.id,
      username: account.username,
      role: account.role,
      permissions: account.permissions,
      expiresAt
    };

    activeSessions.set(token, session);

    return {
      token,
      developer: {
        id: account.id,
        username: account.username,
        role: account.role,
        permissions: account.permissions
      }
    };
  } catch (e) {
    console.warn('Developer auth error:', e);
    return null;
  }
}

// Authenticate via verified Firebase identity
export function authenticateFirebaseDeveloper(
  email: string,
  uid: string,
  _displayName?: string
): { token: string; developer: DeveloperUser } | null {
  try {
    initDevAuth();
    const raw = fs.readFileSync(DEV_AUTH_FILE, 'utf-8');
    const authData = JSON.parse(raw);
    const cleanEmail = (email || '').toLowerCase().trim();

    // Verify authorized developer account by email, username, or UID
    const account = authData.accounts.find(
      (acc: any) =>
        acc.email?.toLowerCase() === cleanEmail ||
        acc.username?.toLowerCase() === cleanEmail ||
        acc.firebaseUid === uid ||
        (Array.isArray(authData.authorizedFirebaseUids) && authData.authorizedFirebaseUids.includes(uid))
    );

    if (!account) {
      return null;
    }

    // Link UID if not present
    if (!account.firebaseUid) {
      account.firebaseUid = uid;
      if (!authData.authorizedFirebaseUids.includes(uid)) {
        authData.authorizedFirebaseUids.push(uid);
      }
      fs.writeFileSync(DEV_AUTH_FILE, JSON.stringify(authData, null, 2), 'utf-8');
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

    const session: SessionData = {
      developerId: account.id,
      username: account.username || cleanEmail,
      role: account.role,
      permissions: account.permissions,
      expiresAt
    };

    activeSessions.set(token, session);

    return {
      token,
      developer: {
        id: account.id,
        username: account.username || cleanEmail,
        role: account.role,
        permissions: account.permissions
      }
    };
  } catch (e) {
    console.warn('Firebase developer auth error:', e);
    return null;
  }
}

export function verifySessionToken(token: string): SessionData | null {
  if (!token) return null;
  const session = activeSessions.get(token);
  if (!session) return null;
  if (session.expiresAt < Date.now()) {
    activeSessions.delete(token);
    return null;
  }
  return session;
}

export function revokeSessionToken(token: string): void {
  activeSessions.delete(token);
}

// Check if an identity corresponds to an authorized developer admin
export function isAuthorizedDeveloper(email?: string, uid?: string): boolean {
  try {
    initDevAuth();
    if (!fs.existsSync(DEV_AUTH_FILE)) return false;
    const raw = fs.readFileSync(DEV_AUTH_FILE, 'utf-8');
    const authData = JSON.parse(raw);
    const cleanEmail = (email || '').toLowerCase().trim();

    const isMatch = authData.accounts.some(
      (acc: any) =>
        (cleanEmail && (acc.email?.toLowerCase() === cleanEmail || acc.username?.toLowerCase() === cleanEmail)) ||
        (uid && (acc.firebaseUid === uid || (Array.isArray(authData.authorizedFirebaseUids) && authData.authorizedFirebaseUids.includes(uid))))
    );
    return isMatch;
  } catch {
    return false;
  }
}

// Stats calculator
export function getDeveloperStats(): DeveloperStats {
  const topics = getStoredTopics(true);
  const subjectsSet = new Set<string>();
  const chaptersSet = new Set<string>();

  let publishedCount = 0;
  let draftCount = 0;
  let unpublishedCount = 0;
  let archivedCount = 0;

  topics.forEach((t) => {
    if (t.subjectId) subjectsSet.add(t.subjectId);
    if (t.chapterId) chaptersSet.add(t.chapterId);

    if (t.status === 'published') publishedCount++;
    else if (t.status === 'draft') draftCount++;
    else if (t.status === 'unpublished') unpublishedCount++;
    else if (t.status === 'archived') archivedCount++;
  });

  return {
    totalSubjects: Math.max(subjectsSet.size, 10), // Includes Cambridge base subjects
    totalChapters: Math.max(chaptersSet.size, 45),
    totalTopics: topics.length,
    publishedCount,
    draftCount,
    unpublishedCount,
    archivedCount,
    recentCreated: topics.slice(0, 5),
    recentPublished: topics.filter((t) => t.status === 'published').slice(0, 5)
  };
}

// AI Settings Operations
export function getStoredAISettings(): AISettings {
  try {
    initAISettings();
    const raw = fs.readFileSync(AI_SETTINGS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {
      provider: 'google_gemini',
      model: 'gemini-3.8-flash',
      temperature: 0.7,
      maxTokens: 2048
    };
  }
}

export function saveStoredAISettings(settings: Partial<AISettings>): AISettings {
  const current = getStoredAISettings();
  const updated: AISettings = {
    ...current,
    ...settings
  };
  fs.writeFileSync(AI_SETTINGS_FILE, JSON.stringify(updated, null, 2), 'utf-8');
  return updated;
}
