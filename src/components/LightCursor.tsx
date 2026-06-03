import { useEffect, useRef } from 'react';

/**
 * "A Light Unto the Nations" — a soft golden light follows the pointer:
 * a bright core dot plus a larger glow ring that lags behind with easing.
 * Disabled on touch / coarse pointers and for reduced-motion users.
 */
export default function LightCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    document.documentElement.classList.add('light-cursor-on');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    // Grow the glow over interactive elements.
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [role="button"], input, textarea, select, label');
      ring.classList.toggle('is-active', !!interactive);
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.classList.remove('light-cursor-on');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="light-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="light-cursor-dot" aria-hidden="true" />
    </>
  );
}
