import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';

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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Main Hero section containing your personalized intro */}
      <Hero /> 

      <main className="max-w-6xl mx-auto py-16 px-6" id="projects">
        <header className="mb-12 border-l-4 border-blue-600 pl-6">
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">
            Project Showcase
          </h2>
          <p className="text-gray-500 mt-2 text-lg font-medium">
            Engineering and creative works from my time at TUP-Visayas.
          </p>
        </header>

        {/* Responsive Grid for your Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} AG Evangelista • Computer Engineering Technology
      </footer>
    </div>
  );
}

export default App;