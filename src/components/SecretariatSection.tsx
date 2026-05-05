import { motion } from "framer-motion";
import secGenPhoto from "@/assets/sec-gen.png";
import underSecPhoto from "@/assets/under-sec.png";
import aaryanPhoto from "@/assets/aaryan-khanna.png";
import dirGenPhoto from "@/assets/dir-gen.png";
import techDirector1Photo from "@/assets/tech-director-1.png";
import techDirector2Photo from "@/assets/tech-director-2.png";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const secGen = { role: "Secretary General", name: "Ahan Sparsh", img: secGenPhoto };
const supportingMembers = [
  { role: "Under Secretary General", name: "Koustabh Gupta", img: underSecPhoto },
  { role: "Director General", name: "Tanveer Singh Madan", img: dirGenPhoto },
  { role: "Under Secretary General", name: "Aaryan Khanna", img: aaryanPhoto },
];

const techDirectors: { role: string; name: string; img: string | null }[] = [
  { role: "Technical Director", name: "Arnav Mittal", img: techDirector1Photo },
  { role: "Technical Director", name: "Stavya Kumar", img: techDirector2Photo },
  { role: "Technical Director", name: "Piyush Singhal", img: null },
];

const PortraitCard = ({
  member,
  size = "md",
  delay = 0,
}: {
  member: { role: string; name: string; img: string | null };
  size?: "lg" | "md" | "sm";
  delay?: number;
}) => {
  const dims =
    size === "lg"
      ? "w-64 md:w-72"
      : size === "md"
      ? "w-44 md:w-52"
      : "w-40 md:w-44";

  return (
    <motion.div
      className={`${dims} flex flex-col items-center text-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-xl bg-blue-accent/15 blur-2xl scale-95" />
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-primary/20 bg-secondary/40 shadow-2xl group">
          {member.img ? (
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/60">
              <span className="font-display text-primary/40 text-sm tracking-[3px] uppercase">
                Portrait
              </span>
            </div>
          )}
        </div>
      </div>
      <span className="text-blue-accent text-[10px] md:text-[11px] tracking-[3px] uppercase mt-5">
        {member.role}
      </span>
      <h3 className={`font-display text-primary leading-tight mt-1.5 ${size === "lg" ? "text-2xl md:text-3xl" : "text-base md:text-lg"}`}>
        {member.name}
      </h3>
    </motion.div>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <div className="flex flex-col items-center text-center mb-14 md:mb-16">
    <motion.span
      className="font-display italic text-blue-accent text-xs md:text-sm tracking-[5px] uppercase mb-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {eyebrow}
    </motion.span>
    <motion.h2
      className="font-display text-3xl md:text-5xl text-primary tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="gold-divider mx-auto"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
  </div>
);

const SecretariatSection = () => {
  return (
    <>
      {/* Secretariat */}
      <section
        id="secretariat"
        className="py-24 md:py-32 px-4 sm:px-[5%] md:px-[8%]"
      >
        <SectionHeading eyebrow="Leading WELMUN 2026" title="The Secretariat" />

        {/* Featured: Secretary General */}
        <div className="flex justify-center mb-16 md:mb-20">
          <PortraitCard member={secGen} size="lg" />
        </div>

        {/* Supporting members */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {supportingMembers.map((m, i) => (
            <PortraitCard key={m.name} member={m} size="md" delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Tech Directors */}
      <section
        id="tech-directors"
        className="py-24 md:py-32 px-4 sm:px-[5%] md:px-[8%]"
      >
        <SectionHeading eyebrow="Powering the Conference" title="Technical Directors" />

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {techDirectors.map((t, i) => (
            <PortraitCard key={t.name} member={t} size="md" delay={i * 0.08} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SecretariatSection;
