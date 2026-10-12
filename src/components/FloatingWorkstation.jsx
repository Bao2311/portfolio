import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { HackerRoom } from "./HackerRoom";

function RotatingDesk() {
  const deskGroup = useRef();

  // Smooth continuous 360-degree rotation ("quay vòng vòng")
  useFrame((state, delta) => {
    if (deskGroup.current) {
      deskGroup.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={deskGroup}>
      <HackerRoom
        scale={0.013}
        position={[0, -0.85, 0]}
        rotation={[0.18, 0, 0]}
      />
    </group>
  );
}

export const FloatingWorkstation = () => {
  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex flex-col items-center justify-center">
      {/* Background Neon Aura / Space Nebula */}
      <div className="absolute inset-0 max-w-[520px] max-h-[520px] m-auto bg-gradient-to-tr from-royal/30 via-lavender/20 to-aqua/25 rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D Canvas */}
      <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0.15, 3.2], fov: 44 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            {/* Cinematic Lights */}
            <ambientLight intensity={1.8} />
            <directionalLight position={[6, 9, 6]} intensity={2.8} color="#ffffff" />
            <pointLight position={[2, 2, 2]} intensity={2.5} color="#a78bfa" />
            <pointLight position={[-2, 1, 2]} intensity={2.0} color="#38bdf8" />
            <pointLight position={[0, -1, 1]} intensity={1.4} color="#f472b6" />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2 + 0.1}
              minPolarAngle={Math.PI / 4}
            />

            <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.35}>
              <RotatingDesk />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Cyber Status HUD Badge */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center gap-1.5 -mt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-midnight/80 border border-white/10 backdrop-blur-md shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-lavender tracking-wider">
            3D WORKSTATION ORBIT
          </span>
          <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline">
            // LIVE 360°
          </span>
        </div>
        <p className="text-[11px] font-mono text-neutral-400 text-center">
          Dual Screens · Terminal Code · Mechanical Keyboard
        </p>
      </div>
    </div>
  );
};
