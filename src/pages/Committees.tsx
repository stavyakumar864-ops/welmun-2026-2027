import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.5, ease: "easeOut" as const },
  },
};

const Committees = () => {
  return (
    <PageLayout backgroundImage="/images/committees-bg.jpg">
      {/* Hero Title Section */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-[40vh] w-full"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={titleVariants}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-primary tracking-[12px] md:tracking-[20px] uppercase text-center"
        >
          Committees
        </motion.h1>
        <motion.div
          variants={lineVariants}
          className="w-32 md:w-48 h-[2px] mt-8 origin-center"
          style={{
            background:
              "linear-gradient(to right, transparent, hsl(var(--gold)), transparent)",
          }}
        />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {committees.map((c) => (
          <motion.div key={c.id} variants={cardVariants}>
            <Link
              to={`/committees/${c.id}`}
              className="group relative block aspect-[16/10] overflow-hidden cursor-none"
            >
              {/* Image */}
              <motion.img
                src={c.cardImage}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Default dark overlay */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/70 transition-all duration-500" />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/40 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="font-display text-xl md:text-2xl text-primary tracking-[3px] uppercase transition-transform duration-500 group-hover:-translate-y-2">
                  {c.shortName}
                </h2>

                {/* Reveal line on hover */}
                <div className="w-0 group-hover:w-12 h-[1px] bg-primary/60 transition-all duration-500 mt-3" />

                {/* Reveal subtitle on hover */}
                <p className="text-muted-foreground text-xs md:text-sm mt-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[80%] line-clamp-2">
                  {c.agenda}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Committees;
