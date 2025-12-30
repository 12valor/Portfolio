// App.tsx
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

// Page Imports
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
  { title: "Technowatch Terminal", link: "#", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600" },
  { title: "Adriano's Branding", link: "#", thumbnail: "/adrianos.jpg" },
  { title: "Flow E-Commerce", link: "#", thumbnail: "/flow.jpg" },
  { title: "Arduino IoT Labs", link: "#", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
  { title: "QuickQ Production", link: "#", thumbnail: "/quickq.jpg" },
  { title: "TensorFlow Models", link: "#", thumbnail: "https://images.unsplash.com/photo-1555949963-aa29bf1888ae?q=80&w=600" },
  { title: "Modern OS Research", link: "#", thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600" },
];

// --- DATA: 4-CARD HIGH-IMPACT SERVICES ---
const servicesData = [
  {
    title: "Web Engineering",
    description: "Architecting high-performance React applications with extreme Glassmorphism and seamless UX.",
    mastery: "ADVANCED_SYSTEMS",
    path: "website"
  },
  {
    title: "Content Strategy",
    description: "Data-driven high-retention scripting and editing for Roblox commentary channels.",
    mastery: "ELITE_EDITOR",
    path: "video"
  },
  {
    title: "Hardware IoT",
    description: "Sensor-fused Arduino systems, firmware optimization, and real-time data monitoring.",
    mastery: "PROFICIENT",
    path: "arduino"
  },
  {
    title: "Graphic Design",
    description: "Visual identity and branding assets optimized for digital and physical deployment.",
    mastery: "VISUAL_ENGINEER",
    path: "graphic"
  }
];

// --- DATA: ENGINEERING TIMELINE ---
const timelineData = [
  {
    title: "2025",
    content: (
      <div className="font-poppins flex flex-col md:flex-row items-start gap-12"> 
        
        {/* TEXT SECTION: Minimized, side-aligned, and non-italic */}
        <div className="flex-grow md:w-1/3 pt-2">
          <p className="text-white text-[13px] font-medium leading-relaxed border-l-2 border-blue-600 pl-4 uppercase tracking-wider">
            Pivoting towards AI Infrastructure & Modern UI Frameworks.
          </p>
        </div>
        
        {/* IMAGE SECTION: 2x2 Grid with 9:16 Aspect Ratio */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-[45%] ml-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[9/16] bg-zinc-900/50 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src={`https://images.unsplash.com/photo-${1633356122544 + i}-f134324a6cee?q=80&w=800`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                alt={`Evolution_Node_0${i}`} 
              />
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
              <img 
                src={`https://images.unsplash.com/photo-${1542751371 + i}-adc38448a05e?q=80&w=1000`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                alt={`Project_Archive_0${i}`} 
              />
            </div>
          ))}
        </div>
      </div>
    ),
  }
];

function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const { scrollY } = useScroll(); // scaleX removed
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const yHero = useTransform(smoothY, [0, 500], [0, -150]);
  const filteredSkills = activeCategory === 'ALL' ? mySkills : mySkills.filter(s => s.category === activeCategory);

  return (
    <div className="relative min-h-screen font-poppins text-white bg-black overflow-x-clip selection:bg-blue-600 selection:text-white">
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800;900&display=swap');`}</style>
      
      {/* Scroll Bar motion.div was here - REMOVED */}
      
      <TargetCursor targetSelector="h1, h2, h3, p, a, button" spinDuration={3} hideDefaultCursor={true} />
      <Navbar setView={setView} />

      <div className="relative z-10 overflow-visible">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              <section id="home" className="h-screen overflow-hidden">
                <motion.div style={{ y: yHero }} className="h-full">
                  <Hero />
                </motion.div>
              </section>

              <section id="parallax-showcase" className="relative z-20 mb-0">
                <HeroParallax products={portfolioProducts} />
              </section>

              <div className="relative mt-[-15rem] md:mt-[-25rem] lg:mt-[-35rem] z-30">
                <Timeline data={timelineData} />
              </div>

              <section id="about" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5 relative z-40 bg-black">
                <div className="mb-20">
                  <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white font-display">
                    Technical <span className="text-blue-600 decoration-blue-500/30">Arsenal</span>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-4 mb-20">
                  {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY'].map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-8 py-3 text-[11px] font-bold rounded-full border transition-all duration-300 ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/40'}`}>
                      {cat.replace('_', ' ')}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSkills.map((skill: Skill) => (<SkillCard key={skill.id} skill={skill} />))}
                </div>
              </section>

              <section id="services" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative z-40 bg-black">
                <div className="mb-20 text-center">
                  <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-4">
                    Services <span className="text-blue-600 underline decoration-blue-500/30">Offered</span>
                  </h2>
                  <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Click a service card to initialize visual documentation and deployment logs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center">
                  {servicesData.map((service, index) => (
                    <ServicesCard 
                      key={index}
                      title={service.title}
                      description={service.description}
                      MasteryBadge={service.mastery}
                      path={service.path}
                      setView={setView}
                    />
                  ))}
                </div>
              </section>

              <InfiniteMenuSection />
              <section id="contact" className="relative z-40 bg-black">
                <Contact />
              </section>
            </motion.div>
          ) : view === 'website' ? (
            <WebsiteExamples setView={setView} />
          ) : view === 'video' ? (
            <VideoExamples setView={setView} />
          ) : view === 'arduino' ? (
            <ArduinoExamples setView={setView} />
          ) : view === 'graphic' ? (
            <GraphicExamples setView={setView} />
          ) : (
            <div className="min-h-screen flex items-center justify-center">
                <button onClick={() => setView('home')} className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest italic hover:bg-blue-600 hover:text-white transition-all rounded-full">
                  ← Back to Main Protocol
                </button>
            </div>
          )}
        </AnimatePresence>

        <footer className="py-20 text-center border-t border-white/5 bg-black relative z-50">
          <p className="text-zinc-600 text-[11px] uppercase tracking-[0.5em] font-medium">
            © {new Date().getFullYear()} AG EVANGELISTA // TUPV COMPTECH
          </p>
        </footer>
      </div>
    </div>
  );
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  const iconPath = new URL(`./assets/tech/${skill.id}.webp`, import.meta.url).href;
  return (
    <GlareHover 
      width="100%" height="auto" 
      background="rgba(255, 255, 255, 0.02)" 
      borderColor="rgba(255, 255, 255, 0.05)" 
      glareColor="#3b82f6" glareOpacity={0.08} 
      className="skill-card-trigger group rounded-[2rem]"
    >
      <div className="p-10 w-full space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.03] p-4 border border-white/10 flex items-center justify-center overflow-hidden">
            <img 
              src={iconPath} alt={skill.name} 
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
              onError={(e) => { 
                if (!e.currentTarget.src.includes('.png') && !e.currentTarget.src.includes('simpleicons')) {
                  e.currentTarget.src = new URL(`./assets/tech/${skill.id}.png`, import.meta.url).href;
                } else {
                  const fallbackId = skill.id === 'capcut' ? 'video' : skill.id;
                  e.currentTarget.src = `https://cdn.simpleicons.org/${fallbackId}/white`;
                  e.currentTarget.onerror = () => { e.currentTarget.src = 'https://cdn.simpleicons.org/elementor/white'; };
                }
              }} 
            />
          </div>
          <h3 className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-blue-500 transition-colors">{skill.name}</h3>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-5xl font-black italic">{skill.projectCount}</span>
          <span className="text-xs text-zinc-600 font-black uppercase tracking-widest">Builds</span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 font-light">{skill.description}</p>
      </div>
    </GlareHover>
  );
};

export default App;