"use client";

export default function PricingSection() {
  const scrollToBooking = () => {
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tarieven" className="section-padding bg-[#f5ede4]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="gold-line mx-auto" />
          <p className="section-label mb-3">Tarieven</p>
          <h2
            style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
            className="text-[#1a3a22] text-4xl sm:text-5xl font-light"
          >
            Eenvoudige &amp; Transparante<br />
            <span className="italic text-[#b83428]">Prijzen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Main rate */}
          <div className="md:col-span-2 bg-[#1a3a22] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#b83428]/10 rounded-full -translate-y-16 translate-x-16" />
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-2"
            >
              Verblijf
            </p>
            <div className="flex items-end gap-3 mb-6">
              <p
                style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                className="text-7xl font-light text-[#b83428]"
              >
                €30
              </p>
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-white/60 text-sm mb-4"
              >
                per persoon<br />per nacht
              </p>
            </div>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-white/70 text-sm mb-6"
            >
              Of equivalent in SRD (Surinaamse Dollar) tegen de dagkoers. Vraag ons naar de actuele wisselkoers.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Verblijf in cabana Amsterdam of Kikkenstein",
                "Toegang tot pier, hangmatten, kajaks & kano's",
                "Gratis WiFi",
                "Omgeving vol tropische natuur",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#b83428] mt-1">✓</span>
                  <span
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-white/70 text-sm"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button onClick={scrollToBooking} className="btn-gold text-sm">
              Boek nu
            </button>
          </div>

          {/* Extras */}
          <div className="space-y-4">
            {/* Kitchen */}
            <div className="bg-white border border-[#dfc0b0] p-8">
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-2"
              >
                Extra
              </p>
              <h3
                style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                className="text-[#1a3a22] text-2xl font-light mb-3"
              >
                Keuken huur
              </h3>
              <p
                style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                className="text-[#b83428] text-4xl font-light mb-2"
              >
                1.000 SRD
              </p>
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-[#6b7280] text-xs"
              >
                per dag
              </p>
              <div className="divider my-4" style={{ margin: "1rem 0" }} />
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-[#6b7280] text-sm"
              >
                Zelf koken in onze volledig uitgeruste gedeelde keuken.
              </p>
            </div>

            {/* Info card */}
            <div className="bg-[#0e1e12] p-8 text-white">
              <p
                style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                className="text-[#b83428] text-lg font-light mb-3"
              >
                Reserveren?
              </p>
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-white/60 text-sm mb-4"
              >
                Boek direct via ons formulier of stuur een WhatsApp bericht. We bevestigen uw reservering zo snel mogelijk.
              </p>
              <a
                href="https://wa.me/5978900286"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 w-full justify-center"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
