export default function AboutSection() {
  return (
    <section id="over" className="section-padding bg-[#f5ede4] overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images with blob shapes */}
          <div className="relative">
            {/* Main image — blob shape */}
            <div className="relative">
              <div
                className="overflow-hidden w-full h-80 sm:h-96"
                style={{
                  borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
                  boxShadow: "0 24px 60px rgba(26,61,43,0.18)",
                }}
              >
                <img
                  src="/images/cabanas.jpg"
                  alt="Cabana's van Royal Massia Resort"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating secondary image — blob shape */}
              <div
                className="absolute -bottom-10 -right-6 w-44 h-44 sm:w-56 sm:h-56 overflow-hidden border-4 border-[#f5ede4]"
                style={{
                  borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                  boxShadow: "0 12px 30px rgba(26,61,43,0.2)",
                }}
              >
                <img
                  src="/images/flags.jpg"
                  alt="Resort sfeer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Blob decoratie achtergrond */}
              <div
                className="absolute -top-8 -left-8 w-48 h-48 bg-[#b83428]/10 -z-10"
                style={{ borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%" }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 left-4 bg-[#1a3a22] text-white p-5 hidden sm:block z-10">
              <p style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }} className="text-4xl font-light text-[#b83428]">Est.</p>
              <p style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }} className="text-3xl font-light">2024</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="gold-line" />
            <p className="section-label mb-3">Over het Resort</p>
            <h2
              style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
              className="text-[#1a3a22] text-4xl sm:text-5xl font-light mb-6 leading-tight"
            >
              Waar de jungle<br />
              <span className="italic text-[#b83428]">het water ontmoet</span>
            </h2>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-[#4a5568] text-base leading-relaxed mb-5"
            >
              Royal Massia Resort ligt verscholen in het hart van Suriname, omringd door weelderig
              tropisch regenwoud en de bruisende rivier. Ons resort biedt een unieke kans om volledig
              los te komen van de dagelijkse drukte en op te gaan in de ongerepte natuur.
            </p>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-[#4a5568] text-base leading-relaxed mb-8"
            >
              Verblijf in onze sfeervolle cabana's, vernoemd naar Amsterdamse wijken — elk met een
              eigen karakter. Geniet van de pier, de hangmatten, de kajaks en kano's terwijl u
              het geluid van de rivier om u heen hoort.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-[#dfc0b0] pt-8">
              {[
                { icon: "🌿", label: "Tropische natuur", desc: "Direct omringd door jungle" },
                { icon: "💧", label: "Aan de rivier", desc: "Pier, kajaks & kano's" },
                { icon: "🏡", label: "Open concept", desc: "Authentieke cabana ervaring" },
                { icon: "📶", label: "Verbonden", desc: "WiFi beschikbaar" },
              ].map((f) => (
                <div key={f.label} className="flex gap-3 items-start">
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="font-semibold text-[#1a3a22] text-sm">
                      {f.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }} className="text-[#6b7280] text-xs mt-0.5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
