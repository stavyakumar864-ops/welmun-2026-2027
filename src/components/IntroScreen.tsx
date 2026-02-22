import { useEffect, useState, useCallback } from "react";
import welmunCrest from "@/assets/welmun-crest.png";

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
    }, 1200);
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
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "hsl(20, 30%, 18%)",
      }}
    >
      {/* Logo that zooms in */}
      <div
        className="flex flex-col items-center justify-center transition-all"
        style={{
          transform: phase === "morphing" ? "scale(15)" : "scale(1)",
          opacity: phase === "morphing" ? 0 : 1,
          transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out 0.4s",
        }}
      >
        <img
          src={welmunCrest}
          alt="WELMUN Crest"
          className="w-32 h-32 md:w-48 md:h-48 mb-8 object-contain"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 1s ease-out 0.3s forwards",
            filter: "drop-shadow(0 0 40px hsl(40 20% 90% / 0.3))",
          }}
        />
        <h1
          className="font-display text-5xl md:text-8xl tracking-[6px] text-primary"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 1s ease-out 0.8s forwards",
            textShadow: "0 0 40px hsl(40 20% 90% / 0.3)",
          }}
        >
          WELMUN
        </h1>
        <p
          className="mt-3 text-primary/70 text-lg md:text-2xl font-display italic tracking-wider"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 0.8s ease-out 1.3s forwards",
          }}
        >
          'Ordo ab Chao'
        </p>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-12 flex flex-col items-center gap-3"
        style={{
          opacity: phase === "morphing" ? 0 : undefined,
          transition: "opacity 0.3s",
        }}
      >
        <button
          onClick={handleEnter}
          className="tracking-[3px] text-sm font-medium cursor-none text-primary/80"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 0.6s ease-out 2s forwards",
          }}
        >
          SCROLL DOWN
        </button>
        <span
          className="text-3xl text-primary/80"
          style={{
            opacity: 0,
            animation: "introLogoFadeIn 0.6s ease-out 2s forwards",
          }}
        >
          <span style={{ animation: "bounce-arrow 1.5s infinite", display: "inline-block" }}>↓</span>
        </span>
      </div>
    </div>
  );
};

export default IntroScreen;
