# Feladat: Márkaváltás – "VarázsBoci" → "The Groom Room", új cím (Siófok),
# "Foglalás" gomb/menüpont eltávolítása, nyitvatartás egyszerűsítése

Az ügyfél (Merci) üzlete költözött/átnevezésre került. A következő, pontos
változtatásokat kérem a `src/lib/content.ts`-ben és a két érintett
komponensben. Minden régi/új szöveget szó szerint megadok, hogy biztosan
pontos legyen a csere.

## 1. `src/lib/content.ts`

### 1/a – `brand` blokk

Csere:
```ts
  brand: {
    name: "VarázsBoci Kutyakozmetika",
    shortName: "VarázsBoci",
```
erre:
```ts
  brand: {
    name: "The Groom Room Kutyakozmetika",
    shortName: "The Groom Room",
```
(a `tagline` és `logoUrl` mezők maradjanak változatlanok, azokról nem volt szó)

### 1/b – `hero.heading`

Csere:
```ts
    heading: "Varázsboci kutyakozmetika, ahol kutyád jó kezekben van",
```
erre:
```ts
    heading: "The Groom Room Kutyakozmetika, ahol kutyád jó kezekben van",
```

### 1/c – a második ("Foglalás") CTA gomb eltávolítása a hero blokkból

Jelenleg így néz ki (a `ctaLabel`/`ctaHref` után, az `imageUrl` előtt):
```ts
    ctaLabel: "Kapcsolatfelvétel",
    ctaHref: "#kapcsolat",
    // A második (kontúros) gomb korábban a "Szolgáltatásaink" szekcióra
    // ugrott lent az oldalon; az ügyfél kérésére most a Merci által
    // használt külső foglalási rendszerre (minup.io) mutat "Foglalás"
    // felirattal, új lapon nyílik meg.
    secondaryCtaLabel: "Foglalás",
    secondaryCtaHref:
      "https://app.minup.io/book/honeykutyakozmetika/locations/c0bb4ece-fbf2-4d22-ac72-38e40c07f6d1/team-members/ff7b1269-194d-4786-a437-65e82cf1dce5",
    imageUrl: "/hero.jpg",
```
Ez legyen helyette (a `secondaryCtaLabel`/`secondaryCtaHref` mezők és a
hozzájuk tartozó komment törlendő, mivel jelenleg nincs online foglalás):
```ts
    ctaLabel: "Kapcsolatfelvétel",
    ctaHref: "#kapcsolat",
    imageUrl: "/hero.jpg",
```

### 1/d – `about.body` – a bemutatkozó szöveg frissítése

Csere (a tömb 2. elemében):
```ts
      "22 éves, és 2026 februárjában végeztem kutyakozmetikusként. Jelenleg Veszprémben, a Honey Kutyakozmetikában bérlek asztalt, ahol szeretettel várom a négylábú vendégeimet. 🥰",
```
erre:
```ts
      "22 éves, és 2026 februárjában végeztem kutyakozmetikusként. Jelenleg Siófokon, a The Groom Room Kutyakozmetikában dolgozom, ahol szeretettel várom a négylábú vendégeimet. 🥰",
```
(a tömb többi eleme, pl. a "Szia, Merci vagyok!" sor és az utolsó sor,
maradjon változatlan)

### 1/e – `contact` blokk: cím és nyitvatartás

Csere:
```ts
    // Az ügyfél a Honey Kutyakozmetika címén dolgozik (nála van bérelt
    // székhely), ezért ez szerepel a kapcsolat címeként is.
    addressLine: "Veszprém, Damjanich u. 7/c (Honey Kutyakozmetika)",
    // Külön kereső-szöveg a Google Térkép beágyazáshoz/linkhez – a "Honey
    // Kutyakozmetika" névvel elöl pontosabb találatot ad, mintha csak a
    // nyers címet küldenénk be.
    mapQuery: "Honey Kutyakozmetika, Veszprém, Damjanich utca 7/c",
    openingHours: [
      { day: "Hétfő–Péntek", hours: "10:00–16:00" },
      { day: "Hétvége", hours: "Előzetes egyeztetés alapján" },
    ],
```
erre:
```ts
    addressLine: "Siófok, Hock János köz 2. Fsz. 9.",
    // Külön kereső-szöveg a Google Térkép beágyazáshoz/linkhez – az üzlet
    // nevével elöl pontosabb találatot ad, mintha csak a nyers címet
    // küldenénk be.
    mapQuery: "The Groom Room Kutyakozmetika, Siófok, Hock János köz 2.",
    // Az ügyfél kérésére: nincs fix nyitvatartás, minden alkalom előzetes
    // egyeztetés alapján történik.
    openingHours: [
      { day: "Minden nap", hours: "Előzetes egyeztetés alapján" },
    ],
```

