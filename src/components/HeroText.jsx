import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import CvDownloadDropdown from "./CvDownloadDropdown";

const HeroText = () => {
  const words = ["Full-stack", "Java · Spring", ".NET · C#", "React · TS", "Scalable"];

  return (
    <div className="relative z-20 mt-28 md:mt-36 max-w-2xl text-left select-none pointer-events-auto">
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-lavender bg-midnight/80 border border-lavender/30 backdrop-blur-md shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Open to Work · Ho Chi Minh City</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Hi, I'm <span className="bg-gradient-to-r from-white via-lavender to-aqua bg-clip-text text-transparent font-extrabold">Lê Quốc Bảo</span>
      </motion.h1>

      {/* Dynamic FlipWords subtitle */}
      <div className="mt-3 flex flex-col items-start">
        <motion.p
          className="text-2xl sm:text-4xl font-medium text-neutral-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Dedicated to Crafting
        </motion.p>
        <div className="my-1">
          <FlipWords
            words={words}
            className="font-black text-transparent bg-gradient-to-r from-royal via-lavender to-aqua bg-clip-text text-5xl sm:text-7xl lg:text-8xl"
          />
        </div>
        <motion.p
          className="text-xl sm:text-3xl font-medium text-neutral-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Web Architectures
        </motion.p>
      </div>

      {/* Bio paragraph */}
      <motion.p
        className="mt-5 text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed bg-black/30 p-3 sm:p-0 rounded-xl sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Fresher Full-stack Developer với kinh nghiệm thực chiến tại <strong>FPT Software</strong>. Chuyên sâu về <strong>Java (Spring Boot)</strong>, <strong>.NET (C#)</strong>, và <strong>React 18</strong>.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-8 w-full sm:w-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-royal to-lavender rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-royal/40 text-center inline-flex items-center justify-center"
        >
          🚀 View Projects
        </a>
        <CvDownloadDropdown
          label="Download CV"
          icon="📄"
          position="bottom-center"
          containerClassName="w-full sm:w-auto"
          triggerClassName="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all hover:scale-105 backdrop-blur-md shadow-md text-center inline-flex items-center justify-center"
        />
        <a
          href="#contact"
          className="px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-400 rounded-xl transition-all hover:scale-105 text-center inline-flex items-center justify-center"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
