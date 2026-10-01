import React, { useState } from 'react';
import { Subtopic, Subject, Chapter, StudentProgress, ExamQuestion } from '../../types';
import { UniversalSimEngine } from '../simulations/UniversalSimEngine';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Award,
  ChevronRight,
  Lightbulb,
  XCircle,
  RotateCcw,
  Check,
  Zap,
  GraduationCap
} from 'lucide-react';

interface LessonPlayerProps {
  subtopic: Subtopic;
  chapter: Chapter;
  subject: Subject;
  progress: StudentProgress;
  onUpdateProgress: (updated: StudentProgress) => void;
  onClose: () => void;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({
  subtopic,
  chapter,
  subject,
  progress,
  onUpdateProgress,
  onClose
}) => {
  // Steps: 1 to 7
  // 1: Interactive Experience First
  // 2: What Happened?
  // 3: Interactive Explanation
  // 4: Worked Example
  // 5: Quick Challenge
  // 6: Exam Practice
  // 7: Completion
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [quickChallengeSelected, setQuickChallengeSelected] = useState<number | null>(null);
  const [quickChallengeChecked, setQuickChallengeChecked] = useState<boolean>(false);
  
  // Exam practice answers state
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);

  // Normalize data access whether flat or nested in .lesson / .questions
  const whatHappened =
    subtopic.whatHappenedExplanation ||
    subtopic.lesson?.whatHappened ||
    'The experimental reaction demonstrates how physical forces interact with matter.';

  const academicConcept =
    subtopic.academicConcept ||
    subtopic.lesson?.academicConcept ||
    subtopic.description ||
    'Academic Concept Mastery';

  const demoTitle =
    subtopic.interactiveDemonstration?.title ||
    subtopic.lesson?.interactiveDiagram?.title ||
    'Interactive Demonstration';

  const demoDesc =
    subtopic.interactiveDemonstration?.description ||
    subtopic.lesson?.interactiveDiagram?.caption ||
    'Observe the relationship between independent variables and the observed outcome.';

  const demoControls =
    subtopic.interactiveDemonstration?.controlsDescription ||
    subtopic.lesson?.interactiveDiagram?.keyPoints?.join('; ') ||
    'Inspect variable dynamics and response curves.';

  const worked = subtopic.workedExample || subtopic.lesson?.workedExample || {
    problem: 'Calculate the expected change in state for the given boundary conditions.',
    stepByStepSolution: [
      'Identify known initial parameters and applicable physical relationships.',
      'Substitute values into the governing formula.',
      'Evaluate units and state final value.'
    ],
    finalAnswer: 'Confirmed by experimental data'
  };

  const quick = subtopic.quickChallenge || subtopic.lesson?.quickChallenge || {
    question: 'What is the primary conclusion drawn from this experimental trial?',
    options: [
      'The observed quantity increases proportionally with input energy',
      'The system remains unchanged regardless of input',
      'Entropy decreases instantaneously to zero',
      'Mass is created from nothing'
    ],
    correctIndex: 0,
    explanation: 'Physical systems follow governing conservation laws and equilibrium dynamics.'
  };

  const examList: ExamQuestion[] = (subtopic.examPractice || []).length > 0
    ? subtopic.examPractice!
    : (subtopic.questions || []).map((q: any, i: number) => ({
        id: q.id || `q_${i}`,
        questionText: q.question || q.questionText || 'Explain the underlying physical principle.',
        options: q.options || ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: String(q.correctAnswer ?? q.options?.[0] ?? 'Option A'),
        marks: q.marks || 2,
        feedback: q.explanation || q.feedback || 'Applies standard Cambridge mark scheme criteria.'
      }));

  const estimatedMins = subtopic.estimatedMinutes || subtopic.durationMinutes || 3;

  const stepLabels = [
    'Interactive Experience',
    'What Happened?',
    'Concept Exploration',
    'Worked Example',
    'Quick Challenge',
    'Exam Practice',
    'Completion'
  ];

  const handleSimFinish = () => {
    setCurrentStep(2);
  };

  const handleQuickChallengeSubmit = () => {
    setQuickChallengeChecked(true);
  };

