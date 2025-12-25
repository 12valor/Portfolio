import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import GitHubActivity from './components/GitHubActivity.jsx';

function App() {
  // State to handle which "file" or view is open
  const [view, setView] = useState('home');

  const Services = [
    { 
      id: "video",
      title: "VIDEO EDITING", 
      description: "High-fidelity sequence assembly, color grading, and motion graphics implementation.", 
      mastery: "ADVANCED", 
      price: "NEGOTIABLE" 
    },
    { 
      id: "graphics",
      title: "GRAPHICS DESIGN", 
      description: "Vector illustration, UI/UX prototyping, and industrial brand identity systems.", 
      mastery: "PROFESSIONAL", 
      price: "FIXED_RATE" 
    },
    { 
      id: "arduino",
      title: "ARDUINO PROJECTS", 
      description: "Firmware development, sensor integration, and hardware-software bridging.", 
      mastery: "EXPERT", 
      price: "PROJECT_BASED" 
    },
    { 
      id: "web",
      title: "WEBSITE DEVELOPMENT", 
      description: "Full-stack architecture using modern frameworks and responsive design systems.", 
      mastery: "ADVANCED", 
      price: "STARTING_AT_5K" 
    }
  ];

  // Data for the "New Files" that will open
  const projectsData = {
    video: {
      title: "VIDEO_PRODUCTION_LOGS",
      items: [
        { name: "RoastBlox Shorts", desc: "High-retention gaming edits." },
        { name: "QuickQ Motion Graphics", desc: "Informational trivia overlays." }
      ]
    },
    graphics: {
      title: "VISUAL_IDENTITY_SYSTEMS",
      items: [
        { name: "Adriano's Coffee Branding", desc: "Full brand kit and marketing assets." },
        { name: "3D Pixar Animations", desc: "Character renders and environment lighting." }
      ]
    },
    arduino: {
      title: "ENGINEERING_FIRMWARE_LABS",
      items: [
        { name: "AI Parking Thesis", desc: "Object detection via Python + Web dashboard." },
        { name: "TUPV Lab Projects", desc: "Multisim simulations and physical builds." }
      ]
    },
    web: {
      title: "FULLSTACK_ARCHITECTURE",
      items: [
        { name: "Technowatch Portal", desc: "School organization web platform." },
        { name: "Budget Tracker", desc: "Custom expense management system." }
      ]
    }
  };

  // Function to return to home
  const goHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen font-sans text-white antialiased">
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />

        {view === 'home' ? (
          /* --- MAIN HOME VIEW --- */
          <>
            <Hero />
            <TechStack />

            <main className="max-w-6xl mx-auto py-20 px-6" id="services">
              <header className="mb-16 border-l-4 border-blue-500 pl-6">
                <h2 className="text-5xl font-black uppercase tracking-tighter">
                  Expertise & Works
                </h2>
                <p className="text-zinc-500 mt-2 text-xl font-medium">
                  Comptech Engineering | Adriano's Coffee | RoastBlox
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {Services.map((service, index) => (
                  <div 
                    key={index} 
                    onClick={() => setView(service.id)} 
                    className="cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    <ProjectCard {...service} />
                  </div>
                ))}
              </div>
            </main>

            <div className="w-full max-w-6xl mx-auto px-6 mb-20">
              <GitHubActivity />
            </div>
            <Contact />
          </>
        ) : (
          /* --- "NEW FILE" EXAMPLE VIEW --- */
          <div className="min-h-screen pt-32 px-6 max-w-6xl mx-auto animate-in fade-in duration-500">
            <button 
              onClick={goHome}
              className="mb-12 text-blue-500 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-2 hover:gap-4 transition-all"
            >
              ← BACK_TO_SYSTEM_CORE
            </button>
            
            <header className="mb-16 border-l-4 border-white pl-6">
              <h2 className="text-6xl font-black uppercase tracking-tighter">
                {projectsData[view].title}
              </h2>
              <p className="text-zinc-500 mt-2 font-mono uppercase text-sm tracking-widest">
                Path: root/projects/{view}/examples.exe
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData[view].items.map((item, i) => (
                <div key={i} className="p-10 bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 transition-all">
                  <h3 className="text-2xl font-black uppercase text-white mb-4">{item.name}</h3>
                  <p className="text-zinc-500 font-mono text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="py-16 text-center text-zinc-700 text-sm border-t border-zinc-900 mt-20">
          © {new Date().getFullYear()} AG Evangelista
        </footer>
      </div>
    </div>
  );
}

export default App;