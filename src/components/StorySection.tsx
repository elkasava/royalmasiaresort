"use client";

export default function StorySection() {
  return (
    <section className="overflow-hidden bg-[#0e1e12]" aria-label="Amsterdam × Suriname verhaal">
      {/* Split panels */}
      <div className="grid lg:grid-cols-2">
        {/* Left — Amsterdam */}
        <div className="relative h-[460px] overflow-hidden group" data-reveal>
          <img
            src="/images/flags.jpg"
            alt="Amsterdam"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
            <p
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 200 }}
              className="text-white/40 text-[0.6rem] tracking-[0.4em] uppercase mb-4"
            >
              Vernoemd naar
            </p>
            <h3
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
              }}
              className="text-white"
            >
              Amsterdam
            </h3>
            <div className="w-10 h-px bg-[#b83428] mt-6" />
          </div>
        </div>

        {/* Right — Suriname */}
        <div className="relative h-[460px] overflow-hidden group" data-reveal data-delay="0.12">
          <img
            src="/images/river2.jpg"
            alt="Suriname jungle rivier"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#1a3a22]/55" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
            <p
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 200 }}
              className="text-white/40 text-[0.6rem] tracking-[0.4em] uppercase mb-4"
            >
              Geboren in
            </p>
            <h3
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
              }}
              className="text-[#b83428]"
            >
              Suriname
            </h3>
            <div className="w-10 h-px bg-white/20 mt-6" />
          </div>
        </div>
      </div>

      {/* Quote bar */}
      <div className="py-16 lg:py-20 text-center px-6" data-reveal>
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.15rem, 2vw, 1.6rem)",
            lineHeight: 1.7,
          }}
          className="text-white/60 max-w-2xl mx-auto"
        >
          &ldquo;Elke cabana draagt de naam van een Amsterdamse wijk &mdash; maar de ziel is puur Surinaams.&rdquo;
        </p>
        <div className="w-12 h-px bg-[#b83428] mx-auto mt-8" />
      </div>
    </section>
  );
}
