export type GradeLevel = 6 | 7 | 8 | 9 | 10;

export type SubjectId =
  | 'general_science'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'mathematics'
  | 'english'
  | 'computer_science'
  | 'accounting'
  | 'economics'
  | 'business_studies';

export interface UserProfile {
  id?: string;
  name: string;
  age: number;
  grade: GradeLevel;
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say' | 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  role?: 'student' | 'developer';
  selectedSubjects?: SubjectId[];
  lastOpenedLesson?: {
    subtopicId: string;
    subtopicTitle: string;
    chapterTitle: string;
    subjectName: string;
    subjectId: SubjectId;
    timestamp?: string;
  };
  onboardingCompleted?: boolean;
  createdAt?: string | number;
  lastActive?: number;
}

export interface StudentProgress {
  completedSubtopics: string[];
  completedLabs?: string[];
  questionsAnswered: number;
  accuracy: number;
  streak: number;
  studyTimeMinutes: number;
  lastActiveDate: string;
}

export type UserProgress = StudentProgress;

export interface ExamQuestion {
  id: string;
  questionText?: string;
  question?: string;
  type?: string;
  options?: string[];
  correctAnswer: string | number;
  marks: number;
  feedback?: string;
  explanation?: string;
}

export interface ExperienceConfig {
  id?: string;
  title: string;
  type?: string;
  scenarioDescription?: string;
  instructions?: string;
  interactiveType?: string;
  initialConfig?: Record<string, any>;
  scenario?: string;
  prompt?: string;
  goal?: string;
  initialState?: Record<string, any>;
  data?: Record<string, any>;
}

export interface InteractiveDemonstration {
  title: string;
  description: string;
  controlsDescription: string;
}

export interface WorkedExample {
  title?: string;
  problem: string;
  stepByStepSolution?: string[];
  finalAnswer?: string;
  stepByStep?: { step: string; detail: string; math?: string }[];
  keyTakeaway?: string;
}

export interface QuickChallenge {
  question?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  prompt?: string;
}

export interface Subtopic {
  id: string;
  chapterId: string;
  subjectId?: SubjectId;
  code?: string;
  title: string;
  description?: string;
  academicConcept?: string;
  estimatedMinutes?: number;
  durationMinutes?: number;
  animationSpec?: any;
  status?: string;
  version?: number;
  experience: ExperienceConfig;
  whatHappenedExplanation?: string;
  interactiveDemonstration?: InteractiveDemonstration;
  workedExample?: WorkedExample;
  quickChallenge?: QuickChallenge;
  examPractice?: ExamQuestion[];
  lesson?: {
    whatHappened: string;
    academicConcept: string;
    interactiveDiagram?: {
      title: string;
      caption: string;
      keyPoints: string[];
    };
    workedExample?: WorkedExample;
    quickChallenge?: QuickChallenge;
    summary?: string[];
  };
  questions?: any[];
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  number: number;
  title: string;
  description: string;
  subtopics: Subtopic[];
}

export interface Subject {
  id: SubjectId;
  name: string;
  shortName: string;
  title?: string;
  description: string;
  gradeLevels: GradeLevel[];
  allowedGrades?: GradeLevel[];
  iconName: string;
  icon?: string;
  accentColor: string;
  color?: string;
  category?: 'Science' | 'Humanities' | 'Languages' | 'Commerce' | 'Technology';
  chapters: Chapter[];
}
