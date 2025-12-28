// src/types/skills.ts

export type MasteryLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
export type SkillCategory = 'WEB_DEV' | 'HARDWARE' | 'CONTENT_STRATEGY' | 'DESIGN';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: MasteryLevel;
  progress: number; // 0 to 100
  description: string;
}