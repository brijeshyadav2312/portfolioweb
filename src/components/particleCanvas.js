import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

function ParticleCanvas()  {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);

const [canvasDimensions, setCanvasDimensions] = useState({
  width: '100%', // Initial width
  height: '400px', // Initial height (full viewport height)
});

const handleResize = () => {
  const newWidth = '100%'; // Update with your desired width
  const newHeight = '400px'; // Update with your desired height
  setCanvasDimensions({ width: newWidth, height: newHeight });
};

  const options = {
    background: {
    },
    fpsLimit: 120,
    fullScreen: false,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "pusrepulseh",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="particle-canvas-container" style={{ width: '100%', height: '400px' }}>
      <Particles
        id="tsparticles"
        options={options}
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          position: 'absolute',
          width: canvasDimensions.width,
        }}
      />
    </div>
  );
}

export default ParticleCanvas;