import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  // Aura Slash Animation Configuration
  const slashVariants = {
    initial: { x: "-150%", opacity: 0 },
    hover: { 
      x: "150%", 
      opacity: [0, 1, 0], 
      transition: { 
        duration: 0.5, 
        repeat: Infinity, 
        repeatDelay: 0.1,
        ease: "linear" 
      } 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* Brand Block - EXACTLY AS PROVIDED */}
        <div className="flex h-full items-center">
          <div className="h-full px-6 flex items-center bg-white/5 border-r border-white/10">
            <span className="font-black text-white tracking-[0.25em] text-xs uppercase">AG.EVANGELISTA</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 px-6 text-[10px] font-mono text-zinc-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            TUPV_COMPTECH // SYSTEM_ACTIVE
          </div>
        </div>

        {/* Sharp Nav Links - ADDED AURA SLASH EFFECT */}
        <div className="hidden md:flex h-full">
          {['HOME', 'SERVICES', 'YOUTUBE', 'CONTACT'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial="initial"
              whileHover="hover"
              className="relative h-full px-10 flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 border-l border-white/5 transition-all overflow-hidden group"
            >
              {/* THE SLASH: High-speed light streak */}
              <motion.div 
                variants={slashVariants}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -skew-x-[45deg] pointer-events-none"
              />
              
              {/* THE AURA: Subtle glow pulse */}
              <motion.div 
                variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
                className="absolute inset-0 bg-blue-500/5 blur-lg pointer-events-none"
              />

              <span className="relative z-10">{item}</span>
            </motion.a>
          ))}
        </div>

        {/* Location/Terminal Data - EXACTLY AS PROVIDED */}
        <div className="hidden sm:flex items-center px-6 h-full border-l border-white/5 font-mono text-[10px] text-zinc-500">
          SEC: ILOILO_CITY [PH]
        </div>
      </div>
    </nav>
  );
}