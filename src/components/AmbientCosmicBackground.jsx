import React from "react";
import { Particles } from "./Particles";

export const AmbientCosmicBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden w-screen h-screen">
      {/* Edge-to-Edge Drifting Space Dust & Stars */}
      <Particles
        className="absolute inset-0"
        quantity={90}
        ease={80}
        color="#a78bfa"
        refresh
      />

      {/* Far Left Ambient Nebula Glows (Rìa bên trái) */}
      <div className="absolute -top-24 -left-60 w-[700px] h-[700px] rounded-full bg-royal/18 blur-[150px] opacity-75" />
      <div className="absolute top-[35%] -left-72 w-[650px] h-[650px] rounded-full bg-aqua/15 blur-[160px] opacity-70" />
      <div className="absolute top-[70%] -left-64 w-[700px] h-[700px] rounded-full bg-royal/20 blur-[150px] opacity-75" />

      {/* Far Right Ambient Nebula Glows (Rìa bên phải) */}
      <div className="absolute top-[15%] -right-60 w-[700px] h-[700px] rounded-full bg-lavender/18 blur-[150px] opacity-75" />
      <div className="absolute top-[50%] -right-72 w-[750px] h-[750px] rounded-full bg-fuchsia/15 blur-[160px] opacity-70" />
      <div className="absolute top-[82%] -right-64 w-[650px] h-[650px] rounded-full bg-aqua/15 blur-[150px] opacity-70" />

      {/* Center Subtle Deep Space Voids & Cosmic Gradients */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo/15 rounded-full blur-[180px] opacity-50" />
      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-royal/10 rounded-full blur-[180px] opacity-40" />

      {/* Futuristic Cyber Margin Rails on Wide & Ultrawide Displays (2xl and up) */}
      <div className="hidden 2xl:flex fixed left-7 top-1/4 bottom-1/4 flex-col justify-between items-center z-10 opacity-40 hover:opacity-80 transition-opacity">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-lavender to-transparent" />
        <span className="[writing-mode:vertical-rl] text-[10px] font-mono tracking-[0.3em] text-neutral-400 select-none">
          ✦ BAO.DEV // SYSTEM COORD 10.82°N ✦
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-aqua to-transparent" />
      </div>

      <div className="hidden 2xl:flex fixed right-7 top-1/4 bottom-1/4 flex-col justify-between items-center z-10 opacity-40 hover:opacity-80 transition-opacity">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-aqua to-transparent" />
        <span className="[writing-mode:vertical-rl] text-[10px] font-mono tracking-[0.3em] text-neutral-400 select-none">
          ✦ JAVA · .NET · REACT · 3D ORBIT ✦
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-lavender to-transparent" />
      </div>
    </div>
  );
};
