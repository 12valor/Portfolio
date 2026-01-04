"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

// --- MENU ITEM COMPONENT (DESKTOP) ---
const MenuItem = ({ setActive, active, item, children, onClick }: any) => {
  return (
    <div 
      onMouseEnter={() => setActive && setActive(item)} 
      className="relative pb-2"
      onClick={onClick}
    >
      <motion.p className="cursor-pointer text-zinc-400 hover:text-white transition-colors font-poppins font-medium text-sm">
        {item}
      </motion.p>
      {active === item && children && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-[6000]">
          <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
            <div className="bg-zinc-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-4 w-max">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default function Navbar({ setView }: { setView: (v: string) => void }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setView("home");
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className={cn("fixed top-6 md:top-10 inset-x-0 max-w-[95%] md:max-w-4xl mx-auto z-[5000]")}>
      <nav 
        onMouseLeave={() => setActive(null)} 
        className="relative rounded-full border border-white/5 bg-zinc-900/10 backdrop-blur-md flex justify-between md:justify-center items-center px-6 md:px-12 py-4"
      >
        {/* MOBILE LOGO (Minimized Poppins) */}
        <div className="md:hidden font-medium text-[10px] tracking-[0.4em] text-zinc-500 font-poppins uppercase">
          AG_EVANGELISTA
        </div>

        {/* DESKTOP LAYOUT (4 items) */}
        <div className="hidden md:flex items-center space-x-10">
          <MenuItem setActive={setActive} active={active} item="SYSTEM">
            <div className="flex flex-col space-y-4 text-sm font-poppins">
              <button onClick={() => scrollTo("home")} className="text-zinc-400 hover:text-blue-500 text-left">Initialization</button>
              <button onClick={() => scrollTo("parallax-showcase")} className="text-zinc-400 hover:text-blue-500 text-left">Project Field</button>
              <button onClick={() => scrollTo("about")} className="text-zinc-400 hover:text-blue-500 text-left">Biometric Identity</button>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="PROJECTS">
            <div className="flex flex-col space-y-4 text-sm font-poppins">
              <button onClick={() => setView("website")} className="text-zinc-400 hover:text-blue-500 text-left">Website_Logs</button>
              <button onClick={() => setView("video")} className="text-zinc-400 hover:text-blue-500 text-left">Video_Directives</button>
              <button onClick={() => setView("arduino")} className="text-zinc-400 hover:text-blue-500 text-left">IoT_Firmware</button>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="SERVICES" onClick={() => scrollTo("services")} />
          <MenuItem setActive={setActive} active={active} item="CONTACT" onClick={() => scrollTo("contact")} />
        </div>

        {/* HAMBURGER TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden flex flex-col space-y-1.5 p-2 z-[5001]"
        >
          <span className={cn("w-5 h-[1px] bg-white transition-all", isMobileMenuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-5 h-[1px] bg-white transition-all", isMobileMenuOpen && "opacity-0")} />
          <span className={cn("w-5 h-[1px] bg-white transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY (Plain Poppins, Smaller Size) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="absolute top-20 inset-x-0 md:hidden bg-zinc-950/95 border border-white/10 rounded-3xl p-8 flex flex-col space-y-4 shadow-2xl backdrop-blur-3xl font-poppins z-[4999]"
          >
            {/* Logic: text-xs/text-sm for smaller size, font-normal for plain, tracking for technical feel */}
            <button onClick={() => scrollTo("home")} className="text-xs font-normal uppercase text-white/50 hover:text-white text-left tracking-[0.3em] transition-colors py-2 border-b border-white/5">
              Initialization
            </button>
            <button onClick={() => { setView("website"); setIsMobileMenuOpen(false); }} className="text-xs font-normal uppercase text-white/50 hover:text-white text-left tracking-[0.3em] transition-colors py-2 border-b border-white/5">
              Website_Logs
            </button>
            <button onClick={() => { setView("video"); setIsMobileMenuOpen(false); }} className="text-xs font-normal uppercase text-white/50 hover:text-white text-left tracking-[0.3em] transition-colors py-2 border-b border-white/5">
              Video_Directives
            </button>
            <button onClick={() => scrollTo("contact")} className="text-xs font-normal uppercase text-white/50 hover:text-white text-left tracking-[0.3em] transition-colors py-2">
              Connect_Node
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}