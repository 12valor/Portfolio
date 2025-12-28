// src/data/skillsData.ts
import { Skill } from '../types/skills';

export const mySkills: Skill[] = [
  // --- WEB DEVELOPMENT ---
  { 
    id: 'react', 
    name: 'React & JS', 
    category: 'WEB_DEV', 
    projectCount: 18, // Total web dev projects including Technowatch
    description: 'Developing high-fidelity system architectures and responsive web apps.' 
  },
  { 
    id: 'tailwind', 
    name: 'Tailwind CSS', 
    category: 'WEB_DEV', 
    projectCount: 18, // Integrated into all modern web projects
    description: 'Rapid UI development using utility-first CSS frameworks.' 
  },
  { 
    id: 'js', 
    name: 'PHP & Backend', 
    category: 'WEB_DEV', 
    projectCount: 18, // Core backend logic for project databases
    description: 'Server-side scripting and database management for complex sites.' 
  },

  // --- HARDWARE & ENGINEERING ---
  { 
    id: 'arduino', 
    name: 'Arduino', 
    category: 'HARDWARE', 
    projectCount: 4, // Includes sensors, relay modules, and thesis
    description: 'IoT firmware and AI-based real-time parking monitoring systems.' 
  },
  { 
    id: 'python', 
    name: 'Python', 
    category: 'HARDWARE', 
    projectCount: 2, // Automation scripts and thesis data processing
    description: 'Scripting for AI monitoring and system-level automation.' 
  },
  { 
    id: 'multisim', 
    name: 'Multisim', 
    category: 'HARDWARE', 
    projectCount: 3, // Circuit simulation for Comptech laboratory work
    description: 'Logical circuit design and hardware simulation for engineering.' 
  },

  // --- CONTENT STRATEGY & MEDIA ---
  { 
    id: 'capcut', 
    name: 'Video Editing', 
    category: 'CONTENT_STRATEGY', 
    projectCount: 12, // RoastBloxx shorts and commercial promos
    description: 'High-retention editing focused on YouTube Shorts audience growth.' 
  },
  { 
    id: 'pr', 
    name: 'Adobe Premiere', 
    category: 'CONTENT_STRATEGY', 
    projectCount: 12, // Professional sequence assembly for various channels
    description: 'Non-linear editing for cinematic and fast-paced digital content.' 
  },

  // --- DESIGN & BRANDING ---
  { 
    id: 'figma', 
    name: 'Figma', 
    category: 'DESIGN', 
    projectCount: 7, // Design for Technowatch and Adriano’s merch
    description: 'UI/UX prototyping and layout design for digital systems.' 
  },
  { 
    id: 'ps', 
    name: 'Photoshop', 
    category: 'DESIGN', 
    projectCount: 7, // Adriano’s merch, stickers, and loyalty cards
    description: 'Raster design for coffee shop merchandise and branding assets.' 
  },
  { 
    id: 'blender', 
    name: 'Blender', 
    category: 'DESIGN', 
    projectCount: 25, // Pixar-style modeling and 3D character work
    description: '3D modeling, rendering, and stylized character asset creation.' 
  }
];