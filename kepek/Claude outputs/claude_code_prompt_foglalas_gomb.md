# Feladat: fejléc "Kapcsolatfelvétel" gomb eltávolítása + "Foglalás" gomb a Hero szekcióban

Két kérés egyszerre:

1. A fejlécben (jobb felül) lévő kitöltött "Kapcsolatfelvétel" gomb kikerül –
   marad a nav ("Szolgáltatások / Magamról / Kapcsolat"), de a gomb nem.
2. A Hero szekcióban (a cím alatti szöveg alatt) lévő kontúros
   "Szolgáltatásaink" gomb felirata "Foglalás"-ra változik, és mostantól nem
   az oldalon belüli szolgáltatások szekcióra ugrik, hanem a Merci által
   használt külső foglalási rendszerre (minup.io) mutat, új lapon nyílik meg:
   `https://app.minup.io/book/honeykutyakozmetika/locations/c0bb4ece-fbf2-4d22-ac72-38e40c07f6d1/team-members/ff7b1269-194d-4786-a437-65e82cf1dce5`

**Három fájlt kell módosítani**: `src/lib/content.ts`, `src/components/landing/HeroSection.tsx`, `src/components/layout/Header.tsx`.

Fontos apróság: a Hero fő (kitöltött, lila) "Kapcsolatfelvétel" gombja
**nem** változik, az továbbra is a `#kapcsolat` szekcióra ugrik – csak a
fejlécből tűnik el a gomb, illetve a Hero **második** (kontúros) gombja lesz
"Foglalás".

Egy mellékhatás, amit érdemes tudni: mivel a nav ("Szolgáltatások / Magamról
/ Kapcsolat") csak asztali nézetben (`md:` és felette) látszik, mobilon a
fejléc jobb oldala a gomb eltávolítása után üresen marad – csak a logó
látszik majd. Ha ez gond, szólj, és rakunk mobilra egy hamburger-menüt vagy
valamilyen más elemet oda.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott.

## `src/lib/content.ts` – a `hero` és a `booking` blokk

Keresd meg a `hero:` blokkot, és cseréld erre:

```ts
  hero: {
    heading: "Szeretetteljes kutyakozmetika, ahol kutyád jó kezekben van",
    // Az ügyfél (Merci) végleges, jóváhagyott szövege a főoldal tetejére.
    subheading:
      "Kicsi vagy nagy, hétköznap vagy akár hétvége – nálam a kutyusod a lényeg! 🐶✨ Rugalmas időpontokkal és személyre szabott kozmetikai szolgáltatásokkal várom négylábú vendégeimet.",
    // A fő CTA gomb (kitöltött, "Kapcsolatfelvétel") továbbra is a kapcsolat
    // szekcióra visz. Ha ez később megváltozik, cseréld vissza "Foglalj
    // időpontot" / "#idopontfoglalas"-ra (lásd BookingSection.tsx, ami
    // megmaradt a lemezen, csak nincs behúzva a főoldalba).
    ctaLabel: "Kapcsolatfelvétel",
    ctaHref: "#kapcsolat",
    // A második (kontúros) gomb korábban a "Szolgáltatásaink" szekcióra
    // ugrott lent az oldalon; az ügyfél kérésére most a Merci által
    // használt külső foglalási rendszerre (minup.io) mutat "Foglalás"
    // felirattal, új lapon nyílik meg.
    secondaryCtaLabel: "Foglalás",
    secondaryCtaHref:
      "https://app.minup.io/book/honeykutyakozmetika/locations/c0bb4ece-fbf2-4d22-ac72-38e40c07f6d1/team-members/ff7b1269-194d-4786-a437-65e82cf1dce5",
    imageUrl: "/placeholder/hero.jpg", // PLACEHOLDER
  },
```

Majd keresd meg a `booking:` blokkot (a `bookingUrl` mezőt), és cseréld erre
(csak a komment és a `bookingUrl` értéke változik, minden más marad):

```ts
  booking: {
    heading: "Időpontfoglalás",
    intro:
      "Foglalj időpontot pár kattintással! Minden foglalást kézzel hagyunk jóvá, erről emailben értesítést kapsz.",
    cancellationPolicy:
      "Lemondás vagy időpontmódosítás a foglalt időpont előtt legkésőbb 24 órával lehetséges.",
    // A Merci által használt külső foglalási rendszer (minup.io) linkje –
    // jelenleg a Hero szekció "Foglalás" gombja mutat közvetlenül erre az
    // URL-re (lásd hero.secondaryCtaHref fentebb). A BookingSection
    // komponens (saját, beágyazott foglalási felület) emiatt továbbra sincs
    // behúzva a főoldalba (lásd src/app/(site)/page.tsx) – a fájl csak
    // megmaradt a lemezen, ha egyszer mégis kellene egy teljesebb, oldalon
    // belüli foglalási szekció.
    bookingUrl:
      "https://app.minup.io/book/honeykutyakozmetika/locations/c0bb4ece-fbf2-4d22-ac72-38e40c07f6d1/team-members/ff7b1269-194d-4786-a437-65e82cf1dce5" as string | null,
  },
```

## `src/components/landing/HeroSection.tsx` – teljes fájl

```tsx
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { BrandBlobs } from "@/components/decor/BrandBlobs";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-brand-50">
      <BrandBlobs />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-600">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.ctaHref}
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              {hero.ctaLabel}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-white transition-colors"
            >
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-brand-100">
          {/* TODO: cseréld valós hero fotóra (kutya kozmetikázás közben) */}
          <div className="flex h-full w-full items-center justify-center text-brand-600/60 text-sm">
            Ide kerül a bemutató fotó
          </div>
        </div>
      </div>
    </section>
  );
}
```

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
              gombjával is. */}
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
