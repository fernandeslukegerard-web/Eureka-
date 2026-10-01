import React, { useState, useEffect } from 'react';
import { UserProfile, StudentProgress, Subject, Chapter, Subtopic, SubjectId } from '../../types';
import { getSubjectsForGrade } from '../../data/curriculum';
import { WordWiseEnglish } from '../english/WordWiseEnglish';
import {
  Search,
  CheckCircle2,
  ChevronRight,
  Play,
  Sparkles,
  Clock,
  ArrowLeft,
  BookOpen,
  Layers,
  GraduationCap,
  Award,
  Atom,
  FlaskConical,
  Dna,
  Calculator,
  Laptop,
  Coins,
  Compass
} from 'lucide-react';

interface LearnViewProps {
  profile: UserProfile;
  progress: StudentProgress;
  onOpenLesson: (subtopic: Subtopic, chapter: Chapter, subject: Subject) => void;
  selectedSubjectId?: SubjectId | null;
  onSelectSubject?: (subjectId: SubjectId) => void;
  onUpdateProgress?: (updated: StudentProgress) => void;
  resetToSubjectsTrigger?: number; // increments when Learn bottom tab is tapped
}

type NavigationLevel = 'subjects' | 'subject' | 'chapter';

export const LearnView: React.FC<LearnViewProps> = ({
  profile,
  progress,
  onOpenLesson,
  selectedSubjectId,
  onSelectSubject,
  onUpdateProgress,
  resetToSubjectsTrigger
}) => {
  const subjects = getSubjectsForGrade(profile.grade);

  // Navigation Level: 'subjects' (Level 1) -> 'subject' (Level 2) -> 'chapter' (Level 3)
  const [level, setLevel] = useState<NavigationLevel>(
    selectedSubjectId ? 'subject' : 'subjects'
  );
  const [activeSubjId, setActiveSubjId] = useState<SubjectId | null>(
    selectedSubjectId || null
  );
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // When resetToSubjectsTrigger changes (student tapped 'Learn' bottom nav button)
  // MUST reset to the first-level Learn screen with Subject Selection!
  useEffect(() => {
    if (resetToSubjectsTrigger !== undefined && resetToSubjectsTrigger > 0) {
      setLevel('subjects');
      setActiveSubjId(null);
      setActiveChapterId(null);
      setSearchQuery('');
    }
  }, [resetToSubjectsTrigger]);

  // Sync if selectedSubjectId prop changes externally
  useEffect(() => {
    if (selectedSubjectId) {
      setActiveSubjId(selectedSubjectId);
      setLevel('subject');
    }
  }, [selectedSubjectId]);

  // Browser History & Android Back Button integration
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const state = e.state;
      if (!state || state.level === 'subjects') {
        setLevel('subjects');
        setActiveSubjId(null);
        setActiveChapterId(null);
      } else if (state.level === 'subject') {
        setLevel('subject');
        setActiveSubjId(state.subjectId || null);
        setActiveChapterId(null);
      } else if (state.level === 'chapter') {
        setLevel('chapter');
        setActiveSubjId(state.subjectId || null);
        setActiveChapterId(state.chapterId || null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeSubject = subjects.find((s) => s.id === activeSubjId);
  const activeChapter = activeSubject?.chapters.find((c) => c.id === activeChapterId);

  // LEVEL NAVIGATION HANDLERS:
  const handleOpenSubject = (subjId: SubjectId) => {
    setActiveSubjId(subjId);
    setLevel('subject');
    setActiveChapterId(null);
    if (onSelectSubject) {
      onSelectSubject(subjId);
    }
    window.history.pushState({ tab: 'learn', level: 'subject', subjectId: subjId }, '');
  };

  const handleOpenChapter = (chapId: string) => {
    setActiveChapterId(chapId);
    setLevel('chapter');
    window.history.pushState(
      { tab: 'learn', level: 'chapter', subjectId: activeSubjId, chapterId: chapId },
      ''
    );
  };

  const handleBackToSubjects = () => {
    setLevel('subjects');
    setActiveSubjId(null);
    setActiveChapterId(null);
    window.history.pushState({ tab: 'learn', level: 'subjects' }, '');
  };

  const handleBackToSubject = () => {
    setLevel('subject');
    setActiveChapterId(null);
    window.history.pushState(
      { tab: 'learn', level: 'subject', subjectId: activeSubjId },
      ''
    );
  };

  // Icon lookup for subject cards
  const getSubjectIcon = (id: string) => {
    switch (id) {
      case 'physics':
        return Atom;
      case 'chemistry':
        return FlaskConical;
      case 'biology':
        return Dna;
      case 'mathematics':
        return Calculator;
      case 'computer_science':
        return Laptop;
      case 'english':
        return BookOpen;
      case 'economics':
      case 'business_studies':
      case 'accounting':
        return Coins;
      default:
        return Compass;
    }
  };

  // =========================================================================
  // LEVEL 1: SUBJECT SELECTION LANDING PAGE
  // =========================================================================
  if (level === 'subjects' || !activeSubject) {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                  Cambridge Curriculum Syllabus
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 font-mono">Grade {profile.grade}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Choose a Subject
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Every subtopic begins with an interactive laboratory experience, simulation, or challenge before academic theory. Select a subject to view its syllabus chapters.
              </p>
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {subjects
            .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((subj) => {
              const Icon = getSubjectIcon(subj.id);
              // Calculate completion percentage for this subject
              let totalSubtopics = 0;
              let completedInSubject = 0;
              subj.chapters.forEach((c) => {
                c.subtopics.forEach((st) => {
                  totalSubtopics++;
                  if (progress.completedSubtopics.includes(st.id)) {
                    completedInSubject++;
                  }
                });
              });
              const pct = totalSubtopics > 0 ? Math.round((completedInSubject / totalSubtopics) * 100) : 0;

              return (
                <div
                  key={subj.id}
                  onClick={() => handleOpenSubject(subj.id)}
                  className="bg-white hover:bg-slate-50/60 border border-slate-200 hover:border-slate-300 rounded-3xl p-6 transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: `${subj.accentColor}15`,
                          color: subj.accentColor
                        }}
                      >
                        <Icon className="w-6 h-6 stroke-[2.2px]" />
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-500">
                        {subj.chapters.length} Chapters
                      </span>
                    </div>

                    <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      <span>{subj.name}</span>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                    </h2>

                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {subj.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <span>{completedInSubject} of {totalSubtopics} topics completed</span>
                    </div>

                    <span
                      className="font-mono font-bold px-2 py-0.5 rounded-md text-[11px]"
                      style={{
                        backgroundColor: `${subj.accentColor}15`,
                        color: subj.accentColor
                      }}
                    >
                      {pct}%
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // SPECIAL HANDLING: ENGLISH WORDWISE AI STUDIO
  // =========================================================================
  if (activeSubject.id === 'english') {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <button
          onClick={handleBackToSubjects}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Subjects</span>
        </button>

        <WordWiseEnglish
          profile={profile}
          progress={progress}
          onUpdateProgress={onUpdateProgress || (() => {})}
        />
      </div>
    );
  }

  // =========================================================================
  // LEVEL 3: CHAPTER DETAIL & SUBTOPICS LIST
  // =========================================================================
  if (level === 'chapter' && activeChapter) {
    const completedCount = activeChapter.subtopics.filter((st) =>
      progress.completedSubtopics.includes(st.id)
    ).length;

    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        {/* Back Navigation Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBackToSubject}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-2xs hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {activeSubject.name} Chapters</span>
          </button>

          <span className="text-xs font-mono font-bold text-slate-500">
            {completedCount}/{activeChapter.subtopics.length} Mastered
          </span>
        </div>

        {/* Chapter Header Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs font-mono"
              style={{
                backgroundColor: `${activeSubject.accentColor}15`,
                color: activeSubject.accentColor
              }}
            >
              {activeChapter.number}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {activeSubject.name} • Chapter {activeChapter.number}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            {activeChapter.title}
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
            {activeChapter.description}
          </p>
        </div>

        {/* List of Subtopics */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Interactive Subtopics ({activeChapter.subtopics.length})
          </h3>

          {activeChapter.subtopics.map((st) => {
            const isCompleted = progress.completedSubtopics.includes(st.id);

            return (
              <div
                key={st.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs hover:shadow-xs group"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {st.code || `${activeChapter.number}.${st.id.split('_').pop()}`}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {st.title}
                    </h4>
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Mastered
                      </span>
                    )}
                  </div>

                  {/* Distinct Experience Pill */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold bg-amber-50/80 px-3 py-1 rounded-xl border border-amber-200/80 w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Experience First: {st.experience?.title || 'Interactive Laboratory Scenario'}</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                    {st.academicConcept || st.lesson?.academicConcept || st.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> ~{st.estimatedMinutes || st.durationMinutes || 4}m
                  </span>

                  <button
                    onClick={() => onOpenLesson(st, activeChapter, activeSubject)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                      isCompleted
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isCompleted ? 'Review Lab' : 'Start Experience'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // LEVEL 2: SUBJECT CHAPTERS LISTING
  // =========================================================================
  const filteredChapters = activeSubject.chapters.filter((ch) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      ch.title.toLowerCase().includes(q) ||
      ch.description.toLowerCase().includes(q) ||
      ch.subtopics.some(
        (st) =>
          st.title.toLowerCase().includes(q) ||
          (st.experience?.title || '').toLowerCase().includes(q) ||
          (st.academicConcept || st.lesson?.academicConcept || '').toLowerCase().includes(q)
      )
    );
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Back to Subjects Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBackToSubjects}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-2xs hover:bg-slate-50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Subjects</span>
        </button>

        <span className="text-xs font-mono font-bold text-slate-500">
          Grade {profile.grade} Syllabus
        </span>
      </div>

      {/* Subject Header Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <span
                className="px-3 py-1 rounded-full font-bold text-xs"
                style={{
                  backgroundColor: `${activeSubject.accentColor}15`,
                  color: activeSubject.accentColor
                }}
              >
                {activeSubject.name} Curriculum
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 font-mono">
                {activeSubject.chapters.length} Chapters
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              {activeSubject.name}
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              {activeSubject.description}
            </p>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search chapters or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Chapters Cards Grid / List */}
      <div className="space-y-4">
        {filteredChapters.map((chapter) => {
          const completedCount = chapter.subtopics.filter((st) =>
            progress.completedSubtopics.includes(st.id)
          ).length;
          const isAllCompleted =
            chapter.subtopics.length > 0 && completedCount === chapter.subtopics.length;

          return (
            <div
              key={chapter.id}
              onClick={() => handleOpenChapter(chapter.id)}
              className="bg-white hover:bg-slate-50/60 border border-slate-200 hover:border-slate-300 rounded-3xl p-6 transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 font-mono transition-transform group-hover:scale-105"
                  style={{
                    backgroundColor: `${activeSubject.accentColor}15`,
                    color: activeSubject.accentColor
                  }}
                >
                  {chapter.number}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Chapter {chapter.number}
                    </span>
                    {isAllCompleted && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Completed
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                    {chapter.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-500 block">
                    {completedCount}/{chapter.subtopics.length} done
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {chapter.subtopics.length} interactive topics
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-600 group-hover:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
