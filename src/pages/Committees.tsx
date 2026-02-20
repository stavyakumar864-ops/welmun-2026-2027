import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

// Custom order: UNSC, DISEC, UNHCR | IPC (center) | ECOSOC, Lok Sabha, Roman Senate
const orderedIds = ["unsc", "disec", "unodc", "viceroys-cabinet", "specpol", "unhrc", "ipc"];
const orderedCommittees = orderedIds
  .map((id) => committees.find((c) => c.id === id))
  .filter(Boolean) as typeof committees;

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
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl"
        style={{ perspective: "1200px" }}
      >
        {orderedCommittees.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, rotateX: 65, y: 80, scale: 0.85 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{ transformOrigin: "bottom center" }}
            >
              <Link
                to={`/committees/${c.id}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-sm cursor-none transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_8px_30px_-8px_hsl(var(--gold)/0.25)]"
              >
                <img
                  src={c.cardImage}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h2
                    className="font-display text-2xl md:text-3xl text-primary tracking-[4px] uppercase"
                    style={{ textShadow: "0 2px 12px hsl(15 30% 12% / 0.9), 0 0 30px hsl(15 30% 12% / 0.6)" }}
                  >
                    {c.shortName}
                  </h2>
                </div>
              </Link>
            </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Committees;
