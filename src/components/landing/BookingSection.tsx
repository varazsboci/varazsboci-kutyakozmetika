import { siteContent } from "@/lib/content";

export function BookingSection() {
  const { booking } = siteContent;

  return (
    <section
      id="idopontfoglalas"
      className="bg-brand-50 py-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {booking.heading}
        </h2>
        <p className="mt-2 text-stone-600">{booking.intro}</p>
        <p className="mt-1 text-sm text-stone-500">
          {booking.cancellationPolicy}
        </p>

        <div className="mt-8 flex min-h-[200px] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-brand-100 bg-white px-6 py-12 text-center">
          {booking.bookingUrl ? (
            // A SimplyBook.me widgetjét nem lehetett egy dobozba beágyazni
            // (az mindig a teljes oldalt igyekszik elfoglalni – ez az ő
            // szándékos, beépített viselkedésük). Ehelyett egy gomb nyitja
            // meg a foglalási oldalukat egy új fülön, ami garantáltan
            // működik (ezt előtte kipróbáltuk közvetlen linkkel).
            <>
              <p className="max-w-md text-stone-600">
                A foglalás a partnerünk, a SimplyBook.me rendszerén keresztül
                történik – a gombra kattintva egy új fülön nyílik meg.
              </p>
              <a
                href={booking.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
              >
                Foglalj időpontot
              </a>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2 text-stone-500">
              <p className="font-medium">
                A foglalási felület még nincs bekötve.
              </p>
              <p className="text-sm">
                TODO: hozzuk létre a foglalási szolgáltató (pl. SimplyBook.me)
                fiókot, állítsuk be a jóváhagyásos módot és a 24 órás
                lemondási szabályt, majd a kapott foglalási URL-t írjuk be a{" "}
                <code className="rounded bg-stone-100 px-1 py-0.5">
                  src/lib/content.ts
                </code>{" "}
                fájlban a <code>booking.bookingUrl</code> mezőbe.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
