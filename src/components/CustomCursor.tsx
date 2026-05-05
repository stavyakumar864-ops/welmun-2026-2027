import { useEffect, useRef, memo, useState } from "react";

interface CustomCursorProps {
  isIntroVisible: boolean;
}

const CustomCursor = memo(({ isIntroVisible }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = -50, y = -50;
    let isClickable = false;
    let scheduled = false;

    const update = () => {
      scheduled = false;
      cursor.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%) ${isClickable ? "scale(0.6)" : "scale(1)"}`;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement;
      isClickable = !!(t.closest("a,button,.card-hover,.swipe-btn"));
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    };

    const forceHideSystemCursor = () => {
      document.documentElement.style.setProperty("cursor", "none", "important");
      document.body.style.setProperty("cursor", "none", "important");
    };

    forceHideSystemCursor();

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", forceHideSystemCursor, { passive: true });
    window.addEventListener("wheel", forceHideSystemCursor, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", forceHideSystemCursor);
      window.removeEventListener("wheel", forceHideSystemCursor);
    };
  }, [hasFinePointer]);

  if (!hasFinePointer) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[18px] h-[18px] border-2 rounded-full pointer-events-none z-[9999]"
      style={{
        borderColor: "hsl(40,20%,90%)",
        willChange: "transform",
        transition: "border-color 0.2s",
        transform: "translate3d(-50px,-50px,0)",
      }}
    />
  );
});

CustomCursor.displayName = "CustomCursor";
export default CustomCursor;
