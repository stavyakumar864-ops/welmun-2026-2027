import { useEffect, useState, useCallback } from "react";
import hdLogo from "@/assets/hd-white.png";

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"logo" | "morphing" | "done">("logo");

  const handleEnter = useCallback(() => {
    if (phase !== "logo") return;
    setPhase("morphing");
    setTimeout(() => {
      setPhase("done");
      onEnter();
    }, 800);
  }, [onEnter, phase]);

  // Handle swipe up on touch
  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      if (startY - endY > 50) handleEnter();
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleEnter]);

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Handle scroll wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) handleEnter();
    };
    if (phase === "logo") {
      document.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => document.removeEventListener("wheel", handleWheel);
  }, [phase, handleEnter]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Scanline sweep — bright horizontal line moves down once */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] z-[10003] mix-blend-screen"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(40 20% 90% / 0.9) 50%, transparent)",
          boxShadow: "0 0 24px hsl(40 20% 90% / 0.6)",
          animation: "scanlineSweep 0.9s cubic-bezier(0.45, 0, 0.55, 1) 0.05s forwards",
        }}
      />

      {/* Screen flicker — quick brightness pulses */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[10002] bg-foreground/40 mix-blend-overlay"
        style={{
          opacity: 0,
          animation: "screenFlicker 1s ease-out forwards",
        }}
      />

      {/* Subtle CRT scanline texture, fades out */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[10001]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, hsl(40 20% 90% / 0.05) 2px, hsl(40 20% 90% / 0.05) 3px)",
          animation: "scanlinesFade 1.4s ease-out forwards",
        }}
      />

      {/* Logo that zooms in */}
      <div
        className="flex flex-col items-center justify-center relative z-[10004]"
        style={{
          transform: phase === "morphing" ? "scale(15)" : "scale(1)",
          opacity: phase === "morphing" ? 0 : 1,
          transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out 0.25s",
        }}
      >
        <img
          src={hdLogo}
          alt="WELMUN Logo"
          className="w-40 h-40 md:w-56 md:h-56 mb-8 object-contain"
          style={{
            opacity: 0,
            animation: "glitchSlice 0.85s steps(8, end) 0.1s forwards",
            filter: "drop-shadow(0 0 40px hsl(40 20% 90% / 0.3))",
          }}
        />
        <h1
          className="font-display text-5xl md:text-8xl tracking-[6px] text-primary relative"
          style={{
            opacity: 0,
            animation: "glitchChroma 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.35s forwards",
          }}
        >
          WELMUN '26
        </h1>
        <p
          className="mt-3 text-lg md:text-2xl font-display italic tracking-wider text-muted-foreground"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 0.5s ease-out 1.05s forwards",
          }}
        >
          'Ordo ab Chao'
        </p>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 flex flex-col items-center gap-2 z-[10004]"
        style={{
          opacity: phase === "morphing" ? 0 : undefined,
          transition: "opacity 0.3s",
        }}
      >
        <button
          onClick={handleEnter}
          className="tracking-[3px] text-sm font-medium cursor-none text-primary"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 0.5s ease-out 1.4s forwards",
          }}
        >
          SCROLL DOWN
        </button>
        <span
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 0.5s ease-out 1.4s forwards",
          }}
          className="text-3xl text-primary"
        >
          <span style={{ animation: "bounce-arrow 1.5s infinite", display: "inline-block" }}>↓</span>
        </span>
      </div>
    </div>
  );
};

export default IntroScreen;
