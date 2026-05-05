import { motion } from "framer-motion";

const Welmun2025Recap = () => {
  return (
    <section
      id="welmun-2025"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-[5%] md:px-[10%] py-16 md:py-24"
    >
      <motion.h2
        className="font-display text-4xl text-primary text-center"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        WELMUN 2025
      </motion.h2>
      <motion.div
        className="gold-divider"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      <motion.p
        className="text-muted-foreground text-center max-w-2xl mt-2 mb-10 text-sm md:text-base tracking-wide"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
      >
        A look back at last year's conference, captured by Welham Newz.
      </motion.p>

      <motion.div
        className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-blue-accent/20 shadow-2xl bg-black"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <iframe
          src="https://www.youtube.com/embed/VXu5pa1jDUg"
          title="WELMUN 2025 — Welham Newz Recap"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Welmun2025Recap;
