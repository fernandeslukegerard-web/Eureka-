import React, { useState, useEffect } from 'react';
import { UserProfile, StudentProgress, Subject, SubjectId } from '../../types';
import { getSubjectsForGrade } from '../../data/curriculum';
import {
  CheckSquare,
  HelpCircle,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';

interface PracticeViewProps {
  profile: UserProfile;
  progress: StudentProgress;
  onUpdateProgress: (updated: StudentProgress) => void;
  selectedSubjectId?: SubjectId;
  onSelectSubject?: (subjectId: SubjectId) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  profile,
  progress,
  onUpdateProgress,
  selectedSubjectId,
  onSelectSubject
}) => {
  const subjects = getSubjectsForGrade(profile.grade);
  const [activeSubjId, setActiveSubjId] = useState<string>(selectedSubjectId || 'all');
  const [answeredMap, setAnsweredMap] = useState<Record<string, { choice: string; isCorrect: boolean }>>({});

  useEffect(() => {
    if (selectedSubjectId) {
      setActiveSubjId(selectedSubjectId);
    }
  }, [selectedSubjectId]);

  // Collect all practice questions from current grade curriculum
  const allQuestions: Array<{
    q: any;
    subtopicTitle: string;
    subjectName: string;
    subjectColor: string;
  }> = [];

  subjects.forEach((subj) => {
    if (activeSubjId === 'all' || activeSubjId === subj.id) {
      subj.chapters.forEach((ch) => {
        ch.subtopics.forEach((st) => {
          const questions = st.examPractice || (st.questions || []).map((q: any, idx: number) => ({
            id: q.id || `q_${idx}`,
            questionText: q.question || q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
            marks: q.marks || 2,
            feedback: q.explanation || q.feedback
          }));
          questions.forEach((q: any) => {
            allQuestions.push({
              q,
              subtopicTitle: st.title,
              subjectName: subj.name,
              subjectColor: subj.accentColor
            });
          });
        });
      });
    }
  });

  const handleSelectAnswer = (qId: string, option: string, correctAnswer: string, marks: number) => {
    if (answeredMap[qId]) return; // already answered
    const isCorrect = String(option) === String(correctAnswer);

    setAnsweredMap((prev) => ({
      ...prev,
      [qId]: { choice: option, isCorrect }
    }));

    // Update real student stats
    const newQuestionsAnswered = (progress.questionsAnswered || 0) + 1;
    const currentCorrectCount = Math.round(
      ((progress.accuracy || 100) * (progress.questionsAnswered || 0)) / 100
    );
    const newCorrectCount = currentCorrectCount + (isCorrect ? 1 : 0);
    const newAccuracy = Math.round((newCorrectCount / newQuestionsAnswered) * 100);

    onUpdateProgress({
      ...progress,
      questionsAnswered: newQuestionsAnswered,
      accuracy: newAccuracy,
      studyTimeMinutes: (progress.studyTimeMinutes || 0) + 1
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Exam Drill & Assessment Bank
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Practice Question Bank
            </h1>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Authentic Cambridge-aligned questions with mark schemes and examiner commentary.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={activeSubjId}
              onChange={(e) => {
                setActiveSubjId(e.target.value);
                if (onSelectSubject && e.target.value !== 'all') {
                  onSelectSubject(e.target.value as SubjectId);
                }
              }}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            >
              <option value="all">All Subjects ({allQuestions.length} Qs)</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {allQuestions.map(({ q, subtopicTitle, subjectName, subjectColor }, idx) => {
          const state = answeredMap[q.id];

          return (
            <div
              key={q.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-md"
                    style={{ backgroundColor: `${subjectColor}15`, color: subjectColor }}
                  >
                    {subjectName}
                  </span>
                  <span className="text-xs text-slate-500">• {subtopicTitle}</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {q.marks || 2} Marks
                </span>
              </div>

              <p className="text-base text-slate-900 font-semibold mb-4 leading-relaxed">
                {q.questionText || q.question}
              </p>

              {/* Options */}
              <div className="space-y-2.5 mb-4">
                {q.options?.map((opt: string, optIdx: number) => {
                  const isSelected = state?.choice === opt;
                  const isCorrect = String(opt) === String(q.correctAnswer);

                  return (
                    <button
                      key={optIdx}
                      disabled={!!state}
                      onClick={() => handleSelectAnswer(q.id, opt, q.correctAnswer, q.marks)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between ${
                        state
                          ? isCorrect
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                            : isSelected
                            ? 'bg-rose-50 border-rose-400 text-rose-950'
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                          : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-800 hover:border-blue-400 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center font-mono text-xs font-bold text-slate-700 shadow-2xs">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {state && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      {state && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Mark scheme feedback if answered */}
              {state && (
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    state.isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="font-bold block mb-1">
                    {state.isCorrect ? '✓ Correct! Examiner Analysis:' : 'Feedback & Mark Scheme:'}
                  </span>
                  {q.feedback || q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
