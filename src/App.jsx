import React, { useState } from 'react'; // Added useState
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import GitHubActivity from './components/GitHubActivity.jsx';

function App() {
  // State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState(null);

  const Services = [
    { 
      id: "video", // Added ID for logic
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

  // Data for the example projects
  const projectExamples = {
    video: [
      { name: "RoastBlox Shorts", type: "Gaming Content", desc: "Aggressive pacing and motion graphics for Roblox niche." },
      { name: "QuickQ Trivia", type: "Educational", desc: "Clean, fast-cut informative video sequences." }
    ],
    graphics: [
      { name: "Adriano's Coffee Shop", type: "Branding", desc: "Full visual identity, posters, and product photography." },
      { name: "Pixar-Style Renders", type: "3D Animation", desc: "Character modeling and lighting experiments." }
    ],
    arduino: [
      { name: "AI Parking Thesis", type: "Object Detection", desc: "Real-time space counting system with web connectivity." },
      { name: "Smart Home Bridge", type: "IoT", desc: "Inter-device communication via customized firmware." }
    ],
    web: [
      { name: "Technowatch Portal", type: "Org Website", desc: "Official hub for the TUPV student organization." },
      { name: "Budget Tracker", type: "Web App", desc: "Responsive personal finance management tool." }
    ]
  };

  return (
    <div className="relative min-h-screen font-sans text-white antialiased">
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />
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

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {Services.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedCategory(project.id)}
                className={`cursor-pointer transition-all duration-300 ${selectedCategory === project.id ? 'scale-[0.98] ring-1 ring-blue-500' : 'hover:scale-[1.02]'}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* DYNAMIC EXAMPLE PROJECTS SECTION */}
          {selectedCategory && (
            <div className="mt-12 p-8 bg-zinc-950/50 border border-white/5 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <h3 className="text-xl font-black italic text-blue-500 tracking-widest uppercase">
                  // Loaded_Examples: {selectedCategory}
                </h3>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="text-[10px] text-zinc-500 hover:text-white font-mono uppercase tracking-[0.2em]"
                >
                  [ Close_Module ]
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectExamples[selectedCategory].map((ex, i) => (
                  <div key={i} className="group p-6 bg-zinc-900/30 border border-white/5 hover:border-blue-500/50 transition-all">
                    <div className="text-[10px] text-blue-500 font-bold mb-1">{ex.type}</div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                      {ex.name}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed font-mono">
                      {ex.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        <div className="w-full max-w-6xl mx-auto px-6 mb-20">
          <GitHubActivity />
        </div>
        
        <Contact />

        <footer className="py-16 text-center text-zinc-700 text-sm border-t border-zinc-900 mt-20">
          © {new Date().getFullYear()} AG Evangelista
        </footer>
      </div>
    </div>
  );
}

export default App;