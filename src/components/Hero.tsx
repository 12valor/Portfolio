import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from './LiquidEther';
import SplitText from './SplitText';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <LiquidEther 
          colors={['#1e3a8a', '#2563eb', '#454545ff']} 
          mouseForce={30}
          cursorSize={120}
          autoDemo={true}
        />
        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[1px]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 text-center px-6">
        <SplitText
          text="AG_EVANGELISTA"
          tag="h1"
          className="cursor-target text-7xl md:text-9xl font-black italic tracking-tighter uppercase text-white"
          delay={50}
          duration={0.8}
          ease="expo.out"
          // --- LOOP LOGIC ADDED HERE ---
          to={{ 
            opacity: 1, 
            y: 0, 
            stagger: 0.05,
          }}
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-blue-500 font-mono text-sm tracking-[0.5em] uppercase"
        >
          Computer Engineering Technology // TUPV
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;