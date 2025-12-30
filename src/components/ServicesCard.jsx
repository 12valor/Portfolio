import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ServicesCard = ({ title, description, MasteryBadge, CTAText }) => {
  const cardRef = useRef(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-[450px] h-[480px] flex flex-col bg-black border border-white/10 rounded-[2.5rem] p-12 transition-all duration-500 hover:border-blue-500/30 cursor-pointer overflow-hidden shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)]"
    >
      
      {/* --- PURE GLASSMORPHISM LAYER (BACKDROP BLUR) --- */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/[0.01] rounded-[2.5rem] -z-10" />

      {/* --- INTERACTIVE MAGNET GLOW EFFECT --- */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-20"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12)_0%,transparent_70%)] blur-2xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${hoverPos.x}px`, top: `${hoverPos.y}px` }}
        />
      </motion.div>

      {/* --- HEADER: MASTERY BADGE & ACTIVE DOT --- */}
      <div className="flex justify-between items-center mb-10">
        <div className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-colors">
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">
            {MasteryBadge || 'PREMIUM SERVICE'}
          </span>
        </div>
        <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 group-hover:animate-pulse group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-all" />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
        </div>
      </div>

      {/* --- CONTENT: BOLD TYPOGRAPHY HIERARCHY --- */}
      <div className="flex-grow">
        <h3 className="text-4xl font-black text-white leading-[1.1] tracking-tighter mb-6 group-hover:text-white transition-colors font-poppins">
          {title || 'Title Missing'}
        </h3>
        <p className="text-zinc-400 text-base font-light leading-relaxed line-clamp-4">
          {description || 'Description missing. Add a benefit-focused description here.'}
        </p>
      </div>

      {/* --- FOOTER: INTERACTION TRIGGER (CTA) --- */}
      <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5 group-hover:border-blue-500/20 transition-colors">
        
        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] font-semibold">System Protocol</span>
          <span className="text-blue-400 font-black text-xs tracking-tight italic uppercase">01_VIEW_PORTFOLIO.EXE</span>
        </motion.div>

        {/* BOLD ACTION ICON */}
        <div className="relative shrink-0">
          {/* Underlying glow on hover */}
          <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* The main button shape */}
          <motion.div 
            whileHover={{ rotate: -15, scale: 1.1 }}
            className="relative w-16 h-16 rounded-3xl bg-white text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-2xl"
          >
            <span className="text-3xl font-bold transform leading-none -mt-1">→</span>
          </motion.div>
        </div>
      </div>

      {/* --- HOVER BORDER GLOW --- */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-blue-500/10 transition-all duration-1000 pointer-events-none" />
    </motion.div>
  );
};

export default ServicesCard;