import React, { useState, useEffect } from 'react';
import {
  DeveloperUser,
  DeveloperStats,
  TopicRecord,
  StructuredAnimationSpec,
  AISettings,
  GradeLevel,
  SubjectId
} from '../../types/developer';
import { UniversalStructuredAnimation } from '../simulations/UniversalStructuredAnimation';
import {
  LayoutDashboard,
  BookOpen,
  Sparkles,
  Settings as SettingsIcon,
  LogOut,
  ExternalLink,
  Plus,
  Trash2,
  Edit,
  Eye,
  CheckCircle,
  AlertTriangle,
  Loader2,
  Clock,
  Layers,
  Sliders,
  Send,
  Save,
  RefreshCw,
  Search,
  Filter,
  Check,
  AlertCircle
} from 'lucide-react';

interface DeveloperDashboardViewProps {
  token: string;
  developer: DeveloperUser;
  onLogout: () => void;
  onExitToStudentApp: () => void;
}

export const DeveloperDashboardView: React.FC<DeveloperDashboardViewProps> = ({
  token,
  developer,
  onLogout,
  onExitToStudentApp
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'content' | 'ai_creator' | 'settings'>('dashboard');

  // Dashboard Stats & Topics State
  const [stats, setStats] = useState<DeveloperStats | null>(null);
  const [topics, setTopics] = useState<TopicRecord[]>([]);
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  // Content Filter & Search
  const [filterGrade, setFilterGrade] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // AI Animation Creator State
  const [topicName, setTopicName] = useState('1.1 Physical Quantities and Measurement Techniques');
  const [topicDescription, setTopicDescription] = useState(
    'Students should learn how physical quantities are measured and understand the use of standard units and measuring instruments.'
  );
  const [animationRequest, setAnimationRequest] = useState(
    'Create an interactive pre-flight simulator where the student checks the aircraft measurement instruments before takeoff. The student should interact with the instruments and learn why accurate measurements are important.'
  );
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(9);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('physics');
  const [chapterNumber, setChapterNumber] = useState(1);
  const [chapterName, setChapterName] = useState('Measurement & Physical Quantities');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSpec, setGeneratedSpec] = useState<StructuredAnimationSpec | null>(null);

  // Generated topic preview & publish state
  const [previewTopic, setPreviewTopic] = useState<TopicRecord | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // AI Settings State
  const [aiSettings, setAiSettings] = useState<AISettings>({
    provider: 'google_gemini',
    model: 'gemini-3.8-flash',
    temperature: 0.7,
    maxTokens: 2048
  });
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  // Helper for authenticated API calls
  const authFetch = async (url: string, options: RequestInit = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...(options.headers || {})
      }
    });
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Load stats and topics
  const loadDashboardData = async () => {
    setIsLoadingContent(true);
    try {
      const [statsRes, topicsRes, settingsRes] = await Promise.all([
        authFetch('/api/developer/stats'),
        authFetch('/api/developer/content/topics'),
        authFetch('/api/developer/ai/settings')
      ]);

      if (statsRes.ok) setStats(await statsRes.json());
      if (topicsRes.ok) setTopics(await topicsRes.json());
      if (settingsRes.ok) setAiSettings(await settingsRes.json());
    } catch (e: any) {
      console.warn('Failed to load dashboard data:', e);
      showNotification('error', 'Error loading dashboard data');
    } finally {
      setIsLoadingContent(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  // AI Animation Generation Handler
  const handleGenerateAnimation = async () => {
    if (!topicName.trim() || !animationRequest.trim()) {
      showNotification('error', 'Please provide a Topic Name and Animation Request prompt.');
      return;
    }

    setIsGenerating(true);
    setNotification(null);
    try {
      const res = await authFetch('/api/developer/generate-animation', {
        method: 'POST',
        body: JSON.stringify({
          topicName: topicName.trim(),
          topicDescription: topicDescription.trim(),
          animationRequest: animationRequest.trim(),
          grade: selectedGrade,
          subject: selectedSubject
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Animation generation failed');

      setGeneratedSpec(data.animationSpec);
      showNotification('success', 'AI structured animation generated successfully!');
    } catch (e: any) {
      showNotification('error', e?.message || 'Failed to generate animation');
    } finally {
      setIsGenerating(false);
    }
  };

  // Save as Draft
  const handleSaveDraft = async () => {
    if (!generatedSpec) return;

    try {
      const newTopic: Partial<TopicRecord> = {
        name: topicName,
        description: topicDescription,
        grade: selectedGrade,
        subjectId: selectedSubject,
        chapterNumber,
        chapterName,
        animationSpec: generatedSpec,
        learningObjectives: [
          'Understand key physical quantities and measuring instruments.',
          'Execute calibration protocol accurately.',
          'Analyze measurement uncertainties in practical scenarios.'
        ],
        content: `Detailed academic study of ${topicName}. Students perform calibration and analyze physical variables.`,
        academicConcept: topicName,
        status: 'draft'
      };

      const res = await authFetch('/api/developer/content/topics', {
        method: 'POST',
        body: JSON.stringify(newTopic)
      });

      if (!res.ok) throw new Error('Failed to save draft');
      showNotification('success', 'Topic saved as Draft in Content Manager.');
      loadDashboardData();
    } catch (e: any) {
      showNotification('error', e?.message || 'Failed to save draft');
    }
  };

  // Publish Directly to Students
  const handlePublishTopic = async (topicId?: string) => {
    try {
      let targetId = topicId;

      // If publishing current generator spec directly
      if (!targetId && generatedSpec) {
        const createRes = await authFetch('/api/developer/content/topics', {
          method: 'POST',
          body: JSON.stringify({
            name: topicName,
            description: topicDescription,
            grade: selectedGrade,
            subjectId: selectedSubject,
            chapterNumber,
            chapterName,
            animationSpec: generatedSpec,
            learningObjectives: [
              'Understand physical quantities and measurement techniques.',
              'Execute calibration protocol accurately.',
              'Analyze measurement uncertainties.'
            ],
            content: `Core academic syllabus for ${topicName}. Standard Cambridge-aligned practical investigation.`,
            status: 'draft'
          })
        });

        if (!createRes.ok) throw new Error('Failed to create topic before publishing');
        const created = await createRes.json();
        targetId = created.id;
      }

      if (!targetId) return;

      const res = await authFetch(`/api/developer/content/topics/${targetId}/publish`, {
        method: 'POST'
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to publish topic');
      }

      showNotification('success', `Topic published to Grade ${selectedGrade} students successfully!`);
      loadDashboardData();
    } catch (e: any) {
      showNotification('error', e?.message || 'Publishing failed');
    }
  };

  // Unpublish Topic
  const handleUnpublishTopic = async (topicId: string) => {
    try {
      const res = await authFetch(`/api/developer/content/topics/${topicId}/unpublish`, {
        method: 'POST'
      });
      if (!res.ok) throw new Error('Failed to unpublish');
      showNotification('success', 'Topic unpublished.');
      loadDashboardData();
    } catch (e: any) {
      showNotification('error', e?.message || 'Unpublish failed');
    }
  };

  // Delete Topic
  const handleDeleteTopic = async (topicId: string) => {
    if (!confirm('Are you sure you want to delete this topic?')) return;
    try {
      const res = await authFetch(`/api/developer/content/topics/${topicId}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Failed to delete topic');
      showNotification('success', 'Topic deleted successfully.');
      loadDashboardData();
    } catch (e: any) {
      showNotification('error', e?.message || 'Delete failed');
    }
  };

  // Save AI Settings
  const handleSaveAISettings = async () => {
    setIsSavingSettings(true);
    try {
      const res = await authFetch('/api/developer/ai/settings', {
        method: 'POST',
        body: JSON.stringify(aiSettings)
      });
      if (!res.ok) throw new Error('Failed to update AI settings');
      showNotification('success', 'AI generation configuration updated.');
    } catch (e: any) {
      showNotification('error', e?.message || 'Failed to save settings');
    } finally {
      setIsSavingSettings(false);
    }
  };

  // Filtered topics
  const filteredTopics = topics.filter((t) => {
    if (filterGrade !== 'all' && t.grade !== Number(filterGrade)) return false;
    if (filterStatus !== 'all' && t.status !== filterStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = t.name?.toLowerCase().includes(q);
      const matchDesc = t.description?.toLowerCase().includes(q);
      const matchSubj = t.subjectId?.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchSubj) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Developer Navigation Bar */}
      <header className="bg-slate-950 border-b border-slate-800 px-4 sm:px-6 py-3 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 font-mono font-black text-sm">
              CMS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight text-white">EUREKA</span>
                <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800">
                  DEVELOPER SUITE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Logged in as <span className="text-white font-bold">{developer.username}</span> ({developer.role})
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'content'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Content Manager</span>
            </button>
            <button
              onClick={() => setActiveTab('ai_creator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ai_creator'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Animation Creator</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SettingsIcon className="w-3.5 h-3.5" />
              <span>AI Settings</span>
            </button>
          </div>

          {/* Actions: Exit to Student & Logout */}
          <div className="flex items-center gap-2">
            <button
              onClick={onExitToStudentApp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>View Student App</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-900/60 bg-rose-950/40 hover:bg-rose-900/60 text-xs font-mono text-rose-300 hover:text-rose-100 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4">
          <div
            className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-in slide-in-from-top-2 ${
              notification.type === 'success'
                ? 'bg-emerald-950/80 border-emerald-700 text-emerald-200'
                : 'bg-rose-950/80 border-rose-700 text-rose-200'
            }`}
          >
            {notification.type === 'success' ? (
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Main Developer Views */}
      <main className="max-w-7xl w-full mx-auto p-4 sm:p-6 flex-1 space-y-6">
        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">System Metrics &amp; Curriculum State</h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time metrics queried directly from the Eureka server-side content repository.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-sm">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">Total Subjects</span>
                <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">
                  {stats?.totalSubjects ?? 10}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-1 block">Cambridge + STEM</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-sm">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">Chapters</span>
                <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">
                  {stats?.totalChapters ?? 45}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-1 block">Grades 6 to 10</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-sm">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">Total Topics</span>
                <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">
                  {stats?.totalTopics ?? topics.length}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-1 block">In database</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-800/60 shadow-sm">
                <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold block">Published</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1 block">
                  {stats?.publishedCount ?? topics.filter((t) => t.status === 'published').length}
                </span>
                <span className="text-[10px] text-emerald-500 font-mono mt-1 block">Live in student app</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-800/60 shadow-sm">
                <span className="text-[11px] font-mono text-amber-400 uppercase font-bold block">Drafts</span>
                <span className="text-2xl sm:text-3xl font-black text-amber-300 mt-1 block">
                  {stats?.draftCount ?? topics.filter((t) => t.status === 'draft').length}
                </span>
                <span className="text-[10px] text-amber-500 font-mono mt-1 block">Under construction</span>
              </div>
            </div>

            {/* Quick Action: Start AI Generator */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-indigo-950/70 via-purple-950/50 to-slate-950 border border-indigo-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700 text-[10px] font-mono font-bold uppercase mb-2">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  AI Animation Engine Ready
                </span>
                <h3 className="text-lg font-bold text-white">Generate Structured Interactive Animations</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Describe any STEM topic and aircraft or lab apparatus. Gemini produces safe, schema-compliant animation dials, instruments, and verification checks.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('ai_creator')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Launch AI Creator →
              </button>
            </div>

            {/* Recent Topics Table */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4">
              <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Recently Created Curriculum Topics</span>
              </h3>

              {topics.length === 0 ? (
                <p className="text-xs text-slate-500 font-mono py-4">No topics in repository yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                        <th className="py-2.5 px-3">Topic Name</th>
                        <th className="py-2.5 px-3">Grade</th>
                        <th className="py-2.5 px-3">Subject</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3">Version</th>
                        <th className="py-2.5 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900">
                      {topics.slice(0, 6).map((topic) => (
                        <tr key={topic.id} className="hover:bg-slate-900/60 transition-colors">
                          <td className="py-3 px-3 font-sans font-bold text-slate-200">
                            {topic.name}
                          </td>
                          <td className="py-3 px-3 text-slate-400">Grade {topic.grade}</td>
                          <td className="py-3 px-3 text-indigo-400 capitalize">{topic.subjectId}</td>
                          <td className="py-3 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                topic.status === 'published'
                                  ? 'bg-emerald-950 border border-emerald-800 text-emerald-300'
                                  : 'bg-amber-950 border border-amber-800 text-amber-300'
                              }`}
                            >
                              {topic.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-slate-500">v{topic.version}</td>
                          <td className="py-3 px-3 text-right space-x-2">
                            {topic.status !== 'published' ? (
                              <button
                                onClick={() => handlePublishTopic(topic.id)}
                                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-[10px] cursor-pointer"
                              >
                                Publish
                              </button>
                            ) : (
                              <button
                                onClick={() => handleUnpublishTopic(topic.id)}
                                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg text-[10px] cursor-pointer"
                              >
                                Unpublish
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CONTENT MANAGER */}
        {activeTab === 'content' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">Curriculum Content Manager</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Create, version, preview, and publish interactive topics for student grades without code deployment.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('ai_creator')}
                className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Topic with AI</span>
              </button>
            </div>

            {/* Filter Bar */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search topics by title, subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 font-mono text-[11px]">Grade:</span>
                  <select
                    value={filterGrade}
                    onChange={(e) => setFilterGrade(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white cursor-pointer"
                  >
                    <option value="all">All Grades</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 font-mono text-[11px]">Status:</span>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="unpublished">Unpublished</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Topic Cards List */}
            {filteredTopics.length === 0 ? (
              <div className="text-center py-12 bg-slate-950 border border-slate-800 rounded-3xl">
                <p className="text-slate-400 text-xs font-mono">No topics match current criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-5 rounded-3xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            topic.status === 'published'
                              ? 'bg-emerald-950 border border-emerald-800 text-emerald-300'
                              : 'bg-amber-950 border border-amber-800 text-amber-300'
                          }`}
                        >
                          {topic.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-indigo-400 font-mono font-bold capitalize">
                          Grade {topic.grade} • {topic.subjectId}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          Chapter {topic.chapterNumber || 1}
                        </span>
                        <span className="text-xs text-slate-600 font-mono">v{topic.version}</span>
                      </div>

                      <h3 className="text-base font-bold text-white">{topic.name}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{topic.description}</p>

                      {topic.animationSpec?.objects && (
                        <div className="flex items-center gap-1.5 pt-1 text-[11px] font-mono text-slate-400">
                          <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                          <span>
                            {topic.animationSpec.objects.length} Apparatus Objects (
                            {topic.animationSpec.objects.map((o) => o.name).join(', ')})
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {topic.animationSpec && (
                        <button
                          type="button"
                          onClick={() => setPreviewTopic(previewTopic?.id === topic.id ? null : topic)}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-400" />
                          <span>{previewTopic?.id === topic.id ? 'Close' : 'Preview'}</span>
                        </button>
                      )}

                      {topic.status !== 'published' ? (
                        <button
                          type="button"
                          onClick={() => handlePublishTopic(topic.id)}
                          className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Publish to Students</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleUnpublishTopic(topic.id)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold cursor-pointer"
                        >
                          <span>Unpublish</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleDeleteTopic(topic.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg cursor-pointer"
                        title="Delete topic"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Inline Preview Drawer */}
            {previewTopic && previewTopic.animationSpec && (
              <div className="p-6 rounded-3xl bg-slate-950 border border-indigo-700/80 shadow-2xl space-y-4 animate-in zoom-in-95">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">Live Preview</span>
                    <h3 className="text-lg font-bold text-white">{previewTopic.name}</h3>
                  </div>
                  <button
                    onClick={() => setPreviewTopic(null)}
                    className="text-xs font-mono text-slate-400 hover:text-white cursor-pointer px-3 py-1 rounded-lg bg-slate-900 border border-slate-800"
                  >
                    Close Preview
                  </button>
                </div>

                <UniversalStructuredAnimation
                  spec={previewTopic.animationSpec}
                  isDeveloperPreview={true}
                />
              </div>
            )}
          </div>
        )}

        {/* TAB 3: AI ANIMATION CREATOR */}
        {activeTab === 'ai_creator' && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white">AI Animation Creator</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-mono font-bold uppercase">
                  Powered by Gemini 3.8 Flash
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Enter your curriculum requirements. The server AI pipeline translates your prompt into an interactive, schema-validated scientific apparatus.
              </p>
            </div>

            {/* Creation Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                    Grade &amp; Subject
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={selectedGrade}
                      onChange={(e) => setSelectedGrade(Number(e.target.value) as GradeLevel)}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white cursor-pointer"
                    >
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                    </select>

                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white cursor-pointer capitalize"
                    >
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="general_science">General Science</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="computer_science">Computer Science</option>
                      <option value="economics">Economics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                    Chapter Name &amp; Number
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={chapterNumber}
                      onChange={(e) => setChapterNumber(parseInt(e.target.value, 10) || 1)}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                    <input
                      type="text"
                      value={chapterName}
                      onChange={(e) => setChapterName(e.target.value)}
                      placeholder="Chapter title"
                      className="col-span-3 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                    Topic Name
                  </label>
                  <input
                    type="text"
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                    placeholder="e.g. 1.1 Physical Quantities and Measurement Techniques"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white font-semibold focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                    Topic Description
                  </label>
                  <textarea
                    rows={2}
                    value={topicDescription}
                    onChange={(e) => setTopicDescription(e.target.value)}
                    placeholder="Brief curriculum description..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 leading-relaxed"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-slate-400">
                      Animation Request Prompt
                    </label>
                  </div>
                  <textarea
                    rows={4}
                    value={animationRequest}
                    onChange={(e) => setAnimationRequest(e.target.value)}
                    placeholder="Describe the desired scenario, interactive objects, and what the student checks..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 leading-relaxed"
                    required
                  />
                </div>

                {/* Example Quick-Pick Prompts */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                    Quick Preset Scenarios:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setTopicName('1.1 Physical Quantities and Measurement Techniques');
                        setSelectedSubject('physics');
                        setAnimationRequest(
                          'Create an interactive pre-flight simulator where the student checks an aircraft measurement instruments before takeoff: barometric altimeter, pitot airspeed tube, and probe heater switch.'
                        );
                      }}
                      className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[10px] text-slate-300 cursor-pointer"
                    >
                      ✈️ Pre-Flight Avionics
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTopicName('3.2 Osmosis & Water Potential in Living Cells');
                        setSelectedSubject('biology');
                        setAnimationRequest(
                          'Create a dialysis membrane apparatus where student adjusts sucrose solution concentration, observes solute flux, and verifies cell turgor pressure equilibrium.'
                        );
                      }}
                      className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[10px] text-slate-300 cursor-pointer"
                    >
                      🔬 Dialysis Osmosis
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTopicName('8.2 Acid-Base Neutralization Titration');
                        setSelectedSubject('chemistry');
                        setAnimationRequest(
                          'Create a digital burette titration station dispensing sodium hydroxide into hydrochloric acid with pH electrode readout and phenolphthalein indicator transition.'
                        );
                      }}
                      className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[10px] text-slate-300 cursor-pointer"
                    >
                      🧪 Burette Titration
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateAnimation}
                  disabled={isGenerating}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Synthesizing Interactive Apparatus via Gemini...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Generate Interactive Animation</span>
                    </>
                  )}
                </button>
              </div>

              {/* Live Preview Area */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-300 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-indigo-400" />
                    <span>Live Interactive Simulator Preview</span>
                  </h3>
                  {generatedSpec && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSaveDraft}
                        className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Draft</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePublishTopic()}
                        className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Publish to Students</span>
                      </button>
                    </div>
                  )}
                </div>

                {generatedSpec ? (
                  <div className="space-y-4">
                    <UniversalStructuredAnimation
                      spec={generatedSpec}
                      isDeveloperPreview={true}
                    />

                    {/* Inspection of Generated Structured Spec */}
                    <details className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-300">
                      <summary className="font-bold text-indigo-400 cursor-pointer select-none">
                        Inspect Generated JSON Specification ({generatedSpec.objects?.length || 0} objects,{' '}
                        {generatedSpec.interactions?.length || 0} interactions)
                      </summary>
                      <pre className="mt-3 p-3 bg-slate-900 rounded-xl overflow-x-auto text-[11px] text-slate-300">
                        {JSON.stringify(generatedSpec, null, 2)}
                      </pre>
                    </details>
                  </div>
                ) : (
                  <div className="h-96 flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl p-8 text-center text-slate-500 bg-slate-950/40">
                    <Sliders className="w-12 h-12 text-slate-700 mb-3" />
                    <h4 className="font-bold text-slate-400 text-sm">No Animation Generated Yet</h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm">
                      Fill out the topic information on the left and click "Generate Interactive Animation" to synthesize a real-time simulator.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: AI SETTINGS */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl font-black text-white">Developer AI Architecture Settings</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Configure the server-side Gemini animation pipeline. Keys and execution parameters remain strictly restricted to server execution.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                  AI Model Provider
                </label>
                <input
                  type="text"
                  value="Google Gemini SDK (@google/genai)"
                  disabled
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                  Active Model
                </label>
                <select
                  value={aiSettings.model}
                  onChange={(e) => setAiSettings({ ...aiSettings, model: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono cursor-pointer"
                >
                  <option value="gemini-3.8-flash">gemini-3.8-flash (Standard &amp; Ultra-Fast)</option>
                  <option value="gemini-2.5-flash">gemini-2.5-flash (Balanced)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-mono uppercase font-bold text-slate-400">
                    Temperature (Creativity vs Determinism)
                  </label>
                  <span className="text-xs font-mono text-indigo-400 font-bold">{aiSettings.temperature}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={aiSettings.temperature}
                  onChange={(e) => setAiSettings({ ...aiSettings, temperature: parseFloat(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1">
                  Max Output Tokens
                </label>
                <input
                  type="number"
                  min="512"
                  max="4096"
                  step="256"
                  value={aiSettings.maxTokens}
                  onChange={(e) => setAiSettings({ ...aiSettings, maxTokens: parseInt(e.target.value, 10) || 2048 })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white font-mono"
                />
              </div>

              <div className="p-3.5 bg-indigo-950/40 border border-indigo-800/60 rounded-xl text-xs text-indigo-300 font-mono space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Server-Side Credential Protection Active
                </span>
                <p className="text-[11px] text-slate-400">
                  GEMINI_API_KEY is retrieved exclusively through server process environment variables and is never transmitted to the browser or student devices.
                </p>
              </div>

              <button
                type="button"
                onClick={handleSaveAISettings}
                disabled={isSavingSettings}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {isSavingSettings ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving Configuration...</span>
                  </>
                ) : (
                  <span>Save AI Configuration</span>
                )}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
