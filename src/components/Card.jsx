import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.div
      className="absolute p-3 rounded-2xl bg-storm/80 backdrop-blur-md border border-white/20 shadow-xl cursor-grab flex items-center justify-center size-16"
      style={style}
      whileHover={{ scale: 1.15 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      <img
        src={image}
        alt="skill logo"
        className="w-10 h-10 object-contain pointer-events-none select-none"
      />
    </motion.div>
  ) : (
    <motion.div
      className="absolute px-4 py-2.5 text-sm md:text-base font-semibold text-center rounded-full border border-lavender/30 bg-storm/80 backdrop-blur-md text-white shadow-xl cursor-grab select-none whitespace-nowrap"
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
