import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroParallax } from './components/HeroParallax';
import ProjectCard from './components/ProjectCard';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import TargetCursor from './components/TargetCursor';
import GlareHover from './components/GlareHover';
import InfiniteMenuSection from './components/InfiniteMenuSection';

// Data & Type Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';

const portfolioProducts = [
  { title: "AI Parking Monitoring System", link: "#about", thumbnail: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=600" },
  { title: "RoastBloxx Channel", link: "https://youtube.com", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600" },
  { title: "Technowatch Web Terminal", link: "#", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600" },
  { title: "Adriano's Branding", link: "#", thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600" },
  { title: "Flow E-Commerce", link: "#", thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600" },
  { title: "Arduino IoT Labs", link: "#arduino", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
  { title: "QuickQ Production", link: "#", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600" },
  { title: "TensorFlow Models", link: "#", thumbnail: "https://images.unsplash.com/photo-1555949963-aa29bf1888ae?q=80&w=600" },
  { title: "Modern OS Research", link: "#", thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600" },
  { title: "Comptech TUPV Identity", link: "#", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" },
  { title: "Budget Tracker UI", link: "#", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600" },
  { title: "Pixar 3D Scenes", link: "#", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600" },
  { title: "Arduino IR Sensor Hub", link: "#", thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600" },
  { title: "Gas Detection Firmware", link: "#", thumbnail: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=600" },
  { title: "System Scan Protocol", link: "#contact", thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" },
];

function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const { scrollY, scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const yHeroOriginal = useTransform(smoothY, [0, 500], [0, -100]);
  const yTech = useTransform(smoothY, [2000, 3000], [50, -50]); 
  const yHeader = useTransform(smoothY, [3000, 4000], [50, -50]); 

  const Services = [
    { id: "video", title: "Video Editing", description: "Professional sequence assembly and post-production." },
    { id: "graphics", title: "Graphic Design", description: "Creative branding and vector illustration systems." },
    { id: "arduino", title: "Arduino Projects", description: "Custom firmware development and IoT integration." },
    { id: "web", title: "Web Development", description: "Responsive, high-performance full-stack architecture." }
  ];

  const filteredSkills = activeCategory === 'ALL' ? mySkills : mySkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="relative min-h-screen font-sans text-white bg-zinc-950 overflow-x-hidden selection:bg-blue-600/30">
      
      {/* GLOBAL HUD */}
      <TargetCursor 
        targetSelector="h1, h2, h3, p, span, li, button, a, .skill-card-trigger, .service-card-trigger" 
        spinDuration={3} hideDefaultCursor={true} 
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]" style={{ scaleX }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10">
        <Navbar setView={setView} view={view} />

        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* --- HERO: KEEPING TECH VIBES --- */}
              <section id="home" className="h-screen overflow-hidden">
                <motion.div style={{ y: yHeroOriginal }} className="h-full">
                  <Hero />
                </motion.div>
              </section>

              <section id="parallax-showcase">
                <HeroParallax products={portfolioProducts} />
              </section>

              {/* ABOUT SECTION: CLEAN MODERN TRANSITION */}
              <section id="about" className="max-w-6xl mx-auto py-4 px-6 relative z-20 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10 items-stretch">
                  <motion.div className="lg:col-span-4" initial={{ opacity: 0 }}>
                    <GlareHover
                      width="100%" height="100%" background="rgba(15, 15, 20, 0.9)"
                      borderColor="rgba(255, 255, 255, 0.05)" glareColor="#ffffff" glareOpacity={0.15}
                      className="cursor-target group rounded-lg overflow-hidden"
                    >
                      <div className="relative w-full aspect-[3/4] p-6 flex flex-col justify-between z-10">
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] text-blue-500 font-bold tracking-widest uppercase">Verified User</span>
                            <span className="text-[10px] text-zinc-600 font-mono">ID: 1101-2025</span>
                          </div>
                          <div className="relative flex-1 my-6 overflow-hidden rounded-md border border-white/5 shadow-2xl">
                            <img src="/src/assets/me.jpg" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                          </div>
                          <div className="text-left">
                             <h2 className="text-2xl font-bold text-white font-display tracking-tight">AG Evangelista</h2>
                             <p className="text-[11px] text-zinc-500 font-medium uppercase tracking-widest mt-1">Comptech Engineer</p>
                          </div>
                      </div>
                    </GlareHover>
                  </motion.div>

                  <motion.div className="lg:col-span-8 flex flex-col justify-center">
                    <div className="p-8 space-y-8">
                      <h2 className="text-5xl font-bold text-white font-display tracking-tight text-left">Professional Overview</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        <div className="space-y-3 border-t border-white/10 pt-4">
                          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Engineering</span>
                          <p className="text-zinc-400 font-sans text-base leading-relaxed">
                            Developing advanced IoT firmware and AI-driven monitoring systems. Specialized in real-time parking logistics for <span className="text-white font-medium">TUP-Visayas</span>.
                          </p>
                        </div>
                        <div className="space-y-3 border-t border-white/10 pt-4">
                          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Creative</span>
                          <p className="text-zinc-400 font-sans text-base leading-relaxed">
                            Crafting brand identities and community engagement strategies for <span className="text-white font-medium">RoastBloxx</span> and <span className="text-white font-medium">Adriano's Coffee</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* TECH ARSENAL: CLEAN UP */}
                <div className="pt-12 border-t border-white/5">
                  <motion.header style={{ y: yTech }} className="mb-8">
                    <h2 className="text-4xl font-bold text-white font-display tracking-tight text-left">Technical Arsenal</h2>
                  </motion.header>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY'].map(cat => (
                      <button 
                        key={cat} onClick={() => setActiveCategory(cat)} 
                        className={`px-5 py-2 text-[11px] font-bold rounded-full border transition-all ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/30'}`}
                      >
                        {cat.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill: Skill) => (<SkillCard key={skill.id} skill={skill} />))}
                  </div>
                </div>
              </section>

              {/* SERVICES: CLEAN MODERN CARDS */}
              <main id="services" className="max-w-6xl mx-auto py-16 px-6">
                <motion.header style={{ y: yHeader }} className="mb-12">
                  <h2 className="text-5xl font-bold text-white font-display tracking-tight text-left">Services Offered</h2>
                </motion.header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Services.map((service, index) => (
                    <div key={index} onClick={() => setView(service.id)} className="service-card-trigger cursor-pointer transition-transform hover:-translate-y-1">
                      <ProjectCard {...service} />
                    </div>
                  ))}
                </div>
                <div className="mt-16"><GitHubActivity /></div>
              </main>

              <InfiniteMenuSection />

              <section id="contact" className="py-16"><Contact /></section>
            </motion.div>
          ) : (
            <div className="pt-40 pb-40 px-6 max-w-6xl mx-auto font-sans">
                <button onClick={() => setView('home')} className="mb-12 text-blue-500 font-bold text-sm hover:text-white transition-colors">← Back to Overview</button>
            </div>
          )}
        </AnimatePresence>

        <footer className="py-12 text-center text-zinc-600 text-[11px] border-t border-white/5 uppercase tracking-[0.2em] font-medium">
          © {new Date().getFullYear()} AG Evangelista — Technological University of the Philippines
        </footer>
      </div>
    </div>
  );
}

// --- CLEAN SKILL CARD ---
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <GlareHover 
      width="100%" height="auto" background="rgba(255, 255, 255, 0.02)" 
      borderColor="rgba(255, 255, 255, 0.05)" glareColor="#ffffff" glareOpacity={0.05} 
      className="skill-card-trigger group rounded-xl"
    >
      <div className="p-7 w-full space-y-5 text-left">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-500 transition-colors">{skill.name}</h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white font-display">{skill.projectCount}</span>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Projects</span>
        </div>
        <p className="text-sm text-zinc-400 font-sans leading-relaxed line-clamp-2">{skill.description}</p>
      </div>
    </GlareHover>
  );
};

export default App;