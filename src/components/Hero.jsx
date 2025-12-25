import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState(['', '']);
  const finalStrings = ["HI", "WELCOME"];
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    let interval;

    const startAnimation = () => {
      iteration = 0;
      interval = setInterval(() => {
        setDisplayText(finalStrings.map((str) => {
          return str.split("")
            .map((letter, i) => {
              if (i < iteration) return str[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        }));

        if (iteration >= 10) {
          clearInterval(interval);
          // LOOP: Restarts every 4 seconds
          setTimeout(startAnimation, 4000); 
        }
        iteration += 1/3;
      }, 30);
    };

    startAnimation();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 bg-zinc-950 text-white overflow-hidden font-mono cursor-none">
      {/* INTERACTIVE CURSOR */}
      <CustomCursor />

      {/* BACKGROUND GRID OVERLAY */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5 relative z-10">
        
        {/* Main Header Area */}
        <div className="lg:col-span-8 p-12 lg:p-24 flex flex-col justify-center border-b border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] tracking-[0.3em] font-black">
              AUTH_USER: AG_EVANGELISTA
            </div>
            <span className="text-[8px] text-zinc-700 font-black tracking-widest uppercase">System_Active_v2.5</span>
          </div>
          
          <h1 className="text-7xl md:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
            {displayText[0]}<br />
            <span className="text-zinc-800">{displayText[1]}</span>
          </h1>

          <p className="max-w-lg text-lg text-zinc-500 leading-relaxed font-sans italic">
            Computer Engineering Technology student at <span className="text-white">TUP-Visayas</span>.
            Focusing on AI-based systems and digital strategy for
            <span className="text-blue-500"> RoastBlox</span> and
            <span className="text-blue-500"> QuickQ</span>.
          </p>
        </div>

        {/* Technical Sidebar */}
        <div className="lg:col-span-4 flex flex-col bg-zinc-900/20 border-l border-white/5">
          <div className="p-10 border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4 group-hover:text-blue-500 transition-colors">
              <span className="inline-block w-1 h-1 bg-current mr-2 rounded-full" />
              // THESIS_PROJECT
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              "Development of an AI-Based Parking Space Detection and Counting System via Object Detection".
            </p>
          </div>

          <div className="p-10 border-b border-white/5">
            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4">// CONTENT_NETWORK</h3>
            <ul className="space-y-3 text-[11px] font-bold tracking-widest">
              <li className="flex justify-between items-center group/item">
                <span className="text-zinc-500 group-hover/item:text-white transition-colors">YT/ROASTBLOX</span>
                <span className="text-blue-500 border border-blue-500/20 px-2 py-0.5">[STABLE]</span>
              </li>
              <li className="flex justify-between items-center group/item">
                <span className="text-zinc-500 group-hover/item:text-white transition-colors">YT/QUICKQ</span>
                <span className="text-blue-500 border border-blue-500/20 px-2 py-0.5">[ONLINE]</span>
              </li>
            </ul>
          </div>

          <div className="mt-auto p-12 bg-white text-black hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer group">
            <div className="flex justify-between items-center font-black text-[10px] tracking-[0.4em]">
              <span>ESTABLISH_CONNECTION</span>
              <span className="text-xl group-hover:translate-x-3 transition-transform duration-500">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CURSOR COMPONENT ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 border border-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden lg:flex items-center justify-center"
      style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px)` }}
    >
      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
    </div>
  );
};

export default Hero;