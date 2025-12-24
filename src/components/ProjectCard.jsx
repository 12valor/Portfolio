import React from 'react';

const ProjectCard = ({ title, description, mastery, price }) => {
  return (
    // Added h-full to ensure the card stretches to match its neighbors
    <div className="w-full max-w-[400px] h-full flex flex-col bg-[#0d0d0e] border border-white/10 rounded-lg overflow-hidden font-mono shadow-2xl transition-transform hover:scale-[1.02]">
      
      {/* Terminal Header */}
      <div className="bg-[#1a1a1b] px-4 py-2 flex items-center justify-between border-b border-white/5 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
          {title.toLowerCase().replace(/\s+/g, '_')}.exe
        </span>
      </div>

      {/* Terminal Content - flex-grow ensures this area fills the card */}
      <div className="p-6 text-[13px] leading-relaxed relative flex-grow">
        <div className="flex gap-4 h-full">
          {/* Line Numbers */}
          <div className="text-zinc-700 text-right select-none pr-2 border-r border-white/5">
            01<br />02<br />03<br />04<br />05
          </div>
          
          {/* Code Body */}
          <div className="flex flex-col">
            <span className="text-blue-400 italic">struct</span> <span className="text-yellow-400">Skillset</span> {'{'}
            <div className="pl-4">
              <div className="flex gap-2"><span className="text-zinc-500">title:</span> <span className="text-green-400">"{title}"</span>,</div>
              
              {/* FIXED: Set a min-height or fixed height for the description container to keep cards uniform */}
              <div className="flex gap-2 min-h-[40px]"> 
                <span className="text-zinc-500">desc:</span> 
                <span className="text-zinc-300">"{description}"</span>,
              </div>

              <div className="flex gap-2"><span className="text-zinc-500">mastery:</span> <span className="text-purple-400">"{mastery}"</span>,</div>
              <div className="flex gap-2"><span className="text-zinc-500">price:</span> <span className="text-orange-400">"{price}"</span></div>
            </div>
            {'}'};
          </div>
        </div>
      </div>

      {/* Bottom Status Bar - shrink-0 prevents it from moving */}
      <div className="px-6 py-2 bg-blue-500/5 border-t border-white/5 flex justify-between items-center text-[9px] shrink-0">
        <span className="text-blue-500 font-bold uppercase tracking-tighter">STATUS: VERIFIED</span>
        <span className="text-zinc-600 font-mono italic">UTF-8 // Comptech_v2</span>
      </div>
    </div>
  );
};

export default ProjectCard;