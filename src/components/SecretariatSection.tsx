import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const members = [
  { role: "Secretary General", img: "https://www.welhammun.org/assets/images/sec1.jpg", area: "sg" },
  { role: "Deputy Secretary General", img: "https://www.welhammun.org/assets/images/sec2.jpg", area: "ds" },
  { role: "Director General", img: "https://www.welhammun.org/assets/images/sec3.jpg", area: "dg" },
  { role: "Under Secretary", img: "https://www.welhammun.org/assets/images/sec4.jpg", area: "us" },
];

const techDirectors = [
  { role: "Technical Director 1", img: "https://www.welhammun.org/assets/images/tech1.jpg" },
  { role: "Technical Director 2", img: "https://www.welhammun.org/assets/images/tech2.jpg" },
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
        <div
          className="w-full mt-16 grid gap-12"
          style={{
            gridTemplateAreas: `"sg sg sg" "ds dg us"`,
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {members.map((m) => (
            <div
              key={m.role}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
              style={{ gridArea: m.area }}
              onClick={() => setModalRole(m.role)}
            >
              <img src={m.img} alt={m.role} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{m.role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Directors */}
      <section ref={techRef} id="tech-directors" className="min-h-screen flex flex-col justify-center items-center px-[10%] py-24 reveal-section">
        <h2 className="font-display text-4xl text-primary">Technical Directors</h2>
        <div className="gold-divider" />
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {techDirectors.map((t, i) => (
            <div
              key={t.role}
              data-reveal={i}
              className="hover-lift img-zoom bg-card p-8 text-center cursor-none overflow-hidden"
              onClick={() => setModalRole(t.role)}
            >
              <img src={t.img} alt={t.role} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{t.role}</h3>
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
