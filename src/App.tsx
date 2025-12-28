import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProjectCard from './components/ProjectCard';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

// Mastery System Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';

// Project Data Imports
import { ShortForm, LongForm } from './pages/VideoExamples';
import GraphicExamples from './pages/GraphicExamples';
import WebsiteExamples from './pages/WebsiteExamples';
import ArduinoExamples from './pages/ArduinoExamples';

function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [videoSubView, setVideoSubView] = useState<'short' | 'long' | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  // Parallax Logic
  const yHero = useTransform(smoothY, [0, 500], [0, -100]);
  const yTech = useTransform(smoothY, [0, 1000], [0, -50]);
  const yHeader = useTransform(smoothY, [300, 1500], [50, -100]);

  // Services Definition
  const Services = [
    { id: "video", title: "VIDEO EDITING", description: "High-fidelity sequence assembly." },
    { id: "graphics", title: "GRAPHICS DESIGN", description: "Vector branding." },
    { id: "arduino", title: "ARDUINO PROJECTS", description: "IoT and Firmware." },
    { id: "web", title: "WEBSITE DEVELOPMENT", description: "Full-stack architecture." }
  ];

  // FIX: dataMap is now correctly defined to stop the ESLint error
  const dataMap: Record<string, { title: string; items: any[] }> = {
    video: { title: "VIDEO_PRODUCTION", items: [] },
    graphics: { title: "GRAPHIC_SYSTEMS", items: GraphicExamples },
    arduino: { title: "ARDUINO_LABS", items: ArduinoExamples },
    web: { title: "WEB_ARCHITECTURE", items: WebsiteExamples }
  };

  const filteredSkills = activeCategory === 'ALL' 
    ? mySkills 
    : mySkills.filter(skill => skill.category === activeCategory);

  const handleBack = () => {
    if (videoSubView) setVideoSubView(null);
    else {
      setView('home');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-zinc-950 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10">
        <Navbar setView={setView} view={view} />

        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              <section id="home">
                <motion.div style={{ y: yHero }}><Hero /></motion.div>
              </section>

              {/* MASTERY SYSTEM */}
              <section id="about" className="max-w-6xl mx-auto py-24 px-6 relative z-20">
                <motion.div style={{ y: yTech }}>
                  <header className="mb-12 border-l-4 border-blue-500 pl-8">
                    <h2 className="text-5xl font-black uppercase tracking-tighter italic">Mastery_Progression</h2>
                    <p className="text-zinc-500 font-mono text-[10px] mt-2 uppercase tracking-widest">Comptech_Systems_Check // OK</p>
                  </header>

                  <div className="flex flex-wrap gap-4 mb-12">
                    {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY'].map(cat => (
                      <button 
                        key={cat} onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase border transition-all ${
                          activeCategory === cat ? 'bg-blue-600 border-blue-600' : 'bg-zinc-900 border-white/5 text-zinc-500 hover:border-blue-500/50'
                        }`}
                      >
                        {cat.replace('_', ' ')}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill: Skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              </section>

              <main id="services" className="max-w-6xl mx-auto py-24 px-6">
                 {/* Existing Services Logic */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Services.map((service, index) => (
                      <div key={index} onClick={() => setView(service.id)} className="cursor-pointer">
                        <ProjectCard {...service} />
                      </div>
                    ))}
                 </div>
              </main>

              <section id="contact"><Contact /></section>
            </motion.div>
          ) : (
            /* PROJECT DETAIL VIEW LOGIC */
            <motion.div key="details" className="min-h-screen pt-40 px-6 max-w-6xl mx-auto pb-40">
                <button onClick={handleBack} className="mb-12 text-blue-500 font-black text-xs">← BACK</button>
                <h2 className="text-7xl font-black uppercase italic mb-20">{videoSubView ? `${videoSubView}_Logs` : dataMap[view]?.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {(videoSubView === 'short' ? ShortForm : videoSubView === 'long' ? LongForm : dataMap[view]?.items || []).map((item, i) => (
                      <div key={i} className="p-6 bg-zinc-900/40 border border-white/5">
                        {item.videoUrl && <iframe className="w-full aspect-video mb-4" src={item.videoUrl} />}
                        <h3 className="text-xl font-black uppercase">{item.name}</h3>
                        <p className="text-zinc-500 text-xs font-mono">{item.desc}</p>
                      </div>
                   ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Sub-component for Mastery Bars
const SkillCard = ({ skill }: { skill: Skill }) => {
  const webpTools = ['arduino', 'canva', 'capcut'];
  const extension = webpTools.includes(skill.id) ? 'webp' : 'png';
  const iconPath = `/src/assets/tech/${skill.id}.${extension}`;

  return (
    <motion.div 
      layout 
      className="p-8 bg-zinc-900/40 border border-white/5 backdrop-blur-md relative group overflow-hidden border-t-2 hover:border-t-blue-500 transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-white/5 p-2 rounded-sm border border-white/5">
            <img 
              src={iconPath} 
              alt={skill.name} 
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div>
            <span className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase">{skill.category}</span>
            <h3 className="text-2xl font-black uppercase text-white mt-1">{skill.name}</h3>
          </div>
        </div>
      </div>

      {/* --- NEW PROJECT USAGE INDICATOR --- */}
      <div className="relative mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black text-white tracking-tighter italic">
            {skill.projectCount}+
          </span>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Projects_Completed
          </span>
        </div>
        {/* Subtle background line */}
        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/5 group-hover:bg-blue-500/30 transition-colors" />
      </div>

      <p className="text-[11px] text-zinc-500 font-mono leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
        {skill.description}
      </p>

      {/* Grid Pattern Overlay for that Comptech aesthetic */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '10px 10px' }} />
    </motion.div>
  );
};
export default App;