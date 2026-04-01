import React from "react";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Container loaded
  };

  return (
    <Wrapper className="background gradient h-screen">
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#ff5252",
              },
              shape: {
                type: "polygon",
                sides: 6
              },
              opacity: {
                value: 0.3,
              },
              size: {
                value: { min: 2, max: 5 },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#ff5252",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out",
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5
                  }
                },
              },
            },
            retina_detect: true,
          }}
        />
    </Wrapper>
  );
}

export default Particle;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Set to 0 to ensure it's visible relative to background */
  pointer-events: none; /* Let clicks pass through to content */

  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
