import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

const easeOutSoft = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOutSoft } },
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
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 gap-3 max-w-full">
        <motion.h1
          variants={fadeUp}
          className="font-display text-[3.5rem] sm:text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-wide leading-none uppercase"
        >
          WELMUN
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-primary text-lg sm:text-xl md:text-3xl italic font-display tracking-wider"
        >
          'Ordo ab Chao'
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-xs sm:text-sm md:text-lg tracking-wide"
        >
          ~ Order out of Chaos ~
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 max-w-full overflow-x-auto">
          <CountdownTimer />
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-6 flex flex-col items-center gap-2 max-w-full"
        >
          <div className="h-px w-24 md:w-40 bg-primary/40" />
          <h2 className="font-display text-base sm:text-xl md:text-2xl text-primary uppercase tracking-[0.18em] sm:tracking-[0.25em]">
            Welham Boys' School
          </h2>
          <p className="font-display text-xs sm:text-base md:text-lg text-muted-foreground italic tracking-[0.15em] sm:tracking-[0.2em]">
            July 28 – 30, 2026
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
