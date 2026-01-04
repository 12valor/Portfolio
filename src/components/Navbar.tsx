"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const MenuItem = ({ setActive, active, item, children }: any) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative pb-2 hidden md:block">
      <motion.p className="cursor-pointer text-zinc-400 hover:text-white transition-colors font-poppins font-medium text-sm">
        {item}
      </motion.p>
      <AnimatePresence>
        {active === item && children && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
            <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85, y: 10 }}>
              <div className="bg-zinc-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-4 w-max h-full">
                {children}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
    <div className={cn("fixed top-6 md:top-10 inset-x-0 max-w-[95%] md:max-w-2xl mx-auto z-[5000]")}>
      <nav onMouseLeave={() => setActive(null)} className="relative rounded-full border border-white/5 bg-zinc-900/10 backdrop-blur-md flex justify-between md:justify-center items-center space-x-0 md:space-x-8 px-6 md:px-10 py-4">
        
        {/* MOBILE LOGO/TITLE */}
        <div className="md:hidden font-black italic text-sm tracking-tighter text-white">AG_EVANGELISTA</div>

        {/* DESKTOP LINKS (Hidden on mobile) */}
        <MenuItem setActive={setActive} active={active} item="SYSTEM">
          <div className="flex flex-col space-y-4 text-sm">
            <button onClick={() => scrollTo("home")} className="text-zinc-400 hover:text-blue-500 text-left">Initialization</button>
            <button onClick={() => scrollTo("parallax-showcase")} className="text-zinc-400 hover:text-blue-500 text-left">Project Field</button>
            <button onClick={() => scrollTo("about")} className="text-zinc-400 hover:text-blue-500 text-left">Biometric Identity</button>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="PROJECTS">
          <div className="flex flex-col space-y-4 text-sm">
            <button onClick={() => setView("website")} className="text-zinc-400 hover:text-blue-500 text-left">Website_Logs</button>
            <button onClick={() => setView("video")} className="text-zinc-400 hover:text-blue-500 text-left">Video_Directives</button>
            <button onClick={() => setView("arduino")} className="text-zinc-400 hover:text-blue-500 text-left">IoT_Firmware</button>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="SERVICES" />

        <div className="hidden md:block" onClick={() => scrollTo("contact")}>
          <MenuItem setActive={setActive} active={active} item="CONTACT" />
        </div>

        {/* HAMBURGER BUTTON (Mobile only) */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex flex-col space-y-1.5 p-2">
          <span className={cn("w-6 h-0.5 bg-white transition-all", isMobileMenuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-6 h-0.5 bg-white transition-all", isMobileMenuOpen && "opacity-0")} />
          <span className={cn("w-6 h-0.5 bg-white transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 inset-x-0 md:hidden bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col space-y-6 shadow-2xl backdrop-blur-3xl">
            <button onClick={() => scrollTo("home")} className="text-2xl font-black uppercase italic text-white text-left">Initialization</button>
            <button onClick={() => { setView("website"); setIsMobileMenuOpen(false); }} className="text-2xl font-black uppercase italic text-zinc-500 text-left hover:text-blue-500">Website_Logs</button>
            <button onClick={() => { setView("video"); setIsMobileMenuOpen(false); }} className="text-2xl font-black uppercase italic text-zinc-500 text-left hover:text-blue-500">Video_Directives</button>
            <button onClick={() => scrollTo("contact")} className="text-2xl font-black uppercase italic text-zinc-500 text-left hover:text-blue-500">Connect_Node</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}