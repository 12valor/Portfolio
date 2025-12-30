import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-32 bg-black text-white font-poppins overflow-hidden" id="contact">
      
      {/* GOOGLE FONTS IMPORT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* BACKGROUND BLEND (LIQUID LOOK) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* LEFT SIDE: SIMPLE INFO */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            Get in touch
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Let's build <br /> 
            <span className="text-white/20 hover:text-white transition-colors duration-500 underline decoration-blue-500 decoration-4 underline-offset-8">
              together.
            </span>
          </h2>

          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm mb-12">
            Currently accepting new projects and collaborations. Drop a message and let's turn your idea into reality.
          </p>
          
          <div className="space-y-8">
            <div className="group">
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Email Me</p>
              <a href="mailto:ag.evangelista@tupv.edu.ph" className="text-lg font-medium hover:text-blue-500 transition-colors">
                ag.evangelista@tupv.edu.ph
              </a>
            </div>
            <div className="group">
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Based In</p>
              <p className="text-lg font-medium">Iloilo City, Philippines</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: GLASSMORPHISM FORM */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Subtle Glow behind the form */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl group-hover:bg-blue-500/10 transition-colors" />
          
          <form className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-white/10" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-white/10" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Your Message</label>
              <textarea 
                rows={4} 
                placeholder="What's on your mind?" 
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-white/10 resize-none" 
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="w-full bg-white text-black py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3"
            >
              {isHovered ? 'Send Message' : 'Get in Touch'}
              <span className="text-lg">→</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;