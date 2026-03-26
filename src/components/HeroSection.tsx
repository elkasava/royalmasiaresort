"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBooking = () =>
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.querySelector("#over")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden flex items-center justify-center">
      {/* Background: video with image fallback */}
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
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1e12]/65 via-[#0e1e12]/35 to-[#0e1e12]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="section-label text-[#b83428] mb-4 opacity-0 animate-fade-up animate-delay-100"
          style={{ animationFillMode: "forwards" }}
        >
          Suriname &bull; Natuur &bull; Rust
        </p>

        <h1
          style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive", animationFillMode: "forwards" }}
          className="text-white text-6xl sm:text-8xl lg:text-[9rem] font-normal leading-none tracking-wider mb-6 opacity-0 animate-fade-up animate-delay-200"
        >
          Royal Massia
          <span className="block italic text-[#b83428]">Resort</span>
        </h1>

        <p
          style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif", animationFillMode: "forwards" }}
          className="text-white/80 text-lg sm:text-xl font-light tracking-wide mb-10 max-w-xl mx-auto opacity-0 animate-fade-up animate-delay-300"
        >
          Ontsnap naar de wildernis van Suriname. Verblijf in een cabana aan het water,
          vaar in een kano en beleef de ongerepte natuur.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-400"
          style={{ animationFillMode: "forwards" }}
        >
          <button onClick={scrollToBooking} className="btn-gold text-sm">
            Boek uw verblijf
          </button>
          <button onClick={scrollToAbout} className="btn-outline text-sm">
            Ontdek meer
          </button>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-8 sm:gap-16 opacity-0 animate-fade-up animate-delay-500"
          style={{ animationFillMode: "forwards" }}
        >
          {[
            { value: "2", label: "Cabana's" },
            { value: "€30", label: "p.p.p.n." },
            { value: "3+", label: "Activiteiten" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                className="text-[#b83428] text-3xl sm:text-4xl font-light"
              >
                {s.value}
              </p>
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-white/60 text-xs tracking-widest uppercase mt-1"
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span
          style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
          className="text-white text-[0.65rem] tracking-[0.25em] uppercase"
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-white/40 relative overflow-hidden">
          <div className="w-full h-1/2 bg-[#b83428] absolute top-0 animate-[scrollLine_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { top: -50%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
