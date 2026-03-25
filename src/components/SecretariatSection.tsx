import { motion } from "framer-motion";
import secGenPhoto from "@/assets/sec-gen.png";
import underSecPhoto from "@/assets/under-sec.png";
import underSec2Photo from "@/assets/under-sec-2.png";
import dirGenPhoto from "@/assets/dir-gen.png";
import techDirector1Photo from "@/assets/tech-director-1.png";
import techDirector2Photo from "@/assets/tech-director-2.png";
import { useIsMobile } from "@/hooks/use-mobile";

const allMembers = [
  { role: "Secretary General", name: "Ahan Sparsh", img: secGenPhoto },
  { role: "Director General", name: "Tanveer S. Madan", img: dirGenPhoto },
  { role: "Under Secretary", name: "Koustabh Gupta", img: underSecPhoto },
  { role: "Under Secretary", name: "Aaryan Khanna", img: underSec2Photo },
];

const techDirectors = [
  { role: "Technical Director", name: "Arnav Mittal", img: techDirector1Photo },
  { role: "Technical Director", name: "Stavya Kumar", img: techDirector2Photo },
];

const headingVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const dividerVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1, opacity: 1,
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const },
  },
};

const cardFromLeft = {
  hidden: { opacity: 0, x: -100, rotateY: 15, scale: 0.85 },
  visible: {
    opacity: 1, x: 0, rotateY: 0, scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardFromRight = {
  hidden: { opacity: 0, x: 100, rotateY: -15, scale: 0.85 },
  visible: {
    opacity: 1, x: 0, rotateY: 0, scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardFromBottom = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const techContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.4 },
  },
};

const SecretariatSection = () => {
  const isMobile = useIsMobile();


  return (
    <>
      {/* Secretariat */}
      <section id="secretariat" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-[5%] md:px-[10%] py-16 md:py-24">
        <motion.h2
          className="font-display text-4xl text-primary text-center"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Secretariat
        </motion.h2>
        <motion.div
          className="gold-divider"
          variants={dividerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ transformOrigin: "center" }}
        />

        {isMobile ? (
          <motion.div
            className="w-full mt-12 flex flex-col items-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {allMembers.map((m, i) => (
              <motion.div
                key={m.name}
                variants={cardFromBottom}
                className="hover-lift img-zoom bg-card border border-blue-accent/10 p-6 text-center cursor-none overflow-hidden w-[80%] max-w-xs"
              >
                <img src={m.img} alt={m.name} className="w-full h-auto aspect-[3/4] object-cover object-top mb-5 bg-secondary" loading="lazy" />
                <h3 className="font-display text-lg text-primary">{m.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{m.role}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Desktop: side-by-side with elevated sec gen */
          <motion.div
            className="w-full mt-12 max-w-6xl mx-auto flex flex-col items-center gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Secretary General on top */}
            <motion.div
              variants={cardFromBottom}
              className="hover-lift img-zoom bg-card border border-blue-accent/10 p-8 text-center cursor-none overflow-hidden w-64"
            >
              <img src={allMembers[0].img} alt={allMembers[0].name} className="w-full h-auto aspect-[3/4] object-cover object-top mb-5 bg-secondary" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{allMembers[0].name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{allMembers[0].role}</p>
            </motion.div>

            {/* Other members below */}
            <div className="flex items-start justify-center gap-8 lg:gap-12">
              {allMembers.slice(1).map((m, i) => (
                <motion.div
                  key={m.name}
                  variants={i === 0 ? cardFromLeft : i === 2 ? cardFromRight : cardFromBottom}
                  className="hover-lift img-zoom bg-card border border-blue-accent/10 p-8 text-center cursor-none overflow-hidden w-64"
                >
                  <img src={m.img} alt={m.name} className="w-full h-auto aspect-[3/4] object-cover object-top mb-5 bg-secondary" loading="lazy" />
                  <h3 className="font-display text-xl text-primary">{m.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Tech Directors */}
      <section id="tech-directors" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-[5%] md:px-[10%] py-16 md:py-24">
        <motion.h2
          className="font-display text-4xl text-primary text-center"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Technical Directors
        </motion.h2>
        <motion.div
          className="gold-divider"
          variants={dividerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ transformOrigin: "center" }}
        />

        <motion.div
          className="w-full mt-16 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16"
          variants={techContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techDirectors.map((t, i) => (
            <motion.div
              key={t.name}
              variants={i === 0 ? cardFromLeft : cardFromRight}
              className="hover-lift bg-card border border-blue-accent/10 p-6 text-center cursor-none overflow-hidden w-[80%] max-w-xs"
            >
              <div className="w-full aspect-[3/4] bg-secondary mb-5" />
              <h3 className="font-display text-xl text-primary">{t.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default SecretariatSection;
