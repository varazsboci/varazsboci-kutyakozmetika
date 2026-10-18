"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";

const AUTO_ADVANCE_MS = 5000;

// Szolgáltatások bemutatása egy nagy, egyszerre 1 aktív diát mutató
// csúsztatóban (nagy kép + cím + leírás) – az ügyfél kérése alapján, hogy
// ne egy általános "Munkáim" képrács legyen az elsődleges bemutatkozás,
// hanem konkrétan lásson egy fotót ahhoz, amit olvas, pl. "Fürdetés"-nél
// egy fürdetős képet. A lista (services a content.ts-ben) tetszőleges
// hosszú lehet (4-5 vagy több szolgáltatás is elfér, nincs hardcode-olt
// darabszám).
//
// FONTOS: a csúsztatás CSS transformmal (translateX) történik, NEM
// scrollIntoView-val – az utóbbi böngészőtől függően az egész OLDALT is
// el tudja mozdítani a szekcióhoz, amikor a dia vált (ezt jelezte az
// ügyfél: "mikor arrébb megy a slide mindig oda ugrik az oldal"). A
// transform-alapú megoldásnál a böngésző nem próbál "scrollozni" semmit,
// úgyhogy ez a hiba szerkezetileg ki van zárva.
export function ServicesSection() {
  const { services } = siteContent;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function goTo(nextIndex: number) {
    setIndex((nextIndex + services.length) % services.length);
  }

  useEffect(() => {
    if (isPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % services.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(id);
  }, [isPaused, services.length]);

  return (
    <section
      id="szolgaltatasok"
      className="bg-white py-16 scroll-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Szolgáltatások
            </h2>
            <p className="mt-2 text-stone-600">
              Amit nálunk kutyád kaphat – lapozz a nyilakkal, vagy csak várj,
              magától is továbblép.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Előző szolgáltatás"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:bg-stone-100"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Következő szolgáltatás"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:bg-stone-100"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-stone-200 bg-stone-50">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.name}
                className="grid w-full shrink-0 gap-6 p-6 sm:p-8 md:grid-cols-2 md:items-center md:gap-10 md:p-10"
              >
                {service.imageUrl.startsWith("/placeholder/") ? (
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-brand-100 text-sm text-brand-600/60">
                    {/* Ehhez a szolgáltatáshoz még nincs valós fotó – lásd content.ts service.imageUrl */}
                    Ide kerül a kép
                  </div>
                ) : (
                  // Az ügyfél telefonos fotói álló (3:4) formátumúak. Egy 4:3
                  // fekvő keretbe kényszerítve ez csak a kép középső ~56%-át
                  // hagyta meg (a fej/mancsok könnyen levágódtak) – négyzet
                  // (1:1) kerettel ez ~75%-ra nő, sokkal kevesebb vágással,
                  // közben a két hasábos elrendezés még mindig kiegyensúlyozott
                  // marad (nem nyúlik meg túlzottan a teljes álló 3:4-hez képest).
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-100">
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-stone-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {services.map((service, i) => (
            <button
              key={service.name}
              type="button"
              aria-label={`Ugrás: ${service.name}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-brand-600" : "bg-stone-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
