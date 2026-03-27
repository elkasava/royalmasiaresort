"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = () => {
    setDrawerOpen(false);
    document.querySelector("#boeken")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop sticky bar ── */}
      <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-50 booking-widget-bar">
        <div className="flex items-stretch max-w-4xl mx-auto w-full">
          {/* Check-in */}
          <div className="flex-1 px-8 py-4 border-r border-white/15">
            <p className="booking-label">Check-in</p>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="booking-input"
            />
          </div>
          {/* Check-out */}
          <div className="flex-1 px-8 py-4 border-r border-white/15">
            <p className="booking-label">Check-out</p>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="booking-input"
            />
          </div>
          {/* Guests */}
          <div className="flex-1 px-8 py-4 border-r border-white/15 flex flex-col justify-center">
            <p className="booking-label">Gasten</p>
            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="booking-stepper"
              >−</button>
              <span className="booking-value">{guests}</span>
              <button
                onClick={() => setGuests((g) => Math.min(20, g + 1))}
                className="booking-stepper"
              >+</button>
            </div>
          </div>
          {/* CTA */}
          <button onClick={handleBook} className="booking-cta px-12 py-5">
            Boek nu &nbsp;→
          </button>
        </div>
      </div>

      {/* ── Mobile floating button ── */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 booking-cta px-6 py-3 shadow-2xl"
        style={{ borderRadius: 0 }}
      >
        Boek nu
      </button>

      {/* ── Mobile slide-up drawer ── */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative booking-widget-bar p-6 pb-10 space-y-5 animate-slide-up">
            <div className="flex items-center justify-between">
              <p className="booking-label" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem" }}>
                Reserveer uw verblijf
              </p>
              <button
                onClick={() => setDrawerOpen(false)}
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.5rem", background: "none", border: "none" }}
              >×</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="booking-label">Check-in</p>
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="booking-input"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <p className="booking-label">Check-out</p>
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="booking-input"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="booking-label" style={{ marginBottom: 0 }}>Gasten</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setGuests((g) => Math.max(1, g - 1))} className="booking-stepper">−</button>
                <span className="booking-value">{guests}</span>
                <button onClick={() => setGuests((g) => Math.min(20, g + 1))} className="booking-stepper">+</button>
              </div>
            </div>
            <button onClick={handleBook} className="booking-cta w-full py-4">
              Boek nu →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
