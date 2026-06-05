import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Global smooth scroll (Lenis) wired into the GSAP ticker so that
 * ScrollTrigger and Lenis share one render loop. Mount once at the app root.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Respect users who truly can't tolerate motion.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}

/**
 * Reveal-on-scroll for any element carrying the `.reveal` class.
 * Batched so a stagger ripples through siblings as a group scrolls in.
 * Pass `ready` so it scans the DOM only once the page content is mounted
 * (e.g. after the intro loader clears).
 */
export function useScrollReveal(ready = true) {
  useEffect(() => {
    if (!ready) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const els = gsap.utils.toArray<HTMLElement>('.reveal');
    if (reduce) {
      gsap.set(els, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(els, { opacity: 0, y: 40 });

    const batch = ScrollTrigger.batch(els, {
      start: 'top 88%',
      onEnter: (targets) =>
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          overwrite: true,
        }),
    });

    // Re-measure once fonts/images settle.
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(t);
      batch.forEach((st) => st.kill());
    };
  }, [ready]);
}

export { gsap, ScrollTrigger };
