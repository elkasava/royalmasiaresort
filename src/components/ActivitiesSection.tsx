const activities = [
  {
    id: "tapawatra",
    title: "Tapawatra Watervallen",
    subtitle: "Avontuur",
    description:
      "Bezoek de spectaculaire Tapawatra watervallen — een van Surinames verborgen parels. Een wandeling door de jungle leidt u naar dit betoverende natuurwonder.",
    duration: "Halve dag",
    difficulty: "Gemiddeld",
    highlight: "Must-do",
    image: "/images/river1.jpg",
  },
  {
    id: "ananasberg",
    title: "Ananasberg",
    subtitle: "Natuur & Uitzicht",
    description:
      "Beklim de Ananasberg voor een adembenemend panoramisch uitzicht over het ongerepte oerwoud. Unieke flora en fauna garanderen een onvergetelijke ervaring.",
    duration: "Halve dag",
    difficulty: "Gemiddeld",
    highlight: "Panorama",
    image: "/images/outlook.jpg",
  },
  {
    id: "dorpswandeling",
    title: "Dorpswandeling",
    subtitle: "Cultuur",
    description:
      "Ontdek het authentieke lokale leven tijdens een begeleide dorpswandeling. Maak kennis met de bevolking, tradities en de unieke Surinaamse cultuur.",
    duration: "2-3 uur",
    difficulty: "Gemakkelijk",
    highlight: "Cultureel",
    image: "/images/nature3.jpg",
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activiteiten" className="section-padding bg-[#1a3a22] overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="gold-line mx-auto" />
          <p className="section-label mb-3">Belevenissen</p>
          <h2
            style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
            className="text-white text-4xl sm:text-5xl font-light"
          >
            Activiteiten &amp; Uitstapjes
          </h2>
          <p
            style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
            className="text-white/60 mt-4 max-w-lg mx-auto"
          >
            Ontdek de omgeving met onze curated ervaringen. Van avontuurlijke treks tot culturele wandelingen.
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-8">
          {activities.map((a, i) => (
            <div
              key={a.id}
              className={`group grid md:grid-cols-2 gap-0 overflow-hidden bg-[#0e1e12] ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0e1e12]/25" />

                {/* Blob decoratie over de afbeelding */}
                <div
                  className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#b83428]/15"
                  style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                />

                <div className="absolute top-4 left-4 bg-[#b83428] text-white px-3 py-1">
                  <span
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-xs font-semibold tracking-widest uppercase"
                  >
                    {a.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-2"
                >
                  {a.subtitle}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                  className="text-white text-3xl font-light mb-4"
                >
                  {a.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/60 text-sm leading-relaxed mb-6"
                >
                  {a.description}
                </p>
                <div className="flex gap-6">
                  <div>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-[#b83428] text-xs tracking-widest uppercase">Duur</p>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-white/80 text-sm mt-1">{a.duration}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-[#b83428] text-xs tracking-widest uppercase">Niveau</p>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-white/80 text-sm mt-1">{a.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width nature photo strip with blob masking */}
        <div className="mt-16 relative">
          <div
            className="w-full h-64 overflow-hidden"
            style={{ borderRadius: "0 0 50% 50% / 0 0 30% 30%" }}
          >
            <img
              src="/images/nature2.jpg"
              alt="Natuur rondom het resort"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a22]/60 to-transparent" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }} className="text-white text-2xl font-light italic">
                Ongerepte natuur, direct voor uw deur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
