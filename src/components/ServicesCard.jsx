import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ServicesCard = ({ title, description, MasteryBadge, path, setView }) => {
  const cardRef = useRef(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      // Trigger the redirection when the card is clicked
      onClick={() => setView(path)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-[400px] h-[480px] flex flex-col bg-black border border-white/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-blue-500/30 cursor-pointer overflow-hidden shadow-2xl"
    >
      {/* ... (Keep the Glassmorphism and Magnet Glow layers here) ... */}

      <div className="flex-grow">
        <h3 className="text-3xl font-black text-white leading-[1.1] tracking-tighter mb-6 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
        <span className="text-[9px] text-blue-400 font-black italic uppercase tracking-widest">
          {isHovered ? 'Initialize_View' : 'Explore_Work'}
        </span>
        
        <div className="relative w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          <span className="text-2xl font-bold">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;