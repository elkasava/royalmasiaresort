"use client";

export default function PricingSection() {
  const scrollToBooking = () => {
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tarieven" className="section-padding bg-[#f5ede4]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-20" data-reveal>
          <span className="gold-line mx-auto" />
          <p className="section-label mb-4">Tarieven</p>
          <h2
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
            className="text-[#1a3a22]"
          >
            Eenvoudige &amp; Transparante<br />
            <span className="text-[#b83428]">Prijzen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Main rate */}
          <div className="md:col-span-2 bg-[#1a3a22] p-16 text-white relative overflow-hidden" data-reveal>
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#b83428]/10 rounded-full -translate-y-16 translate-x-16" />
            <p
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "12rem",
                lineHeight: 1,
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1rem",
                color: "rgba(255,255,255,0.03)",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              €30
            </p>
            <p
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
              className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-4"
            >
              Verblijf
            </p>
            <div className="flex items-end gap-4 mb-10">
              <p
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, fontSize: "5.5rem", lineHeight: 1 }}
                className="text-[#b83428]"
              >
                €30
              </p>
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                className="text-white/60 text-sm mb-5"
              >
                per persoon<br />per nacht
              </p>
            </div>
            <p
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
              className="text-white/70 text-sm leading-relaxed mb-10"
            >
              Of equivalent in SRD (Surinaamse Dollar) tegen de dagkoers.<br />
              Vraag ons naar de actuele wisselkoers.
            </p>
            <ul className="space-y-5 mb-12">
              {[
                "Verblijf in cabana Amsterdam of Kikkenstein",
                "Toegang tot pier, hangmatten, kajaks & kano's",
                "Gratis WiFi",
                "Omgeving vol tropische natuur",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-[#b83428] mt-0.5 text-base">✓</span>
                  <span
                    style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                    className="text-white/70 text-sm leading-relaxed"
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
          <div className="space-y-6" data-reveal data-delay="0.15">
            {/* Kitchen */}
            <div className="bg-white border border-[#dfc0b0] p-10">
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-3"
              >
                Extra
              </p>
              <h3
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, fontSize: "1.7rem" }}
                className="text-[#1a3a22] mb-4"
              >
                Keuken huur
              </h3>
              <p
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, fontSize: "2.6rem" }}
                className="text-[#b83428] mb-2"
              >
                1.000 SRD
              </p>
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                className="text-[#6b7280] text-xs mb-5"
              >
                per dag
              </p>
              <div className="w-full h-px bg-[#dfc0b0] mb-5" />
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                className="text-[#6b7280] text-sm leading-relaxed"
              >
                Zelf koken in onze volledig uitgeruste gedeelde keuken.
              </p>
            </div>

            {/* Info card */}
            <div className="bg-[#0e1e12] p-10 text-white">
              <p
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, fontSize: "1.4rem" }}
                className="text-[#b83428] mb-4"
              >
                Reserveren?
              </p>
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                className="text-white/60 text-sm leading-relaxed mb-6"
              >
                Boek direct via ons formulier of stuur een WhatsApp bericht. We bevestigen uw reservering zo snel mogelijk.
              </p>
              <a
                href="https://wa.me/5978900286"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 w-full justify-center"
              >
                {/* @ts-ignore */}
                <ion-icon name="logo-whatsapp" style={{ fontSize: "1rem", color: "white" }} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
