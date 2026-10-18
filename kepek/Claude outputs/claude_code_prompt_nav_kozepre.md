# Feladat: a jobb oldali (nav+gomb) rész igazodjon a lap középre igazított tartalmi oszlopához

Az eddigi megoldásnál (logó `pl-6/pl-10`, jobb oldali rész `pr-6/pr-10` paddinggal)
széles monitoron még mindig az volt a probléma, hogy a jobb oldali navigáció +
"Kapcsolatfelvétel" gomb szinte egészen a böngésző valódi jobb széléig ért –
csak egy kis fix padding választotta el tőle, nem igazodott a lap többi
részén használt, középre igazított `max-w-6xl`-es tartalmi oszlophoz.

**Csak egyetlen fájlt kell módosítani**: a `src/components/layout/Header.tsx`-t.

## Mi változott

- A logó `<Link>`-je most **abszolút pozícióban** van (`absolute left-6 top-1/2
  -translate-y-1/2 sm:left-10`), így nem vesz részt a fejléc flex-sorában –
  továbbra is a tényleges bal szélhez közel marad (kis paddinggal), pontosan
  mint eddig.
- A jobb oldali rész (nav + "Kapcsolatfelvétel" gomb) egy önálló
  `mx-auto flex w-full max-w-6xl items-center justify-end gap-6 px-4 sm:px-6`
  dobozba került – ez **ugyanaz a szélesség/igazítás**, amit a Hero és a
  Footer szekció is használ a lap többi részén. Emiatt ez a rész most már
  nem a böngésző valódi jobb széléhez igazodik, hanem ugyanahhoz a képzeletbeli
  függőleges vonalhoz, ahol a lap többi tartalma véget ér – így széles
  monitoron sem "lóg ki" egészen a szélig.
- A fejléc külső wrapper divje `relative flex min-h-16 items-center`-re
  változott: a `min-h-16` biztosítja, hogy a fejléc háttere/alsó szegélye
  mindig legalább a logó magasságáig kitöltse a helyet, mivel az abszolút
  pozícionált logó már nem ad természetes magasságot a flex sornak.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott (mind a 11 route sikeresen legenerálódott).

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
      {/* A logó abszolút pozícióban, a tényleges bal szélhez közel (nem a
          középre igazított tartalmi oszlop belsejében) van elhelyezve, ezért
          nem vesz részt a lenti flex sorban – így a nav+gomb rész egy
          önálló, `mx-auto max-w-6xl`-es, középre igazított dobozban lehet,
          pontosan úgy igazodva a jobb szélhez, mint a lap többi szekciója
          (Hero, Footer stb.) – nem "lóg ki" egészen a böngésző valódi jobb
          széléig. A fejléc `min-h-16`-ja biztosítja, hogy a háttér/border
          mindig legalább a logó magasságáig kitöltse a helyet, hogy a logó
          (ami középre van függőlegesen igazítva) ne lógjon ki a fejlécből. */}
      <div className="relative flex min-h-16 items-center">
        <Link
          href="/"
          className="absolute left-6 top-1/2 flex -translate-y-1/2 items-center sm:left-10"
        >
          <Image
            src={siteContent.brand.logoUrl}
            alt={siteContent.brand.name}
            width={900}
            height={609}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <div className="mx-auto flex w-full max-w-6xl items-center justify-end gap-6 px-4 sm:px-6">
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
