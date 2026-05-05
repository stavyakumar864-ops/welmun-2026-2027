import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ScheduleBanner = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-center items-center overflow-hidden bg-background"
      style={{
        backgroundImage: "linear-gradient(135deg, transparent 0%, hsl(var(--blue-accent) / 0.08) 45%, hsl(18 15% 25%) 55%, hsl(20 30% 18%) 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, rotateX: 65, y: 80, scale: 0.85 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: "bottom center" }}
        className="font-display text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-wide leading-none uppercase"
      >
        Schedule
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 font-display text-xl md:text-3xl text-primary/80 tracking-widest uppercase"
      >
        28 July – 30 July, 2026
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          to="/schedule"
          className="mt-10 inline-block px-10 py-3 border border-blue-accent/60 rounded-full text-blue-accent font-display text-sm md:text-base tracking-[4px] uppercase hover:bg-blue-accent hover:text-blue-accent-foreground transition-colors duration-300 cursor-none"
        >
          Schedule
        </Link>
      </motion.div>
    </section>
  );
};

export default ScheduleBanner;
