import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

// Custom order: UNSC, DISEC, UNHCR | IPC (center) | ECOSOC, Lok Sabha, Roman Senate
const orderedIds = ["unsc", "disec", "unhcr", "ecosoc", "lok-sabha", "roman-senate", "ipc"];
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
        {orderedCommittees.map((c, i) => {
          // IPC is index 3 — center it
          const isIPC = c.id === "ipc";

          return (
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
              className={isIPC ? "col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center" : ""}
            >
              <Link
                to={`/committees/${c.id}`}
                style={isIPC ? { width: "calc(33.333% - 14px)" } : undefined}
                className="group relative block aspect-[16/10] overflow-hidden cursor-none"
              >
                <img
                  src={c.cardImage}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="font-display text-2xl md:text-3xl text-primary tracking-[4px] uppercase">
                    {c.shortName}
                  </h2>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Committees;
