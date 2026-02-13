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
    <div className="flex gap-10 text-3xl mt-10">
      {boxes.map((b) => (
        <div key={b.label} className="text-center text-primary">
          {b.val}
          <br />
          <span className="text-sm text-light-gold">{b.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
