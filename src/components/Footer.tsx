"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1f14] text-white">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-left mb-4"
            >
              <p
                style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
                className="text-white text-2xl font-light tracking-widest uppercase"
              >
                Royal Massia
              </p>
              <p
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-[#b83428] text-[0.6rem] tracking-[0.35em] uppercase mt-0.5"
              >
                Resort &amp; Nature Retreat
              </p>
            </button>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-white/50 text-sm leading-relaxed max-w-xs mt-4"
            >
              Ontsnap naar de ongerepte natuur van Suriname. Verblijf in een cabana, verken watervallen en laad uw batterijen op in het hart van het regenwoud.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/5978900286"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-5"
            >
              Navigatie
            </p>
            <ul className="space-y-3">
              {[
                { label: "Over het Resort", id: "#over" },
                { label: "Cabana's", id: "#cabanas" },
                { label: "Faciliteiten", id: "#faciliteiten" },
                { label: "Activiteiten", id: "#activiteiten" },
                { label: "Tarieven", id: "#tarieven" },
                { label: "Boek nu", id: "#boeken" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-white/50 hover:text-[#b83428] text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-5"
            >
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/30 text-xs tracking-widest uppercase"
                >
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5978900286"
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/70 hover:text-[#b83428] text-sm transition-colors"
                >
                  8900286
                </a>
              </li>
              <li>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/30 text-xs tracking-widest uppercase"
                >
                  Land
                </p>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/70 text-sm"
                >
                  Suriname
                </p>
              </li>
              <li>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/30 text-xs tracking-widest uppercase"
                >
                  Open
                </p>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-white/70 text-sm"
                >
                  Het hele jaar
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
            className="text-white/25 text-xs"
          >
            &copy; {year} Royal Massia Resort. Alle rechten voorbehouden.
          </p>
          <p
            style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
            className="text-white/20 text-xs"
          >
            Suriname &bull; Natuur &bull; Beleving
          </p>
        </div>
      </div>
    </footer>
  );
}
