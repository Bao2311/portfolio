import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { AmbientCosmicBackground } from "./components/AmbientCosmicBackground";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#030412] text-white relative">
      {/* Edge-to-edge cosmic lighting and star dust for entire viewport */}
      <AmbientCosmicBackground />

      {/* Full-width sticky/fixed Navbar */}
      <Navbar />

      {/* Full-width Hero section with edge-to-edge parallax & 3D space */}
      <Hero />

      {/* Centered sections container */}
      <main className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </main>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
};

export default App;
