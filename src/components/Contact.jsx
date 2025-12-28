import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-32 bg-zinc-950 text-white font-sans overflow-hidden border-t border-white/5" id="contact">
      
      {/* BACKGROUND DECOR (SCAN LINES) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* LEFT SIDE: SYSTEM DATA */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-mono tracking-[0.4em] mb-8 w-fit"
          >
            COMM_PROTOCOL // VERIFIED_ENCRYPTION
          </motion.div>

          <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 font-display italic">
            Establish <br />
            <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">Connection</span>
          </h2>

          <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-sm font-dm">
            System ready for project inquiries, technical collaboration, or industrial consultations within the 
            <span className="text-zinc-300"> Comptech Department </span>.
          </p>
          
          {/* SYSTEM STATUS GRID */}
          <div className="space-y-6 font-mono border-l border-white/10 pl-6">
            <div className="group cursor-default">
              <span className="block text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">Location_Registry</span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">ILOILO_CITY [PH]</span>
            </div>
            <div className="group cursor-default">
              <span className="block text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">Digital_Uplink</span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors uppercase">ag.evangelista@tupv.edu.ph</span>
            </div>
            <div className="group cursor-default">
              <span className="block text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">Operational_Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-zinc-400 uppercase tracking-tighter italic">Ready_for_Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE TERMINAL CONSOLE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-zinc-900/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* TERMINAL HEADER */}
            <div className="bg-zinc-800/40 px-6 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest ml-2 italic">
                  secure_uplink_portal.sh
                </span>
              </div>
              <span className="text-[9px] text-zinc-600 font-mono">ID: 00-AG-EV-25</span>
            </div>
            
            {/* TERMINAL BODY */}
            <form className="p-10 space-y-8 font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 group">
                  <label className="text-[10px] text-blue-500/50 uppercase tracking-[0.2em] group-focus-within:text-blue-500 transition-colors">
                    Sender_ID
                  </label>
                  <input 
                    type="text" 
                    placeholder="ENTER_NAME" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-zinc-800 font-bold tracking-widest" 
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="text-[10px] text-blue-500/50 uppercase tracking-[0.2em] group-focus-within:text-blue-500 transition-colors">
                    Return_Node
                  </label>
                  <input 
                    type="email" 
                    placeholder="UPLINK@EMAIL.COM" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-zinc-800 font-bold tracking-widest" 
                  />
                </div>
              </div>
              
              <div className="space-y-3 group">
                <label className="text-[10px] text-blue-500/50 uppercase tracking-[0.2em] group-focus-within:text-blue-500 transition-colors">
                  Data_Payload
                </label>
                <textarea 
                  rows={4} 
                  placeholder="INITIALIZE_MESSAGE_CONTENT..." 
                  className="w-full bg-zinc-950/50 border border-white/5 p-4 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-zinc-800 resize-none rounded-lg" 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="w-full bg-blue-600 text-white py-5 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] flex items-center justify-center gap-4 group"
              >
                {isHovered ? 'CONFIRM_TRANSMISSION' : 'EXECUTE_UPLINK'}
                <span className="group-hover:translate-x-2 transition-transform italic text-lg leading-none mt-[-2px]">→</span>
              </motion.button>
            </form> {/* <--- ADDED THE MISSING CLOSING TAG HERE */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;