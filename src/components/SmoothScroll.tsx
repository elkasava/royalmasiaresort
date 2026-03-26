"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    type LenisInstance = {
      raf: (time: number) => void;
      destroy: () => void;
      on: (event: string, cb: (data: { velocity: number }) => void) => void;
    };

    let lenisInstance: LenisInstance | null = null;
    let rafId: number;

    Promise.all([import("lenis"), import("gsap")]).then(([lenisMod, gsapMod]) => {
      const Lenis = lenisMod.default;
      const { gsap } = gsapMod;

      lenisInstance = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }) as LenisInstance;

      function raf(time: number) {
        lenisInstance!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Lenis velocity → skewY distortion on stagger groups
      const skewTargets = document.querySelectorAll<HTMLElement>("[data-reveal-stagger]");
      if (skewTargets.length > 0) {
        const setters = Array.from(skewTargets).map((el) =>
          gsap.quickTo(el, "skewY", { duration: 0.8, ease: "power3" })
        );
        lenisInstance.on("scroll", ({ velocity }) => {
          const skew = Math.max(-6, Math.min(6, velocity * 0.04));
          setters.forEach((set) => set(skew));
        });
      }
    });

    return () => {
      if (lenisInstance) lenisInstance.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
