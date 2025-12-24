import { useEffect, useState, useMemo } from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
    const   [isClient, setIsClient] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      //loadSlim is the fastest/lightest way to load tsparticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // You can log this for debugging if needed
    // console.log(container);
  };

  // Use useMemo to prevent unnecessary re-renders of the config
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#f9fafb", // Matches your current bg-gray-50
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Connects lines to mouse
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#3b82f6", // Tailwind blue-500
        },
        links: {
          color: "#3b82f6",
          distance: 150,
          enable: true,
          opacity: 0.2, // Subtle connections
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1, // Slow, professional movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 0.3, // Subtle dots
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-10" // Puts it behind content
      />
    );
  }

  return null;
}