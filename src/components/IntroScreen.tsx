import { useEffect, useState, useCallback } from "react";

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleEnter = useCallback(() => {
    setHiding(true);
    setTimeout(() => {
      setHidden(true);
      onEnter();
    }, 1000);
  }, [onEnter]);

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
    if (!hidden) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  // Handle scroll wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) handleEnter();
    };
    if (!hiding && !hidden) {
      document.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => document.removeEventListener("wheel", handleWheel);
  }, [hiding, hidden, handleEnter]);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center transition-transform duration-1000"
      style={{
        backgroundColor: "hsl(40, 20%, 90%)",
        transform: hiding ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="flex justify-center">
        <h1
          className="font-display text-5xl md:text-8xl tracking-[6px] whitespace-nowrap overflow-hidden border-r-4"
          style={{
            color: "hsl(20, 30%, 18%)",
            borderColor: "hsl(20, 30%, 18%)",
            width: 0,
            animation: "typing 1.8s steps(12) forwards, blink 0.5s infinite",
            textShadow: "0 0 40px hsl(20 30% 18% / 0.3)",
          }}
        >
          WELMUN 26'
        </h1>
      </div>
      <div className="mt-12 flex flex-col items-center gap-3">
        <button
          onClick={handleEnter}
          className="swipe-btn tracking-[3px] text-sm font-medium opacity-0 cursor-none"
          style={{
            color: "hsl(20, 30%, 18%)",
            animation: "fadeIn 1s forwards 2.1s",
          }}
        >
          SCROLL DOWN
        </button>
        <span
          className="text-3xl"
          style={{
            color: "hsl(20, 30%, 18%)",
            animation: "bounce-arrow 1.5s infinite",
          }}
        >
          ↓
        </span>
      </div>
    </div>
  );
};

export default IntroScreen;
