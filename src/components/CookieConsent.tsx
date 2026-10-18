"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent-v1";

/**
 * Egyszerű cookie-hozzájárulás sáv.
 *
 * MVP állapot: csak azt jegyzi meg, hogy a látogató elfogadta-e a nem
 * szükséges sütiket (pl. jövőbeli Google Analytics). Amíg nincs ilyen
 * mérőkód a projektben, ez a komponens elsősorban a jogi tájékoztatási
 * kötelezettséget szolgálja.
 *
 * TODO: ha analitikai/marketing mérőkód (pl. GA4, Meta Pixel) kerül az
 * oldalra, azt csak akkor szabad betölteni, ha itt elfogadást kapott a
 * felhasználó – ide kell majd bekötni a betöltési logikát.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // A localStorage csak a böngészőben (mount után) érhető el, ezért ez a
    // feltétel nem számolható ki renderelés közben – SSR-ből nem lehet
    // tudni, hogy a látogató korábban már döntött-e.
    const stored = window.localStorage?.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- egyszeri, csak kliens oldali olvasás, nem "cascading" state-szinkronizálás
    if (!stored) setVisible(true);
  }, []);

  function decide(choice: "accepted" | "rejected") {
    window.localStorage?.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-600">
          Az oldal a működéshez szükséges sütiket, illetve – hozzájárulásod
          esetén – statisztikai célú sütiket használ. Bővebben a{" "}
          <Link href="/cookie-tajekoztato" className="underline">
            Cookie tájékoztatóban
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => decide("rejected")}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Csak a szükséges
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
