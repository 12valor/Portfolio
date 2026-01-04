// ServicesCard.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ServicesCard = ({ title, description, MasteryBadge, onClick }) => {
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
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-[400px] h-[480px] flex flex-col bg-black border border-white/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-blue-500/30 cursor-pointer overflow-hidden shadow-2xl"
    >
      {/* INTERACTIVE MAGNET GLOW LAYER */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${hoverPos.x}px`, top: `${hoverPos.y}px` }}
        />
      </motion.div>

      <div className="flex justify-between items-start mb-10">
        <div className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-blue-500/20 transition-colors">
          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">
            {MasteryBadge || 'PROTOCOL_ACTIVE'}
          </span>
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-3xl font-black text-white leading-[1.1] tracking-tighter mb-6 group-hover:text-blue-400 transition-colors font-poppins">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-4 font-poppins">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5 group-hover:border-blue-500/20 transition-colors">
        <span className="text-[9px] text-blue-400 font-black italic uppercase tracking-[0.3em] font-poppins">
          {isHovered ? 'INITIALIZE_TAB' : 'EXPLORE_WORK'}
        </span>
        
        <div className="relative w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
          <span className="text-2xl font-bold leading-none">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;