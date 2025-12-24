import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        // This ensures it covers the whole screen and stays behind everything
        fullScreen: { enable: true, zIndex: -1 }, 
        background: {
          color: { value: "#09090b" }, // Zinc-950 equivalent
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "connect" },
          },
          modes: {
            connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
          },
        },
        particles: {
          color: { value: "#3b82f6" }, // Bright Blue
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" },
          },
          number: { 
            value: 100, 
            density: { enable: true, area: 800 } 
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}