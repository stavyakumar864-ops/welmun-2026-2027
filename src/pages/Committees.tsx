import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Committees = () => {
  return (
    <PageLayout backgroundImage="/images/committees-bg.jpg">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className="font-display text-6xl md:text-8xl lg:text-9xl text-primary tracking-[10px] md:tracking-[20px] uppercase text-center mb-4"
      >
        Committees
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
        className="w-32 md:w-48 h-[2px] mb-16 origin-center"
        style={{ background: "linear-gradient(to right, transparent, hsl(var(--gold)), transparent)" }}
      />

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {committees.map((c) => (
          <motion.div key={c.id} variants={cardVariants}>
            <Link
              to={`/committees/${c.id}`}
              className="group relative block aspect-[16/10] overflow-hidden cursor-none"
            >
              {/* Image with hover zoom */}
              <img
                src={c.cardImage}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark overlay — appears on hover */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500" />

              {/* Committee name — hidden by default, revealed on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h2 className="font-display text-2xl md:text-3xl text-primary tracking-[4px] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {c.shortName}
                </h2>
                <div className="w-0 group-hover:w-16 h-[1px] bg-primary/50 transition-all duration-500 delay-100 mt-3" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Committees;
