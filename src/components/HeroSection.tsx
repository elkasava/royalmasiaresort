"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP word animation
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      if (!headlineRef.current) return;
      const words = headlineRef.current.querySelectorAll(".hero-word");
      gsap.fromTo(
        words,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          delay: 0.2,
        }
      );
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "cubic-bezier(0.16, 1, 0.3, 1)", delay: 0.6 }
        );
      }
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "cubic-bezier(0.16, 1, 0.3, 1)", delay: 0.85 }
        );
      }
    });
  }, []);

  const scrollToBooking = () =>
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.querySelector("#over")?.scrollIntoView({ behavior: "smooth" });

  const headline = ["Royal", "Massia", "Resort"];

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
            poster="/images/outlook.jpg"
          >
            <source src="/images/royal.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/images/outlook.jpg"
            alt="Royal Massia Resort"
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
            loading="lazy"
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <p
          className="section-label text-[#b83428] mb-6"
          style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200, letterSpacing: "0.25em" }}
        >
          Suriname &bull; Natuur &bull; Rust
        </p>

        {/* Headline — word-by-word GSAP */}
        <div
          ref={headlineRef}
          className="overflow-hidden"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          <h1
            className="text-white leading-none tracking-wide"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            {headline.map((word, i) => (
              <span
                key={i}
                className="hero-word inline-block opacity-0"
                style={{ marginRight: i < headline.length - 1 ? "0.3em" : 0 }}
              >
                {word === "Resort" ? (
                  <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{word}</em>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-white/75 mt-6 mb-10 max-w-xl mx-auto opacity-0"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.8,
            letterSpacing: "0.02em",
          }}
        >
          Ontsnap naar de wildernis van Suriname. Verblijf in een cabana aan het water,
          vaar in een kano en beleef de ongerepte natuur.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <button onClick={scrollToBooking} className="btn-gold text-sm">
            Boek uw verblijf
          </button>
          <button onClick={scrollToAbout} className="btn-hero text-sm">
            Ontdek meer
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16">
          {[
            { value: "2", label: "Cabana's" },
            { value: "€30", label: "p.p.p.n." },
            { value: "3+", label: "Activiteiten" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-[#b83428]"
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                }}
              >
                {s.value}
              </p>
              <p
                className="text-white/50 text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span
          className="text-white text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-[#b83428] absolute top-0 animate-[scrollLine_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0%   { top: -50%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
