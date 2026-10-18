import { siteContent } from "@/lib/content";

// FONTOS: ez egy VÁZLAT / helykitöltő szöveg, NEM végleges jogi dokumentum!
// Mielőtt élesítitek az oldalt, ezt a szöveget mindenképp nézesd át egy
// jogásszal / GDPR-szakértővel, vagy készítsd el egy megbízható magyar
// generátorral (pl. a korábban küldött tervdokumentumban linkelt oldalak).
export default function AdatvedelemPage() {
  const { contact, legal } = siteContent;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Adatkezelési tájékoztató
      </h1>
      <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        Ez egy vázlat – töltsd ki a végleges adatokkal, és nézesd át
        szakértővel közzététel előtt.
      </p>

      <div className="mt-8 space-y-6 text-stone-700">
        <section>
          <h2 className="font-semibold text-stone-900">Az adatkezelő</h2>
          <p className="mt-1">
            {legal.companyName}, {legal.registeredAddress}, {contact.email}
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">
            Milyen adatokat kezelünk, és miért?
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Kapcsolatfelvételi űrlap: név, email cím, telefonszám (ha
              megadod), üzenet tartalma – célja: a megkeresésre válasz adása.
            </li>
          </ul>
          {/* Nincs online időpontfoglalás (sem SimplyBook.me, sem saját
              megoldás), ezért itt szándékosan nincs "Időpontfoglalás"
              adatkezelési pont – ha ez változik, ide kell visszatenni egy,
              a tényleges foglalási szolgáltatóra szabott bekezdést. */}
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">Adatmegőrzési idő</h2>
          <p className="mt-1">[PLACEHOLDER – pl. a szerződés/kapcsolat lezárását követő X évig, számviteli kötelezettség miatt]</p>
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">
            Kinek adjuk át az adatokat (adatfeldolgozók)
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Tárhelyszolgáltató: {legal.hostingProvider}</li>
            <li>Email-küldő szolgáltató (kapcsolati űrlap): [PLACEHOLDER]</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">Az érintett jogai</h2>
          <p className="mt-1">
            Tájékoztatást kérhetsz, kérheted adataid helyesbítését,
            törlését, valamint tiltakozhatsz kezelésük ellen. Panasszal a
            Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH)
            fordulhatsz.
          </p>
        </section>
      </div>
    </div>
  );
}
