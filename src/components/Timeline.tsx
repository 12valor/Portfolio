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
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div ref={containerRef} className="w-full bg-zinc-950 relative overflow-visible border-t border-white/5">
      <div className="max-w-7xl mx-auto py-20 px-10">
        <h2 className="text-5xl font-display font-black italic text-white uppercase italic">System_Evolution</h2>
      </div>

      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-40 overflow-visible">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start items-start mb-40 last:mb-0">
            
            {/* LEFT SIDE: THE STICKY YEAR */}
            <div className="sticky top-1/3 z-50 w-[300px] flex-shrink-0 self-start">
              <div className="flex items-center gap-6">
                <div className="h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,1)]" />
                <h3 className="text-8xl font-display font-black text-zinc-900 uppercase leading-none">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE: THE SCROLLING IMAGES */}
            <div className="flex-grow pl-10">
              <div className="text-white mb-10">{item.content}</div>
            </div>
          </div>
        ))}

        {/* TRACK LINE (STOPS AT CONTENT END) */}
        <div style={{ height: height + "px" }} className="absolute left-[39px] top-0 w-[2px] bg-zinc-900">
          <motion.div
            style={{ height: heightTransform }}
            className="w-full bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};