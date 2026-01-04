import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroParallax } from './components/HeroParallax';
import { Timeline } from './components/Timeline';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import GlareHover from './components/GlareHover';
import InfiniteMenuSection from './components/InfiniteMenuSection';
import ServicesCard from './components/ServicesCard';

// Page Imports (Modal Content)
import WebsiteExamples from './pages/WebsiteExamples';
import VideoExamples from './pages/VideoExamples';
import ArduinoExamples from './pages/ArduinoExamples';
import GraphicExamples from './pages/GraphicExamples';

// Data & Type Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';

// --- DATA: PROJECTS FOR PARALLAX ---
const portfolioProducts = [
  { title: "AI Parking Monitoring", link: "#", thumbnail: "/parking-monitor.jpg" },
  { title: "RoastBloxx Channel", link: "https://youtube.com/@RoastBloxx", thumbnail: "/roastbloxx.jpg" },
  { title: "Technowatch Terminal", link: "#", thumbnail: "/technowatch.jpg" },
  { title: "Adriano's Branding", link: "#", thumbnail: "/adrianos.jpg" },
  { title: "Flow E-Commerce", link: "#", thumbnail: "/flow.jpg" },
  { title: "Arduino IoT Labs", link: "#", thumbnail: "/arduino.jpg" },
  { title: "QuickQ Production", link: "#", thumbnail: "/quickq.jpg" },
  { title: "TensorFlow Models", link: "#", thumbnail: "/tensorflow.jpg" },
  { title: "Modern OS Research", link: "#", thumbnail: "/os-research.jpg" },
];

// --- DATA: 4-CARD HIGH-IMPACT SERVICES ---
const servicesData = [
  { title: "Web Engineering", description: "Architecting high-performance React applications with extreme Glassmorphism and seamless UX.", mastery: "ADVANCED_SYSTEMS", path: "website" },
  { title: "Content Strategy", description: "Data-driven high-retention scripting and editing for Roblox commentary channels.", mastery: "ELITE_EDITOR", path: "video" },
  { title: "Hardware IoT", description: "Sensor-fused Arduino systems, firmware optimization, and real-time data monitoring.", mastery: "PROFICIENT", path: "arduino" },
  { title: "Graphic Design", description: "Visual identity and branding assets optimized for digital and physical deployment.", mastery: "VISUAL_ENGINEER", path: "graphic" }
];

// --- DATA: ENGINEERING TIMELINE ---
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

// --- WORK MODAL COMPONENT ---
const WorkModal = ({ type, onClose }: { type: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }} className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)] flex flex-col">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white font-poppins">System_<span className="text-blue-500">Documentation</span></h2>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-1 font-poppins">Node: {type.toUpperCase()} // Access_Granted</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all group">
            <span className="text-zinc-500 group-hover:text-red-500 text-xl font-bold">✕</span>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-10 custom-scrollbar bg-black/40">
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
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const yHero = useTransform(smoothY, [0, 500], [0, -150]);
  const filteredSkills = activeCategory === 'ALL' ? mySkills : mySkills.filter(s => s.category === activeCategory);

  return (
    <div className="relative min-h-screen font-poppins text-white bg-black overflow-x-clip selection:bg-blue-600 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800;900&display=swap');
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        .cursor-priority { z-index: 10000 !important; }
      `}</style>
      
      {/* NAVBAR LAYER (z-5000) */}
      <Navbar setView={setView} />

      <div className="relative z-10 overflow-visible">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <section id="home" className="h-screen overflow-hidden">
                <motion.div style={{ y: yHero }} className="h-full"><Hero /></motion.div>
              </section>

              <section id="parallax-showcase" className="relative z-20 mb-0">
                <HeroParallax products={portfolioProducts} />
              </section>

              {/* TIMELINE LAYER (z-30) */}
              <div className="relative mt-[-15rem] md:mt-[-25rem] lg:mt-[-35rem] z-30">
                <Timeline data={timelineData} />
              </div>

              {/* ARSENAL SECTION (z-40) */}
              <section id="about" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5 relative z-40 bg-black">
                <div className="mb-20">
                  <h2 className="text-6xl font-black uppercase italic tracking-tighter">Technical <span className="text-blue-600 underline decoration-blue-500/30">Arsenal</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSkills.map((skill: Skill) => (<SkillCard key={skill.id} skill={skill} />))}
                </div>
              </section>

              {/* SERVICES SECTION (z-40) */}
              <section id="services" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative z-40 bg-black">
                <div className="mb-20 text-center">
                  <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-4">Services <span className="text-blue-600 underline decoration-blue-500/30">Offered</span></h2>
                  <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Click a service card to initialize visual documentation logs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center">
                  {servicesData.map((service, index) => (
                    <ServicesCard key={index} {...service} onClick={() => setActiveModal(service.path)} />
                  ))}
                </div>
              </section>

              <InfiniteMenuSection />
              
              <section id="contact" className="relative z-40 bg-black">
                <Contact />
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MODAL OVERLAY LAYER (z-9999) */}
      <AnimatePresence>
        {activeModal && <WorkModal type={activeModal} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>

      {/* FOOTER LAYER (z-50) */}
      <footer className="py-20 text-center border-t border-white/5 bg-black relative z-50">
        <p className="text-zinc-600 text-[11px] uppercase tracking-[0.5em] font-medium font-poppins">
          © {new Date().getFullYear()} AG D. EVANGELISTA // TUPV COMPTECH
        </p>
      </footer>

      {/* TARGET CURSOR LAYER (z-10000) - FIXED: Now renders last and on top */}
      <div className="fixed inset-0 pointer-events-none cursor-priority">
        <TargetCursor targetSelector="h1, h2, h3, p, a, button, .cursor-pointer" spinDuration={3} hideDefaultCursor={true} />
      </div>
    </div>
  );
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <GlareHover width="100%" height="auto" background="rgba(255, 255, 255, 0.02)" borderColor="rgba(255, 255, 255, 0.05)" glareColor="#3b82f6" glareOpacity={0.08} className="skill-card-trigger group rounded-[2rem]">
      <div className="p-10 w-full space-y-8 font-poppins">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-blue-500 transition-colors">{skill.name}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 font-light">{skill.description}</p>
      </div>
    </GlareHover>
  );
};