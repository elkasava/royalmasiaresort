"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--color-secondary)", color: "white", paddingBottom: "5rem" }}>
      {/* Accent divider top */}
      <div style={{ height: 1, background: "rgba(184,52,40,0.4)" }} />

      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-left mb-4"
            >
              <p
                className="text-white text-2xl tracking-widest uppercase"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
              >
                Royal Massia
              </p>
              <p
                className="text-[#b83428] text-[0.6rem] tracking-[0.35em] uppercase mt-0.5"
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
              >
                Resort &amp; Nature Retreat
              </p>
            </button>
            <p
              className="text-white/45 text-sm leading-relaxed max-w-xs mt-4"
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
            >
              Ontsnap naar de ongerepte natuur van Suriname. Verblijf in een cabana, verken
              watervallen en laad uw batterijen op in het hart van het regenwoud.
            </p>
            {/* Social icons using Ionicons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.08)", color: "var(--color-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                {/* @ts-ignore */}
                <ion-icon name="logo-instagram" style={{ fontSize: "1.2rem", color: "inherit" }} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.08)", color: "var(--color-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                {/* @ts-ignore */}
                <ion-icon name="logo-facebook" style={{ fontSize: "1.2rem", color: "inherit" }} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.08)", color: "var(--color-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                {/* @ts-ignore */}
                <ion-icon name="logo-tiktok" style={{ fontSize: "1.2rem", color: "inherit" }} />
              </a>
              <a
                href="https://wa.me/5978900286"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.08)", color: "var(--color-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                {/* @ts-ignore */}
                <ion-icon name="logo-whatsapp" style={{ fontSize: "1.2rem", color: "inherit" }} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
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
                    className="text-white/45 hover:text-[#b83428] text-sm transition-colors duration-300"
                    style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200, background: "none", border: "none" }}
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
              className="text-[#b83428] text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                {/* @ts-ignore */}
                <ion-icon name="call-outline" style={{ fontSize: "1rem", color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}>WhatsApp</p>
                  <a href="https://wa.me/5978900286" className="text-white/60 hover:text-[#b83428] text-sm transition-colors" style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}>
                    8900286
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                {/* @ts-ignore */}
                <ion-icon name="location-outline" style={{ fontSize: "1rem", color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}>Land</p>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}>Suriname</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                {/* @ts-ignore */}
                <ion-icon name="sunny-outline" style={{ fontSize: "1rem", color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}>Open</p>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}>Het hele jaar</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accent divider */}
      <div style={{ height: 1, background: "rgba(184,52,40,0.4)" }} />

      {/* Bottom bar */}
      <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-white/20 text-xs"
          style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
        >
          &copy; {year} Royal Massia Resort. Alle rechten voorbehouden.
        </p>
        <p
          className="text-white/15 text-xs"
          style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
        >
          Suriname &bull; Natuur &bull; Beleving
        </p>
      </div>
    </footer>
  );
}
