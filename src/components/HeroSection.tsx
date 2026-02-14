import CountdownTimer from "./CountdownTimer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-[5%] md:px-[8%] lg:px-[10%] py-24 overflow-hidden"
    >
      <div ref={ref} className="relative z-[2] flex flex-col items-center reveal-section">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-center text-primary tracking-wide">
          WELMUN 2026
        </h1>
        <p className="mt-4 text-light-gold text-lg md:text-xl italic font-display">
          Welham Boys' School Model United Nations Conference
        </p>
        <div className="gold-divider" />
        <p className="mt-2 text-primary text-xl md:text-2xl italic font-display">
          "Orbis Vox"
        </p>
        <CountdownTimer />
        <p className="mt-10 text-light-gold text-lg md:text-xl tracking-[3px] uppercase text-center">
          The Twelfth Edition | July 28th–30th, 2026
        </p>

        {/* Deadline banner */}
        <div className="mt-16 w-full max-w-2xl bg-muted/60 py-6 px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-1">
            Deadline For Submitting The Position Papers
          </h2>
          <p className="font-display text-xl md:text-2xl text-light-gold">
            July 20th, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
