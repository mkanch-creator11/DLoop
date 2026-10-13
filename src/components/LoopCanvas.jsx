import { useEffect, useRef } from 'react';

// Pixel squares (from the logo mark) travelling a figure-eight.
// Left lobe = Sales Enablement (blue), right lobe = LinkedIn (cyan), centre = the deal (amber).
export default function LoopCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, raf = 0, visible = true;
    const t0 = performance.now();
    const parts = Array.from({ length: 70 }, (_, i) => ({ o: i / 70, s: 0.6 + Math.random() * 0.8, sz: 3 + Math.random() * 5, lane: Math.random() }));

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const pt = (u, k = 1) => {
      const a = Math.min(W * 0.46, H * 0.8) * k, s = Math.sin(u), c = Math.cos(u), d = 1 + s * s;
      return [W / 2 + (a * c) / d, H / 2 + (a * s * c) / d];
    };
    const path = (k) => {
      ctx.beginPath();
      for (let i = 0; i <= 240; i++) { const [x, y] = pt((i / 240) * Math.PI * 2, k); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
    };
    const draw = (now) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(142,172,222,0.18)'; path(1);
      ctx.setLineDash([2, 10]); ctx.strokeStyle = 'rgba(92,211,255,0.25)'; path(1.08); ctx.setLineDash([]);
      for (const p of parts) {
        const u = (p.o + t * 0.045 * p.s) * Math.PI * 2;
        const [x, y] = pt(u);
        const right = Math.cos(u) > 0;
        const off = (p.lane - 0.5) * 14;
        const glow = 0.45 + 0.55 * Math.abs(Math.sin(u * 2 + t));
        ctx.fillStyle = right ? `rgba(92,211,255,${0.35 + glow * 0.6})` : `rgba(58,140,240,${0.35 + glow * 0.6})`;
        ctx.shadowColor = right ? '#5CD3FF' : '#3A8CF0';
        ctx.shadowBlur = 12 * glow;
        ctx.fillRect(Math.round(x - p.sz / 2 + off * 0.3), Math.round(y - p.sz / 2 + off), p.sz, p.sz);
      }
      const cs = 10 * (1 + 0.15 * Math.sin(t * 2.2));
      ctx.fillStyle = 'rgba(255,197,110,0.95)'; ctx.shadowColor = '#FFC56E'; ctx.shadowBlur = 22;
      ctx.fillRect(W / 2 - cs / 2, H / 2 - cs / 2, cs, cs);
      ctx.shadowBlur = 0;
      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    size();
    raf = requestAnimationFrame(draw);
    const onResize = () => { size(); if (reduce) requestAnimationFrame(draw); };
    window.addEventListener('resize', onResize);
    const io = new IntersectionObserver(([e]) => {
      const was = visible; visible = e.isIntersecting;
      if (visible && !was && !reduce) raf = requestAnimationFrame(draw);
    });
    io.observe(cv);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); io.disconnect(); };
  }, []);

  return (
    <div className="loop-box" aria-hidden="true">
      <canvas ref={ref} />
      <span className="loop-label l1"><b>■</b> Enablement · lead → closure</span>
      <span className="loop-label l2"><b>■</b> LinkedIn · prospect → lead</span>
    </div>
  );
}