### 1/f – `booking.bookingUrl` – online foglalás visszavonása

Jelenleg:
```ts
    // A Merci által használt külső foglalási rendszer (minup.io) linkje –
    // jelenleg a Hero szekció "Foglalás" gombja mutat közvetlenül erre az
    // URL-re (lásd hero.secondaryCtaHref fentebb). A BookingSection
    // komponens (saját, beágyazott foglalási felület) emiatt továbbra sincs
    // behúzva a főoldalba (lásd src/app/(site)/page.tsx) – a fájl csak
    // megmaradt a lemezen, ha egyszer mégis kellene egy teljesebb, oldalon
    // belüli foglalási szekció.
    bookingUrl:
      "https://app.minup.io/book/honeykutyakozmetika/locations/c0bb4ece-fbf2-4d22-ac72-38e40c07f6d1/team-members/ff7b1269-194d-4786-a437-65e82cf1dce5" as string | null,
```
Csere erre (az ügyfél kérésére jelenleg nincs online foglalási lehetőség,
ezért ez `null`):
```ts
    // Jelenleg nincs online foglalási lehetőség (az ügyfél kérésére a
    // korábbi minup.io-s "Foglalás" gomb/menüpont eltávolításra került a
    // Hero szekcióból és a fejlécből is). A BookingSection komponens (saját,
    // beágyazott foglalási felület) továbbra sincs behúzva a főoldalba
    // (lásd src/app/(site)/page.tsx) – a fájl csak megmaradt a lemezen, ha
    // egyszer mégis kellene egy teljesebb, oldalon belüli foglalási
    // szekció.
    bookingUrl: null as string | null,
```

## 2. `src/components/landing/HeroSection.tsx`

Távolítsd el a második, kontúros "Foglalás" gombot (a `hero.ctaLabel` gomb
UTÁN, a kép elé írt `<div>` ZÁRÁSA előtt). Jelenleg így néz ki:
```tsx
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
```
Ez legyen helyette (csak az első, kitöltött gomb marad):
```tsx
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.ctaHref}
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              {hero.ctaLabel}
            </Link>
          </div>
```

## 3. `src/components/layout/Header.tsx`

Távolítsd el a "Foglalás" menüpontot, és vele együtt az `external` logikát is
(mivel utána egyik nav-elem sem lesz külső link). Jelenleg:
```tsx
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
```
Csere erre:
```tsx
// A "Munkáim" menüpont egyelőre le van véve – a PortfolioPreviewSection
// nincs a főoldalon. Ha visszakerül: { href: "/#munkaim", label: "Munkáim" },
//
// A "Foglalás" menüpont (ami korábban a minup.io külső foglalási
// rendszerre mutatott) az ügyfél kérésére eltávolításra került, mivel
// jelenleg nincs online foglalási lehetőség.
const navItems = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#magamrol", label: "Magamról" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
```

Ezután a `nav` renderelő részben (lent a JSX-ben) egyszerűsítsd a Link-et,
mivel az `external` mező már nem létezik egyik elemen sem. Jelenleg:
```tsx
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
```
Csere erre:
```tsx
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
```

Figyelj arra is, hogy a fájl elején lévő `import { siteContent } from
"@/lib/content";` sor továbbra is szükséges-e – mivel a logóhoz
(`siteContent.brand.logoUrl`, `siteContent.brand.name`) még mindig
használva van a komponensben, ezt az importot NE töröld.

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia, mielőtt készként jelented vissza.
Utána indítsd újra a dev szervert (`npm run dev`), és nézd át élőben a
főoldalt: a fejlécben és a Hero szekcióban ne legyen sehol "Foglalás" gomb
vagy menüpont, a cím és a nyitvatartás a Kapcsolat szekcióban az új
adatokat mutassa, a "Magamról" szövegben pedig Siófok / The Groom Room
szerepeljen.
