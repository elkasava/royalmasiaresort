"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a3a22]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none"
          >
            <span
              style={{ fontFamily: "var(--font-abril), Abril Fatface, cursive" }}
              className="text-white text-2xl font-light tracking-widest uppercase"
            >
              Royal Massia
            </span>
            <span
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-[#b83428] text-[0.6rem] tracking-[0.35em] uppercase mt-0.5"
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
                style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                className="text-white/80 hover:text-[#b83428] text-[0.78rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#boeken"
              onClick={(e) => handleNav(e, "#boeken")}
              className="btn-gold text-xs py-2.5 px-5"
            >
              Boek nu
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Menu openen"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0e1e12]/96 backdrop-blur-md flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              style={{
                fontFamily: "var(--font-abril), Abril Fatface, cursive",
                animationDelay: `${i * 60}ms`,
              }}
              className={`text-white text-3xl font-light tracking-widest uppercase hover:text-[#b83428] transition-colors ${
                menuOpen ? "animate-fade-up" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#boeken"
            onClick={(e) => handleNav(e, "#boeken")}
            className="btn-gold mt-4 text-sm"
          >
            Boek nu
          </a>
        </div>
      </div>
    </>
  );
}
