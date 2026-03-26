"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormData = {
  naam: string;
  email: string;
  telefoon: string;
  cabana: string;
  aankomst: string;
  vertrek: string;
  personen: number;
  keuken: boolean;
  opmerking: string;
};

const initialForm: FormData = {
  naam: "",
  email: "",
  telefoon: "",
  cabana: "",
  aankomst: "",
  vertrek: "",
  personen: 1,
  keuken: false,
  opmerking: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function BookingSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const set = (field: keyof FormData, value: string | number | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const calcNachten = () => {
    if (!form.aankomst || !form.vertrek) return 0;
    const diff =
      new Date(form.vertrek).getTime() - new Date(form.aankomst).getTime();
    return Math.max(0, Math.ceil(diff / 86400000));
  };

  const calcPrijs = () => {
    const nachten = calcNachten();
    const basis = nachten * form.personen * 30;
    const keuken = form.keuken ? nachten * 1000 : 0; // 1000 SRD shown separately
    return { basis, nachten };
  };

  const buildWhatsApp = (data: FormData) => {
    const n = calcNachten();
    const msg = encodeURIComponent(
      `Nieuwe reservering Royal Massia Resort 🌿\n\n` +
      `Naam: ${data.naam}\n` +
      `Email: ${data.email}\n` +
      `Telefoon: ${data.telefoon}\n` +
      `Cabana: ${data.cabana}\n` +
      `Aankomst: ${data.aankomst}\n` +
      `Vertrek: ${data.vertrek}\n` +
      `Nachten: ${n}\n` +
      `Personen: ${data.personen}\n` +
      `Keuken: ${data.keuken ? "Ja (1000 SRD/dag)" : "Nee"}\n` +
      `Totaal: €${n * data.personen * 30}\n` +
      (data.opmerking ? `\nOpmerking: ${data.opmerking}` : "")
    );
    return `https://wa.me/5978900286?text=${msg}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.naam || !form.cabana || !form.aankomst || !form.vertrek) {
      setErrorMsg("Vul alle verplichte velden in.");
      return;
    }
    if (form.aankomst >= form.vertrek) {
      setErrorMsg("Vertrekdatum moet na aankomstdatum liggen.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const { error } = await supabase.from("bookings").insert([
        {
          naam: form.naam,
          email: form.email,
          telefoon: form.telefoon,
          cabana: form.cabana,
          aankomst: form.aankomst,
          vertrek: form.vertrek,
          personen: form.personen,
          keuken: form.keuken,
          opmerking: form.opmerking,
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setStatus("success");
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(buildWhatsApp(form), "_blank");
      }, 800);
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      // Even on DB error, send WhatsApp so no booking is lost
      window.open(buildWhatsApp(form), "_blank");
      setStatus("error");
      setErrorMsg("Uw aanvraag is verstuurd via WhatsApp. Neem contact op voor bevestiging.");
    }
  };

  const { basis, nachten } = calcPrijs();

  return (
    <section id="boeken" className="section-padding bg-[#0e1e12]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <div className="lg:col-span-2" data-reveal>
            <span className="gold-line" />
            <p className="section-label mb-3">Reservering</p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
              className="text-white text-4xl sm:text-5xl font-light mb-6"
            >
              Boek uw<br />
              <span className="italic text-[#b83428]">verblijf</span>
            </h2>
            <p
              style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
              className="text-white/60 text-sm leading-relaxed mb-8"
            >
              Vul het formulier in en we nemen zo snel mogelijk contact op ter bevestiging.
              Uw aanvraag wordt ook rechtstreeks doorgestuurd via WhatsApp.
            </p>

            {/* Contact quick links */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5978900286"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#25D366] flex items-center justify-center text-white text-xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-white/40 text-xs tracking-widest uppercase"
                  >
                    WhatsApp
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-white group-hover:text-[#b83428] transition-colors"
                  >
                    8900286
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@royalmassia.sr"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#1a3a22] flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-white/40 text-xs tracking-widest uppercase"
                  >
                    E-mail
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-white group-hover:text-[#b83428] transition-colors text-sm"
                  >
                    info@royalmassia.sr
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#f5ede4] p-8 sm:p-10" data-reveal data-delay="0.15">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🌿</div>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
                  className="text-[#1a3a22] text-3xl font-light mb-3"
                >
                  Aanvraag ontvangen!
                </h3>
                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-[#6b7280] text-sm mb-6"
                >
                  Uw reserveringsaanvraag is ontvangen en doorgestuurd via WhatsApp.
                  We nemen spoedig contact met u op.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-primary text-sm"
                >
                  Nieuwe aanvraag
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Naam *</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Uw volledige naam"
                      value={form.naam}
                      onChange={(e) => set("naam", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Telefoon / WhatsApp</label>
                    <input
                      className="form-input"
                      type="tel"
                      placeholder="+597 ..."
                      value={form.telefoon}
                      onChange={(e) => set("telefoon", e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="form-label">E-mailadres</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="uw@email.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </div>

                {/* Cabana */}
                <div>
                  <label className="form-label">Cabana *</label>
                  <select
                    className="form-input"
                    value={form.cabana}
                    onChange={(e) => set("cabana", e.target.value)}
                    required
                  >
                    <option value="">Kies een cabana</option>
                    <option value="Amsterdam">Cabana Amsterdam (Beneden)</option>
                    <option value="Kikkenstein">Cabana Kikkenstein (Boven)</option>
                    <option value="Beide">Beide cabana's</option>
                  </select>
                </div>

                {/* Dates + persons */}
                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="form-label">Aankomst *</label>
                    <input
                      className="form-input"
                      type="date"
                      min={today}
                      value={form.aankomst}
                      onChange={(e) => set("aankomst", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Vertrek *</label>
                    <input
                      className="form-input"
                      type="date"
                      min={form.aankomst || today}
                      value={form.vertrek}
                      onChange={(e) => set("vertrek", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Personen</label>
                    <input
                      className="form-input"
                      type="number"
                      min={1}
                      max={20}
                      value={form.personen}
                      onChange={(e) => set("personen", parseInt(e.target.value) || 1)}
                    />
                  </div>
                </div>

                {/* Kitchen rental */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={form.keuken}
                      onChange={(e) => set("keuken", e.target.checked)}
                    />
                    <div
                      className={`w-10 h-6 rounded-full transition-colors ${
                        form.keuken ? "bg-[#1a3a22]" : "bg-[#d4b4a4]"
                      }`}
                    />
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                        form.keuken ? "left-5" : "left-1"
                      }`}
                    />
                  </div>
                  <span
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-[#1a3a22] text-sm"
                  >
                    Keuken huren (+1.000 SRD/dag)
                  </span>
                </label>

                {/* Remarks */}
                <div>
                  <label className="form-label">Opmerkingen</label>
                  <textarea
                    className="form-input resize-none"
                    rows={3}
                    placeholder="Speciale wensen, vragen..."
                    value={form.opmerking}
                    onChange={(e) => set("opmerking", e.target.value)}
                  />
                </div>

                {/* Price preview */}
                {nachten > 0 && (
                  <div className="bg-[#1a3a22]/10 border border-[#dfc0b0] p-4 flex items-center justify-between">
                    <div>
                      <p
                        style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                        className="text-[#1a3a22] text-xs tracking-widest uppercase"
                      >
                        {nachten} nacht{nachten > 1 ? "en" : ""} · {form.personen} persoon{form.personen > 1 ? "en" : ""}
                      </p>
                      {form.keuken && (
                        <p
                          style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                          className="text-[#6b7280] text-xs mt-0.5"
                        >
                          + keuken {nachten * 1000} SRD
                        </p>
                      )}
                    </div>
                    <p
                      style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
                      className="text-[#1a3a22] text-2xl font-light"
                    >
                      €{basis}
                    </p>
                  </div>
                )}

                {/* Error */}
                {errorMsg && (
                  <p
                    style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                    className="text-red-600 text-sm"
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    "Versturen..."
                  ) : (
                    <>Reservering aanvragen &rarr;</>
                  )}
                </button>

                <p
                  style={{ fontFamily: "var(--font-raleway), Raleway, sans-serif" }}
                  className="text-[#6b7280] text-xs text-center"
                >
                  Uw aanvraag wordt ook via WhatsApp doorgestuurd voor snelle bevestiging.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
