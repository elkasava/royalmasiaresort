"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Reveal all [data-reveal] elements
        const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
        elements.forEach((el) => {
          const delay = parseFloat(el.getAttribute("data-delay") || "0");
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                once: true,
              },
            }
          );
        });

        // Staggered card groups
        document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
          const children = group.children;
          gsap.fromTo(
            children,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.15,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              scrollTrigger: {
                trigger: group,
                start: "top 80%",
                once: true,
              },
            }
          );
        });
      });
    });
  }, []);

  return null;
}