  const handleExamOptionSelect = (qId: string, option: string) => {
    if (examSubmitted) return;
    setExamAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleExamSubmit = () => {
    let score = 0;
    examList.forEach((q) => {
      if (examAnswers[q.id] === String(q.correctAnswer)) {
        score += q.marks;
      }
    });
    setExamScore(score);
    setExamSubmitted(true);
  };

  const handleFinishLesson = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const isAlreadyCompleted = progress.completedSubtopics.includes(subtopic.id);
    const updatedSubtopics = isAlreadyCompleted
      ? progress.completedSubtopics
      : [...progress.completedSubtopics, subtopic.id];

    // Compute updated questions answered
    const totalQuestionsInThisLesson = examList.length + 1;
    const questionsAnswered = (progress.questionsAnswered || 0) + totalQuestionsInThisLesson;
    
    let totalMarks = 0;
    examList.forEach((q) => (totalMarks += q.marks));
    const accuracy = totalMarks > 0 ? Math.round((examScore / totalMarks) * 100) : 100;

    const newProgress: StudentProgress = {
      ...progress,
      completedSubtopics: updatedSubtopics,
      questionsAnswered,
      accuracy: Math.round(((progress.accuracy || 100) + accuracy) / (progress.questionsAnswered > 0 ? 2 : 1)),
      streak: progress.streak === 0 ? 1 : progress.streak,
      studyTimeMinutes: (progress.studyTimeMinutes || 0) + estimatedMins,
      lastActiveDate: new Date().toISOString()
    };

    onUpdateProgress(newProgress);
    setCurrentStep(7);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-2xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Return to curriculum"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span style={{ color: subject.accentColor }} className="font-bold">
                  {subject.name}
                </span>
                <span>•</span>
                <span>Chapter {chapter.number}: {chapter.title}</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate max-w-md sm:max-w-xl">
                {subtopic.title}
              </h1>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold">
            <span className="text-slate-500">Step {currentStep} of 7:</span>
            <span className="font-bold text-blue-600">{stepLabels[currentStep - 1]}</span>
          </div>
        </div>

        {/* Step Progress Line */}
        <div className="max-w-5xl mx-auto mt-3">
          <div className="grid grid-cols-7 gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step < currentStep
                    ? 'bg-emerald-500'
                    : step === currentStep
                    ? 'bg-blue-600 shadow-sm'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* STEP 1: INTERACTIVE EXPERIENCE FIRST */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Step 1: Discover Through Action First</span>
            </div>
            
            <UniversalSimEngine
              subtopic={subtopic}
              onComplete={handleSimFinish}
            />
          </div>
        )}

        {/* STEP 2: WHAT HAPPENED? */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Lightbulb className="w-4 h-4" />
              <span>Step 2: Connecting The Experience</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span>«What Just Happened?»</span>
              </h2>

              <div className="p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-2xl mb-6">
                <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                  {whatHappened}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-1">
                  Target Academic Concept
                </span>
                <p className="text-slate-800 text-sm leading-relaxed font-semibold">
                  {academicConcept}
                </p>
              </div>

              <div className="mt-8 flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Replay Experience
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs"
                >
                  <span>Step 3: Concept Deep Dive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: INTERACTIVE EXPLANATION */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
              <BookOpen className="w-4 h-4" />
              <span>Step 3: Concept Demonstration</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {demoTitle}
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                {demoDesc}
              </p>

              {/* Dynamic Demonstration Box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 shadow-sm">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Interactive Demonstration Board</h4>
                <p className="text-sm text-slate-600 max-w-lg mb-4 font-medium">
                  {demoControls}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-xs font-mono text-emerald-700 rounded-full border border-emerald-200 shadow-2xs font-bold">
                  <Check className="w-3.5 h-3.5" /> Cambridge Core Curriculum Aligned
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs"
                >
                  <span>Step 4: Worked Example</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: WORKED EXAMPLE */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <GraduationCap className="w-4 h-4" />
              <span>Step 4: Cambridge Standard Worked Solution</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Sample Exam Problem</h2>
              
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6">
                <p className="text-slate-800 font-medium text-base leading-relaxed">
                  {worked.problem}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step-by-Step Breakdown:
                </h4>
                {(worked.stepByStepSolution || (worked.stepByStep || []).map((s: any) => `${s.step}: ${s.detail}`)).map((stepText: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{stepText}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-800">Final Answer:</span>
                <span className="text-base font-mono font-bold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-2xs">
                  {worked.finalAnswer || worked.keyTakeaway || 'Solution Verified'}
                </span>
              </div>

              <div className="mt-8 flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs"
                >
                  <span>Step 5: Quick Challenge</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: QUICK CHALLENGE */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Zap className="w-4 h-4" />
              <span>Step 5: Concept Check</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {quick.question || quick.prompt || 'Check your understanding'}
              </h2>

              <div className="space-y-3 mb-6">
                {(quick.options || []).map((opt: string, idx: number) => {
                  const isSelected = quickChallengeSelected === idx;
                  const isCorrect = idx === quick.correctIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!quickChallengeChecked) {
                          setQuickChallengeSelected(idx);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        quickChallengeChecked
                          ? isCorrect
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                            : isSelected
                            ? 'bg-rose-50 border-rose-400 text-rose-950'
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                          : isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold'
                          : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700 shadow-2xs">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm font-medium">{opt}</span>
                      </div>
                      {quickChallengeChecked && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      )}
                      {quickChallengeChecked && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {quickChallengeChecked && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6 text-sm">
                  <span className="font-bold text-amber-800 block mb-1">Feedback:</span>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {quick.explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>

                {!quickChallengeChecked ? (
                  <button
                    disabled={quickChallengeSelected === null}
                    onClick={handleQuickChallengeSubmit}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs"
                  >
                    <span>Check Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStep(6)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs"
                  >
                    <span>Step 6: Exam Practice</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: EXAM-STYLE PRACTICE */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
              <Award className="w-4 h-4" />
              <span>Step 6: Cambridge Exam Assessment ({examList.length} Questions)</span>
            </div>

            <div className="space-y-6">
              {examList.map((q: ExamQuestion, qIndex: number) => {
                const selected = examAnswers[q.id];
                const isCorrect = selected === String(q.correctAnswer);
                return (
                  <div
                    key={q.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        Question {qIndex + 1} ({q.marks} {q.marks === 1 ? 'Mark' : 'Marks'})
                      </span>
                    </div>

                    <p className="text-base text-slate-900 font-semibold mb-4 leading-relaxed">
                      {q.questionText || q.question}
                    </p>

                    <div className="space-y-2.5 mb-4">
                      {q.options?.map((opt: string, optIdx: number) => {
                        const optSelected = selected === opt;
                        const optIsCorrect = opt === String(q.correctAnswer);
                        return (
                          <button
                            key={optIdx}
                            disabled={examSubmitted}
                            onClick={() => handleExamOptionSelect(q.id, opt)}
                            className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                              examSubmitted
                                ? optIsCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                  : optSelected
                                  ? 'bg-rose-50 border-rose-400 text-rose-950'
                                  : 'bg-slate-50 border-slate-200 text-slate-400'
                                : optSelected
                                ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold'
                                : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-800'
                            }`}
                          >
                            <span>{opt}</span>
                            {examSubmitted && optIsCorrect && (
                              <Check className="w-4 h-4 text-emerald-600" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {examSubmitted && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                        <span className="font-bold text-amber-800 block mb-0.5">
                          Mark Scheme & Examiner Notes:
                        </span>
                        {q.feedback || q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center shadow-sm">
                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>

                {!examSubmitted ? (
                  <button
                    disabled={Object.keys(examAnswers).length === 0}
                    onClick={handleExamSubmit}
                    className="px-8 py-3 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs"
                  >
                    Submit Exam Responses
                  </button>
                ) : (
                  <button
                    onClick={handleFinishLesson}
                    className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs animate-bounce"
                  >
                    <span>Finish & Claim Mastery</span>
                    <Award className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: COMPLETION CELEBRATION */}
        {currentStep === 7 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Award className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Subtopic Complete
            </span>

            <h2 className="text-3xl font-black text-slate-900 mb-2">{subtopic.title}</h2>
            <p className="text-sm text-slate-600 mb-8 max-w-md mx-auto">
              You experienced the concept firsthand, analyzed what happened, examined the worked example, and validated your skills against real exam questions.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Exam Marks</span>
                <span className="text-2xl font-bold font-mono text-emerald-700">
                  {examScore} pts
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Time Invested</span>
                <span className="text-2xl font-bold font-mono text-blue-700">
                  ~{estimatedMins}m
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              Back to Curriculum Overview
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
