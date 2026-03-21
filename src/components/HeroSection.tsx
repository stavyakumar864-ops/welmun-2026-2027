import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -120 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 120 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

interface HeroSectionProps {
  animateIn?: boolean;
}

const HeroSection = ({ animateIn = true }: HeroSectionProps) => {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      variants={container}
      initial="hidden"
      animate={animateIn ? "show" : "hidden"}
    >
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          variants={slideFromLeft}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-wide leading-none uppercase"
        >
          WELMUN
        </motion.h1>

        <motion.p
          variants={slideFromRight}
          className="mt-4 text-primary text-xl md:text-3xl italic font-display tracking-wider"
        >
          'Ordo ab Chao'
        </motion.p>

        <motion.div variants={slideFromLeft} className="mt-10">
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Bottom left — School name */}
      <motion.div
        variants={slideFromLeft}
        className="absolute bottom-12 left-8 md:left-16 z-10"
      >
        <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight uppercase tracking-wide">
          Welham<br />Boys'<br />School
        </h2>
      </motion.div>

      {/* Bottom right — Date */}
      <motion.div
        variants={slideFromRight}
        className="absolute bottom-12 right-8 md:right-16 z-10 text-right"
      >
        <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight uppercase tracking-wide">
          28–30<br />July<br />2026
        </h2>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
