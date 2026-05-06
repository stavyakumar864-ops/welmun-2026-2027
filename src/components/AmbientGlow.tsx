import { memo } from "react";

const AmbientGlow = memo(() => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top-left warm glow */}
      <div
        className="absolute -top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(40 60% 60% / 0.6), transparent 70%)",
          animation: "ambient-drift-a 18s ease-in-out infinite alternate",
        }}
      />
      {/* Bottom-right cool glow */}
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[55vw] h-[55vw] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(210 70% 55% / 0.55), transparent 70%)",
          animation: "ambient-drift-b 22s ease-in-out infinite alternate",
        }}
      />
      {/* Subtle accent in the middle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, hsl(30 50% 70% / 0.5), transparent 70%)",
          animation: "ambient-drift-c 26s ease-in-out infinite alternate",
        }}
      />
      {/* Vignette shadow on edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.55) 100%)",
        }}
      />
    </div>
  );
});

AmbientGlow.displayName = "AmbientGlow";
export default AmbientGlow;
