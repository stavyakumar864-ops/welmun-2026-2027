import { Link } from "react-router-dom";

const ScheduleBanner = () => {
  return (
    <section
      className="fixed inset-0 flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)) 45%, hsl(var(--muted)) 55%, hsl(var(--muted)) 100%)",
      }}
    >
      <h2 className="font-display text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-wide leading-none uppercase">
        Schedule
      </h2>

      <p className="mt-6 font-display text-xl md:text-3xl text-primary/80 tracking-widest uppercase">
        28 Jul – 30 Jul, 2026
      </p>

      <Link
        to="/schedule"
        className="mt-10 px-10 py-3 border border-primary/60 rounded-full text-primary font-display text-sm md:text-base tracking-[4px] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-none"
      >
        Schedule
      </Link>
    </section>
  );
};

export default ScheduleBanner;
