import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// We import specific icons from the SOLID set
import { faMicrochip, faCode, faPalette, faVideo, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// Mapping icons to your Services titles
const iconMap = {
  "Arduino Projects": faMicrochip,
  "Web Development Portfolio": faCode,
  "Graphic Design Portfolio": faPalette,
  "Video Editing Projects": faVideo
};

export default function ProjectCard({ title, description, tags, featured }) {
  return (
    <div className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 border ${
      featured 
        ? 'bg-zinc-900 border-zinc-800 text-white shadow-2xl scale-105 z-10' 
        : 'bg-white border-gray-100 text-gray-900 hover:shadow-xl hover:-translate-y-2'
    }`}>
      
      {/* Revolutionary Icon Container */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-500 ${
        featured 
          ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]' 
          : 'bg-gray-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
      }`}>
        <FontAwesomeIcon icon={iconMap[title] || faCircleCheck} />
      </div>

      {featured && (
        <span className="absolute top-8 right-8 bg-blue-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          Featured Project
        </span>
      )}

      <h3 className="text-2xl font-black mb-3 tracking-tight">{title}</h3>
      <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-zinc-400' : 'text-gray-500'}`}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg transition-colors ${
            featured 
              ? 'bg-zinc-800 text-zinc-400 group-hover:bg-blue-900 group-hover:text-blue-200' 
              : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600'
          }`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}