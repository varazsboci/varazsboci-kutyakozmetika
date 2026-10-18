# Feladat: jogi linkek (impresszum/adatvédelem/cookie) kivétele a footerből

Az ügyfél kérése: egyelőre ne legyenek látható linkek az Impresszum,
Adatkezelési tájékoztató és Cookie tájékoztató oldalakra a footerből – az
oldal még csak tesztelés alatt van, nem éles közönségnek szól, és a jogi
szövegek tartalma sincs még véglegesítve.

**Csak egyetlen fájlt kell módosítani**: a `src/components/layout/Footer.tsx`-t.

Fontos, mit NEM csináltunk: a három oldal fájlja
(`src/app/(site)/impresszum/page.tsx`, `.../adatvedelem/page.tsx`,
`.../cookie-tajekoztato/page.tsx`) változatlanul megmaradt a lemezen, ezek
közvetlen URL-lel (pl. `/impresszum`) továbbra is elérhetők – csak a
footerben lévő, feltűnő linksor tűnt el. A kapcsolati űrlapon lévő "Elolvastam
és elfogadom az Adatkezelési tájékoztatót" jelölőnégyzet, valamint a lap
alján megjelenő cookie-elfogadó sáv linkje továbbra is az `/adatvedelem`
illetve `/cookie-tajekoztato` oldalra mutat – ezeket **szándékosan nem
vettük ki**, mert ezek funkcionális, működő elemek (a form beküldéséhez
tényleg kell az elfogadás, a cookie-sáv pedig minden látogatónak megjelenik),
nem csak egy statikus linklista, és ezeket kivenni már a tényleges
adatkezelési tájékoztatás működését törné el, nem csak a megjelenést.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott (egy `Link` import figyelmeztetést is kijavítottam, mivel a
`next/link` importra már nincs szükség ebben a fájlban), és screenshot-tal
is megnéztem – a footer most csak a márkanevet/tagline-t és az
elérhetőséget mutatja, a "Jogi információk" oszlop nélkül.

## `src/components/layout/Footer.tsx` – teljes fájl

```tsx
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
```

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia (nálam, a sandboxban is így volt).
