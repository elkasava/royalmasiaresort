const facilities = [
  { icon: "🌐", title: "WiFi", desc: "Gratis draadloos internet in het hele resort." },
  { icon: "🛶", title: "Pier", desc: "Houten pier over het water — ideaal om te relaxen, vissen of van het uitzicht te genieten." },
  { icon: "🪢", title: "Hangmatten", desc: "Sfeervol hangmattenkamp in het groen. Schommel in de bries en luister naar de jungle." },
  { icon: "🚣", title: "Kajaks", desc: "Verken het water op eigen tempo. Ontdek verborgen kreken en oevers." },
  { icon: "⛵", title: "Kano's", desc: "Huur een kano voor een rustige tocht door het omringende waternetwerk." },
  { icon: "🌿", title: "Tropische tuin", desc: "Weelderig tropisch groen rondom het resort met exotische flora en fauna." },
];

export default function FacilitiesSection() {
  return (
    <section id="faciliteiten" className="section-padding bg-[#f5ede4] overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-16" data-reveal>
          <span className="gold-line" />
          <p className="section-label mb-3">Faciliteiten</p>
          <h2
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            className="text-[#1a3a22]"
          >
            Alles wat u<br />
            <span className="text-[#b83428]">nodig heeft</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-5" data-reveal-stagger>
            {facilities.map((f, i) => (
              <div key={f.title} className="group p-7 bg-white border border-[#dfc0b0] card-hover" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.2rem" }} className="text-[#1a3a22] mb-2 group-hover:text-[#b83428] transition-colors">
                  {f.title}
                </h3>
                <p style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }} className="text-[#6b7280] text-sm leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-4 w-8 h-0.5 bg-[#b83428] group-hover:w-14 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Right side: blob images */}
          <div className="relative flex justify-center items-center h-[480px]" data-reveal data-delay="0.2">
            {/* Grote blob foto — rivier */}
            <div
              className="absolute w-72 h-80 overflow-hidden"
              style={{
                borderRadius: "55% 45% 40% 60% / 50% 60% 40% 50%",
                top: "0",
                left: "10%",
                boxShadow: "0 20px 50px rgba(26,61,43,0.22)",
              }}
            >
              <img
                src="/images/river2.jpg"
                alt="Rivier bij het resort"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Kleine blob foto — resort gebouw */}
            <div
              className="absolute w-52 h-52 overflow-hidden border-4 border-white"
              style={{
                borderRadius: "40% 60% 55% 45% / 55% 45% 60% 40%",
                bottom: "0",
                right: "5%",
                boxShadow: "0 12px 35px rgba(26,61,43,0.18)",
              }}
            >
              <img
                src="/images/resort2.jpg"
                alt="Resort faciliteiten"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decoratieve blob achtergrond */}
            <div
              className="absolute w-64 h-64 bg-[#1a3a22]/8 -z-10"
              style={{
                borderRadius: "70% 30% 60% 40% / 40% 60% 30% 70%",
                bottom: "10%",
                left: "0",
              }}
            />
            <div
              className="absolute w-40 h-40 bg-[#b83428]/10 -z-10"
              style={{
                borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%",
                top: "5%",
                right: "0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
