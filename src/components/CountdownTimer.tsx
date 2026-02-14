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
    { val: time.d, label: "DAYS" },
    { val: time.h, label: "HOURS" },
    { val: time.m, label: "MINUTES" },
    { val: time.s, label: "SECONDS" },
  ];

  return (
    <div className="flex gap-6 md:gap-10 mt-10">
      {boxes.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 border-2 border-primary/80 text-center"
        >
          <span className="text-primary text-3xl md:text-5xl font-display leading-none">
            {b.val}
          </span>
          <span className="text-xs md:text-sm text-light-gold mt-1 tracking-wider">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
