import { siteContent } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-brand-50/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* A "Jogi információk" oszlop (Impresszum / Adatkezelési
            tájékoztató / Cookie tájékoztató linkek) az ügyfél kérésére
            egyelőre ki van véve a footerből – az oldal még csak tesztelés
            alatt van, nem éles közönségnek szól, és a jogi szövegek
            tartalma sincs még véglegesítve (lásd az oldalakon lévő
            figyelmeztető sávot). A 3 oldal fájlja (src/app/(site)/impresszum,
            .../adatvedelem, .../cookie-tajekoztato) változatlanul megmaradt
            a lemezen, csak innen nincs rájuk mutató link – közvetlen URL-lel
            (pl. /impresszum) továbbra is elérhetők. Mielőtt éles domainen,
            valódi ügyfeleknek publikáljátok az oldalt, ezt a linksort
            vissza kell tenni, és a tartalmukat véglegesíteni kell (ez
            jogilag kötelező, lásd a korábbi egyeztetést). */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-semibold">{siteContent.brand.name}</p>
            <p className="mt-2 text-sm text-stone-600">
              {siteContent.brand.tagline}
            </p>
          </div>

          <div className="text-sm text-stone-600">
            <p className="font-semibold text-stone-800">Elérhetőség</p>
            <p className="mt-2">{siteContent.contact.email}</p>
            <p>{siteContent.contact.phone}</p>
            <p>{siteContent.contact.addressLine}</p>
          </div>
        </div>

        <p className="mt-8 text-xs text-stone-500">
          © {year} {siteContent.brand.name}. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
