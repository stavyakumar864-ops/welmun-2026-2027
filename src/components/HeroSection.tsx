import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/welmun-home-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-wide leading-none uppercase"
        >
          WELMUN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
          className="mt-4 text-primary text-xl md:text-3xl italic font-display tracking-wider"
        >
          'Orbis Vox'
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Bottom left — School name */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" as const }}
        className="absolute bottom-12 left-8 md:left-16 z-10"
      >
        <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight uppercase tracking-wide">
          Welham<br />Boys'<br />School
        </h2>
      </motion.div>

      {/* Bottom right — Date */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" as const }}
        className="absolute bottom-12 right-8 md:right-16 z-10 text-right"
      >
        <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight uppercase tracking-wide">
          28–30<br />July<br />2026
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
