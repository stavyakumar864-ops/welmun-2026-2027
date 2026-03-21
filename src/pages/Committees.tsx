import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
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
        className="w-32 md:w-48 h-[2px] mb-10 origin-center"
        style={{ background: "linear-gradient(to right, transparent, hsl(var(--gold)), transparent)" }}
      />

      {/* Position Paper Deadline Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12 w-full max-w-6xl p-5 rounded-lg border border-red-500/30 bg-red-500/10"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-300/90 text-sm leading-relaxed">
            <span className="text-red-400 font-display font-semibold">Important:</span> All delegates must submit their Position Papers by{" "}
            <span className="text-red-300 font-semibold">July 20, 2025</span>. Guidelines are provided in each committee's Background Guide. Late submissions will not be considered for Best Position Paper awards.
          </p>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl"
        style={{ perspective: "1200px" }}
      >
        {orderedCommittees.map((c, i) => {
          // Center IPC (last item) when it's alone in its row
          const isLastAlone = i === orderedCommittees.length - 1 && orderedCommittees.length % 3 === 1;
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
              className={isLastAlone ? "lg:col-start-2" : ""}
            >
              <Link
                to={`/committees/${c.id}`}
                className="group relative block aspect-[3/4] sm:aspect-[16/10] overflow-hidden rounded-2xl cursor-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_12px_40px_-8px_hsl(var(--gold)/0.3)]"
              >
                <img
                  src={c.cardImage}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 text-center gap-3">
                  {c.logo && (
                    <img
                      src={c.logo}
                      alt={`${c.shortName} logo`}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    />
                  )}
                  <h2
                    className="font-display text-2xl md:text-3xl lg:text-4xl text-primary tracking-[6px] uppercase font-bold"
                    style={{ textShadow: "0 2px 16px hsl(15 30% 12% / 0.95), 0 0 40px hsl(15 30% 12% / 0.7)" }}
                  >
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
