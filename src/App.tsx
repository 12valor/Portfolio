import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroParallax } from './components/HeroParallax';
import { Timeline } from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import GlareHover from './components/GlareHover';
import InfiniteMenuSection from './components/InfiniteMenuSection';

// Data & Type Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';

// --- PROJECT ARCHIVE DATA (15 Items) ---
const portfolioProducts = [
  { title: "AI Parking Monitoring System", link: "#", thumbnail: "/parking-monitor.jpg" },
  { title: "RoastBloxx Channel", link: "https://youtube.com/@RoastBloxx", thumbnail: "/roastbloxx.jpg" },
  { title: "Technowatch Web Terminal", link: "#", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600" },
  { title: "Adriano's Branding", link: "#", thumbnail: "/adrianos.jpg" },
  { title: "Flow E-Commerce", link: "#", thumbnail: "/flow.jpg" },
  { title: "Arduino IoT Labs", link: "#", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
  { title: "QuickQ Production", link: "#", thumbnail: "/quickq.jpg" },
  { title: "TensorFlow Models", link: "#", thumbnail: "https://images.unsplash.com/photo-1555949963-aa29bf1888ae?q=80&w=600" },
  { title: "Modern OS Research", link: "#", thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600" },
  { title: "Comptech TUPV Identity", link: "#", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" },
  { title: "Budget Tracker UI", link: "#", thumbnail: "/budget.jpg" },
  { title: "Pixar 3D Scenes", link: "#", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600" },
  { title: "Arduino IR Sensor Hub", link: "#", thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600" },
  { title: "Gas Detection Firmware", link: "#", thumbnail: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=600" },
  { title: "System Scan Protocol", link: "#", thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" },
];

// --- TIMELINE DATA (Engineering Journey) ---
const timelineData = [
  {
    title: "2025",
    content: (
      <div>
        <p className="text-white text-lg md:text-xl font-bold mb-8 font-display italic leading-relaxed">
          Expanded my expertise in upscaling workflows, React development, advanced web development practices, and content editing.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-white text-lg md:text-xl font-bold mb-8 font-display italic leading-relaxed">
          Built a strong foundation in embedded systems and graphic design.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" className="rounded-xl h-48 w-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-white text-lg md:text-xl font-bold mb-8 font-display italic leading-relaxed">
          Explored game development with a focus on Roblox experiences and mechanics.
        </p>
        <div className="h-64 bg-zinc-900/50 rounded-xl border border-white/5 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Roblox Dev" />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-white text-lg md:text-xl font-bold mb-8 font-display italic leading-relaxed">
          Gained fundamental knowledge in computer networking.
        </p>
        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-xl font-mono text-blue-500 text-xs">
          PROTOCOL_HANDSHAKE: SUCCESSFUL <br />
          NETWORK_INFRASTRUCTURE_V1: DEPLOYED.
        </div>
      </div>
    ),
  },
];

function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const { scrollY, scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // RE-CALIBRATED SCROLL OFFSETS (Adjusted for 350vh Parallax + Timeline)
  const yHeroOriginal = useTransform(smoothY, [0, 500], [0, -100]);
  const yTech = useTransform(smoothY, [8500, 10000], [30, -30]); 
  const yHeader = useTransform(smoothY, [10500, 12000], [40, -40]); 

  const filteredSkills = activeCategory === 'ALL' ? mySkills : mySkills.filter(skill => skill.category === activeCategory);

  return (
    // overflow-x-clip prevents horizontal scroll while allowing sticky to work
    <div className="relative min-h-screen font-sans text-white bg-zinc-950 overflow-x-clip selection:bg-blue-600/30">
      
      <TargetCursor targetSelector="h1, h2, h3, p, a, button" spinDuration={3} hideDefaultCursor={true} />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[6000]" style={{ scaleX }} />
      <Navbar setView={setView} />

      {/* Main Container - MUST be overflow-visible for sticky labels */}
      <div className="relative z-10 overflow-visible">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-visible">
              
              <section id="home" className="h-screen overflow-hidden">
                <motion.div style={{ y: yHeroOriginal }} className="h-full pt-10"><Hero /></motion.div>
              </section>

              <section id="parallax-showcase">
                <HeroParallax products={portfolioProducts} />
              </section>

              {/* TIMELINE SECTION */}
              <Timeline data={timelineData} />

              <section id="about" className="max-w-6xl mx-auto px-6 relative z-20 py-32 border-t border-white/5">
                <div className="h-32 flex items-center mb-10 overflow-hidden">
                  <motion.header style={{ y: yTech }} className="relative z-10 w-full">
                    <h2 className="text-5xl font-bold text-white font-display tracking-tight text-left uppercase italic">
                      Technical Arsenal
                    </h2>
                  </motion.header>
                </div>

                <div className="flex flex-wrap gap-4 mb-16 relative z-30">
                  {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY'].map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2.5 text-[11px] font-bold rounded-full border transition-all ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/30'}`}>
                      {cat.replace('_', ' ')}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill: Skill) => (<SkillCard key={skill.id} skill={skill} />))}
                </div>
              </section>

              <InfiniteMenuSection />
              <section id="contact" className="py-24"><Contact /></section>
            </motion.div>
          ) : (
            <div className="pt-40 pb-40 px-6 max-w-6xl mx-auto font-sans text-center">
                <button onClick={() => setView('home')} className="mb-12 text-blue-500 font-bold text-sm hover:text-white transition-colors uppercase tracking-widest italic">← Back to Overview</button>
            </div>
          )}
        </AnimatePresence>

        <footer className="py-12 text-center text-zinc-700 text-[11px] border-t border-white/5 uppercase tracking-[0.3em] font-mono">
          © {new Date().getFullYear()} AG Evangelista // TUPV Comptech Department
        </footer>
      </div>
    </div>
  );
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  const iconPath = new URL(`./assets/tech/${skill.id}.png`, import.meta.url).href;
  return (
    <GlareHover width="100%" height="auto" background="rgba(255, 255, 255, 0.02)" borderColor="rgba(255, 255, 255, 0.05)" glareColor="#3b82f6" glareOpacity={0.08} className="skill-card-trigger group rounded-xl">
      <div className="p-8 w-full space-y-6 text-left font-sans">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-zinc-900/50 p-3 border border-white/5 flex items-center justify-center overflow-hidden">
            <img src={iconPath} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" onError={(e) => { e.currentTarget.src = `https://cdn.simpleicons.org/${skill.id}/white`; }} />
          </div>
          <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-500 transition-colors uppercase italic tracking-tighter">{skill.name}</h3>
        </div>
        <div className="flex items-baseline gap-2 font-display">
          <span className="text-4xl font-black text-white italic">{skill.projectCount}</span>
          <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest font-mono">Builds</span>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">{skill.description}</p>
      </div>
    </GlareHover>
  );
};

export default App;