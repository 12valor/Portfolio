export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Bio Box */}
      <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Student @ TUPV</span>
          <h1 className="text-5xl font-black mt-4 leading-tight">AG Evangelista.</h1>
          <p className="text-blue-100 text-lg mt-6 max-w-md">
            Revolutionizing hardware and software integration through <strong>AI Parking Systems</strong> and bold digital design.
          </p>
        </div>
        {/* Abstract background shape */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
      </div>

      {/* Stats/Quick Info Box */}
      <div className="bg-zinc-900 rounded-3xl p-8 text-white flex flex-col justify-center border border-zinc-800">
        <div className="mb-4">
          <p className="text-zinc-500 text-sm uppercase font-bold">Main Focus</p>
          <p className="text-xl font-medium text-blue-400 italic">Comptech Engineering</p>
        </div>
        <div>
          <p className="text-zinc-500 text-sm uppercase font-bold">Side Hustles</p>
          <p className="text-xl font-medium">Adriano's Coffee • RoastBlox</p>
        </div>
      </div>
    </section>
  );
}