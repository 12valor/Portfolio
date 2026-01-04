import React from 'react';

const WebsiteExamples = () => {
  const projects = [
    { title: "Technowatch", desc: "Organization Portal // Computer Engineering Technology", tags: ["REACT", "TAILWIND"] },
    { title: "Retrieve", desc: "Lost & Found System // Database Management", tags: ["PHP", "MYSQL"] },
    { title: "AI Parking Web", desc: "Real-time Monitoring Interface // TUPV Campus", tags: ["PYTHON", "REACT"] },
    { title: "TUPV Home", desc: "University Landing Page // Responsive Architecture", tags: ["HTML", "CSS"] }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins">
      {projects.map((proj, i) => (
        <div key={i} className="group bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-blue-500/50 transition-all">
          <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-zinc-800 font-black italic group-hover:text-blue-500/20 transition-colors uppercase tracking-[0.3em]">
              Node_Project_{i + 1}
            </div>
          </div>
          <h4 className="text-white font-black text-lg uppercase italic">{proj.title}</h4>
          <p className="text-zinc-500 text-xs mt-1 mb-4">{proj.desc}</p>
          <div className="flex gap-2">
            {proj.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteExamples;