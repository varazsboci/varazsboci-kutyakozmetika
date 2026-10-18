"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const { contact } = siteContent;
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Kulcs nélküli, ingyenes Google Térkép beágyazás (a klasszikus
  // "?q=...&output=embed" formátum) – nincs API-kulcs kezelés, nincs
  // számlázás. A térkép csak kattintásra töltődik be (ld. mapLoaded), hogy
  // ne fusson be automatikusan harmadik féltől (Google) semmi az oldal
  // betöltésekor – ez gyorsabb kezdeti betöltést ad, és nem bonyolítja a
  // sütibannert sem, mert amíg nincs rákattintva, semmilyen Google-tartalom
  // nem töltődik be.
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery
  )}&output=embed`;
  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.mapQuery
  )}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          consent,
        }),
      });

      if (!res.ok) throw new Error("Sikertelen küldés");
      setStatus("sent");
      form.reset();
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kapcsolat" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {contact.heading}
          </h2>
          <dl className="mt-6 space-y-3 text-stone-600">
            <div>
              <dt className="text-sm font-medium text-stone-500">Email</dt>
              <dd>{contact.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-stone-500">Telefon</dt>
              <dd>{contact.phone}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-stone-500">Cím</dt>
              <dd>{contact.addressLine}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="text-sm font-medium text-stone-500">Nyitvatartás</p>
            <ul className="mt-2 space-y-1 text-stone-600">
              {contact.openingHours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4 text-sm">
                  <span>{row.day}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 bg-brand-50">
              {mapLoaded ? (
                <iframe
                  src={mapEmbedSrc}
                  title={`Térkép – ${contact.addressLine}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="flex h-full w-full flex-col items-center justify-center gap-2 text-brand-700 transition-colors hover:bg-brand-100"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21Z"
                    />
                    <circle cx="12" cy="9.5" r="2.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-semibold">Térkép megjelenítése</span>
                </button>
              )}
            </div>
            <a
              href={mapOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-brand-700 hover:underline"
            >
              Megnyitás Google Térképen →
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-stone-700">
              Név
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-stone-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-stone-700">
                Telefon (opcionális)
              </label>
              <input
                id="phone"
                name="phone"
                className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-stone-700">
              Üzenet
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>

          <label className="flex items-start gap-2 text-xs text-stone-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5"
              required
            />
            <span>
              Elolvastam és elfogadom az{" "}
              <Link href="/adatvedelem" className="underline">
                Adatkezelési tájékoztatót
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "sending" || !consent}
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Küldés…" : "Üzenet küldése"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-700">
              Köszönjük, üzeneted megérkezett!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Hiba történt a küldés során, próbáld újra, vagy írj emailt
              közvetlenül.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
