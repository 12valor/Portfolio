export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <a href={link} className="text-blue-600 font-medium text-sm hover:underline">
          View Details →
        </a>
      </div>
    </div>
  );
}