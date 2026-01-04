// components/WorkModal.tsx
import { motion } from 'framer-motion';

const WorkModal = ({ type, onClose }: { type: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* The Tab/Card Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl max-h-[85vh] bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <div>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-blue-500">
              {type.replace('_', ' ')} // PROJECT_LOGS
            </h2>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">
              Internal Documentation / Node: {type.toUpperCase()}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all group"
          >
            <span className="text-zinc-500 group-hover:text-red-500 font-bold">✕</span>
          </button>
        </div>

        {/* Content Area (Scrolling) */}
        <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
          {type === 'video' && <VideoGrid />}
          {type === 'website' && <WebsiteGrid />}
          {/* Add other types as needed */}
        </div>
      </motion.div>
    </div>
  );
};