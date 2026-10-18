# Feladat: barna helyett barátságos levendulás lila színvilág

Az ügyfél kérése: a barna/narancs márkaszín helyett legyen egy barátságos,
levendulás lila – ez foglalja magába **az oldal tetején lévő, úszó
tehénfolt-díszítést is** (BrandBlobs.tsx), mert azok a foltok is ugyanabból
a színpalettából kapják a színüket.

**Csak egyetlen fájlt kell módosítani**: a `src/app/globals.css`-t. Minden
más (fejléc, gombok, linkek, kártyák, a tetőn lévő tehénfoltok) automatikusan
átveszi az új színt, mert mindenhol a `var(--color-brand-*)` CSS-változókra
hivatkozik a kód, nincs sehol külön, kézzel beírt barna szín.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` is
hibamentesen lefutott, és screenshot-tal is megnéztem – szépen, egységesen
lilás lett a fejléc, a gombok és a tetőn lévő foltok is, és bónuszként ez
most már jól illeszkedik a logó lila-zöld színvilágához is (amivel korábban
volt egy kis emlegetett törés a barna témával).

## `src/app/globals.css` – csak a `:root` blokk teteje változik

Keresd meg a fájl elején ezt a részt:

```css
:root {
  --background: #fffaf3;
  --foreground: #2b241d;

  /* Márkaszínek – meleg, barátságos paletta kutyakozmetikához.
     TODO: cseréld a barátod választott márkaszíneire, ha vannak. */
  --color-brand-50: #fef6ec;
  --color-brand-100: #fce8cf;
  --color-brand-300: #f3bf80;
  --color-brand-500: #e2894a;
  --color-brand-600: #c96f34;
  --color-brand-700: #a2552a;
  --color-brand-900: #4d2c17;
}
```

És cseréld le teljesen erre:

```css
:root {
  --background: #fdfaff;
  --foreground: #241f2b;

  /* Márkaszínek – barátságos, levendulás lila paletta kutyakozmetikához.
     Korábban meleg barna/narancs volt, az ügyfél kérésére váltottunk erre
     a lilás/levendulás irányra (2026-09) – ez a paletta adja a fejléc, a
     gombok, a linkek és a tetőn lévő tehénfolt-díszítés (BrandBlobs.tsx)
     színét is, mert azok mind a var(--color-brand-*) változókra
     hivatkoznak. */
  --color-brand-50: #f7f2fb;
  --color-brand-100: #ecdff6;
  --color-brand-300: #cba3e6;
  --color-brand-500: #9a5cc0;
  --color-brand-600: #82459f;
  --color-brand-700: #693783;
  --color-brand-900: #37204a;
}
```

**A fájl többi része (a `.brand-spot-*` szabályok, a `@keyframes`
animációk stb.) változatlan marad** – azokhoz nem kell hozzányúlni, mert
azok is a fenti CSS-változókra hivatkoznak, tehát automatikusan átveszik az
új lila árnyalatokat.

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia (nálam, a sandboxban is így volt).
Utána érdemes elindítani a dev szervert (`npm run dev`) és megnézni a
főoldalt böngészőben – a fejlécnek, a gomboknak és a tetőn lévő úszó
tehénfoltoknak is lilásnak/levendulásnak kell lenniük.
