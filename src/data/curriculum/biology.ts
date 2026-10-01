import { Chapter } from '../../types';
import { biologyPart1Chapters } from './biology_part1';
import { biologyPart2Chapters } from './biology_part2';
import { biologyPart3Chapters } from './biology_part3';

export const biologyChapters: Chapter[] = [
  ...biologyPart1Chapters,
  ...biologyPart2Chapters,
  ...biologyPart3Chapters
];
