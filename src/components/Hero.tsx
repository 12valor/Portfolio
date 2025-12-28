import React from 'react';
import { motion } from 'framer-motion'; // Assuming you use Framer Motion for your SplitText feel
import TextPressure from './TextPressure';
import LiquidEther from './LiquidEther';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. LAYER: LIQUID ETHER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* 2. LAYER: TEXT CONTENT WITH ENTRANCE ANIMATION */}
      <div className="relative z-10 w-full max-w-[95vw] md:max-w-7xl px-4 pointer-events-none">
        
        {/* ENTRANCE ANIMATION WRAPPER (The "SplitText" feel) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
          className="w-full h-[200px] md:h-[400px] pointer-events-auto"
        >
          <TextPressure
            text="AG EVANGELISTA"
            fontFamily="Compressa VF"
            fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#FFFFFF"
            minFontSize={48}
          />
        </motion.div>

        {/* 3. SUBTEXT / CAPTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-center pointer-events-auto"
        >
          <p className="text-white/40 uppercase tracking-[0.6em] text-[10px] md:text-xs">
            Computer Technology | TUP Visayas
          </p>
        </motion.div>
      </div>

      {/* BOTTOM GRADIENT BLEND */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

    </section>
  );
};

export default Hero;