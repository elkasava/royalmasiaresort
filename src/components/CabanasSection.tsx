"use client";

const cabanas = [
  {
    id: "amsterdam",
    name: "Amsterdam",
    subtitle: "Benedenverdieping",
    description:
      "Cabana Amsterdam ligt op de begane grond, direct aan het water. Het open concept geeft u het gevoel volledig in de natuur te zijn, met een prachtig uitzicht op de rivier en het omringende regenwoud.",
    features: ["Open concept", "Wateruitzicht", "Directe toegang tot pier", "Prive sfeer"],
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
  const scrollToBooking = () => {
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cabanas" className="section-padding bg-[#0e1e12] overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="gold-line mx-auto" />
          <p className="section-label mb-3">Verblijf</p>
          <h2
            style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
            className="text-white text-4xl sm:text-5xl font-light"
          >
            Onze Cabana&apos;s
          </h2>
          <p
            style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
            className="text-white/60 mt-4 max-w-lg mx-auto text-base"
          >
            Elke cabana heeft een eigen karakter, vernoemd naar een Amsterdamse wijk.
            Open concept — een authentieke verbinding met de natuur.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cabanas.map((c) => (
            <div key={c.id} className="group bg-[#1a3a22] card-hover overflow-hidden">
              {/* Image with blob overlay accent */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={c.image}
                  alt={`Cabana ${c.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a22]/80 to-transparent" />

                {/* Blob decoratie */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-[#b83428]/20"
                  style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                />

                <div className="absolute top-4 left-4 bg-[#b83428] text-white px-3 py-1">
                  <span
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-xs font-semibold tracking-widest uppercase"
                  >
                    {c.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5">
                  <span style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-xs tracking-wider">
                    {c.floor}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-2"
                >
                  {c.subtitle}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                  className="text-white text-3xl font-light mb-4"
                >
                  Cabana {c.name}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/60 text-sm leading-relaxed mb-6"
                >
                  {c.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="w-4 h-px bg-[#b83428] flex-shrink-0" />
                      <span style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-white/70 text-sm">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between border-t border-white/10 pt-6">
                  <div>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-white/40 text-xs tracking-widest uppercase">
                      Vanaf
                    </p>
                    <p style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }} className="text-[#b83428] text-3xl font-light">
                      €30
                      <span style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-white/40 text-sm ml-1">
                        p.p.p.n.
                      </span>
                    </p>
                  </div>
                  <button onClick={scrollToBooking} className="btn-gold text-xs py-3">
                    Reserveer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo strip — echte resort foto's */}
        <div className="mt-16 grid grid-cols-3 gap-3 h-40 sm:h-56">
          {["/images/river1.jpg", "/images/resort1.jpg", "/images/nature1.jpg"].map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>

        <p
          style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
          className="text-center text-white/40 text-xs tracking-wide mt-8"
        >
          Keuken huur beschikbaar voor 1.000 SRD per dag &bull; Prijs in SRD op dagkoers
        </p>
      </div>
    </section>
  );
}
