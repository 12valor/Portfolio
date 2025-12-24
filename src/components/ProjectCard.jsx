import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faCode, faPalette, faVideo } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  "Arduino Projects": faMicrochip,
  "Web Development Portfolio": faCode,
  "Graphic Design Portfolio": faPalette,
  "Video Editing Projects": faVideo
};

export default function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl mb-6">
        <FontAwesomeIcon icon={iconMap[title] || faCode} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50/50 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}