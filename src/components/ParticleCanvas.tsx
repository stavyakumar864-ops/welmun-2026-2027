import { useEffect, useRef, memo } from "react";

const ParticleCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const COUNT = 25;
    const px = Float32Array.from({ length: COUNT }, () => Math.random() * w);
    const py = Float32Array.from({ length: COUNT }, () => Math.random() * h);
    const pr = Float32Array.from({ length: COUNT }, () => Math.random() * 2);

    let animId: number;
    let last = 0;
    const FPS_INTERVAL = 1000 / 15; // 15 fps is plenty for slow particles

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const delta = now - last;
      if (delta < FPS_INTERVAL) return;
      last = now - (delta % FPS_INTERVAL);

      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      for (let i = 0; i < COUNT; i++) {
        ctx.moveTo(px[i] + pr[i], py[i]);
        ctx.arc(px[i], py[i], pr[i], 0, 6.283);
        py[i] += 0.25;
        if (py[i] > h) { py[i] = 0; px[i] = Math.random() * w; }
      }
      // Mix of gold and blue particles
      ctx.fillStyle = "rgba(220,210,195,0.3)";
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const idx = i % COUNT;
        ctx.moveTo(px[idx] + pr[idx] * 0.8, py[idx] - 20);
        ctx.arc(px[idx] + 30, py[idx] - 20, pr[idx] * 0.7, 0, 6.283);
      }
      ctx.fillStyle = "rgba(80,140,180,0.2)";
      ctx.fill();
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] pointer-events-none" />;
});

ParticleCanvas.displayName = "ParticleCanvas";
export default ParticleCanvas;
