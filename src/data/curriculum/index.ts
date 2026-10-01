import { Subject, GradeLevel, Chapter, Subtopic } from '../../types';
import { physicsChapters } from './physics';
import { chemistryChapters } from './chemistry';
import { biologyChapters } from './biology';
import {
  mathChapters,
  csChapters,
  businessEconomicsChapters,
  englishChapters,
  generalScienceChapters
} from './other_subjects';

export const allSubjects: Subject[] = [
  {
    id: 'general_science',
    name: 'General Science',
    shortName: 'Sci',
    description: 'Forces, energy, cells, ecosystems, materials and scientific investigation for junior learners.',
    gradeLevels: [6, 7, 8],
    iconName: 'Sparkles',
    accentColor: '#10B981', // Emerald
    chapters: generalScienceChapters
  },
  {
    id: 'physics',
    name: 'Physics',
    shortName: 'Phys',
    description: 'Forces, thermal dynamics, waves, electromagnetism, nuclear and space physics (Cambridge IGCSE).',
    gradeLevels: [9, 10],
    iconName: 'Atom',
    accentColor: '#3B82F6', // Blue
    chapters: physicsChapters
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chem',
    description: 'Particulate matter, stoichiometry, reactions, acids/bases, organic chemistry and the Periodic Table.',
    gradeLevels: [9, 10],
    iconName: 'FlaskConical',
    accentColor: '#8B5CF6', // Purple
    chapters: chemistryChapters
  },
  {
    id: 'biology',
    name: 'Biology',
    shortName: 'Bio',
    description: 'Cell biology, genetics, human physiology, ecology, plant transport and biotechnology.',
    gradeLevels: [9, 10],
    iconName: 'Dna',
    accentColor: '#10B981', // Emerald
    chapters: biologyChapters
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    shortName: 'Math',
    description: 'Number theory, algebraic modeling, geometry, trigonometry, statistics and functions.',
    gradeLevels: [6, 7, 8, 9, 10],
    iconName: 'Calculator',
    accentColor: '#F59E0B', // Amber
    chapters: mathChapters
  },
  {
    id: 'computer_science',
    name: 'Computer Science',
    shortName: 'CS',
    description: 'Logic gates, digital architectures, algorithms, data representation, and networks.',
    gradeLevels: [9, 10],
    iconName: 'Binary',
    accentColor: '#06B6D4', // Cyan
    chapters: csChapters
  },
  {
    id: 'economics',
    name: 'Economics',
    shortName: 'Econ',
    description: 'Scarcity, supply & demand equilibrium, macroeconomic policy, inflation, and trade.',
    gradeLevels: [9, 10],
    iconName: 'TrendingUp',
    accentColor: '#EC4899', // Pink
    chapters: businessEconomicsChapters.filter((c) => c.subjectId === 'economics')
  },
  {
    id: 'business_studies',
    name: 'Business Studies',
    shortName: 'Bus',
    description: 'Business activity, break-even analysis, marketing strategy, operations, and leadership.',
    gradeLevels: [9, 10],
    iconName: 'Briefcase',
    accentColor: '#6366F1', // Indigo
    chapters: businessEconomicsChapters.filter((c) => c.subjectId === 'business_studies')
  },
  {
    id: 'accounting',
    name: 'Accounting',
    shortName: 'Acc',
    description: 'The fundamental accounting equation, double-entry bookkeeping, trial balance, and financial statements.',
    gradeLevels: [9, 10],
    iconName: 'Receipt',
    accentColor: '#14B8A6', // Teal
    chapters: businessEconomicsChapters.filter((c) => c.subjectId === 'accounting')
  },
  {
    id: 'english',
    name: 'English Language',
    shortName: 'Eng',
    description: 'Rhetoric, argumentative writing, critical text analysis, and persuasive techniques.',
    gradeLevels: [6, 7, 8, 9, 10],
    iconName: 'BookOpen',
    accentColor: '#F97316', // Orange
    chapters: englishChapters
  }
];

let cachedDynamicTopics: any[] = [];

export function setCachedDynamicTopics(topics: any[]) {
  cachedDynamicTopics = Array.isArray(topics) ? topics : [];
}

