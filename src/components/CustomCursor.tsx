"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let qx: ((v: number) => void) | null = null;
    let qy: ((v: number) => void) | null = null;

    import("gsap").then(({ gsap }) => {
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      qx = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "none" });
      qy = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "none" });

      const onMove = (e: MouseEvent) => {
        qx!(e.clientX);
        qy!(e.clientY);
      };
      document.addEventListener("mousemove", onMove);

      const grow = () =>
        gsap.to(cursor, { width: 44, height: 44, duration: 0.3, ease: "power2.out" });
      const shrink = () =>
        gsap.to(cursor, { width: 10, height: 10, duration: 0.3, ease: "power2.out" });

      const addListeners = () => {
        document.querySelectorAll("a, button, [role='button'], input, select, textarea, label").forEach((el) => {
          el.addEventListener("mouseenter", grow);
          el.addEventListener("mouseleave", shrink);
        });
      };
      addListeners();

      const observer = new MutationObserver(addListeners);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener("mousemove", onMove);
        observer.disconnect();
      };
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--color-accent)",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
      }}
    />
  );
}
