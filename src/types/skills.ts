// src/types/skills.ts

export type SkillCategory = 'WEB_DEV' | 'HARDWARE' | 'CONTENT_STRATEGY' | 'DESIGN';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  projectCount: number;
  description: string;
}