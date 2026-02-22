import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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

const SecretariatSection = () => {
  const [modalRole, setModalRole] = useState<string | null>(null);
  const secRef = useScrollReveal<HTMLElement>(0.1);
  const techRef = useScrollReveal<HTMLElement>(0.1);

  return (
    <>
      {/* Secretariat */}
      <section ref={secRef} id="secretariat" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-[5%] md:px-[10%] py-16 md:py-24 reveal-section">
        <h2 className="font-display text-4xl text-primary sticky top-20 z-20 bg-background/80 backdrop-blur-sm w-full text-center py-4">Secretariat</h2>
        <div className="gold-divider" />
        {/* All three in one row, Sec Gen slightly raised */}
        <div className="w-full grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:gap-16 mt-12 max-w-5xl mx-auto">
          {/* Left member */}
          <div
            className="hover-lift img-zoom bg-card p-4 sm:p-6 md:p-8 text-center cursor-none overflow-hidden self-end"
            onClick={() => setModalRole(otherMembers[0].role)}
          >
            <img src={otherMembers[0].img} alt={otherMembers[0].name} className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-5" loading="lazy" />
            <h3 className="font-display text-base sm:text-lg md:text-xl text-primary">{otherMembers[0].name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{otherMembers[0].role}</p>
          </div>

          {/* Secretary General - raised */}
          <div
            className="hover-lift img-zoom bg-card p-4 sm:p-6 md:p-8 text-center cursor-none overflow-hidden self-end -translate-y-8 md:-translate-y-12"
            onClick={() => setModalRole(secGen.role)}
          >
            <img src={secGen.img} alt={secGen.name} className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-5" loading="lazy" />
            <h3 className="font-display text-base sm:text-lg md:text-xl text-primary">{secGen.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{secGen.role}</p>
          </div>

          {/* Right member */}
          <div
            className="hover-lift img-zoom bg-card p-4 sm:p-6 md:p-8 text-center cursor-none overflow-hidden self-end"
            onClick={() => setModalRole(otherMembers[1].role)}
          >
            <img src={otherMembers[1].img} alt={otherMembers[1].name} className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-5" loading="lazy" />
            <h3 className="font-display text-base sm:text-lg md:text-xl text-primary">{otherMembers[1].name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{otherMembers[1].role}</p>
          </div>
        </div>
      </section>

      {/* Tech Directors */}
      <section ref={techRef} id="tech-directors" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-[5%] md:px-[10%] py-16 md:py-24 reveal-section">
        <h2 className="font-display text-4xl text-primary sticky top-20 z-20 bg-background/80 backdrop-blur-sm w-full text-center py-4">Technical Directors</h2>
        <div className="gold-divider" />
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {techDirectors.map((t) => (
            <div
              key={t.role}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
              onClick={() => setModalRole(t.role)}
            >
              <div className="w-full h-[300px] bg-muted/30 mb-5 flex items-center justify-center">
                <span className="text-muted-foreground/50 font-display text-lg">Coming Soon</span>
              </div>
              <h3 className="font-display text-xl text-primary">{t.name || t.role}</h3>
              <p className="text-muted-foreground text-sm mt-1">{t.role}</p>
            </div>
          ))}
        </div>
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
