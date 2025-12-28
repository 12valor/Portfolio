import React from 'react';
import { motion } from 'framer-motion';
import InfiniteMenu from './InfiniteMenu';

const InfiniteMenuSection = () => {
  const clientNodes = [
    {
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80', 
      link: 'https://www.tup.edu.ph/',
      title: 'TUP_VISAYAS',
      description: 'Academic_Thesis_Partner // AI_Parking_Monitor'
    },
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      link: '#',
      title: 'TECHNOWATCH',
      description: 'Official_Developer // System_Architecture'
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.youtube.com/@RoastBloxx',
      title: 'ROASTBLOXX',
      description: 'YouTube_Network // Content_Directives'
    },
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      link: '#',
      title: 'ADRIANOS',
      description: 'Coffee_Shop // Branding_Systems'
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '#',
      title: 'IoT_LABS',
      description: 'Arduino_Firmware // Hardware_Protos'
    }
  ];

  return (
    <section id="clients" className="max-w-7xl mx-auto py-24 px-6 relative z-20">
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12 border-l-4 border-blue-500 pl-6"
      >
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-white">
          Client_Network
        </h2>
        <p className="text-zinc-500 mt-1 text-sm font-medium tracking-widest uppercase italic">
          Strategic_Collaborations_&_Node_Connectivity
        </p>
      </motion.header>

      <div className="h-[400px] w-full bg-zinc-900/10 border border-black/5 relative rounded-sm overflow-hidden cursor-target">
         <InfiniteMenu items={clientNodes} scale={1.2} />
         
      </div>
    </section>
  );
};

export default InfiniteMenuSection;