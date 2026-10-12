import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
    >
      {/* Edge-to-edge Parallax Cosmic Background */}
      <ParallaxBackground />

      {/* Hero Content restricted to max-w-7xl centered */}
      <div className="relative z-20 w-full max-w-7xl mx-auto c-space pointer-events-none">
        <HeroText />
      </div>

      {/* Edge-to-edge 3D Canvas Figure */}
      <figure className="absolute inset-0 z-10 pointer-events-none w-full h-full">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1.6} />
            <directionalLight position={[10, 10, 10]} intensity={1.8} />
            <pointLight position={[-5, 2, 2]} intensity={0.8} color="#7a57db" />
            <pointLight position={[5, -2, 2]} intensity={0.8} color="#33c2cc" />

            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>

            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
