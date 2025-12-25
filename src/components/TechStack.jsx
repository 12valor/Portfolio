import React from 'react';

// IMPORT YOUR ASSETS (Vite requirement)
import psIcon from '../assets/tech/ps.png';
import canvaIcon from '../assets/tech/canva.webp';
import figmaIcon from '../assets/tech/figma.png';
import reactIcon from '../assets/tech/react.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import jsIcon from '../assets/tech/js.png';
import arduinoIcon from '../assets/tech/arduino.webp';
import capcutIcon from '../assets/tech/capcut.webp';
import filmoraIcon from '../assets/tech/filmora.png';
import pythonIcon from  '../assets/tech/python.png';

// Imports for the "Other Tools" section
import blenderIcon from '../assets/tech/blender.png';
import prIcon from '../assets/tech/pr.png';
import multisimIcon from '../assets/tech/multisim.png';

const TechStack = () => {
  const stack = [
    { 
      category: "GRAPHICS_ENGINE", 
      tools: [
        { name: "Photoshop", icon: psIcon },
        { name: "Canva", icon: canvaIcon },
        { name: "Figma", icon: figmaIcon }
      ] 
    },
    { 
      category: "VIDEO_PROCESSOR", 
      tools: [
        { name: "CapCut", icon: capcutIcon },
        { name: "Filmora", icon: filmoraIcon }
      ] 
    },
    { 
      category: "CORE_ENGINEERING", 
      tools: [
        { name: "Arduino", icon: arduinoIcon }
        , { name: "Python", icon: pythonIcon }
      ] 
    },
    { 
      category: "WEB_ARCHITECTURE", 
      tools: [
        { name: "React", icon: reactIcon },
        { name: "Tailwind", icon: tailwindIcon },
        { name: "JavaScript", icon: jsIcon }
      ] 
    }
  ];

  const otherTools = [
    { name: "Blender", icon: blenderIcon },
    { name: "Adobe Premiere", icon: prIcon },
    { name: "Multisim", icon: multisimIcon },
  ];

  return (
    <section className="py-20 border-t border-white/5 bg-zinc-950 font-mono">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <div className="text-blue-500 text-[10px] tracking-[0.5em] mb-2 uppercase font-black">
            // System_Dependencies
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
            Tech <span className="text-zinc-800">Loadout</span>
          </h2>
        </header>

        {/* Main Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {stack.map((group, i) => (
            <div key={i} className="bg-zinc-950 p-8 hover:bg-zinc-900/50 transition-all group border-r border-white/5 last:border-r-0">
              <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-8 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-current rounded-full" />
                {group.category}
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {group.tools.map((tool, j) => (
                  <div key={j} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-white/5 rounded p-2 group-hover:border-blue-500/50 transition-colors">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider group-hover:text-white transition-colors">{tool.name}</span>
                      <span className="text-[8px] text-zinc-700 uppercase font-black">Module_Ready</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- OTHER TOOLS SEMI-SECTION --- */}
        <div className="mt-px bg-white/5 border-x border-b border-white/5 p-8 bg-zinc-950/50">
          <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
            <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
            Auxiliary_Tools / Other_Experience
          </h3>
          
          <div className="flex flex-wrap gap-12">
            {otherTools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-white/5 rounded p-1.5 group-hover:border-blue-500/30 transition-colors">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-200 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;