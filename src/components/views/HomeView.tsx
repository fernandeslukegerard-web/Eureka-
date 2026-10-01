import React from 'react';
import { UserProfile, StudentProgress, Subject, Subtopic, Chapter, SubjectId } from '../../types';
import { getSubjectsForGrade } from '../../data/curriculum';
import { NavTab } from '../navigation/BottomNav';
import {
  Sparkles,
  Flame,
  Clock,
  CheckCircle2,
  Award,
  ArrowRight,
  Play,
  Atom,
  FlaskConical,
  Dna,
  Calculator,
  Binary,
  TrendingUp,
  Briefcase,
  Receipt,
  BookOpen,
  Gamepad2
} from 'lucide-react';

interface HomeViewProps {
  profile: UserProfile;
  progress: StudentProgress;
  onOpenLesson: (subtopic: Subtopic, chapter: Chapter, subject: Subject) => void;
  onNavigateTab: (tab: NavTab) => void;
  onSelectSubject: (subjectId: SubjectId) => void;
}

const iconMap: Record<string, any> = {
  Sparkles,
  Atom,
  FlaskConical,
  Dna,
  Calculator,
  Binary,
  TrendingUp,
  Briefcase,
  Receipt,
  BookOpen
};

export const HomeView: React.FC<HomeViewProps> = ({
  profile,
  progress,
  onOpenLesson,
  onNavigateTab,
  onSelectSubject
}) => {
  const subjects = getSubjectsForGrade(profile.grade);

  // Pick first uncompleted subtopic for "Continue Learning"
  let nextMission: { subtopic: Subtopic; chapter: Chapter; subject: Subject } | null = null;
  for (const subj of subjects) {
    for (const ch of subj.chapters) {
      for (const st of ch.subtopics) {
        if (!progress.completedSubtopics.includes(st.id)) {
          nextMission = { subtopic: st, chapter: ch, subject: subj };
          break;
        }
      }
      if (nextMission) break;
    }
    if (nextMission) break;
  }

  // Fallback if all completed or none
  if (!nextMission && subjects[0]?.chapters[0]?.subtopics[0]) {
    nextMission = {
      subtopic: subjects[0].chapters[0].subtopics[0],
      chapter: subjects[0].chapters[0],
      subject: subjects[0]
    };
  }

  const handleCardClick = (subjId: SubjectId) => {
    onSelectSubject(subjId);
    onNavigateTab('learn');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Cheerful Welcome Banner */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Grade {profile.grade} Student
                </span>
                <span className="text-xs font-mono text-slate-400">• Academic Term</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
                Welcome back, {profile.name}!
              </h1>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Every concept starts with doing. Discover the science before studying the theory.
              </p>
            </div>

            {/* Day Streak indicator */}
            <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200/80 px-4 py-2.5 rounded-2xl shadow-2xs">
              <Flame
                className={`w-6 h-6 ${
                  progress.streak > 0 ? 'text-amber-500 fill-amber-500' : 'text-slate-300'
                }`}
              />
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-800">Day Streak</div>
                <div className="text-lg font-black text-slate-900 font-mono">
                  {progress.streak} {progress.streak === 1 ? 'day' : 'days'}
                </div>
              </div>
            </div>
          </div>

          {/* Real Unfabricated Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Completed
              </span>
              <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                {progress.completedSubtopics.length} lessons
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Award className="w-3.5 h-3.5 text-blue-600" /> Exam Questions
              </span>
              <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                {progress.questionsAnswered} answered
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> Lab Study Time
              </span>
              <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                {progress.studyTimeMinutes} mins
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Real Accuracy
              </span>
              <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                {progress.questionsAnswered > 0 ? `${progress.accuracy}%` : '0%'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Next Interactive Mission */}
      {nextMission && (
        <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Recommended Subtopic Challenge
            </span>
            <span className="text-xs text-slate-500 font-mono">
              ~{nextMission.subtopic.estimatedMinutes || nextMission.subtopic.durationMinutes || 3} min
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span style={{ color: nextMission.subject.accentColor }} className="font-extrabold">
                  {nextMission.subject.name}
                </span>
                <span>•</span>
                <span>Chapter {nextMission.chapter.number}: {nextMission.chapter.title}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">{nextMission.subtopic.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                {nextMission.subtopic.experience?.scenarioDescription || nextMission.subtopic.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl text-xs font-mono text-blue-700 border border-slate-200 mt-1">
                <Play className="w-3 h-3 fill-blue-600 text-blue-600" />
                <span>Simulation: {nextMission.subtopic.experience.title}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenLesson(nextMission!.subtopic, nextMission!.chapter, nextMission!.subject)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0"
            >
              <span>Launch Experience First</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      {/* Interactive Labs & Games Discovery Hub */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          onClick={() => onNavigateTab('sandbox')}
          className="group bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white border border-emerald-200/80 hover:border-emerald-300 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2.5 py-1 rounded-full">
                Open-Ended Experimentation
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
              Eureka Sandbox
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              No rigid recipes or step-by-step locks. Drag chemicals, circuit parts, and optics into a freeform workspace and watch real science happen.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-700">
            <span>Launch Freeform Sandbox</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('games')}
          className="group bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-white border border-indigo-200/80 hover:border-indigo-300 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-100/70 border border-indigo-200 px-2.5 py-1 rounded-full">
                Concept Games
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
              Eureka Games
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Play curriculum-aligned challenges: Particle Factory (Chemistry), Space Mission (Physics), Genetics Lab (Biology), and Geometry Builder (Math).
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-700">
            <span>Explore 8 Interactive Games</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>

      {/* Curriculum Subjects Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900">Your Enrolled Subjects</h2>
            <p className="text-xs text-slate-500 mt-0.5">Click any subject to open its chapters, simulations, and lessons directly.</p>
          </div>
          <button
            onClick={() => onNavigateTab('learn')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Browse Full Curriculum</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subj) => {
            const Icon = iconMap[subj.iconName] || Atom;
            const totalSubtopics = subj.chapters.reduce(
              (acc, ch) => acc + ch.subtopics.length,
              0
            );
            const completedInSubj = subj.chapters.reduce((acc, ch) => {
              return (
                acc +
                ch.subtopics.filter((st) => progress.completedSubtopics.includes(st.id)).length
              );
            }, 0);
            const percent =
              totalSubtopics > 0 ? Math.round((completedInSubj / totalSubtopics) * 100) : 0;

            return (
              <div
                key={subj.id}
                onClick={() => handleCardClick(subj.id)}
                className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-2xl p-5 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="p-3 rounded-xl transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${subj.accentColor}15`,
                        color: subj.accentColor
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {completedInSubj}/{totalSubtopics} done
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {subj.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {subj.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                      <span>Progress</span>
                      <span className="font-mono font-bold text-slate-700">{percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${percent}%`,
                          backgroundColor: subj.accentColor
                        }}
                      />
                    </div>
                  </div>

                  <span
                    className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    style={{ color: subj.accentColor }}
                  >
                    <span>Open</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
