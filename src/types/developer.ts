import { GradeLevel, SubjectId, ExamQuestion, Subtopic } from './index';

export type { GradeLevel, SubjectId, ExamQuestion, Subtopic };
export type ContentStatus = 'draft' | 'published' | 'unpublished' | 'archived';

export interface AnimationObject {
  id: string;
  name: string;
  type: 'gauge' | 'instrument' | 'slider' | 'switch' | 'meter' | 'sensor' | 'beaker' | 'scale' | 'display' | 'particle';
  quantity?: string;
  currentValue?: number;
  initialValue: number;
  targetValue?: number;
  min: number;
  max: number;
  step?: number;
  unit: string;
  status?: 'pending' | 'calibrated' | 'verified' | 'active';
  tooltip?: string;
  description?: string;
}

export interface AnimationInteraction {
  id: string;
  targetObjectId: string;
  label: string;
  actionType: 'adjust' | 'inspect' | 'toggle' | 'verify' | 'measure' | 'calibrate';
  hint: string;
  feedbackOnSuccess: string;
}

export interface AnimationScene {
  theme: string;
  title: string;
  backgroundStyle: string;
  primaryColor?: string;
}

export interface StructuredAnimationSpec {
  scene: AnimationScene;
  objects: AnimationObject[];
  interactions: AnimationInteraction[];
  educationalHighlights: {
    concept: string;
    detail: string;
  }[];
  successCriteria: {
    requiredChecks: number;
    completionMessage: string;
  };
}

export interface TopicRecord {
  id: string;
  grade: GradeLevel;
  subjectId: SubjectId;
  subjectName?: string;
  chapterId: string;
  chapterNumber?: number;
  chapterName?: string;
  name: string;
  description: string;
  learningObjectives: string[];
  content: string; // What happened & key concept explanation
  academicConcept?: string;
  interactiveActivity?: {
    instructions: string;
    goal: string;
  };
  animationSpec: StructuredAnimationSpec;
  questions: ExamQuestion[];
  status: ContentStatus;
  version: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface DeveloperUser {
  id: string;
  username: string;
  role: 'developer_admin' | 'content_manager';
  permissions: string[];
}

export interface DeveloperStats {
  totalSubjects: number;
  totalChapters: number;
  totalTopics: number;
  publishedCount: number;
  draftCount: number;
  unpublishedCount: number;
  archivedCount: number;
  recentCreated: TopicRecord[];
  recentPublished: TopicRecord[];
}

export interface AISettings {
  provider: 'google_gemini';
  model: string;
  temperature: number;
  maxTokens: number;
  systemInstruction?: string;
}
