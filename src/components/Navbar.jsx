export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* Brand Block */}
        <div className="flex h-full items-center">
          <div className="h-full px-6 flex items-center bg-white/5 border-r border-white/10">
            <span className="font-black text-white tracking-[0.25em] text-xs">AG.EVANGELISTA</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 px-6 text-[10px] font-mono text-zinc-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            TUPV_COMPTECH // SYSTEM_ACTIVE
          </div>
        </div>

        {/* Sharp Nav Links */}
        <div className="hidden md:flex h-full">
          {['HOME', 'PROJECTS', 'YOUTUBE', 'CONTACT'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="h-full px-10 flex items-center text-[10px] font-bold tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 border-l border-white/5 transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Location/Terminal Data */}
        <div className="hidden sm:flex items-center px-6 h-full border-l border-white/5 font-mono text-[10px] text-zinc-500">
          SEC: ILOILO_CITY [PH]
        </div>
      </div>
    </nav>
  );
}