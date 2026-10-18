# Feladat: logó a tényleges bal felső sarokba

Eddig a logó egy `mx-auto max-w-6xl px-4` konténer belsejében volt, ami
szélesebb képernyőn középre igazítja a fejléc tartalmát – emiatt szélesebb
monitoron balra még mindig maradt egy jókora üres sáv a logó előtt. Az
ügyfél kérése: a logó tényleg a lap valódi bal felső sarkában legyen,
képernyőszélességtől függetlenül, ne csússzon be a középre igazított
tartalmi oszlop belsejébe.

**Csak egyetlen fájlt kell módosítani**: a `src/components/layout/Header.tsx`-t.
A megoldás lényege: a fejléc belső sora már NEM `mx-auto max-w-6xl`-es,
középre igazított konténer, hanem egy teljes szélességű flex sor – a logó
így paddig/margó nélkül, közvetlenül a fejléc (és ezzel a lap) bal felső
sarkában landol, a navigáció + "Kapcsolatfelvétel" gomb pedig egy külön,
jobbra igazított, saját paddinges dobozba került.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott, és screenshot-tal 1280px és 1600px széles nézetben is megnéztem –
mindkettőnél szépen a tényleges bal felső sarokban van a logó, a navigáció
és a gomb pedig továbbra is jól néz ki jobbra igazítva.

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
      {/* Az ügyfél kérésére a logó szándékosan a lap tényleges bal felső
          sarkába van tolva (nincs se bal, se felső margó/padding rajta),
          nem a max-w-6xl-lel középre igazított tartalmi oszlop belsejébe –
          ezért ez a sor NEM `mx-auto max-w-6xl px-4`-es konténer, hanem
          teljes szélességű flex sor, és csak a jobb oldali (nav + gomb)
          rész kap saját, jobbra igazított paddingot. */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={siteContent.brand.logoUrl}
            alt={siteContent.brand.name}
            width={900}
            height={609}
            priority
            className="h-32 w-auto"
          />
        </Link>

        <div className="flex items-center gap-6 py-1 pr-4 sm:pr-6">
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

Mindkettőnek hibamentesen kell lefutnia. Utána érdemes megnézni böngészőben
(`npm run dev`) egy normál és egy nagyon széles ablakban is – a logónak
mindkét esetben a tényleges bal felső sarokban kell lennie, üres sáv nélkül
előtte.
