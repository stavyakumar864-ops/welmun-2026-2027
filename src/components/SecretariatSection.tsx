import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import secGenPhoto from "@/assets/sec-gen.png";
import underSecPhoto from "@/assets/under-sec.png";
import dirGenPhoto from "@/assets/dir-gen.png";
import techDirector1Photo from "@/assets/tech-director-1.png";
import techDirector2Photo from "@/assets/tech-director-2.png";

const members = [
  { role: "Secretary General", name: "Ahan Sparsh", img: secGenPhoto },
  { role: "Director General", name: "Tanveer S. Madan", img: dirGenPhoto },
  { role: "Under Secretary", name: "Koustabh Gupta", img: underSecPhoto },
];

const techDirectors = [
  { role: "Technical Director 1", name: "Arnav Mittal", img: techDirector1Photo },
  { role: "Technical Director 2", name: "Stavya Kumar", img: techDirector2Photo },
];

const SecretariatSection = () => {
  const [modalRole, setModalRole] = useState<string | null>(null);
  const secRef = useScrollReveal<HTMLElement>(0.1);
  const techRef = useScrollReveal<HTMLElement>(0.1);

  return (
    <>
      {/* Secretariat */}
      <section ref={secRef} id="secretariat" className="min-h-screen flex flex-col justify-center items-center px-[10%] py-24 reveal-section">
        <h2 className="font-display text-4xl text-primary">Secretariat</h2>
        <div className="gold-divider" />
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((m) => (
            <div
              key={m.role}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
              onClick={() => setModalRole(m.role)}
            >
              <img src={m.img} alt={m.name} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{m.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Directors */}
      <section ref={techRef} id="tech-directors" className="min-h-screen flex flex-col justify-center items-center px-[10%] py-24 reveal-section">
        <h2 className="font-display text-4xl text-primary">Technical Directors</h2>
        <div className="gold-divider" />
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {techDirectors.map((t) => (
            <div
              key={t.role}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
              onClick={() => setModalRole(t.role)}
            >
              <img src={t.img} alt={t.name || t.role} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
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
