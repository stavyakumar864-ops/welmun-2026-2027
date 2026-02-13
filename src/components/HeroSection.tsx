import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-[10%] py-24"
    >
      <h1 className="font-display text-5xl md:text-7xl text-center text-primary">
        Welham Model United Nations
      </h1>
      <div className="gold-divider" />
      <p className="mt-5 text-light-gold text-xl">28 – 30 July 2026</p>
      <CountdownTimer />
    </section>
  );
};

export default HeroSection;
