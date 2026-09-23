import { useEffect, useRef } from "react";

type Trace = { points: [number, number][]; speed: number; phase: number };

function buildTraces(w: number, h: number): Trace[] {
  const traces: Trace[] = [];
  const seed = [
    [
      [0.06, 0.22],
      [0.22, 0.22],
      [0.22, 0.48],
      [0.4, 0.48],
    ],
    [
      [0.72, 0.18],
      [0.88, 0.18],
      [0.88, 0.42],
      [0.7, 0.42],
      [0.7, 0.62],
    ],
    [
      [0.08, 0.78],
      [0.28, 0.78],
      [0.28, 0.62],
      [0.48, 0.62],
    ],
    [
      [0.58, 0.82],
      [0.82, 0.82],
      [0.82, 0.66],
      [0.94, 0.66],
    ],
    [
      [0.46, 0.12],
      [0.46, 0.34],
      [0.62, 0.34],
    ],
  ];
  seed.forEach((raw, i) => {
    traces.push({
      points: raw.map(([x, y]) => [x * w, y * h]),
      speed: 0.18 + i * 0.04,
      phase: i * 0.7,
    });
  });
  return traces;
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;
    let traces: Trace[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      traces = buildTraces(width, height);
    };

    const lengthOf = (pts: [number, number][]) => {
      let len = 0;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (!a || !b) continue;
        len += Math.hypot(b[0] - a[0], b[1] - a[1]);
      }
      return len;
    };

    const pointAt = (pts: [number, number][], dist: number): [number, number] | null => {
      let left = dist;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (!a || !b) continue;
        const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (left <= seg) {
          const k = seg === 0 ? 0 : left / seg;
          return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
        }
        left -= seg;
      }
      return pts[pts.length - 1] ?? null;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const step = 56;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(130, 191, 232, 0.07)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      traces.forEach((trace) => {
        const total = lengthOf(trace.points);
        ctx.beginPath();
        trace.points.forEach(([x, y], i) => {
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = "rgba(126, 177, 216, 0.34)";
        ctx.lineWidth = 1.15;
        ctx.stroke();

        const head = ((t * trace.speed + trace.phase * 80) % (total + 80)) - 20;
        const p = pointAt(trace.points, Math.max(0, Math.min(total, head)));
        if (p) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(67, 187, 255, 0.92)";
          ctx.arc(p[0], p[1], 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = "rgba(8, 120, 189, 0.24)";
          ctx.arc(p[0], p[1], 9, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (!reduce) {
        t += 1;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 size-full"
      aria-hidden="true"
    />
  );
}
