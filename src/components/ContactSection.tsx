export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[#f5ede4]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div data-reveal>
            <span className="gold-line" />
            <p className="section-label mb-3">Contact</p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              className="text-[#1a3a22] mb-6"
            >
              We zijn er<br />
              <span className="text-[#b83428]">voor u</span>
            </h2>
            <p
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
              className="text-[#6b7280] text-base leading-relaxed mb-10"
            >
              Neem contact op voor reserveringen, vragen of meer informatie over Royal Massia Resort.
              Wij reageren zo snel mogelijk — alles verloopt via mobiel.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: "logo-whatsapp",
                  label: "WhatsApp / Mobiel",
                  value: "8900286",
                  href: "https://wa.me/5978900286",
                  sub: "+597 890 0286 (Suriname)",
                },
                {
                  icon: "location-outline",
                  label: "Locatie",
                  value: "Suriname",
                  href: undefined,
                  sub: "Exacte locatie op aanvraag",
                },
                {
                  icon: "time-outline",
                  label: "Bereikbaar",
                  value: "Elke dag",
                  href: undefined,
                  sub: "08:00 – 20:00 (lokale tijd)",
                },
              ].map((c) => (
                <div key={c.label} className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#1a3a22] flex items-center justify-center flex-shrink-0">
                    {/* @ts-ignore */}
                    <ion-icon name={c.icon} style={{ fontSize: "1.4rem", color: "white" }} />
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                      className="text-[#6b7280] text-xs tracking-widest uppercase"
                    >
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 400 }}
                        className="text-[#1a3a22] hover:text-[#b83428] transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p
                        style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 400 }}
                        className="text-[#1a3a22]"
                      >
                        {c.value}
                      </p>
                    )}
                    <p
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                      className="text-[#6b7280] text-sm mt-0.5"
                    >
                      {c.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://wa.me/5978900286"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] flex items-center justify-center text-white hover:scale-105 transition-transform"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1877F2] flex items-center justify-center text-white hover:scale-105 transition-transform"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: info card + WhatsApp CTA */}
          <div className="space-y-6" data-reveal data-delay="0.15">
            <div className="bg-[#1a3a22] p-10 text-white">
              <p
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem" }}
                className="text-[#b83428] mb-4"
              >
                &ldquo;De natuur wacht op u&rdquo;
              </p>
              <p
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                className="text-white/60 text-sm leading-relaxed mb-6"
              >
                Royal Massia Resort ligt in het prachtige Suriname, een van de meest ongerepte
                natuurgebieden ter wereld. Exact 1 uur van Paramaribo, verscholen in het groen.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                {[
                  { label: "Land", value: "Suriname" },
                  { label: "Regio", value: "Binnenlanden" },
                  { label: "Afstand Paramaribo", value: "~1 uur" },
                  { label: "Verbinding", value: "Op aanvraag" },
                ].map((i) => (
                  <div key={i.label}>
                    <p
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
                      className="text-[#b83428] text-xs tracking-widest uppercase"
                    >
                      {i.label}
                    </p>
                    <p
                      style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                      className="text-white text-sm mt-1"
                    >
                      {i.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5978900286?text=Hallo%2C%20ik%20wil%20graag%20meer%20informatie%20over%20Royal%20Massia%20Resort."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#25D366] p-6 group hover:bg-[#1ea855] transition-colors"
            >
              <div>
                <p
                  style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 500 }}
                  className="text-white text-sm"
                >
                  Direct via WhatsApp
                </p>
                <p
                  style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
                  className="text-white/80 text-xs mt-0.5"
                >
                  Klik hier om direct te chatten
                </p>
              </div>
              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
