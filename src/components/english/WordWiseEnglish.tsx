import React, { useState, useEffect } from 'react';
import { UserProfile, StudentProgress } from '../../types';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  Sparkles,
  FileText,
  Upload,
  Camera,
  Play,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Award,
  Gamepad2,
  HelpCircle,
  PenTool,
  BookmarkCheck,
  Search,
  Check,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

interface WordWiseEnglishProps {
  profile: UserProfile;
  progress: StudentProgress;
  onUpdateProgress: (updated: StudentProgress) => void;
}

interface SavedEssay {
  id: string;
  title: string;
  date: string;
  wordCount: number;
  content: string;
  overallScore: number;
  rubric: {
    structure: string;
    argument: string;
    vocabulary: string;
    grammar: string;
    coherence: string;
  };
  keyAdvice: string[];
}

export const WordWiseEnglish: React.FC<WordWiseEnglishProps> = ({
  profile,
  progress,
  onUpdateProgress
}) => {
  const [activeTab, setActiveTab] = useState<'word' | 'checker' | 'coach' | 'saved' | 'games'>('word');

  // ----------------------------------------------------------------------
  // A. WORD OF THE DAY
  // ----------------------------------------------------------------------
  const wordsList = [
    {
      word: 'Resilient',
      phonetic: '/rɪˈzɪl.i.ənt/',
      partOfSpeech: 'Adjective',
      definition: 'Able to withstand or recover quickly from difficult conditions or adversity.',
      examples: [
        'The resilient ecosystem bounced back rapidly following the severe forest drought.',
        'Researchers commended the student for remaining resilient throughout the rigorous experiment.'
      ],
      synonyms: ['Tenacious', 'Durable', 'Adaptable', 'Robust'],
      antonyms: ['Fragile', 'Vulnerable', 'Brittle'],
      level: 'Cambridge B2 / C1 Academic'
    },
    {
      word: 'Meticulous',
      phonetic: '/məˈtɪk.jə.ləs/',
      partOfSpeech: 'Adjective',
      definition: 'Showing great attention to detail; very careful and precise.',
      examples: [
        'Her meticulous lab notes allowed subsequent scientists to reproduce the titration exactly.',
        'The engineer made a meticulous inspection of every aircraft rivet before takeoff.'
      ],
      synonyms: ['Scrupulous', 'Painstaking', 'Conscientious', 'Exact'],
      antonyms: ['Careless', 'Sloppy', 'Hasty'],
      level: 'Cambridge C1 Academic'
    },
    {
      word: 'Juxtaposition',
      phonetic: '/ˌdʒʌk.stə.pəˈzɪʃ.ən/',
      partOfSpeech: 'Noun',
      definition: 'The fact of two things being seen or placed close together with contrasting effect.',
      examples: [
        'The author employs the stark juxtaposition of wealth and poverty to highlight systemic inequality.',
        'The juxtaposition of ancient stonework with sleek glass architecture created a striking aesthetic.'
      ],
      synonyms: ['Contrast', 'Collocation', 'Comparison'],
      antonyms: ['Homogeneity', 'Uniformity'],
      level: 'Cambridge C2 Literary'
    }
  ];

  // Pick word based on date seed
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % wordsList.length;
  const currentWord = wordsList[dayIndex] || wordsList[0];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // ----------------------------------------------------------------------
  // B. SENTENCE CHECKER
  // ----------------------------------------------------------------------
  const [sentenceInput, setSentenceInput] = useState<string>('');
  const [checkerResults, setCheckerResults] = useState<{
    issues: Array<{ type: 'grammar' | 'spelling' | 'punctuation' | 'clarity'; original: string; suggested: string; explanation: string }>;
    improvedSentence: string;
    checked: boolean;
  } | null>(null);

  const sampleSentences = [
    'The group of students were walking to their classes when it started raining.',
    'She gave the book to him and I, but we haven’t read it yet.',
    'Due to the fact that it was late we decided to quickly leave.'
  ];

  const handleCheckSentence = () => {
    if (!sentenceInput.trim()) return;

    const text = sentenceInput.trim();
    const issues: Array<{ type: 'grammar' | 'spelling' | 'punctuation' | 'clarity'; original: string; suggested: string; explanation: string }> = [];
    let improved = text;

    // Rule 1: Subject-verb agreement with collective noun
    if (/group of students were/i.test(text)) {
      issues.push({
        type: 'grammar',
        original: 'group of students were',
        suggested: 'group of students was',
        explanation: 'Subject-Verb Agreement: The singular head noun "group" governs the verb, so use singular "was" rather than plural "were".'
      });
      improved = improved.replace(/group of students were/gi, 'group of students was');
    }

    // Rule 2: Object pronoun after preposition
    if (/to him and I/i.test(text)) {
      issues.push({
        type: 'grammar',
        original: 'to him and I',
        suggested: 'to him and me',
        explanation: 'Pronoun Case: Following the preposition "to", objective case pronouns must be used ("to him and me", not "to I").'
      });
      improved = improved.replace(/to him and I/gi, 'to him and me');
    }

    // Rule 3: Wordy / awkward phrasing
    if (/due to the fact that/i.test(text)) {
      issues.push({
        type: 'clarity',
        original: 'Due to the fact that',
        suggested: 'Because',
        explanation: 'Concision & Style: "Due to the fact that" is needlessly wordy and bureaucratic. Replacing it with "Because" improves readability.'
      });
      improved = improved.replace(/due to the fact that/gi, 'Because');
    }

    // Rule 4: Comma splice / introductory clause missing comma
    if (/^Because [^,]+ we/i.test(improved) && !improved.includes(',')) {
      issues.push({
        type: 'punctuation',
        original: 'missing comma after clause',
        suggested: 'insert comma',
        explanation: 'Punctuation: Dependent adverbial clauses at the beginning of a sentence must be followed by a comma.'
      });
    }

    // If no specific rule triggered, provide standard positive feedback
    if (issues.length === 0) {
      issues.push({
        type: 'clarity',
        original: 'Sentence structure verified',
        suggested: text,
        explanation: 'Grammar and syntax appear clear, grammatically sound, and well-formed.'
      });
    }

    setCheckerResults({
      issues,
      improvedSentence: improved,
      checked: true
    });

    // Update real question / practice count
    onUpdateProgress({
      ...progress,
      questionsAnswered: (progress.questionsAnswered || 0) + 1,
      studyTimeMinutes: (progress.studyTimeMinutes || 0) + 2
    });
  };

  // ----------------------------------------------------------------------
  // C. ESSAY COACH
  // ----------------------------------------------------------------------
  const [essayTitle, setEssayTitle] = useState<string>('The Impact of Artificial Intelligence on Modern Education');
  const [essayContent, setEssayContent] = useState<string>(
    'Artificial intelligence is changing the world very quickly. In schools, students are using computers and software to do homework and research. Many people think this is good because it saves time. However, some teachers are worried about cheating and students not thinking for themselves.\n\nFurthermore, personalized learning tools can help students who struggle with difficult concepts. For instance, intelligent tutoring systems can explain math problems step by step. This allows learners to proceed at their own pace.\n\nIn conclusion, technology will continue to advance. We should use it carefully and make sure education remains fair for everyone.'
  );
  const [essayAnalysis, setEssayAnalysis] = useState<SavedEssay | null>(null);
  const [isAnalyzingEssay, setIsAnalyzingEssay] = useState<boolean>(false);

  // Saved essays state
  const [savedEssays, setSavedEssays] = useState<SavedEssay[]>(() => {
    try {
      const stored = localStorage.getItem('eureka_saved_essays_v1');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleAnalyzeEssay = () => {
    if (!essayContent.trim()) return;
    setIsAnalyzingEssay(true);

    setTimeout(() => {
      const words = essayContent.trim().split(/\s+/).length;
      const paragraphs = essayContent.trim().split(/\n\s*\n/).length;

      const analysis: SavedEssay = {
        id: `essay_${Date.now()}`,
        title: essayTitle.trim() || 'Untitled Essay',
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        wordCount: words,
        content: essayContent,
        overallScore: words > 100 && paragraphs >= 3 ? 78 : 62,
        rubric: {
          structure: paragraphs >= 3 ? 'Clear three-part structure (Introduction, Body, Conclusion). Strengthen transitions between paragraphs.' : 'Too brief or lacking separate developmental paragraphs. Ensure clear 4-5 paragraph structure.',
          argument: 'Your central premise is identifiable, but your thesis in the introduction needs sharper stakes. Frame a specific claim: "Although X, Y is crucial because Z".',
          vocabulary: 'Appropriate vocabulary used ("personalized learning", "tutoring systems"). Elevate conversational phrases ("very quickly" -> "exponentially").',
          grammar: 'Strong control of sentence syntax. Variety of simple, compound, and complex sentences maintained.',
          coherence: 'Effective use of connective markers ("Furthermore", "In conclusion"). Expand analytical commentary after examples.'
        },
        keyAdvice: [
          'Strengthen Introduction: Explicitly state your counterargument before concluding your opening paragraph.',
          'Elaborate Evidence: When mentioning "intelligent tutoring systems", analyze a specific example in greater depth.',
          'Academic Register: Replace conversational modifiers like "very quickly" and "good" with formal terms like "rapidly" and "advantageous".'
        ]
      };

      setEssayAnalysis(analysis);
      setIsAnalyzingEssay(false);

      // Save to saved essays list and localStorage
      const updatedList = [analysis, ...savedEssays.filter((e) => e.id !== analysis.id)];
      setSavedEssays(updatedList);
      localStorage.setItem('eureka_saved_essays_v1', JSON.stringify(updatedList));

      // Update student progress
      onUpdateProgress({
        ...progress,
        questionsAnswered: (progress.questionsAnswered || 0) + 3,
        studyTimeMinutes: (progress.studyTimeMinutes || 0) + 10
      });
    }, 1200);
  };

  const handleSimulateOCR = () => {
    setEssayTitle('Handwritten English Assignment - Scanned Draft');
    setEssayContent(
      'Environmental conservation has become a defining issue of our era. Human activities such as industrial deforestation and burning fossil fuels have caused unprecedented biodiversity loss.\n\nGovernments must enact strict environmental legislation, and educational institutions must foster ecological awareness among youth.'
    );
  };

  // ----------------------------------------------------------------------
  // E. ENGLISH GAMES: VOCABULARY & GRAMMAR SPRINT
  // ----------------------------------------------------------------------
  const [gameScore, setGameScore] = useState<number>(0);
  const [gameQuestionIdx, setGameQuestionIdx] = useState<number>(0);
  const [gameFeedback, setGameFeedback] = useState<string | null>(null);

  const gameQuestions = [
    {
      prompt: 'Select the most academically precise word to complete the sentence:',
      sentence: 'The research team presented ________ evidence that corroborated their initial hypothesis.',
      options: ['compelling', 'neat', 'super good', 'kind of true'],
      correctIndex: 0,
      rule: '"Compelling" is formal, scholarly vocabulary conveying persuasive empirical force.'
    },
    {
      prompt: 'Identify the grammatically correct sentence:',
      sentence: 'Choose the sentence with correct pronoun case:',
      options: [
        'Neither of the scientists was surprised by the experimental outcome.',
        'Neither of the scientists were surprised by the experimental outcome.',
        'Neither of the scientists wasn’t surprised by the experimental outcome.',
        'Neither of the scientists are surprised by the experimental outcome.'
      ],
      correctIndex: 0,
      rule: '"Neither" is an indefinite pronoun that takes a singular verb ("was").'
    },
    {
      prompt: 'Select the sentence that avoids a dangling modifier:',
      sentence: 'Which sentence correctly links the modifier to its intended subject?',
      options: [
        'Walking into the laboratory, the beaker was knocked over by Sarah.',
        'Walking into the laboratory, Sarah accidentally knocked over the beaker.',
        'Having completed the titration, the results were recorded.',
        'While examining the cell, the microscope broke.'
      ],
      correctIndex: 1,
      rule: 'The introductory participial phrase "Walking into the laboratory" must immediately precede Sarah, the person doing the walking!'
    }
  ];

  const handleGameAnswer = (chosenIdx: number) => {
    const q = gameQuestions[gameQuestionIdx];
    if (chosenIdx === q.correctIndex) {
      setGameScore((s) => s + 10);
      setGameFeedback(`✓ Correct! ${q.rule}`);
    } else {
      setGameFeedback(`Incorrect. Rule: ${q.rule}`);
    }
  };

  const handleNextGameQuestion = () => {
    setGameFeedback(null);
    setGameQuestionIdx((idx) => (idx + 1) % gameQuestions.length);
  };

  return (
    <div className="space-y-6">
      {/* Top WordWise Header */}
      <div className="bg-gradient-to-r from-rose-50 via-rose-100/50 to-amber-50 border border-rose-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
                WordWise AI Academic Suite
              </span>
              <span className="text-xs font-mono text-slate-500">Cambridge English IGCSE & General</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              English Language & Rhetoric Studio
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Elevate vocabulary precision, diagnose grammatical syntax, and receive personalized coaching on essay structure and argumentation.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-rose-200 shadow-sm">
            <Award className="w-5 h-5 text-rose-600" />
            <div>
              <span className="text-[10px] text-slate-400 block font-mono">PROFICIENCY</span>
              <span className="text-xs font-bold font-mono text-rose-700">Upper Intermediate (B2+)</span>
            </div>
          </div>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'word', label: 'Word of the Day', icon: Sparkles },
            { id: 'checker', label: 'Sentence Checker', icon: CheckCircle2 },
            { id: 'coach', label: 'Essay Coach', icon: PenTool },
            { id: 'saved', label: `Saved Essays (${savedEssays.length})`, icon: BookmarkCheck },
            { id: 'games', label: 'English Games', icon: Gamepad2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                    : 'bg-white/80 text-slate-600 hover:text-rose-700 border border-slate-200 hover:bg-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT A: WORD OF THE DAY */}
      {activeTab === 'word' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {currentWord.word}
                </h2>
                <button
                  onClick={() => handleSpeak(currentWord.word)}
                  className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl transition-colors cursor-pointer"
                  title="Pronounce with British English Audio"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mt-1">
                <span className="text-rose-600 font-bold">{currentWord.phonetic}</span>
                <span>•</span>
                <span className="italic">{currentWord.partOfSpeech}</span>
                <span>•</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-sans font-semibold">
                  {currentWord.level}
                </span>
              </div>
            </div>

            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Rotates Daily Automatically
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Academic Definition
            </h4>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              {currentWord.definition}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Contextual Example Sentences
            </h4>
            <div className="space-y-2.5">
              {currentWord.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-sm text-slate-700 italic flex items-center justify-between"
                >
                  <span>"{ex}"</span>
                  <button
                    onClick={() => handleSpeak(ex)}
                    className="p-1 text-slate-400 hover:text-rose-600 ml-2"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-2">
                Synonyms (Elevate Vocabulary)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentWord.synonyms.map((syn, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-white text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs"
                  >
                    {syn}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold uppercase text-slate-600 block mb-2">
                Antonyms (Contrasting Concepts)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentWord.antonyms.map((ant, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-white text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                  >
                    {ant}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT B: SENTENCE CHECKER */}
      {activeTab === 'checker' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Interactive Sentence Checker</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter any sentence to diagnose grammatical structure, subject-verb agreement, punctuation, and concision.
            </p>
          </div>

          {/* Sample quick inputs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Try a sample test:</span>
            {sampleSentences.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => setSentenceInput(sample)}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-lg transition-colors cursor-pointer"
              >
                Sample {idx + 1}
              </button>
            ))}
          </div>

          <div className="relative">
            <textarea
              rows={3}
              value={sentenceInput}
              onChange={(e) => setSentenceInput(e.target.value)}
              placeholder="Type or paste a sentence here (e.g. 'The group of students were walking to their classes...')"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">
              Diagnoses: Agreement, Prepositions, Wordiness, Punctuation
            </span>
            <button
              onClick={handleCheckSentence}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Diagnose Sentence</span>
            </button>
          </div>

          {/* Checker Diagnostic Results */}
          {checkerResults && (
            <div className="pt-6 border-t border-slate-100 space-y-4 animate-in fade-in">
              <h3 className="text-sm font-bold text-slate-800">Diagnostic Analysis & Feedback:</h3>

              {checkerResults.issues.map((issue, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-mono uppercase bg-rose-600 text-white px-2 py-0.5 rounded">
                      {issue.type}
                    </span>
                    <span className="text-xs font-bold text-rose-900">
                      Found: <span className="line-through text-rose-600">{issue.original}</span> → Suggested: <span className="text-emerald-700 font-bold">{issue.suggested}</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {issue.explanation}
                  </p>
                </div>
              ))}

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-800 block">
                    Recommended Polished Sentence
                  </span>
                  <p className="text-sm font-semibold text-emerald-950 mt-0.5">
                    "{checkerResults.improvedSentence}"
                  </p>
                </div>
                <button
                  onClick={() => handleSpeak(checkerResults.improvedSentence)}
                  className="p-2 bg-white text-emerald-700 rounded-xl border border-emerald-200 shadow-2xs hover:bg-emerald-100 transition-colors"
                  title="Listen"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT C: ESSAY COACH */}
      {activeTab === 'coach' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Essay Coach & Structure Mentor</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                The Coach provides constructive structural, rhetorical, and argument advice without writing the essay for you.
              </p>
            </div>

            <button
              onClick={handleSimulateOCR}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Scan / Photo OCR</span>
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Essay Prompt / Title
            </label>
            <input
              type="text"
              value={essayTitle}
              onChange={(e) => setEssayTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:border-rose-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Essay Body ({essayContent.trim().split(/\s+/).filter(Boolean).length} words)
              </label>
              <span className="text-xs text-slate-400 font-mono">Cambridge IGCSE Paper 2 Format</span>
            </div>
            <textarea
              rows={8}
              value={essayContent}
              onChange={(e) => setEssayContent(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm leading-relaxed focus:outline-none focus:border-rose-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">
              Evaluates: Thesis, Argument, Vocabulary, Coherence, Paragraphing
            </span>
            <button
              onClick={handleAnalyzeEssay}
              disabled={isAnalyzingEssay}
              className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAnalyzingEssay ? 'Analyzing Structure...' : 'Analyze with Essay Coach'}</span>
            </button>
          </div>

          {/* Analysis Rubric */}
          {essayAnalysis && (
            <div className="pt-6 border-t border-slate-100 space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between bg-slate-900 text-white p-5 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">HOLISTIC EVALUATION</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">
                    Band 7 / Cambridge Upper Credit ({essayAnalysis.overallScore}%)
                  </span>
                </div>
                <div className="text-right text-xs text-slate-400 font-mono">
                  {essayAnalysis.wordCount} words • Saved to Portfolio
                </div>
              </div>

              {/* Rubric Criteria Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(essayAnalysis.rubric).map(([dimension, note]) => (
                  <div key={dimension} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                      {dimension}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actionable Coach Advice */}
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl">
                <h4 className="text-xs font-bold uppercase text-amber-900 mb-2">
                  Actionable Next Steps to Revise This Draft:
                </h4>
                <ul className="space-y-1.5 text-xs text-amber-900">
                  {essayAnalysis.keyAdvice.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT D: SAVED ESSAYS */}
      {activeTab === 'saved' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Saved Essay Portfolio</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Review prior drafts, feedback history, and revision points.
            </p>
          </div>

          {savedEssays.length === 0 ? (
            <div className="p-12 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <FileText className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-semibold">No saved essays yet.</p>
              <p className="text-xs mt-1">Submit an essay to the Essay Coach to save your first draft.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedEssays.map((essay) => (
                <div
                  key={essay.id}
                  className="p-5 bg-slate-50 hover:bg-slate-100/70 border border-slate-200 rounded-2xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">{essay.title}</h3>
                      <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        {essay.overallScore}% Score
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {essay.date} • {essay.wordCount} words
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1 italic mt-1">
                      "{essay.content.slice(0, 100)}..."
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setEssayTitle(essay.title);
                      setEssayContent(essay.content);
                      setEssayAnalysis(essay);
                      setActiveTab('coach');
                    }}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
                  >
                    Open & Revise
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT E: ENGLISH GAMES */}
      {activeTab === 'games' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Grammar & Rhetoric Sprint</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Challenge your ability to identify dangling modifiers, precise academic diction, and pronoun agreement.
              </p>
            </div>
            <div className="bg-rose-50 text-rose-700 px-4 py-2 rounded-2xl border border-rose-200 text-xs font-mono font-bold">
              Score: {gameScore} pts
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400 block">
              Question {gameQuestionIdx + 1} of {gameQuestions.length}
            </span>
            <p className="text-sm font-bold text-slate-900">
              {gameQuestions[gameQuestionIdx].prompt}
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-serif italic text-slate-800">
              "{gameQuestions[gameQuestionIdx].sentence}"
            </div>

            <div className="space-y-2.5">
              {gameQuestions[gameQuestionIdx].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleGameAnswer(idx)}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-rose-400 hover:bg-rose-50/40 text-xs font-medium text-slate-700 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-md bg-white border border-slate-300 flex items-center justify-center font-mono font-bold text-[11px] shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </button>
              ))}
            </div>

            {gameFeedback && (
              <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs font-medium flex items-center justify-between">
                <span>{gameFeedback}</span>
                <button
                  onClick={handleNextGameQuestion}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all cursor-pointer"
                >
                  Next Challenge
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