export function getSubjectsForGrade(grade: GradeLevel): Subject[] {
  const base = allSubjects.filter((subject) => subject.gradeLevels.includes(grade));
  if (cachedDynamicTopics.length > 0) {
    return mergeDynamicTopicsIntoSubjects(base, cachedDynamicTopics);
  }
  return base;
}

export function findSubtopicById(subtopicId: string): {
  subtopic: Subtopic;
  chapter: Chapter;
  subject: Subject;
} | null {
  for (const subject of allSubjects) {
    for (const chapter of subject.chapters) {
      for (const subtopic of chapter.subtopics) {
        if (subtopic.id === subtopicId) {
          return { subtopic, chapter, subject };
        }
      }
    }
  }
  return null;
}

export function getAllSubtopicsForGrade(grade: GradeLevel): Subtopic[] {
  const subjects = getSubjectsForGrade(grade);
  const subtopics: Subtopic[] = [];
  for (const subj of subjects) {
    for (const ch of subj.chapters) {
      subtopics.push(...ch.subtopics);
    }
  }
  return subtopics;
}

export function mergeDynamicTopicsIntoSubjects(
  baseSubjects: Subject[],
  dynamicTopics: any[]
): Subject[] {
  if (!dynamicTopics || dynamicTopics.length === 0) return baseSubjects;

  const subjectsMap: Record<string, Subject> = {};
  baseSubjects.forEach((subj) => {
    subjectsMap[subj.id] = {
      ...subj,
      chapters: subj.chapters.map((ch) => ({
        ...ch,
        subtopics: [...ch.subtopics]
      }))
    };
  });

  dynamicTopics.forEach((dt) => {
    if (dt.status !== 'published') return;

    let targetSubject = subjectsMap[dt.subjectId];
    if (!targetSubject) {
      targetSubject = {
        id: dt.subjectId,
        name: dt.subjectName || dt.subjectId,
        shortName: dt.subjectId.substring(0, 4).toUpperCase(),
        description: `Curriculum for ${dt.subjectName || dt.subjectId}`,
        gradeLevels: [dt.grade],
        iconName: 'Sparkles',
        accentColor: '#3B82F6',
        chapters: []
      };
      subjectsMap[dt.subjectId] = targetSubject;
    }

    let targetChapter = targetSubject.chapters.find(
      (ch) => ch.id === dt.chapterId || ch.number === dt.chapterNumber
    );

    if (!targetChapter) {
      targetChapter = {
        id: dt.chapterId || `ch_${dt.chapterNumber || 1}`,
        subjectId: dt.subjectId,
        number: dt.chapterNumber || targetSubject.chapters.length + 1,
        title: dt.chapterName || `Chapter ${dt.chapterNumber || targetSubject.chapters.length + 1}`,
        description: `Curriculum chapter for ${dt.name}`,
        subtopics: []
      };
      targetSubject.chapters.push(targetChapter);
    }

    const subtopic: Subtopic = {
      id: dt.id,
      chapterId: targetChapter.id,
      subjectId: dt.subjectId,
      title: dt.name,
      description: dt.description,
      academicConcept: dt.academicConcept || dt.name,
      estimatedMinutes: 5,
      animationSpec: dt.animationSpec,
      status: dt.status,
      version: dt.version,
      experience: {
        id: `exp_${dt.id}`,
        title: dt.animationSpec?.scene?.title || dt.name,
        type: 'structured_ai_animation',
        scenario: dt.description,
        prompt: dt.interactiveActivity?.instructions || 'Calibrate apparatus according to procedure.'
      },
      whatHappenedExplanation: dt.content,
      lesson: {
        whatHappened: dt.content,
        academicConcept: dt.academicConcept || dt.name,
        summary: dt.learningObjectives || []
      },
      examPractice: dt.questions || []
    };

    const existingIndex = targetChapter.subtopics.findIndex((s) => s.id === dt.id);
    if (existingIndex >= 0) {
      targetChapter.subtopics[existingIndex] = subtopic;
    } else {
      targetChapter.subtopics.push(subtopic);
    }
  });

  return Object.values(subjectsMap);
}

