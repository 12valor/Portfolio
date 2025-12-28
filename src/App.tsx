import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import TargetCursor from './components/TargetCursor';
import GlareHover from './components/GlareHover';

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

  // --- PARALLAX RANGES ---
  const yHero = useTransform(smoothY, [0, 600], [0, -150]);
  const yTech = useTransform(smoothY, [200, 1600], [0, -100]); 
  const yHeader = useTransform(smoothY, [800, 2200], [100, -100]); 

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
      
      {/* --- GLOBAL TARGET HUD --- */}
      <TargetCursor 
        targetSelector="h1, h2, h3, p, span, li, button, a, .skill-card-trigger, .service-card-trigger" 
        spinDuration={3} 
        hideDefaultCursor={true} 
      />

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

              {/* --- ABOUT SECTION WITH GLARE VISIBILITY FIX --- */}
              <section id="about" className="max-w-6xl mx-auto py-12 px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
                  
                  {/* BIOMETRIC ID CARD */}
                  <motion.div className="lg:col-span-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="rgba(10, 10, 15, 0.8)"
                      borderColor="rgba(59, 130, 246, 0.3)"
                      glareColor="#ffffff"
                      glareOpacity={0.25}
                      className="cursor-target group backdrop-blur-md rounded-md"
                    >
                      {/* Inner wrapper set to z-10 so it's beneath the z-50 glare overlay */}
                      <div className="relative w-full aspect-[3/4] p-5 flex flex-col justify-between z-10">
                          <div className="flex justify-between items-start relative z-20">
                            <span className="text-[9px] bg-blue-600 px-2 py-0.5 font-bold uppercase animate-pulse">Identity_Verified</span>
                            <span className="text-[9px] font-mono text-blue-500/50">TUPV_SYS_CORE</span>
                          </div>
                          
                          {/* Image at z-0 so glare passes over it */}
                          <div className="relative flex-1 my-4 overflow-hidden border border-white/5 bg-black/40 z-0">
                            <img 
                              src="/src/assets/me.jpg" 
                              className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x530?text=USER_01"; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                          </div>

                          <div className="space-y-1 relative z-20">
                             <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Lead_Comptech_Engineer</p>
                             <h2 className="text-3xl font-black uppercase text-white tracking-tighter italic">AG_EVANGELISTA</h2>
                          </div>
                      </div>
                    </GlareHover>
                  </motion.div>

                  {/* CORE DESCRIPTION LOG */}
                  <motion.div className="lg:col-span-8 flex flex-col justify-center" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                    <div className="p-8 bg-zinc-900/10 border-l-2 border-blue-600 backdrop-blur-sm space-y-8">
                      <h2 className="text-5xl font-black uppercase tracking-tighter italic text-white cursor-target">
                        System_Overview
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
                        <div className="space-y-3">
                          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Hardware_Architecture</span>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            Specializing in IoT firmware and campus-wide monitoring systems. 
                            Thesis: **AI-Powered Real-Time Parking Monitoring** for TUP-Visayas.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Creative_Directives</span>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            Leading digital retention strategy for **RoastBloxx** and visual identity pipelines for **Adriano's Coffee Shop**.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* TECH ARSENAL (GLARE CHIPS) */}
                <div className="pt-12 border-t border-white/5">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <motion.header style={{ y: yTech }} className="border-l-4 border-blue-500 pl-6">
                      <h2 className="text-4xl font-black uppercase tracking-tighter italic">Tech_Arsenal</h2>
                      <p className="text-zinc-500 font-mono text-[9px] mt-1 uppercase tracking-widest italic">Validated_Experience_Logs</p>
                    </motion.header>
                    <div className="flex flex-wrap gap-2">
                      {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY'].map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-1 text-[9px] font-black tracking-widest uppercase transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-zinc-900 text-zinc-500 hover:text-white border border-white/5'}`}>{cat}</button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredSkills.map((skill: Skill) => (<SkillCard key={skill.id} skill={skill} />))}
                  </div>
                </div>
              </section>

              {/* SERVICES SECTION */}
              <main id="services" className="max-w-6xl mx-auto py-16 px-6">
                <motion.header style={{ y: yHeader }} className="mb-12 border-l-4 border-blue-500 pl-6">
                  <h2 className="text-5xl font-black uppercase tracking-tighter italic text-white">Services_Offered</h2>
                  <p className="text-zinc-500 mt-1 text-sm font-medium tracking-widest uppercase italic italic">Industrial_Standard_Outputs</p>
                </motion.header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {Services.map((service, index) => (
                    <div key={index} onClick={() => setView(service.id)} className="service-card-trigger cursor-pointer">
                      <ProjectCard {...service} />
                    </div>
                  ))}
                </div>
                <div className="mt-20"><GitHubActivity /></div>
              </main>

              <section id="contact" className="py-12"><Contact /></section>
            </motion.div>
          ) : (
            <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen pt-40 px-6 max-w-6xl mx-auto pb-40">
                <button onClick={handleBack} className="mb-12 text-blue-500 font-black text-[11px] uppercase tracking-widest">← BACK_TO_SYSTEM_CORE</button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                   {(videoSubView === 'short' ? ShortForm : videoSubView === 'long' ? LongForm : dataMap[view]?.items || []).map((item, i) => (
                      <motion.div key={i} className="p-6 bg-zinc-900/40 border border-white/5">
                        <h3 className="text-lg font-black uppercase">{item.name}</h3>
                      </motion.div>
                   ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="py-20 text-center text-zinc-800 text-[10px] border-t border-white/5 uppercase font-black tracking-widest">
          © 2025 AG Evangelista // TUPV Comptech Department
        </footer>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: SKILL CARD ---
const SkillCard = ({ skill }: { skill: Skill }) => {
  const iconPath = `/src/assets/tech/${skill.id}.png`;

  return (
    <GlareHover
      width="100%"
      height="auto"
      background="rgba(15, 15, 20, 0.4)"
      borderColor="rgba(255, 255, 255, 0.03)"
      glareColor="#3b82f6"
      glareOpacity={0.2}
      className="skill-card-trigger group transition-all duration-500 hover:border-blue-500/40 rounded-sm"
    >
      <div className="p-7 w-full space-y-5 z-10 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex items-center gap-4 relative z-0">
          <div className="w-10 h-10 rounded-sm bg-black/40 p-2 border border-white/5">
            <img src={iconPath} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h3>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-white italic tracking-tighter">
            {skill.projectCount}+
          </span>
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Build_Cycles</span>
        </div>

        <p className="text-[10px] text-zinc-500 font-mono leading-relaxed line-clamp-2 group-hover:text-zinc-300">
          {skill.description}
        </p>
      </div>
    </GlareHover>
  );
};

export default App;