export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 border-b">
      <h1 className="text-lg font-bold">AG Evangelista | Portfolio</h1>
    <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
  <span className="text-[10px] font-bold text-green-700 uppercase">Available for Arduino & Web Projects</span>
</div>
    </nav>

    
  );
}