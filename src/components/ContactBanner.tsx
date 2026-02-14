import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)) 45%, hsl(var(--background)) 55%, hsl(var(--background)) 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, rotateX: 65, y: 80, scale: 0.85 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: "bottom center" }}
        className="font-display text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-wide leading-none uppercase"
      >
        Contact Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 font-display text-xl md:text-3xl text-primary/80 tracking-widest uppercase"
      >
        Get in Touch
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="mt-10 inline-block px-10 py-3 border border-primary/60 rounded-full text-primary font-display text-sm md:text-base tracking-[4px] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-none"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactBanner;
