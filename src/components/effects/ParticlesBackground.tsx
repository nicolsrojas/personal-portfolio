"use client";

import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { gsap } from "gsap";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize particles engine - runs once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the stars preset into the engine
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
    
    // Trigger the zoom-in animation when particles are loaded
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out"
        }
      );
    }
  };

  const options = {
    preset: "stars", // Use the stars preset
    background: {
      color: {
        value: "#000000", // or your custom background color
      },
    },
    // You can override preset settings here if needed
    particles: {
      number: {
        value: 200, // Customize number of stars
      },
    },
  };

  // Only render particles after initialization is complete
  if (init) {
    return (
      <div
        ref={containerRef}
        className="particles-background"
        style={{ 
          transform: "scale(0)", 
          opacity: 0,
        }} // Initial state for animation
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground;