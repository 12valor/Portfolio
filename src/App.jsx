import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  const myProjects = [
    {
      title: "AI Parking Detection System",
      description: "My Thesis project: An AI-based system for detecting and counting parking spaces via object detection.",
      tags: ["AI", "Object Detection", "Web Connectivity"],
      link: "#"
    },
    {
      title: "Technowatch Club Site",
      description: "The official web platform for TUPV's Computer Engineering Technology student organization.",
      tags: ["React", "Tailwind", "Community"],
      link: "#"
    },
    {
      title: "Adriano's Coffee Shop Branding",
      description: "Full branding and digital marketing strategy for a local coffee business.",
      tags: ["Design", "Marketing", "Business"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto py-12 px-6">
        <header className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Project Showcase</h2>
          <p className="text-gray-500 mt-2 text-lg">Featured engineering and creative works.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;