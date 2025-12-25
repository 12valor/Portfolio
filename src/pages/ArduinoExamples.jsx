import React from 'react';
import { Link } from 'react-router-dom';

const ArduinoExamples = () => {
  const projects = [
    { title: "AI Parking System", detail: "Thesis project using Object Detection and Web Connectivity." },
    { title: "Sensor Network", detail: "Multi-device communication via Arduino firmware." }
  ];

  return (
    <div className="min-h-screen pt-32 px-6 max-w-4xl mx-auto font-mono">
      <Link to="/" className="text-blue-500 mb-8 block font-black uppercase tracking-widest text-xs">← Back to System</Link>
      <h2 className="text-6xl font-black uppercase mb-12 tracking-tighter border-l-4 border-blue-500 pl-6">Arduino_Works</h2>
      
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-8 bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-black mb-2 uppercase text-white">{p.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArduinoExamples;