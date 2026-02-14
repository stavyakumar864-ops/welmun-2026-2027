import { useEffect, useState } from "react";

const target = new Date("July 28, 2026 09:00:00").getTime();

const CountdownTimer = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { val: time.d, label: "D" },
    { val: time.h, label: "H" },
    { val: time.m, label: "M" },
    { val: time.s, label: "S" },
  ];

  return (
    <div className="mt-8 px-6 py-4 bg-background/50 backdrop-blur-sm inline-flex items-center gap-3 md:gap-5">
      {boxes.map((b, i) => (
        <span key={b.label} className="flex items-center gap-3 md:gap-5">
          <span className="text-center">
            <span className="text-primary text-3xl md:text-5xl font-display leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              {b.val}
            </span>
            <span className="text-[10px] md:text-xs text-light-gold ml-1">{b.label}</span>
          </span>
          {i < boxes.length - 1 && (
            <span className="text-primary/30 text-2xl md:text-4xl font-display select-none">:</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default CountdownTimer;
