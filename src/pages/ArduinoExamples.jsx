import React from 'react';

const ArduinoExamples = () => {
  const projects = [
    { title: "Parking Sensors", desc: "AI-Powered Space Detection // Real-time Counting", tags: ["ARDUINO", "PYTHON"] },
    { title: "IoT Lab Protos", desc: "Gas, Clap, and RFID Sensor Integration", tags: ["C++", "FIRMWARE"] },
    { title: "Secure Access", desc: "RFID-based System Entry Control", tags: ["IOT", "HARDWARE"] },
    { title: "Relay Controller", desc: "Multi-device Communication Protocol", tags: ["ARDUINO", "SERIAL"] }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins">
      {projects.map((proj, i) => (
        <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl group">
          <div className="h-40 bg-zinc-900 rounded-lg mb-4 flex items-center justify-center">
             <span className="text-[10px] text-zinc-800 font-bold tracking-widest uppercase">Firmware_Log_{i + 1}</span>
          </div>
          <h4 className="text-white font-black text-lg uppercase italic group-hover:text-blue-500 transition-colors">{proj.title}</h4>
          <p className="text-zinc-500 text-xs mt-1">{proj.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ArduinoExamples;