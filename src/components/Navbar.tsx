"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

// --- SUB-COMPONENTS FROM YOUR PROVIDED CODE ---
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({ setActive, active, item, children }: any) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-zinc-400 hover:text-white transition-colors font-display font-medium text-sm"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-zinc-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Menu = ({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/5 bg-zinc-900/10 backdrop-blur-md shadow-input flex justify-center space-x-8 px-10 py-4"
    >
      {children}
    </nav>
  );
};

const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-zinc-400 hover:text-blue-500 transition-colors text-sm font-sans block py-1">
      {children}
    </a>
  );
};

const ProductItem = ({ title, description, href, src }: any) => {
  return (
    <a href={href} className="flex space-x-4 group/item">
      <img src={src} width={120} height={70} alt={title} className="shrink-0 rounded-md border border-white/10 grayscale group-hover/item:grayscale-0 transition-all shadow-xl" />
      <div className="flex flex-col justify-center">
        <h4 className="text-sm font-bold mb-1 text-white font-display uppercase tracking-tight">{title}</h4>
        <p className="text-zinc-500 text-[11px] max-w-[10rem] font-sans leading-tight">{description}</p>
      </div>
    </a>
  );
};

// --- MAIN NAVBAR COMPONENT ---
export default function Navbar({ setView }: { setView: (v: string) => void }) {
  const [active, setActive] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setView("home");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-[5000]")}>
      <Menu setActive={setActive}>
        <div onClick={() => scrollTo("home")} className="flex items-center">
          <MenuItem setActive={setActive} active={active} item="SYSTEM">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink onClick={() => scrollTo("home")}>Initialization</HoveredLink>
              <HoveredLink onClick={() => scrollTo("parallax-showcase")}>Project Field</HoveredLink>
              <HoveredLink onClick={() => scrollTo("about")}>Biometric Identity</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <MenuItem setActive={setActive} active={active} item="PROJECTS">
          <div className="text-sm grid grid-cols-1 gap-6 p-4">
            <ProductItem
              title="TUPV AI Parking"
              description="Real-time campus infrastructure monitoring."
              href="#parallax-showcase"
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=300"
            />
            <ProductItem
              title="RoastBloxx"
              description="High-retention digital content strategy."
              href="#parallax-showcase"
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=300"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="SERVICES">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink onClick={() => scrollTo("about")}>Tech Arsenal</HoveredLink>
            <HoveredLink onClick={() => scrollTo("services")}>Services Offered</HoveredLink>
            <HoveredLink onClick={() => scrollTo("clients")}>Client Network</HoveredLink>
          </div>
        </MenuItem>

        <div onClick={() => scrollTo("contact")}>
          <MenuItem setActive={setActive} active={active} item="CONTACT" />
        </div>
      </Menu>
    </div>
  );
}