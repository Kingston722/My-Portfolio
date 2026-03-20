import { useEffect, useRef } from "react";

const STAR_COLOR = "rgba(255, 255, 255, 0.95)";
const BASE_STAR_SPEED = 0.08;
const MAX_PULL = 0.009;
const PULL_SCALE = 70;
const SWIRL_FACTOR = 0.00002;
const VELOCITY_DAMPING = 0.986;

export const GravityStarsBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let animationId;

    const pointer = {
      x: 0,
      y: 0,
      active: false,
    };

    let stars = [];

    const resetCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(320, Math.max(120, Math.floor((width * height) / 12000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * BASE_STAR_SPEED,
        vy: (Math.random() - 0.5) * BASE_STAR_SPEED,
        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const movePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const tick = () => {
      context.clearRect(0, 0, width, height);

      const gravityX = pointer.active ? pointer.x : width * 0.5;
      const gravityY = pointer.active ? pointer.y : height * 0.45;

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        const dx = gravityX - star.x;
        const dy = gravityY - star.y;
        const distSq = dx * dx + dy * dy + 120;
        const pull = Math.min(MAX_PULL, PULL_SCALE / distSq);

        star.vx += dx * pull * 0.007;
        star.vy += dy * pull * 0.007;

        // A slight rotational term creates a space-like swirl instead of particle-web behavior.
        star.vx += -dy * SWIRL_FACTOR;
        star.vy += dx * SWIRL_FACTOR;

        star.vx *= VELOCITY_DAMPING;
        star.vy *= VELOCITY_DAMPING;

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < -30) star.x = width + 30;
        if (star.x > width + 30) star.x = -30;
        if (star.y < -30) star.y = height + 30;
        if (star.y > height + 30) star.y = -30;

        const trailX = star.x - star.vx * 4;
        const trailY = star.y - star.vy * 4;

        context.strokeStyle = "rgba(255,255,255,0.1)";
        context.lineWidth = 0.65;
        context.beginPath();
        context.moveTo(trailX, trailY);
        context.lineTo(star.x, star.y);
        context.stroke();

        context.fillStyle = STAR_COLOR;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationId = window.requestAnimationFrame(tick);
    };

    resetCanvas();
    tick();

    window.addEventListener("resize", resetCanvas);
    window.addEventListener("pointermove", movePointer);
    window.addEventListener("pointerleave", clearPointer);

    return () => {
      window.removeEventListener("resize", resetCanvas);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("pointerleave", clearPointer);
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={className} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),rgba(0,0,0,0)_50%)]" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default GravityStarsBackground;