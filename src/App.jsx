import { Features } from 'tailwindcss';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  const Services = [
{      title: "Arduino Projects",
      description: "A variety of Arduino-based projects demonstrating sensor integration and automation.",
      tags: ["Arduino", "C++", "IoT"],
      link: "#",
      Featured: true
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="bg-white py-20 border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-5xl font-extrabold text-gray-900">
      Hi, I'm <span className="text-blue-600">AG Evangelista</span>
    </h1>
    <p className="mt-4 text-xl text-gray-600 max-w-2xl">
      Computer Engineering Technology student at TUPV. I build 
      intelligent systems, craft digital experiences, and design visual stories.
    </p>
  </div>
</section>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <header className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Project Showcase</h2>
          <p className="text-gray-500 mt-2 text-lg">Featured engineering and creative works.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;