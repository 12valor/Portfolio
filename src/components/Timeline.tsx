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
    offset: ["start 10%", "end 90%"], 
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full bg-zinc-950 relative overflow-visible border-t border-white/5 font-poppins">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter">System_Evolution</h2>
      </div>

      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-20 md:pb-40 px-6 md:px-10 overflow-visible">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-start items-start mb-20 md:mb-40 last:mb-0">
            
            {/* LEFT SIDE: THE STICKY YEAR INDICATOR */}
            {/* Reduced width on mobile (w-20) vs desktop (w-[300px]) */}
            <div className="sticky top-1/4 md:top-1/3 z-50 w-20 md:w-[300px] flex-shrink-0 self-start">
              <div className="flex items-center gap-4 md:gap-6">
                
                {/* FIXED INDICATOR ZONE: Programmatically centered */}
                <div className="relative h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                    <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,1)] z-40 border-2 border-black" />
                </div>
                
                {/* Years reduced from text-8xl to text-4xl on mobile */}
                <h3 className="text-4xl md:text-8xl font-black text-zinc-900 uppercase leading-none select-none">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE: THE SCROLLING CONTENT */}
            {/* Added padding-left for mobile to clear the track line */}
            <div className="flex-grow pl-10 md:pl-10 mt-8 md:mt-0">
              <div className="text-white mb-10">{item.content}</div>
            </div>
          </div>
        ))}

        {/* TRACK LINE: Programmatically aligned per screen size
            Mobile center: Container px-6 (24px) + Zone Half (16px) = 40px Center.
            Desktop center: Container px-10 (40px) + Zone Half (20px) = 60px Center.
        */}
        <div 
          style={{ height: height + "px" }} 
          className="absolute left-[39px] md:left-[59px] top-5 w-[2px] bg-zinc-900 z-10"
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