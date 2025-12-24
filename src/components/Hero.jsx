export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 border-b border-gray-100">
      {/* Background decoration for that "Cool" vibe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">TUPV Comptech Engineer</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none">
          AG <span className="text-blue-600">Evangelista</span>
        </h1>
        
        <p className="mt-8 text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed font-medium">
          Engineering the future through <span className="text-gray-900 font-bold underline decoration-blue-500">AI Parking Systems</span>, 
          IoT solutions, and bold visual storytelling across YouTube and Graphic Design.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200">
            Explore My Work
          </a>
          <button className="px-8 py-4 border-2 border-gray-100 text-gray-900 rounded-2xl font-bold hover:bg-gray-50 transition-all">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}