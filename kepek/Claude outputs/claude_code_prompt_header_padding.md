# Feladat: logó és jobb oldali (nav+gomb) rész beljebb húzása

A logó és a jobb oldali navigáció/gomb eddig egészen a böngésző valódi bal,
illetve jobb széléig ért (nem volt rajtuk padding). Az ügyfél kérése: mindkettő
legyen egy kicsit "beljebb", ne érjen egészen a szélig.

**Csak egyetlen fájlt kell módosítani**: a `src/components/layout/Header.tsx`-t.
A logó `<Link>`-je kapott egy `pl-6 sm:pl-10` paddingot, a jobb oldali
(nav + "Kapcsolatfelvétel" gomb) doboz paddingja pedig `pr-4 sm:pr-6`-ról
`pr-6 sm:pr-10`-re nőtt – így szimmetrikusan mindkét oldalon lesz egy kis
"levegő" a széltől, de a logó és a gombok továbbra sem csúsznak be a
korábbi, `max-w-6xl`-es középre igazított tartalmi oszlopba (tehát szélesebb
monitoron sem lesz köztük egy nagy üres sáv, mint a legelső verzióban).

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott.

## `src/components/layout/Header.tsx` – teljes fájl

```tsx
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

// Az "Időpontfoglalás" menüpont egyelőre le van véve – a BookingSection
// nincs a főoldalon (lásd src/app/(site)/page.tsx), amíg nincs kész a
// foglalási rendszer. Ha visszakerül a szekció, tedd vissza ide is:
// { href: "/#idopontfoglalas", label: "Időpontfoglalás" },
//
// A "Munkáim" menüpont szintén le van véve egyelőre – a
// PortfolioPreviewSection nincs a főoldalon. Ha visszakerül:
// { href: "/#munkaim", label: "Munkáim" },
const navItems = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#magamrol", label: "Magamról" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur">
      {/* A fejléc a lap teljes szélességét kitöltő flex sor (nem
          `mx-auto max-w-6xl`-es, középre igazított konténer), hogy a logó
          és a jobb oldali (nav + gomb) rész is a tényleges bal, illetve
          jobb szélhez tudjon igazodni – de mindkettő kap egy kis saját
          paddingot (`pl-6`/`pr-6`, szélesebb nézetben `pl-10`/`pr-10`),
          hogy ne érjenek egészen a böngésző széléig, egy kicsit "beljebb"
          legyenek. */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center pl-6 sm:pl-10">
          <Image
            src={siteContent.brand.logoUrl}
            alt={siteContent.brand.name}
            width={900}
            height={609}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <div className="flex items-center gap-6 py-1 pr-6 sm:pr-10">
          <nav className="hidden gap-6 text-sm font-medium text-stone-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#kapcsolat"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Kapcsolatfelvétel
          </Link>
        </div>
      </div>
    </header>
  );
}
```

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia (nálam, a sandboxban is így volt).
