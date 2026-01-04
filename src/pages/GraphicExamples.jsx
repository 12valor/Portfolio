import React from 'react';

const GraphicExamples = () => {
  const assets = [
    { title: "Adriano's Branding", desc: "La Carlota City // Visual Identity System" },
    { title: "Technowatch UI", desc: "Futuristic/Sci-Fi Theme Assets" },
    { title: "Loyalty Cards", desc: "Customer Retention Physical Designs" },
    { title: "Social Media Kits", desc: "High-Impact Content Assets" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 font-poppins">
      {assets.map((asset, i) => (
        <div key={i} className="aspect-[9/16] bg-zinc-900/50 border border-white/5 rounded-xl p-6 flex flex-col justify-end group hover:border-blue-500/30 transition-all">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-4xl font-black italic -rotate-12">VISUAL_{i}</span>
          </div>
          <h4 className="text-white font-black text-sm uppercase italic relative z-10">{asset.title}</h4>
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-1 relative z-10">{asset.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default GraphicExamples;