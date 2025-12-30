"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: { data: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Adjusting offset to align the start and end of the blue glow 
    // precisely with your 2025 and 2024 milestones.
    offset: ["start 30%", "end 70%"], 
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full bg-zinc-950 relative overflow-visible border-t border-white/5 font-poppins">
      <div className="max-w-7xl mx-auto py-20 px-10">
        <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter">System_Evolution</h2>
      </div>

      {/* Adding px-10 to the content wrapper to match your outer header alignment */}
      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-40 px-10 overflow-visible">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start items-start mb-40 last:mb-0">
            
            {/* LEFT SIDE: THE STICKY YEAR INDICATOR */}
            <div className="sticky top-1/3 z-50 w-[300px] flex-shrink-0 self-start">
              <div className="flex items-center gap-6">
                
                {/* FIXED INDICATOR ZONE: Width w-10 (40px) ensures a stable center point at 20px */}
                <div className="relative h-10 w-10 flex items-center justify-center">
                    {/* The core dot sits at z-40 with a black border to look like the line is inside it */}
                    <div className="h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,1)] z-40 border-2 border-black" />
                </div>
                
                {/* Year display for AG Evangelista's milestones like AI Infrastructure and RoastBloxx */}
                <h3 className="text-8xl font-black text-zinc-900 uppercase leading-none select-none">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE: THE SCROLLING CONTENT */}
            <div className="flex-grow pl-10">
              <div className="text-white mb-10">{item.content}</div>
            </div>
          </div>
        ))}

        {/* TRACK LINE: Programmatically aligned to the center of the Indicator Zone
            Logic: Wrapper px-10 (40px) + Indicator Zone Half (20px) = 60px Horizontal Center.
            A 2px line at 'left-[59px]' perfectly intersects the 60px center mark.
        */}
        <div 
          style={{ height: height + "px" }} 
          className="absolute left-[59px] top-5 w-[2px] bg-zinc-900 z-10"
        >
          <motion.div
            style={{ 
              height: heightTransform,
              opacity: opacityTransform 
            }}
            className="w-full bg-gradient-to-b from-blue-400 via-blue-500 to-transparent shadow-[0_0_15px_rgba(37,99,235,0.8)] z-50"
          />
        </div>
      </div>
    </div>
  );
};