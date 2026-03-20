import { useEffect, useRef } from "react";

const STAR_COLOR = "rgba(255, 255, 255, 0.9)";
const LINE_COLOR = "rgba(255, 255, 255, 0.14)";
const BASE_STAR_SPEED = 0.38;
const STAR_FRICTION = 0.992;

const GravityStarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return undefined;
    }

    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
    };

    let stars = [];
    let width = 0;
    let height = 0;
    let rafId;

    const createStars = (count) => {
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * BASE_STAR_SPEED,
        vy: (Math.random() - 0.5) * BASE_STAR_SPEED,
        size: Math.random() * 1.8 + 0.6,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.max(95, Math.floor((width * height) / 13000));
      createStars(Math.min(280, density));
    };

    const onPointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];

        if (pointer.active) {
          const dx = pointer.x - star.x;
          const dy = pointer.y - star.y;
          const distanceSq = dx * dx + dy * dy;
          const gravityRadius = 220;

          if (distanceSq < gravityRadius * gravityRadius) {
            const force = (1 - distanceSq / (gravityRadius * gravityRadius)) * 0.03;
            star.vx += dx * force * 0.0015;
            star.vy += dy * force * 0.0015;
          }
        }

        star.vx *= STAR_FRICTION;
        star.vy *= STAR_FRICTION;

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < -20) star.x = width + 20;
        if (star.x > width + 20) star.x = -20;
        if (star.y < -20) star.y = height + 20;
        if (star.y > height + 20) star.y = -20;
      }

      ctx.fillStyle = STAR_COLOR;
      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 1;

      for (let i = 0; i < stars.length; i += 1) {
        const a = stars[i];

        for (let j = i + 1; j < stars.length; j += 1) {
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 95) {
            const alpha = (1 - distance / 95) * 0.6;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      rafId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-80 mix-blend-screen"
      />
    </div>
  );
};

export default GravityStarsBackground;