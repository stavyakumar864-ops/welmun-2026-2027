import { motion } from "framer-motion";
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
          className="w-full grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:gap-16 mt-12 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left member — slides from left */}
          <motion.div
            variants={cardFromLeft}
            className="hover-lift img-zoom bg-card p-4 sm:p-6 md:p-8 text-center cursor-none overflow-hidden self-end"
          >
            <img src={otherMembers[0].img} alt={otherMembers[0].name} className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-5" loading="lazy" />
            <h3 className="font-display text-base sm:text-lg md:text-xl text-primary">{otherMembers[0].name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{otherMembers[0].role}</p>
          </motion.div>

          {/* Secretary General — rises from bottom */}
          <motion.div
            variants={cardFromBottom}
            className="hover-lift img-zoom bg-card p-4 sm:p-6 md:p-8 text-center cursor-none overflow-hidden self-end -translate-y-8 md:-translate-y-12"
          >
            <img src={secGen.img} alt={secGen.name} className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-5" loading="lazy" />
            <h3 className="font-display text-base sm:text-lg md:text-xl text-primary">{secGen.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{secGen.role}</p>
          </motion.div>

          {/* Right member — slides from right */}
          <motion.div
            variants={cardFromRight}
            className="hover-lift img-zoom bg-card p-4 sm:p-6 md:p-8 text-center cursor-none overflow-hidden self-end"
          >
            <img src={otherMembers[1].img} alt={otherMembers[1].name} className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-5" loading="lazy" />
            <h3 className="font-display text-base sm:text-lg md:text-xl text-primary">{otherMembers[1].name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{otherMembers[1].role}</p>
          </motion.div>
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
              onClick={() => setModalRole(t.role)}
            >
              <div className="w-full h-[300px] bg-muted/30 mb-5 flex items-center justify-center">
                <span className="text-muted-foreground/50 font-display text-lg">Coming Soon</span>
              </div>
              <h3 className="font-display text-xl text-primary">{t.name || t.role}</h3>
              <p className="text-muted-foreground text-sm mt-1">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      {modalRole && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 cursor-none"
          style={{ animation: "fadeIn 0.3s ease-out" }}
          onClick={() => setModalRole(null)}
        >
          <div className="bg-card p-10 max-w-lg text-center" style={{ animation: "fadeIn 0.3s ease-out" }} onClick={(e) => e.stopPropagation()}>
            <h2 className="font-display text-3xl text-primary mb-4">{modalRole}</h2>
            <p className="text-light-gold">Biography content here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SecretariatSection;
