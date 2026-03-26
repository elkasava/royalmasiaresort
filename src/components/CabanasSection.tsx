"use client";

const cabanas = [
  {
    id: "amsterdam",
    name: "Amsterdam",
    subtitle: "Benedenverdieping",
    description:
      "Direct aan het water, op de begane grond. Open concept met prachtig uitzicht op de rivier en het omringende regenwoud.",
    features: ["Open concept", "Wateruitzicht", "Pier toegang", "Privé sfeer"],
    image: "/images/cabanas.jpg",
    badge: "Populair",
  },
  {
    id: "kikkenstein",
    name: "Kikkenstein",
    subtitle: "Bovenverdieping",
    description:
      "Panoramisch uitzicht over de boomtoppen en de rivier. Word wakker met de geluiden van de jungle.",
    features: ["Panoramisch uitzicht", "Boven de boomtoppen", "Perfecte zonsopgang", "Rust & stilte"],
    image: "/images/building.jpg",
    badge: "Panorama",
  },
];

export default function CabanasSection() {
  const scrollToBooking = () => {
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cabanas" className="section-padding bg-[#0e1e12]">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16" data-reveal>
          <span className="gold-line" />
          <p className="section-label mb-3">Verblijf</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
            }}
            className="text-white"
          >
            Onze Cabana&apos;s
          </h2>
          <p
            style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
            className="text-white/50 mt-4 max-w-md text-sm leading-relaxed"
          >
            Elk vernoemd naar een Amsterdamse wijk — elk met een eigen karakter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8" data-reveal-stagger>
          {cabanas.map((c) => (
            <div key={c.id} className="group overflow-hidden bg-[#1a3a22]">
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={c.image}
                  alt={`Cabana ${c.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a22]/80 to-transparent" />
                <div className="absolute top-5 left-5 bg-[#b83428] text-white px-3 py-1">
                  <span
                    style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                    className="text-xs tracking-widest uppercase"
                  >
                    {c.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p
                  style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                  className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-2"
                >
                  {c.subtitle}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  }}
                  className="text-white mb-4"
                >
                  Cabana {c.name}
                </h3>
                <p
                  style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                  className="text-white/55 text-sm leading-relaxed mb-6"
                >
                  {c.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="w-5 h-px bg-[#b83428] flex-shrink-0" />
                      <span
                        style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                        className="text-white/65 text-sm"
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between pt-6 border-t border-white/10">
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "1.8rem",
                    }}
                    className="text-[#b83428]"
                  >
                    €30
                    <span
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                      className="text-white/40 text-xs ml-1"
                    >
                      p.p.p.n.
                    </span>
                  </p>
                  <button onClick={scrollToBooking} className="btn-gold text-xs py-3 px-6">
                    Reserveer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
          className="text-center text-white/30 text-xs tracking-wide mt-10"
        >
          Keuken huur beschikbaar · 1.000 SRD/dag · Prijs ook in SRD op dagkoers
        </p>
      </div>
    </section>
  );
}
