import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroParallax } from './components/HeroParallax';
import { Timeline } from './components/Timeline';
import Contact from './components/Contact';
import GlareHover from './components/GlareHover';
import InfiniteMenuSection from './components/InfiniteMenuSection';
import ServicesCard from './components/ServicesCard';

// Page Imports (Modal Content)
import WebsiteExamples from './pages/WebsiteExamples';
import VideoExamples from './pages/VideoExamples';
import ArduinoExamples from './pages/ArduinoExamples';
import GraphicExamples from './pages/GraphicExamples';

// Image Imports (Restored Paths)
import lafImage from "./assets/projects/laf.png";
import flowImage from "./assets/projects/flow.png";
import twImage from "./assets/projects/tw.png";
import ftImage from "./assets/projects/ft.png";

// Data Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';

// --- DATA: PROJECTS FOR PARALLAX ---
const portfolioProducts = [
  { title: "laf", link: "#", thumbnail: lafImage },
  { title: "flow", link: "#", thumbnail: flowImage },
  { title: "tw", link: "#", thumbnail: twImage },
  { title: "ft", link: "#", thumbnail: ftImage },
  { title: "laf", link: "#", thumbnail: lafImage },
  { title: "flow", link: "#", thumbnail: flowImage },
  { title: "tw", link: "#", thumbnail: twImage },
  { title: "ft", link: "#", thumbnail: ftImage },
  { title: "laf", link: "#", thumbnail: lafImage },
  { title: "flow", link: "#", thumbnail: flowImage },
];

// --- DATA: SERVICES CONFIGURATION ---
const servicesData = [
  { title: "Web Engineering", description: "Architecting high-performance React applications with extreme Glassmorphism and seamless UX.", mastery: "ADVANCED_SYSTEMS", path: "website" },
  { title: "Content Strategy", description: "Data-driven high-retention scripting and editing for Roblox commentary channels.", mastery: "ELITE_EDITOR", path: "video" },
  { title: "Hardware IoT", description: "Sensor-fused Arduino systems, firmware optimization, and real-time data monitoring.", mastery: "PROFICIENT", path: "arduino" },
  { title: "Graphic Design", description: "Visual identity and branding assets optimized for digital and physical deployment.", mastery: "VISUAL_ENGINEER", path: "graphic" }
];

// --- DATA: TIMELINE CONFIGURATION ---
const timelineData = [
  {
    title: "2025",
    content: (
      <div className="font-poppins flex flex-col md:flex-row items-start gap-12"> 
        <div className="flex-grow md:w-1/3 pt-2">
          <p className="text-white text-[13px] font-medium leading-relaxed border-l-2 border-blue-600 pl-4 uppercase tracking-wider">
            Pivoting towards AI Infrastructure & Modern UI Frameworks.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-[45%] ml-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[9/16] bg-zinc-900/50 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
              <img src={`https://images.unsplash.com/photo-${1633356122544 + i}-f134324a6cee?q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" alt="Evolution_Node" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="font-poppins flex flex-col md:flex-row items-start gap-12">
        <div className="flex-grow md:w-1/3 pt-2">
          <p className="text-white text-[13px] font-medium leading-relaxed border-l-2 border-blue-600 pl-4 uppercase tracking-wider">
            Scaled RoastBloxx and mastered digital content hooks.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-[45%] ml-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[9/16] bg-zinc-900/50 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
              <img src={`https://images.unsplash.com/photo-${1542751371 + i}-adc38448a05e?q=80&w=1000`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" alt="Project_Archive" />
            </div>
          ))}
        </div>
      </div>
    ),
  }
];

// --- WORK MODAL WITH SCROLL LOCK ---
const WorkModal = ({ type, onClose }: { type: string; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }} className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white font-poppins">System_<span className="text-blue-500">Documentation</span></h2>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-1 font-poppins font-medium">Node: {type.toUpperCase()} // Archive_Link_Established</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all group">
            <span className="text-zinc-500 group-hover:text-white text-xl font-bold">✕</span>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar bg-black/40">
          {type === 'website' && <WebsiteExamples setView={() => {}} />}
          {type === 'video' && <VideoExamples setView={() => {}} />}
          {type === 'arduino' && <ArduinoExamples setView={() => {}} />}
          {type === 'graphic' && <GraphicExamples setView={() => {}} />}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const yHero = useTransform(smoothY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-screen font-poppins text-white bg-black overflow-x-clip selection:bg-blue-600 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800;900&display=swap');
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
      `}</style>
      
      <Navbar setView={setView} />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
            
            <section id="home" className="h-[90vh] md:h-screen overflow-hidden">
              <motion.div style={{ y: yHero }} className="h-full"><Hero /></motion.div>
            </section>

            <section id="parallax-showcase" className="relative z-20 mb-0">
              <HeroParallax products={portfolioProducts} />
            </section>

            <div className="relative mt-[-15rem] md:mt-[-25rem] z-30 px-4 md:px-0">
              <Timeline data={timelineData} />
            </div>

            <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-32 border-t border-white/5 relative z-40 bg-black">
              <div className="mb-12 md:mb-20">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Technical <span className="text-blue-600 underline decoration-blue-500/30">Arsenal</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {mySkills.map((skill: Skill) => (<SkillCard key={skill.id} skill={skill} />))}
              </div>
            </section>

            <section id="services" className="max-w-7xl mx-auto px-6 py-20 md:py-32 border-t border-white/5 relative z-40 bg-black">
              <div className="mb-12 md:mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">Services <span className="text-blue-600 underline decoration-blue-500/30">Offered</span></h2>
                <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto px-4 font-medium">Click a service card to initialize visual documentation logs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 place-items-center">
                {servicesData.map((service, index) => (
                  <ServicesCard key={index} {...service} onClick={() => setActiveModal(service.path)} />
                ))}
              </div>
            </section>

            <InfiniteMenuSection />
            <section id="contact" className="relative z-40 bg-black"><Contact /></section>
          </motion.main>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal && <WorkModal type={activeModal} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>

      <footer className="py-10 md:py-20 text-center border-t border-white/5 bg-black relative z-50">
        <p className="text-zinc-600 text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-medium font-poppins">
          © {new Date().getFullYear()} AG D. EVANGELISTA // TUPV COMPTECH
        </p>
      </footer>
    </div>
  );
}

// --- RESPONSIVE SKILL CARD ---
const SkillCard = ({ skill }: { skill: Skill }) => {
  const iconUrl = `https://cdn.simpleicons.org/${skill.id}/white`;
  return (
    <GlareHover width="100%" height="auto" background="rgba(255, 255, 255, 0.02)" borderColor="rgba(255, 255, 255, 0.05)" glareColor="#3b82f6" glareOpacity={0.08} className="group rounded-[1.5rem] md:rounded-[2rem]">
      <div className="p-8 md:p-10 w-full space-y-6 md:space-y-8 font-poppins">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
            <img src={iconUrl} alt={skill.name} className="w-6 h-6 md:w-7 md:h-7 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/elementor/white'; }} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-black italic text-zinc-800 group-hover:text-blue-500/20 transition-colors">{skill.projectCount || '0'}</span>
            <span className="text-[8px] md:text-[9px] text-zinc-600 font-bold uppercase tracking-widest">Builds</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-blue-500 transition-colors">{skill.name}</h3>
          <p className="text-xs md:text-sm text-zinc-500 mt-2 md:mt-4 leading-relaxed line-clamp-2 font-light">{skill.description}</p>
        </div>
      </div>
    </GlareHover>
  );
};