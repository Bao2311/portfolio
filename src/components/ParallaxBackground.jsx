import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen z-0"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 z-[1] w-full h-screen"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 z-[2] w-full h-screen"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 z-[3] w-full h-screen"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: mountain2Y,
          }}
        />
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 z-[4] w-full h-screen"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: mountain1Y,
          }}
        />
        {/* Subtle Dark Vignette at bottom */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-t from-[#030412] via-transparent to-black/30" />
      </div>
    </div>
  );
};

export default ParallaxBackground;
