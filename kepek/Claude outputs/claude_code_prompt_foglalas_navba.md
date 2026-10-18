# Feladat: "Foglalás" menüpont a fejléc navigációjába

A fejléc navigációjába ("Szolgáltatások / Magamról / Kapcsolat") bekerül egy
negyedik, ugyanolyan stílusú menüpont: "Foglalás". Ez nem gomb, hanem sima
szöveges nav-link, mint a többi – de a Merci által használt külső foglalási
rendszerre (minup.io) mutat, és új lapon nyílik meg:
`https://app.minup.io/book/honeykutyakozmetika/locations/c0bb4ece-fbf2-4d22-ac72-38e40c07f6d1/team-members/ff7b1269-194d-4786-a437-65e82cf1dce5`

**Csak egyetlen fájlt kell módosítani**: a `src/components/layout/Header.tsx`-t.

Technikailag: a `navItems` tömb elemei mostantól kaphatnak egy `external:
true` jelzőt – ez alapján a render logika a `Foglalás` linkre `target="_blank"
rel="noopener noreferrer"`-t tesz, a többi (belső, oldalon belüli ugró) linkre
nem. A "Foglalás" linkje magából a `siteContent.booking.bookingUrl` mezőből
jön (ez korábban `null` volt, most már a valós minup.io URL – ha esetleg még
nem futtattátok le a korábbi "Foglalás gomb a Hero-ban" promptot, abban is ez
a mező lett beállítva).

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott.

## `src/components/layout/Header.tsx` – teljes fájl

```tsx
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

// A "Munkáim" menüpont egyelőre le van véve – a PortfolioPreviewSection
// nincs a főoldalon. Ha visszakerül: { href: "/#munkaim", label: "Munkáim" },
//
// A "Foglalás" menüpont a Merci által használt külső foglalási rendszerre
// (minup.io) mutat, ezért `external: true` – ez új lapon nyitja meg, nem
// a Next.js Link belső navigációjával.
const navItems = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#magamrol", label: "Magamról" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
  { href: siteContent.booking.bookingUrl ?? "#", label: "Foglalás", external: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur">
      {/* A logó abszolút pozícióban, a tényleges bal szélhez közel (nem a
          középre igazított tartalmi oszlop belsejében) van elhelyezve, ezért
          nem vesz részt a lenti flex sorban – így a nav rész egy önálló,
          `mx-auto max-w-6xl`-es, középre igazított dobozban lehet, pontosan
          úgy igazodva a jobb szélhez, mint a lap többi szekciója (Hero,
          Footer stb.). A fejléc `min-h-16`-ja biztosítja, hogy a
          háttér/border mindig legalább a logó magasságáig kitöltse a
          helyet, hogy a logó (ami középre van függőlegesen igazítva) ne
          lógjon ki a fejlécből. */}
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

        <div className="mx-auto flex w-full max-w-6xl items-center justify-end px-4 sm:px-6">
          {/* Az ügyfél kérésére a fejlécből kikerült a "Kapcsolatfelvétel"
              gomb – a kapcsolat szekció továbbra is elérhető a "Kapcsolat"
              menüponton keresztül, illetve a Hero szekció saját CTA
              gombjával is. Helyette bekerült egy "Foglalás" menüpont, ami a
              nav többi eleméhez hasonló, sima szöveges linkként jelenik meg
              (nem kiemelt gombként), de külső oldalra (minup.io) mutat. */}
          <nav className="hidden gap-6 text-sm font-medium text-stone-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="hover:text-brand-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
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
