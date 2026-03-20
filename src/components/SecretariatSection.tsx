import { motion } from "framer-motion";
import secGenPhoto from "@/assets/sec-gen.png";
import underSecPhoto from "@/assets/under-sec.png";
import dirGenPhoto from "@/assets/dir-gen.png";
import techDirector1Photo from "@/assets/tech-director-1.png";
import techDirector2Photo from "@/assets/tech-director-2.png";

const secGen = { role: "Secretary General", name: "Ahan Sparsh", img: secGenPhoto };

const otherMembers = [
  { role: "Director General", name: "Tanveer S. Madan", img: dirGenPhoto },
  { role: "Under Secretary", name: "Koustabh Gupta", img: underSecPhoto },
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

        <motion.div
          className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {[otherMembers[0], secGen, otherMembers[1]].map((member, i) => (
            <motion.div
              key={member.name}
              variants={i === 0 ? cardFromLeft : i === 2 ? cardFromRight : cardFromBottom}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
            >
              <img src={member.img} alt={member.name} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
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
          className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={techContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techDirectors.map((t, i) => (
            <motion.div
              key={t.name}
              variants={i === 0 ? cardFromLeft : cardFromRight}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
            >
              <img src={t.img} alt={t.name} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{t.name || t.role}</h3>
              <p className="text-muted-foreground text-sm mt-1">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </>
  );
};

export default SecretariatSection;
