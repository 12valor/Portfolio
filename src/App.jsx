import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact';
import TechStack from './components/TechStack';

function App() {
const Services = [
  { 
    title: "VIDEO EDITING",
    description: "High-fidelity sequence assembly, color grading, and motion graphics implementation.",
    mastery: "ADVANCED",
    price: "NEGOTIABLE"
  },
  { 
    title: "GRAPHICS DESIGN",
    description: "Vector illustration, UI/UX prototyping, and industrial brand identity systems.",
    mastery: "PROFESSIONAL",
    price: "FIXED_RATE"
  },
  { 
    title: "ARDUINO PROJECTS",
    description: "Firmware development, sensor integration, and hardware-software bridging.",
    mastery: "EXPERT",
    price: "PROJECT_BASED"
  },
  { 
    title: "WEBSITE DEVELOPMENT",
    description: "Full-stack architecture using modern frameworks and responsive design systems.",
    mastery: "ADVANCED",
    price: "STARTING_AT_5K"
  }
];

return (
    // REMOVE 'bg-zinc-950' from here so the particles can show through
    <div className="relative min-h-screen font-sans text-white antialiased">
      
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />

        <main className="max-w-6xl mx-auto py-20 px-6" id="projects">
          {/* Header section with TUPV and Entrepreneur mentions */}
          <header className="mb-16 border-l-4 border-blue-500 pl-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Expertise & Works
            </h2>
            <p className="text-zinc-500 mt-2 text-xl font-medium">
              Comptech Engineering | Adriano's Coffee | RoastBlox
            </p>
          </header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
  {Services.map((project, index) => (
    <ProjectCard key={index} {...project} />
  ))}
</div>
        </main>
        <Contact />
        
        {/* Footer with your specific brand links */}
        <footer className="py-16 text-center text-zinc-700 text-sm border-t border-zinc-900 mt-20">
          © {new Date().getFullYear()} AG Evangelista
        </footer>
      </div>
    </div>
  );
}
export default App;