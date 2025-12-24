import React from 'react';

const Contact = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white font-mono border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: System Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] tracking-[0.3em] mb-8 w-fit">
            COMMUNICATION_PROTOCOL: ACTIVE
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">
            Establish <br />
            <span className="text-blue-500">Connection</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
            System ready for project inquiries, technical collaboration, or industrial consultations within the Comptech Department.
          </p>
          
          <div className="space-y-4 text-[10px] font-bold tracking-widest text-zinc-400">
            <div className="flex items-center gap-4">
              <span className="text-blue-500">LOC:</span> ILOILO_CITY [PH]
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-500">EMAIL:</span> AG.EVANGELISTA@TUPV.EDU.PH
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-500">STATUS:</span> AVAILABLE_FOR_HIRE
            </div>
          </div>
        </div>

        {/* Right Side: Terminal Form */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900/30 border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-zinc-800/50 px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">uplink_portal.sh</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
            </div>
            
            <form className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest">Sender_Identity</label>
                  <input type="text" placeholder="NAME" className="w-full bg-zinc-950 border border-white/5 p-3 text-xs focus:border-blue-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest">Return_Address</label>
                  <input type="email" placeholder="EMAIL" className="w-full bg-zinc-950 border border-white/5 p-3 text-xs focus:border-blue-500 outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest">Data_Payload</label>
                <textarea rows="4" placeholder="MESSAGE_CONTENT" className="w-full bg-zinc-950 border border-white/5 p-3 text-xs focus:border-blue-500 outline-none transition-colors" />
              </div>

              <button className="w-full bg-white text-black py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all group flex items-center justify-center gap-3">
                Execute_Transmission
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;