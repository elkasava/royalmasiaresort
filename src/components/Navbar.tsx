"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Over ons", href: "#over" },
  { label: "Cabana's", href: "#cabanas" },
  { label: "Faciliteiten", href: "#faciliteiten" },
  { label: "Activiteiten", href: "#activiteiten" },
  { label: "Tarieven", href: "#tarieven" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 400 : 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "bg-transparent py-5"
        }`}
        style={
          scrolled
            ? {
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(26, 58, 34, 0.85)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.05)",
              }
            : undefined
        }
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none"
          >
            <span
              className="text-white text-2xl tracking-widest uppercase"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
            >
              Royal Massia
            </span>
            <span
              className="text-[#b83428] text-[0.6rem] tracking-[0.35em] uppercase mt-0.5"
              style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 200 }}
            >
              Resort &amp; Nature Retreat
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-white/75 hover:text-white text-[0.72rem] tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ fontFamily: "Raleway, var(--font-sans)", fontWeight: 300 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#boeken"
              onClick={(e) => handleNav(e, "#boeken")}
              className="btn-hero text-xs py-2.5 px-5"
            >
              Boek nu
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu openen"
          >
            <span
              className="block w-6 h-px bg-white transition-all duration-500"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }}
            />
            <span
              className="block w-6 h-px bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-white transition-all duration-500"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}
            />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(14, 30, 18, 0.97)",
          }}
        >
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-white/80 hover:text-[#b83428] transition-colors"
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                letterSpacing: "0.05em",
                transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s, opacity 0.6s ease ${i * 0.06}s, color 0.2s`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#boeken"
            onClick={(e) => handleNav(e, "#boeken")}
            className="btn-gold mt-4 text-sm"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(30px)",
              opacity: menuOpen ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${navLinks.length * 0.06}s, opacity 0.6s ease ${navLinks.length * 0.06}s`,
            }}
          >
            Boek nu
          </a>
        </div>
      </div>
    </>
  );
}
