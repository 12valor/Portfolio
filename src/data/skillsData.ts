// src/data/skillsData.ts
import { Skill } from '../types/skills';

export const mySkills: Skill[] = [
  { 
    id: 'arduino-01', 
    name: 'Arduino Firmware', 
    category: 'HARDWARE', 
    level: 'EXPERT', 
    progress: 95,
    description: 'Developing AI-based monitoring systems and sensor integration.'
  },
  { 
    id: 'web-01', 
    name: 'Full-Stack React', 
    category: 'WEB_DEV', 
    level: 'ADVANCED', 
    progress: 85,
    description: 'Building responsive systems with Framer Motion and PHP backends.'
  },
  {
    id: 'yt-01',
    name: 'Content Strategy',
    category: 'CONTENT_STRATEGY',
    level: 'ADVANCED',
    progress: 90,
    description: 'Audience retention and analytics for RoastBloxx and QuickQ.'
  }
];