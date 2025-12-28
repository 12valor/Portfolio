import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

// Data & Type Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';
import { ShortForm, LongForm } from './pages/VideoExamples';
import GraphicExamples from './pages/GraphicExamples';
import WebsiteExamples from './pages/WebsiteExamples';
import ArduinoExamples from './pages/ArduinoExamples';

function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [videoSubView, setVideoSubView] = useState<'short' | 'long' | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // --- SCROLL LOGIC ---
  const { scrollY, scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // --- CALIBRATED PARALLAX (Fixed Ranges) ---
  // These ranges ensure the headers move while they are actually on screen
  const yHero = useTransform(smoothY, [0, 600], [0, -150]);
  const yTech = useTransform(smoothY, [200, 1600], [0, -100]); // Mastery section parallax
  const yHeader = useTransform(smoothY, [800, 2200], [100, -100]); // Services header parallax

  const Services = [
    { id: "video", title: "VIDEO EDITING", description: "High-fidelity sequence assembly." },
    { id: "graphics", title: "GRAPHICS DESIGN", description: "Vector illustration and branding." },
    { id: "arduino", title: "ARDUINO PROJECTS", description: "Firmware development and IoT." },
    { id: "web", title: "WEBSITE DEVELOPMENT", description: "Full-stack architecture." }
  ];

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-zinc-950 overflow-x-hidden">
      {/* 1. SCROLL PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100] shadow-[0_0_15px_#2563eb]"
        style={{ scaleX }}
      />

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

              {/* --- UNIFIED ABOUT & MASTERY SECTION --- */}
              <section id="about" className="max-w-6xl mx-auto py-12 px-6 relative z-20">
                
                {/* BIOMETRIC PROFILE ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-4 relative group"
                  >
                    <div className="relative aspect-[3/4] bg-zinc-900 border border-white/10 overflow-hidden">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 z-20" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 z-20" />
                      <img 
                        src="/src/assets/me.jpg" 
                        alt="User Identity"
                        className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x530?text=USER_01"; }}
                      />
                      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                        <span className="w-fit text-[10px] font-black bg-blue-600 px-2 py-1 text-white uppercase animate-pulse">Live_Feed</span>
                        <div className="bg-black/60 backdrop-blur-md p-3 border-t border-blue-500/50">
                          <p className="text-[9px] font-mono text-blue-400 uppercase tracking-widest mb-1">Authorization</p>
                          <p className="text-xs font-black text-white uppercase">Lead_Comptech_Engineer</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="lg:col-span-8 space-y-6"
                  >
                    <div className="border-b border-white/5 pb-6">
                      <h1 className="text-6xl font-black uppercase tracking-tighter italic text-white">
                        AG_EVANGELISTA <span className="text-xs font-mono text-blue-500 not-italic tracking-[0.5em]">//_ROOT</span>
                      </h1>
                      <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-widest">
                        Computer Engineering Technology @ <span className="text-white">TUPV</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-zinc-900/30 border border-white/5 space-y-4">
                        <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest underline underline-offset-8">Core_Identity</h3>
                        <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                          Specializing in hardware firmware and web architecture. 
                          Optimizing campus logistics through an <span className="text-white">AI-based parking monitoring system</span> for my thesis.
                        </p>
                      </div>
                      <div className="p-6 bg-zinc-900/30 border border-white/5 space-y-4">
                        <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest underline underline-offset-8">Venture_Logs</h3>
                        <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                          Leading strategy for <span className="text-white">RoastBloxx</span> with a focus on retention. 
                          Managing branding for <span className="text-white">Adriano's Coffee Shop</span> merchandise.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* MASTERY SUB-SECTION */}
                <div className="relative border-t border-white/5 pt-12">
                  <motion.header style={{ y: yTech }} className="mb-8 border-l-4 border-blue-500 pl-6">
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">Mastery_Progression</h2>
                    <p className="text-zinc-500 font-mono text-[9px] mt-1 uppercase tracking-widest">Quantifiable_Technical_Experience</p>
                  </motion.header>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY', 'DESIGN'].map(cat => (
                      <button 
                        key={cat} onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all ${
                          activeCategory === cat ? 'bg-blue-600 border-blue-500 shadow-[0_0_10px_#2563eb]' : 'bg-zinc-900 border-white/5 text-zinc-500 hover:border-blue-500/50'
                        }`}
                      >
                        {cat.replace('_', ' ')}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredSkills.map((skill: Skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              </section>

              {/* --- SERVICES SECTION --- */}
              <main id="services" className="max-w-6xl mx-auto py-16 px-6">
                <motion.header style={{ y: yHeader }} className="mb-12 border-l-4 border-blue-500 pl-6">
                  <h2 className="text-5xl font-black uppercase tracking-tighter italic">Services_Offered</h2>
                  <p className="text-zinc-500 mt-1 text-sm font-medium tracking-widest uppercase italic">Deploying_Technical_Solutions</p>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {Services.map((service, index) => (
                    <div key={index} onClick={() => setView(service.id)} className="cursor-pointer">
                      <ProjectCard {...service} />
                    </div>
                  ))}
                </div>
                <div className="mt-20"><GitHubActivity /></div>
              </main>

              <section id="contact" className="py-12"><Contact /></section>
            </motion.div>
          ) : (
            /* PROJECT LOG VIEWS */
            <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen pt-40 px-6 max-w-6xl mx-auto pb-40">
                <button onClick={handleBack} className="mb-12 text-blue-500 font-black text-[10px] uppercase tracking-widest">← BACK_TO_SYSTEM_CORE</button>
                <header className="mb-16 border-l-4 border-white pl-6">
                  <h2 className="text-6xl font-black uppercase italic tracking-tighter">
                    {videoSubView ? `${videoSubView}_Logs` : dataMap[view]?.title || "UNKNOWN_MODULE"}
                  </h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                   {(videoSubView === 'short' ? ShortForm : videoSubView === 'long' ? LongForm : dataMap[view]?.items || []).map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-zinc-900/40 border border-white/5 backdrop-blur-md">
                        {item.videoUrl && <iframe className="w-full aspect-video mb-4 bg-black" src={item.videoUrl} allowFullScreen />}
                        <h3 className="text-lg font-black uppercase">{item.name}</h3>
                        <p className="text-zinc-500 text-[10px] font-mono mt-2">{item.desc}</p>
                      </motion.div>
                   ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="py-12 text-center text-zinc-800 text-[10px] border-t border-white/5 uppercase font-bold tracking-widest">
          © {new Date().getFullYear()} AG Evangelista // TUPV Comptech Department
        </footer>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: SKILL CARD ---
const SkillCard = ({ skill }: { skill: Skill }) => {
  const webpTools = ['arduino', 'canva', 'capcut'];
  const extension = webpTools.includes(skill.id) ? 'webp' : 'png';
  const iconPath = `/src/assets/tech/${skill.id}.${extension}`;

  return (
    <motion.div 
      layout
      whileHover={{ y: -8, borderColor: "rgba(59, 130, 246, 0.5)", boxShadow: "0px 10px 30px -10px rgba(37, 99, 235, 0.2)" }}
      className="p-6 bg-zinc-900/50 border border-white/5 group relative overflow-hidden transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <img src={iconPath} alt="" className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
          <h3 className="text-lg font-black uppercase group-hover:text-blue-400 transition-colors">{skill.name}</h3>
        </div>
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-4xl font-black text-white italic group-hover:text-blue-500 transition-colors">{skill.projectCount}+</span>
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Successful_Builds</span>
      </div>
      <p className="text-[10px] text-zinc-600 font-mono leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors">{skill.description}</p>
    </motion.div>
  );
};

export default App;