import React from 'react';

const TechStack = () => {
  const stack = [
    { 
      category: "GRAPHICS_ENGINE", 
      tools: [
        { name: "Photoshop", icon: "/src/assets/tech/ps.png" },
        { name: "Canva", icon: "/src/assets/tech/canva.webp" },
        { name: "Figma", icon: "/src/assets/tech/figma.png" }
      ] 
    },
    { 
      category: "VIDEO_PROCESSOR", 
      tools: [
        { name: "CapCut", icon: "/src/assets/tech/capcut.webp" },
        { name: "Filmora", icon: "/src/assets/tech/filmora.png" }
      ] 
    },
    { 
      category: "CORE_ENGINEERING", 
      tools: [
        { name: "Arduino", icon: "/src/assets/tech/arduino.webp" }
      ] 
    },
    { 
      category: "WEB_ARCHITECTURE", 
      tools: [
        { name: "React", icon: "/src/assets/tech/react.png" },
        { name: "Tailwind", icon: "/src/assets/tech/tailwind.png" },
        { name: "JavaScript", icon: "/src/assets/tech/js.png" }
      ] 
    }
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
                    {/* Icon Container */}
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-white/5 rounded p-2 group-hover:border-blue-500/50 transition-colors">
                      <img 
                        src={tool.icon} 
                        alt={tool.name} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[8px] text-zinc-700 uppercase font-black">Module_Ready</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;