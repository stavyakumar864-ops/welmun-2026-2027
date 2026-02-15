import { useEffect, useRef, memo } from "react";

interface CustomCursorProps {
  isIntroVisible: boolean;
}

const CustomCursor = memo(({ isIntroVisible }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[18px] h-[18px] border-2 rounded-full pointer-events-none z-[9999]"
      style={{
        borderColor: isIntroVisible ? "hsl(40,40%,80%)" : "hsl(15,30%,12%)",
        willChange: "transform",
        transition: "border-color 0.2s",
        transform: "translate3d(-50px,-50px,0)",
      }}
    />
  );
});

CustomCursor.displayName = "CustomCursor";
export default CustomCursor;
