import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Hero = () => {
  const [displayText, setDisplayText] = useState(['', '']);
  const finalStrings = ["HI", "WELCOME"];
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(finalStrings.map((str) => 
        str.split("").map((letter, i) => i < iteration ? letter : chars[Math.floor(Math.random() * chars.length)]).join("")
      ));
      if (iteration >= 10) clearInterval(interval);
      iteration += 1/3;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 bg-zinc-950 text-white font-mono border-x border-white/5 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
        <div className="lg:col-span-8 p-12 lg:p-24 border-b border-white/5 relative">
          <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] tracking-[0.3em] mb-8">
            AUTH_USER: AG_EVANGELISTA
          </div>
          <h1 className="text-7xl md:text-[9rem] font-black leading-[0.8] mb-12 uppercase">
            {displayText[0]}<br /><span className="text-zinc-800">{displayText[1]}</span>
          </h1>
          <p className="max-w-lg text-lg text-zinc-500 font-sans">
            Computer Engineering Technology student at <span className="text-white">TUP-Visayas</span>. 
            Developing <span className="text-blue-500">AI Parking Systems</span> for the Comptech Department.
          </p>
        </div>
        <div className="lg:col-span-4 bg-zinc-900/20 p-10">
          <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">// THESIS_DATA</h3>
          <p className="text-sm text-zinc-400">"{displayText[1] === "WELCOME" ? "AI-Based Parking Space Detection System" : "LOADING_THESIS..."}"</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;