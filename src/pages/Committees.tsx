import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

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
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-primary tracking-[10px] md:tracking-[20px] uppercase text-center mb-4"
      >
        Committees
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="w-32 md:w-48 h-[2px] mb-10 origin-center"
        style={{ background: "linear-gradient(to right, transparent, hsl(var(--blue-accent)), hsl(var(--gold)), hsl(var(--blue-accent)), transparent)" }}
      />

      {/* Position Paper Deadline Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-14 w-full max-w-5xl p-5 rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-300/90 text-sm leading-relaxed">
            <span className="text-red-400 font-display font-semibold">Important:</span> All delegates must submit their Position Papers by{" "}
            <span className="text-red-300 font-semibold">July 20, 2025</span>. Guidelines are provided in each committee's Background Guide.
          </p>
        </div>
      </motion.div>

      {/* Featured Row — Top 2 committees larger */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {orderedCommittees.slice(0, 2).map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              to={`/committees/${c.id}`}
              className="group relative block aspect-[4/5] sm:aspect-[3/2] overflow-hidden rounded-2xl cursor-none transition-all duration-500 hover:shadow-[0_16px_50px_-10px_hsl(var(--gold)/0.3)]"
            >
              <img
                src={c.cardImage}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/25 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 gap-3">
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={`${c.shortName} logo`}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                  />
                )}
                <h2
                  className="font-display text-3xl md:text-4xl text-primary tracking-[6px] uppercase font-bold"
                  style={{ textShadow: "0 2px 16px hsl(15 30% 12% / 0.95), 0 0 40px hsl(15 30% 12% / 0.7)" }}
                >
                  {c.shortName}
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {c.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Middle Row — 3 committees */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {orderedCommittees.slice(2, 5).map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              to={`/committees/${c.id}`}
              className="group relative block aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl cursor-none transition-all duration-500 hover:shadow-[0_12px_40px_-8px_hsl(var(--gold)/0.3)]"
            >
              <img
                src={c.cardImage}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/45 group-hover:bg-background/25 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5 pb-7 gap-2.5">
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={`${c.shortName} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  />
                )}
                <h2
                  className="font-display text-2xl md:text-3xl text-primary tracking-[5px] uppercase font-bold"
                  style={{ textShadow: "0 2px 16px hsl(15 30% 12% / 0.95), 0 0 40px hsl(15 30% 12% / 0.7)" }}
                >
                  {c.shortName}
                </h2>
                <p className="text-muted-foreground text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {c.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row — 2 remaining */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {orderedCommittees.slice(5).map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              to={`/committees/${c.id}`}
              className="group relative block aspect-[4/5] sm:aspect-[3/2] overflow-hidden rounded-2xl cursor-none transition-all duration-500 hover:shadow-[0_16px_50px_-10px_hsl(var(--gold)/0.3)]"
            >
              <img
                src={c.cardImage}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/25 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 gap-3">
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={`${c.shortName} logo`}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                  />
                )}
                <h2
                  className="font-display text-3xl md:text-4xl text-primary tracking-[6px] uppercase font-bold"
                  style={{ textShadow: "0 2px 16px hsl(15 30% 12% / 0.95), 0 0 40px hsl(15 30% 12% / 0.7)" }}
                >
                  {c.shortName}
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {c.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Committees;
