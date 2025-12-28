import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroParallax } from './components/HeroParallax';
import ProjectCard from './components/ProjectCard';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import GlareHover from './components/GlareHover';
import InfiniteMenuSection from './components/InfiniteMenuSection';

// Data & Type Imports
import { Skill } from './types/skills';
import { mySkills } from './data/skillsData';

// --- PROJECT ARCHIVE DATA (For HeroParallax) ---
const portfolioProducts = [
  { title: "AI Parking Monitoring System", link: "#", thumbnail: "https://account.sliderrevolution.com/portal/pricing/?utm_medium=featuredimage&utm_source=blog" },
  { title: "RoastBloxx Channel", link: "https://youtube.com", thumbnail: "https://account.sliderrevolution.com/portal/pricing/?utm_medium=featuredimage&utm_source=blog" },
  { title: "Technowatch Web Terminal", link: "#", thumbnail: "https://account.sliderrevolution.com/portal/pricing/?utm_medium=featuredimage&utm_source=blog " },
  { title: "Adriano's Branding", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
  { title: "Flow E-Commerce", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
  { title: "Arduino IoT Labs", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
  { title: "QuickQ Production", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
  { title: "TensorFlow Models", link: "#", thumbnail: "https://images.unsplash.com/photo-1555949963-aa29bf1888ae?q=80&w=600" },
  { title: "Modern OS Research", link: "#", thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600" },
  { title: "Comptech TUPV Identity", link: "#", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" },
  { title: "Budget Tracker UI", link: "#", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600" },
  { title: "Pixar 3D Scenes", link: "#", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600" },
  { title: "Arduino IR Sensor Hub", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
  { title: "Gas Detection Firmware", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
  { title: "System Scan Protocol", link: "#", thumbnail: "https://toolset.com/course-lesson/creating-a-hero-section/" },
];

function App() {
  const [view, setView] = useState<'home' | string>('home');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // --- SCROLL LOGIC ---
  const { scrollY, scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // --- PARALLAX CALIBRATION (Optimized for minimal gaps) ---
  const yHeroOriginal = useTransform(smoothY, [0, 500], [0, -100]);
  const yTech = useTransform(smoothY, [2000, 3000], [50, -50]); 
  const yHeader = useTransform(smoothY, [3000, 4000], [50, -50]); 

  const Services = [
    { id: "video", title: "Video Editing", description: "Professional sequence assembly and high-fidelity post-production." },
    { id: "graphics", title: "Graphic Design", description: "Strategic brand identity and vector illustration systems." },
    { id: "arduino", title: "Arduino Projects", description: "Custom firmware development and hardware IoT integration." },
    { id: "web", title: "Web Development", description: "Responsive full-stack architecture built with modern frameworks." }
  ];

  const filteredSkills = activeCategory === 'ALL' ? mySkills : mySkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="relative min-h-screen font-sans text-white bg-zinc-950 overflow-x-hidden selection:bg-blue-600/30">
      
      {/* GLOBAL HUD & PROGRESS */}
      <TargetCursor 
        targetSelector="h1, h2, h3, p, span, li, button, a, .skill-card-trigger, .service-card-trigger" 
        spinDuration={3} hideDefaultCursor={true} 
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[6000]" style={{ scaleX }} />

      {/* FLOATING MODERN NAVBAR */}
      <Navbar setView={setView} />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* SECTION: HERO (TECH VIBES) */}
              <section id="home" className="h-screen overflow-hidden">
                <motion.div style={{ y: yHeroOriginal }} className="h-full pt-10">
                  <Hero />
                </motion.div>
              </section>

              {/* SECTION: PROJECT FIELD (FULL COLOR) */}
              <section id="parallax-showcase" className="-mt-1">
                <HeroParallax products={portfolioProducts} />
              </section>

              {/* SECTION: ABOUT & BIOMETRICS (CLEAN MODERN) */}
              <section id="about" className="max-w-6xl mx-auto py-4 px-6 relative z-20 -mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10 items-stretch">
                  
                  {/* ID CARD */}
                  <motion.div className="lg:col-span-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <GlareHover
                      width="100%" height="100%" background="rgba(15, 15, 20, 0.9)"
                      borderColor="rgba(255, 255, 255, 0.05)" glareColor="#ffffff" glareOpacity={0.15}
                      className="cursor-target group rounded-xl overflow-hidden shadow-2xl"
                    >
                      <div className="relative w-full aspect-[3/4] p-6 flex flex-col justify-between z-10 font-sans">
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest font-mono">Identity Verified</span>
                            <span className="text-[10px] text-zinc-600 font-mono uppercase">SYS_8.2</span>
                          </div>
                          
                          <div className="relative flex-1 my-6 overflow-hidden rounded-md border border-white/5 bg-zinc-900">
                            <img 
                                src="/me.jpg" 
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                                alt="AG Evangelista"
                                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=AG&background=111&color=3b82f6&size=512"; }}
                            />
                          </div>

                          <div className="text-left">
                             <h2 className="text-2xl font-bold text-white font-display tracking-tight uppercase">AG Evangelista</h2>
                             <p className="text-[11px] text-zinc-500 font-medium uppercase tracking-widest mt-1">Lead Comptech Engineer</p>
                          </div>
                      </div>
                    </GlareHover>
                  </motion.div>

                  {/* OVERVIEW */}
                  <motion.div className="lg:col-span-8 flex flex-col justify-center">
                    <div className="p-8 space-y-8">
                      <h2 className="text-5xl font-bold text-white font-display tracking-tight text-left">System Overview</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        <div className="space-y-3 border-t border-white/10 pt-4">
                          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] font-mono">Engineering</span>
                          <p className="text-zinc-400 font-dm text-[14px] leading-relaxed">
                            Developing advanced IoT firmware and AI-driven monitoring systems. Specialized in <span className="text-white">Real-Time Parking Logistics</span> for TUPV campus infrastructure.
                          </p>
                        </div>
                        <div className="space-y-3 border-t border-white/10 pt-4">
                          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] font-mono">Creative</span>
                          <p className="text-zinc-400 font-dm text-[14px] leading-relaxed">
                            Managing digital strategy for <span className="text-white">RoastBloxx</span> and creative asset management for <span className="text-white">Adriano's Coffee Shop</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* TECH ARSENAL */}
                <div className="pt-10 border-t border-white/5">
                  <motion.header style={{ y: yTech }} className="mb-8">
                    <h2 className="text-4xl font-bold text-white font-display tracking-tight text-left">Technical Arsenal</h2>
                  </motion.header>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['ALL', 'WEB_DEV', 'HARDWARE', 'CONTENT_STRATEGY'].map(cat => (
                      <button 
                        key={cat} onClick={() => setActiveCategory(cat)} 
                        className={`px-5 py-2 text-[11px] font-bold rounded-full border transition-all font-sans ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-zinc-500 hover:text-white'}`}
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

              {/* SERVICES */}
              <main id="services" className="max-w-6xl mx-auto py-12 px-6">
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

              {/* CLIENT NETWORK (3D SPHERE) */}
              <InfiniteMenuSection />

              {/* CONTACT PROTOCOL */}
              <section id="contact" className="py-12"><Contact /></section>
            </motion.div>
          ) : (
            <div className="pt-40 pb-40 px-6 max-w-6xl mx-auto font-sans">
                <button onClick={() => setView('home')} className="mb-12 text-blue-500 font-bold text-sm hover:text-white transition-colors">← Back to Overview</button>
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

// --- CLEAN SKILL CARD COMPONENT ---
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <GlareHover 
      width="100%" height="auto" background="rgba(255, 255, 255, 0.02)" 
      borderColor="rgba(255, 255, 255, 0.05)" glareColor="#3b82f6" glareOpacity={0.08} 
      className="skill-card-trigger group rounded-xl"
    >
      <div className="p-7 w-full space-y-5 text-left">
        <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-500 transition-colors uppercase">{skill.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white font-display italic">{skill.projectCount}</span>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono">Builds</span>
        </div>
        <p className="text-sm text-zinc-400 font-sans leading-relaxed line-clamp-2">{skill.description}</p>
      </div>
    </GlareHover>
  );
};

export default App;