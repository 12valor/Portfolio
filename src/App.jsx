import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import GitHubActivity from './components/GitHubActivity.jsx';

// Data Imports
import GraphicExamples from './pages/GraphicExamples';
import WebsiteExamples from './pages/WebsiteExamples';
import ArduinoExamples from './pages/ArduinoExamples';

//video imports
import { ShortForm, LongForm } from './pages/VideoExamples.jsx';

//main app
function App() {
  const [view, setView] = useState('home');
  const [videoSubView, setVideoSubView] = useState(null);
  
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  // --- PARALLAX CONSTANTS ---
  const yHero = useTransform(smoothY, [0, 500], [0, -100]);
  const yTech = useTransform(smoothY, [0, 1000], [0, -50]);
  const yHeader = useTransform(smoothY, [300, 1500], [50, -100]);
  const yCardSlow = useTransform(smoothY, [500, 2000], [0, -150]);
  const yCardFast = useTransform(smoothY, [500, 2000], [0, -250]);
  const yGithub = useTransform(smoothY, [1000, 3000], [50, -100]);

  const Services = [
    { id: "video", title: "VIDEO EDITING", description: "High-fidelity sequence assembly.", mastery: "ADVANCED", price: "NEGOTIABLE" },
    { id: "graphics", title: "GRAPHICS DESIGN", description: "Vector illustration and branding.", mastery: "PROFESSIONAL", price: "FIXED_RATE" },
    { id: "arduino", title: "ARDUINO PROJECTS", description: "Firmware development and IoT.", mastery: "EXPERT", price: "PROJECT_BASED" },
    { id: "web", title: "WEBSITE DEVELOPMENT", description: "Full-stack architecture.", mastery: "ADVANCED", price: "STARTING_AT_5K" }
  ];

  // FIX: Added the missing dataMap declaration
  const dataMap = {
    video: { title: "VIDEO_PRODUCTION", items: [] }, // Video uses sub-view logic
    graphics: { title: "GRAPHIC_SYSTEMS", items: GraphicExamples },
    arduino: { title: "ARDUINO_LABS", items: ArduinoExamples },
    web: { title: "WEB_ARCHITECTURE", items: WebsiteExamples }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.4 } }
  };

  const handleBack = () => {
    if (videoSubView) {
      setVideoSubView(null);
    } else {
      setView('home');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-white antialiased bg-zinc-950 overflow-x-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10">
        <Navbar />

        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div key="home" initial="hidden" animate="visible" exit="exit" variants={sectionVariants}>
              <motion.div style={{ y: yHero }}><Hero /></motion.div>
              <motion.div style={{ y: yTech }} className="relative z-20"><TechStack /></motion.div>

              <main className="max-w-6xl mx-auto py-24 px-6">
                <motion.header style={{ y: yHeader }} className="mb-16 border-l-4 border-blue-500 pl-8">
                  <h2 className="text-6xl font-black uppercase tracking-tighter">Expertise_&_Works</h2>
                  <p className="text-zinc-500 mt-2 text-xl font-medium tracking-widest uppercase italic">Comptech Engineering // TUPV</p>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-24">
                  {Services.map((service, index) => (
                    <motion.div 
                      key={index} 
                      style={{ y: index % 2 === 0 ? yCardSlow : yCardFast }}
                      onClick={() => setView(service.id)} 
                      className="cursor-pointer"
                    >
                      <ProjectCard {...service} />
                    </motion.div>
                  ))}
                </div>
                <motion.div style={{ y: yGithub }} className="w-full"><GitHubActivity /></motion.div>
              </main>
              <Contact />
            </motion.div>
          ) : view === 'video' && !videoSubView ? (
            /* SUB-CATEGORY SELECTION */
            <motion.div 
              key="video-folder" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="min-h-screen pt-40 px-6 max-w-4xl mx-auto text-center"
            >
              <button onClick={handleBack} className="mb-12 text-blue-500 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                ← BACK_TO_SYSTEM_CORE
              </button>
              <h2 className="text-5xl font-black uppercase mb-16 italic tracking-tighter border-b border-white/5 pb-8">Select_Video_Format</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div onClick={() => setVideoSubView('short')} className="p-16 bg-zinc-900/40 border border-white/5 hover:border-blue-500 cursor-pointer group transition-all">
                   <h3 className="text-3xl font-black group-hover:text-blue-500 transition-colors uppercase">Short_Form</h3>
                   <p className="text-zinc-600 mt-4 font-mono text-[10px] tracking-widest">[ 9:16 VERTICAL // VIRAL_EDITS ]</p>
                </div>
                <div onClick={() => setVideoSubView('long')} className="p-16 bg-zinc-900/40 border border-white/5 hover:border-blue-500 cursor-pointer group transition-all">
                   <h3 className="text-3xl font-black group-hover:text-blue-500 transition-colors uppercase">Long_Form</h3>
                   <p className="text-zinc-600 mt-4 font-mono text-[10px] tracking-widest">[ 16:9 HORIZONTAL // STORYTELLING ]</p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* FINAL LOGS VIEW */
            <motion.div 
              key="details" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }}
              className="min-h-screen pt-40 px-6 max-w-6xl mx-auto pb-40"
            >
              <button onClick={handleBack} className="mb-12 text-blue-500 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-2 hover:gap-4 transition-all">
                ← BACK_{videoSubView ? 'TO_DIRECTORY' : 'TO_SYSTEM_CORE'}
              </button>
              
              <header className="mb-20 border-l-4 border-white pl-8">
                <h2 className="text-7xl font-black uppercase tracking-tighter italic">
                  {videoSubView ? `${videoSubView}_Form_Logs` : dataMap[view]?.title || "UNKNOWN_MODULE"}
                </h2>
                <p className="text-zinc-600 mt-2 font-mono uppercase tracking-[0.2em]">Accessing: root/projects/{view}/{videoSubView || 'core'}/logs.exe</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(videoSubView === 'short' ? ShortForm : videoSubView === 'long' ? LongForm : dataMap[view]?.items || []).map((item, i) => (
                  <motion.div 
                    key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="p-6 bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 transition-all backdrop-blur-md"
                  >
                    {item.videoUrl && (
                      <div className="aspect-video mb-6 bg-black border border-white/10 overflow-hidden">
                        <iframe className="w-full h-full" src={item.videoUrl} title={item.name} frameBorder="0" allowFullScreen></iframe>
                      </div>
                    )}
                    <h3 className="text-xl font-black uppercase text-white mb-2">{item.name}</h3>
                    <p className="text-zinc-500 font-mono text-[11px] leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="py-20 text-center text-zinc-800 text-xs border-t border-white/5 bg-zinc-950 relative z-30">
          <div className="tracking-[0.5em] mb-4 uppercase font-black">System_Operational</div>
          © {new Date().getFullYear()} AG Evangelista | TUPV Comptech
        </footer>
      </div>
    </div>
  );
}

export default App;