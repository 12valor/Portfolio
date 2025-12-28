"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"; // Optimized import

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-transparent"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- CUSTOMIZED HEADER (DM SANS + MINIMIZED) ---
export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white font-display">
        Project Archive <br /> 
        <span className="text-blue-600 text-xl md:text-2xl tracking-widest font-mono">// DIR_001</span>
      </h1>

      {/* UPDATED: DM Sans, Smaller Size, Modern Spacing */}
      <p className="max-w-xl mt-8 font-dm text-[12px] md:text-[14px] text-zinc-400 leading-relaxed tracking-wide">
        Executing system-wide scan of technical directives. <br />
        Retrieving hardware firmware modules, full-stack architecture, 
        and digital strategy assets developed for 
        <span className="text-zinc-100 font-medium"> TUP-Visayas </span> 
        and 
        <span className="text-zinc-100 font-medium"> RoastBloxx</span>.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 border border-white/5 bg-zinc-900/50 cursor-target rounded-md overflow-hidden"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        {/* UPDATED: Removed 'grayscale' and 'hover:grayscale-0' */}
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title}
        />
      </a>
      
      {/* Dark overlay on hover to make text pop */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-zinc-950 pointer-events-none transition-opacity duration-500 z-10"></div>
      
      <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 z-20">
        <h2 className="text-white font-black uppercase tracking-tighter text-xl italic font-display">
          {product.title}
        </h2>
        <span className="text-blue-500 font-mono text-[10px] tracking-widest">STATUS: SYSTEM_CORE</span>
      </div>
    </motion.div>
  );
};