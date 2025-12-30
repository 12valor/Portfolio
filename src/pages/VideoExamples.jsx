import React from 'react';
import { motion } from 'framer-motion';

const VideoExamples = ({ setView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white font-poppins p-10 pt-32"
    >
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="mb-10 text-blue-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
        >
          ← Back to Protocol
        </button>
        
        <h1 className="text-6xl font-black italic tracking-tighter mb-4 uppercase">
          Video <span className="text-blue-600">Production</span>
        </h1>
        <p className="text-zinc-500 max-w-2xl mb-20">
          High-retention content strategy and digital storytelling logs.
        </p>

        {/* Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-3xl flex items-center justify-center">
            <span className="text-zinc-700 font-black italic uppercase tracking-widest">Showcase_01</span>
          </div>
          <div className="aspect-video bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-3xl flex items-center justify-center">
            <span className="text-zinc-700 font-black italic uppercase tracking-widest">Showcase_02</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// THIS IS THE CRITICAL LINE YOU ARE MISSING
export default VideoExamples;