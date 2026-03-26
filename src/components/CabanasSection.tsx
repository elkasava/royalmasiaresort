"use client";

import { useEffect, useRef } from "react";

const cabanas = [
  {
    id: "amsterdam",
    name: "Amsterdam",
    subtitle: "Benedenverdieping",
    description:
      "Cabana Amsterdam ligt op de begane grond, direct aan het water. Het open concept geeft u het gevoel volledig in de natuur te zijn, met een prachtig uitzicht op de rivier en het omringende regenwoud.",
    features: ["Open concept", "Wateruitzicht", "Directe toegang tot pier", "Privé sfeer"],
    image: "/images/cabanas.jpg",
    badge: "Populair",
    floor: "Beneden",
  },
  {
    id: "kikkenstein",
    name: "Kikkenstein",
    subtitle: "Bovenverdieping",
    description:
      "Cabana Kikkenstein bevindt zich op de bovenverdieping en biedt een adembenemend panoramisch uitzicht over de boomtoppen en de rivier. De perfecte plek om 's ochtends wakker te worden met de geluiden van de jungle.",
    features: ["Panoramisch uitzicht", "Boven de boomtoppen", "Perfecte zonsopgang", "Rustgevende ligging"],
    image: "/images/building.jpg",
    badge: "Panorama",
    floor: "Boven",
  },
];

export default function CabanasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        ctx = gsap.context(() => {
          const travelDistance = track.scrollWidth - window.innerWidth;
          gsap.to(track, {
            x: -travelDistance,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + travelDistance,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }, section);
      });
    });

    return () => {
      ctx?.revert();
    };
  }, []);

  const scrollToBooking = () => {
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="cabanas"
      className="bg-[#0e1e12] overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Fixed header */}
      <div className="relative z-10 pt-16 pb-6 px-[8vw]" data-reveal>
        <span className="gold-line" />
        <div className="flex items-end justify-between">
          <div>
            <p className="section-label mb-2">Verblijf</p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
              className="text-white"
            >
              Onze Cabana&apos;s
            </h2>
          </div>
          <p
            style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
            className="text-white/30 text-xs tracking-widest uppercase hidden md:block"
          >
            scroll om te ontdekken →
          </p>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ height: "calc(100vh - 180px)" }}
      >
        {cabanas.map((c, i) => (
          <div
            key={c.id}
            className="flex items-center gap-16 flex-shrink-0 px-[8vw]"
            style={{ width: "100vw" }}
          >
            {/* Image */}
            <div
              className={`relative flex-shrink-0 overflow-hidden ${i % 2 === 1 ? "order-2" : ""}`}
              style={{ width: "42vw", height: "62vh" }}
            >
              <img
                src={c.image}
                alt={`Cabana ${c.name}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e12]/70 to-transparent" />
              <div className="absolute top-6 left-6 bg-[#b83428] text-white px-4 py-1.5">
                <span
                  style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                  className="text-xs tracking-widest uppercase"
                >
                  {c.badge}
                </span>
              </div>
              <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5">
                <span
                  style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                  className="text-xs tracking-wider"
                >
                  {c.floor}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1" style={{ maxWidth: "420px" }}>
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-3"
              >
                {c.subtitle}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                }}
                className="text-white mb-5"
              >
                Cabana {c.name}
              </h3>
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                className="text-white/60 text-sm leading-relaxed mb-8"
              >
                {c.description}
              </p>
              <ul className="space-y-3 mb-10">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-6 h-px bg-[#b83428] flex-shrink-0" />
                    <span
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                      className="text-white/70 text-sm"
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-8">
                <div>
                  <p
                    style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                    className="text-white/40 text-xs tracking-widest uppercase"
                  >
                    Vanaf
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "2.5rem",
                    }}
                    className="text-[#b83428]"
                  >
                    €30
                    <span
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                      className="text-white/40 text-sm ml-1"
                    >
                      p.p.p.n.
                    </span>
                  </p>
                </div>
                <button onClick={scrollToBooking} className="btn-gold text-xs py-3.5 px-7">
                  Reserveer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress hint */}
      <p
        style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/25 text-xs tracking-widest uppercase"
      >
        Keuken huur beschikbaar · 1.000 SRD/dag
      </p>
    </section>
  );
}
