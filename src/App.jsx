import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const Services = [
    { 
      title: "Arduino Projects",
      description: "A variety of Arduino-based projects demonstrating sensor integration and automation.",
      tags: ["Arduino", "C++", "IoT"],
      link: "#",
    },
    {
      title: "Web Development Portfolio",
      description: "A showcase of my web development projects, highlighting modern frameworks and responsive design.",
      tags: ["React", "JavaScript", "Web Development"],
      link: "#"
    },
    {
      title: "Graphic Design Portfolio",
      description: "A collection of my graphic design works showcasing various styles and techniques.",
      tags: ["Graphic Design", "Creativity", "Portfolio"],
      link: "#"
    },
    {
      title: "Video Editing Projects",
      description: "Compilation of video editing works including promos, short films, and social media content.",
      tags: ["Video Editing", "Creativity", "Media"],
      link: "#"
    },
  ];

return (
    // 2. Ensure the container is relative so particles don't overlap navbar
    <div className="relative min-h-screen bg-zinc-950 font-sans text-white antialiased">
      
      {/* 3. The background stays pinned at the very back */}
      <ParticlesBackground />

      {/* Navbar needs to be relative to stay above particles */}
      <div className="relative z-10">
        <Navbar />
        
        {/* 4. Make sure Hero.jsx background is transparent */}
        <Hero /> 

        <main className="max-w-6xl mx-auto py-20 px-6" id="projects">
          <header className="mb-16 border-l-4 border-blue-500 pl-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Services & Expertise
            </h2>
            <p className="text-zinc-500 mt-2 text-xl font-medium">
              Computer Engineering Technology @ TUP-Visayas | Creator | Entrepreneur
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Services.map((project, index) => (
              // Use the bold 'featured' logic we discussed previously
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>
        
        <footer className="py-16 text-center text-zinc-700 text-sm border-t border-zinc-900 mt-20">
          © {new Date().getFullYear()} AG Evangelista • Technowatch TUPV • Adriano's Coffee • RoastBlox
        </footer>
      </div>
    </div>
  );
}

export default App;