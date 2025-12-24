import React, { useState, useEffect } from 'react';

import styled from 'styled-components';



const Hero = () => {

  const [displayText, setDisplayText] = useState(['', '']);

  const finalStrings = ["HI", "WELCOME"];

  const chars = "!<>-_\\/[]{}—=+*^?#________";



  useEffect(() => {

    let iteration = 0;

    const interval = setInterval(() => {

      setDisplayText(finalStrings.map((str, index) => {

        return str.split("")

          .map((letter, i) => {

            if (i < iteration) return str[i];

            return chars[Math.floor(Math.random() * chars.length)];

          })

          .join("");

      }));



      if (iteration >= 10) clearInterval(interval);

      iteration += 1/3;

    }, 30);



    return () => clearInterval(interval);

  }, []);



  return (

    <section className="relative min-h-screen pt-16 bg-zinc-950 text-white overflow-hidden font-mono">

      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">

       

        {/* Main Header Area */}

        <div className="lg:col-span-8 p-12 lg:p-24 flex flex-col justify-center border-b border-white/5">

          <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] tracking-[0.3em] mb-8">

            AUTH_USER: AG_EVANGELISTA

          </div>

         

          <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase">

            {displayText[0]}<br />

            <span className="text-zinc-800">{displayText[1]}</span>

          </h1>



          <p className="max-w-lg text-lg text-zinc-500 leading-relaxed font-sans">

            Computer Engineering Technology student at <span className="text-white">TUP-Visayas</span>.

            Focusing on AI-based systems and digital strategy for

            <span className="text-blue-500"> RoastBlox</span> and

            <span className="text-blue-500"> QuickQ</span>.

          </p>

        </div>



        {/* Technical Sidebar */}

        <div className="lg:col-span-4 flex flex-col bg-zinc-900/20">

          <div className="p-10 border-b border-white/5">

            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4">// THESIS_PROJECT</h3>

            <p className="text-sm text-zinc-400 leading-relaxed">

              "Development of an AI-Based Parking Space Detection and Counting System via Object Detection".

            </p>

          </div>



          <div className="p-10 border-b border-white/5">

            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4">// CONTENT_NETWORK</h3>

            <ul className="space-y-3 text-xs">

              <li className="flex justify-between">

                <span className="text-zinc-500">YT/RoastBlox</span>

                <span className="text-blue-500">[STABLE]</span>

              </li>

              <li className="flex justify-between">

                <span className="text-zinc-500">YT/QuickQ</span>

                <span className="text-blue-500">[ONLINE]</span>

              </li>

            </ul>

          </div>



          <div className="mt-auto p-10 bg-white text-black hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">

            <div className="flex justify-between items-center font-black text-[10px] tracking-widest">

              <span>ESTABLISH_CONNECTION</span>

              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>

            </div>

          </div>

        </div>

      </div>



      {/* Grid Overlay */}

      <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"

           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>

      </div>

    </section>

  );

};



export default Hero;

