"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let qdx: ((v: number) => void) | null = null;
    let qdy: ((v: number) => void) | null = null;
    let qrx: ((v: number) => void) | null = null;
    let qry: ((v: number) => void) | null = null;

    import("gsap").then(({ gsap }) => {
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

      qdx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
      qdy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });
      qrx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
      qry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        qdx!(e.clientX);
        qdy!(e.clientY);
        qrx!(e.clientX);
        qry!(e.clientY);
      };
      document.addEventListener("mousemove", onMove);

      const onEnter = () => {
        gsap.to(ring, { width: 56, height: 56, opacity: 0.9, duration: 0.35, ease: "power2.out" });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      };
      const onLeave = () => {
        gsap.to(ring, { width: 30, height: 30, opacity: 0.6, duration: 0.35, ease: "power2.out" });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      };

      const bind = () => {
        document
          .querySelectorAll("a, button, [role='button'], input, select, textarea, label")
          .forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
          });
      };
      bind();

      const obs = new MutationObserver(bind);
      obs.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener("mousemove", onMove);
        obs.disconnect();
      };
    });
  }, []);

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          border: "1px solid rgba(184, 52, 40, 0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          opacity: 0.6,
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          background: "var(--color-accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
        }}
      />
    </>
  );
}
