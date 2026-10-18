# Feladat: végleges hero szöveg + bemutatkozás szöveg

Az ügyfél (Merci) jóváhagyta a végleges szövegeket a főoldal tetejére és a
"Magamról" részhez. **Csak a `src/lib/content.ts` fájlt kell módosítani**,
két helyen.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott, és screenshot-tal is megnéztem – mindkét szöveg szépen, jól
olvashatóan jelenik meg (a hero szöveg a tetején, a bemutatkozás a
"Magamról" résznél).

## 1. `hero.subheading` – a főoldal tetején lévő szöveg

Keresd meg a `hero` objektumban ezt:

```ts
  hero: {
    heading: "Szeretetteljes kutyakozmetika, ahol kutyád jó kezekben van",
    subheading:
      "Fürdetés, szőrzetápolás, karomvágás és teljes körű kozmetikázás – nyugodt, stresszmentes környezetben, kutyád igényeire szabva.",
```

Cseréld erre:

```ts
  hero: {
    heading: "Szeretetteljes kutyakozmetika, ahol kutyád jó kezekben van",
    // Az ügyfél (Merci) végleges, jóváhagyott szövege a főoldal tetejére.
    subheading:
      "Kicsi vagy nagy, hétköznap vagy akár hétvége – nálam a kutyusod a lényeg! 🐶✨ Rugalmas időpontokkal és személyre szabott kozmetikai szolgáltatásokkal várom négylábú vendégeimet.",
```

(A `heading` sor és a `hero` objektum többi része, pl. `ctaLabel`,
`ctaHref`, `imageUrl`, változatlan marad.)

## 2. `about.body` – a "Magamról" rész bemutatkozó szövege

Keresd meg az `about` objektumban ezt:

```ts
  about: {
    heading: "Magamról",
    // Ez az ügyféltől kapott, első körös bemutatkozó szöveg – ő is jelezte,
    // hogy ezt még finomítani/cserélni fogjuk, egyelőre ez megy ki élesben.
    body: [
      "Sziasztok! Jakab Mercédesz vagyok, kezdő kutyakozmetikusként keresem leendő vendégeimet. Jelenleg Veszprémben, a Honey Kutyakozmetikában dolgozom.",
      "Barátságos környezetben, rengeteg türelemmel és kedvező árakkal várok minden kutyust – a legkisebbektől a legnagyobbakig!",
    ],
```

Cseréld erre:

```ts
  about: {
    heading: "Magamról",
    // Az ügyfél (Merci) végleges, jóváhagyott bemutatkozó szövege.
    body: [
      "Szia, Merci vagyok! 🐾",
      "22 éves, és 2026 februárjában végeztem kutyakozmetikusként. Jelenleg Veszprémben, a Honey Kutyakozmetikában bérlek asztalt, ahol szeretettel várom a négylábú vendégeimet. 🥰",
      "Számomra a legfontosabb, hogy a kutyusok biztonságban és jól érezzék magukat nálam, ezért mindenkihez türelemmel és szeretettel közelítek. Folyamatosan tanulok és fejlődöm, hogy mindig a lehető legjobbat nyújthassam.",
      "Remélem, hamarosan a Te kutyusoddal is találkozhatok! 🐶❤️",
    ],
```

(Az `about` objektum többi része, pl. `imageUrl`, változatlan marad.)

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia (nálam, a sandboxban is így volt).
