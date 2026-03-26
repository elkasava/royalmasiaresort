"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    import("lenis").then((mod) => {
      const Lenis = mod.default;
      lenisInstance = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }) as { raf: (time: number) => void; destroy: () => void };

      function raf(time: number) {
        lenisInstance!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (lenisInstance) lenisInstance.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
