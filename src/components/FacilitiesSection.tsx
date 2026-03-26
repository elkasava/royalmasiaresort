"use client";

const facilities = [
  { icon: "wifi-outline", title: "WiFi", desc: "Gratis draadloos internet in het hele resort." },
  { icon: "boat-outline", title: "Pier", desc: "Houten pier over het water — ideaal om te relaxen, vissen of van het uitzicht te genieten." },
  { icon: "leaf-outline", title: "Hangmatten", desc: "Sfeervol hangmattenkamp in het groen. Schommel in de bries en luister naar de jungle." },
  { icon: "water-outline", title: "Kajaks", desc: "Verken het water op eigen tempo. Ontdek verborgen kreken en oevers." },
  { icon: "navigate-outline", title: "Kano's", desc: "Huur een kano voor een rustige tocht door het omringende waternetwerk." },
  { icon: "flower-outline", title: "Tropische tuin", desc: "Weelderig tropisch groen rondom het resort met exotische flora en fauna." },
];

export default function FacilitiesSection() {
  return (
    <section id="faciliteiten" className="section-padding bg-[#f5ede4] overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-20" data-reveal>
          <span className="gold-line" />
          <p className="section-label mb-3">Faciliteiten</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
            }}
            className="text-[#1a3a22]"
          >
            Alles wat u<br />
            <span className="text-[#b83428]">nodig heeft</span>
          </h2>
        </div>

        {/* Borderless grid — 3 columns, generous gaps */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "56px 72px" }}
          data-reveal-stagger
        >
          {facilities.map((f) => (
            <div key={f.title} className="group">
              {/* Ionicon */}
              <div className="mb-5" style={{ color: "var(--color-accent)", fontSize: "2rem" }}>
                {/* @ts-ignore */}
                <ion-icon name={f.icon} style={{ fontSize: "2.2rem", color: "var(--color-accent)" }} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400,
                  fontSize: "1.4rem",
                }}
                className="text-[#1a3a22] mb-3 group-hover:text-[#b83428] transition-colors duration-300"
              >
                {f.title}
              </h3>

              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                className="text-[#6b7280] text-sm leading-relaxed"
              >
                {f.desc}
              </p>

              {/* Accent line */}
              <div className="mt-5 h-px bg-[#b83428] w-8 group-hover:w-14 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Nature photo strip */}
        <div className="mt-24 relative overflow-hidden" data-reveal>
          <div
            className="w-full h-64 overflow-hidden"
            style={{ borderRadius: "0 0 50% 50% / 0 0 30% 30%" }}
          >
            <img
              src="/images/nature2.jpg"
              alt="Natuur rondom het resort"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5ede4]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
