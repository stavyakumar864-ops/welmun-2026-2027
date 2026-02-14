import { useEffect, useRef } from "react";

interface CustomCursorProps {
  isIntroVisible: boolean;
}

const CustomCursor = ({ isIntroVisible }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });
  const clickableRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      const target = e.target as HTMLElement;
      clickableRef.current = !!target.closest("a, .card-hover, button, .swipe-btn");
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%,-50%) ${clickableRef.current ? "scale(0.6)" : "scale(1)"}`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[18px] h-[18px] border-2 rounded-full pointer-events-none z-[9999]"
      style={{
        borderColor: isIntroVisible ? "hsl(15, 30%, 12%)" : "hsl(42, 45%, 56%)",
        backgroundColor: "transparent",
        willChange: "transform",
        transition: "border-color 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
