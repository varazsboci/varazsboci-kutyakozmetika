# Feladat: új logó fájl becserélése

A gépeden, a projekt mellett van egy `kepek` mappa, ebben található az új
logó fájl "logo" néven (a pontos kiterjesztés lehet `.png`, `.jpg`/`.jpeg`,
`.heic` vagy `.webp` – nézd meg, mi van ott):

```
C:\Users\Msi Z590\Desktop\Sajat\kutyakozmetika\kepek\
```

Ezt a fájlt kell feldolgozni és lecserélni vele a projekt jelenlegi
`public/logo.png` fájlját. A kódban (`src/lib/content.ts`,
`brand.logoUrl: "/logo.png"`) semmit nem kell módosítani, az már erre a
fájlnévre mutat – csak magát a képfájlt kell frissíteni.

## Lépések

1. **Keresd meg a fájlt**: nézz bele a `kepek` mappába, és találd meg a
   "logo" nevű fájlt (bármi legyen is a kiterjesztése).

2. **Ha `.heic` formátumban van**: alakítsd át előbb `.png`-vé (pl.
   Windows-on egy HEIC-konverter eszközzel, vagy ha van Python a gépen,
   a `pillow-heif` csomaggal – `pip install pillow-heif`, majd
   `pillow_heif.register_heif_opener()` után a `PIL.Image.open()` már
   simán megnyitja).

3. **Ha a képnek átlátszó háttere van (PNG, alfa-csatornával)**: vágd
   szorosan a tényleges logó-tartalom köré, hogy ne maradjon felesleges
   üres/átlátszó szegély körülötte. Ezt Python + Pillow + numpy
   kombinációval lehet megcsinálni: nézd meg, hol vannak a nem-átlátszó
   pixelek (`alpha > 10` küszöbbel, hogy az apró antialiasing-morzsákat ne
   vegye figyelembe), és arra a "bounding box"-ra vágd rá a képet
   (`Image.crop(bbox)`).

4. **Ha a képnek nincs átlátszó háttere** (sima JPG, vagy tömör hátterű
   PNG): akkor nézd meg a képet, és ha van rajta felesleges üres margó,
   vágd le hasonló szempont alapján; ha nincs ilyen probléma, ezt a
   lépést hagyd ki.

5. **Optimalizáld a fájlméretet**, hogy könnyű maradjon a weboldalon
   (a cél kb. 30-80 KB körüli fájlméret, ne legyen belőle több száz KB-os
   kép). PNG esetén ez tipikusan a paletta/színszám csökkentésével megy
   (pl. Pillow-ban `im.quantize(colors=128, method=Image.FASTOCTREE)`),
   fotó jellegű JPG esetén pedig a JPEG minőség (`quality=`) paraméter
   csökkentésével 80-85 körülre.

6. **Mentsd el `public/logo.png` néven**, felülírva a jelenlegi fájlt.

7. **Fontos – ellenőrizd az arányokat**: a `src/components/layout/Header.tsx`
   fájlban a logó `<Image>` komponense jelenleg ezt tartalmazza:

   ```tsx
   <Image
     src={siteContent.brand.logoUrl}
     alt={siteContent.brand.name}
     width={900}
     height={609}
     priority
     className="h-32 w-auto"
   />
   ```

   A `width={900} height={609}` az eddigi (régi) logó képarányát (kb.
   1,478:1) adja meg – ez a Next.js Image komponensnek kell a helyes
   méretezéshez, NEM a tényleges megjelenő méret (azt a `h-32 w-auto`
   CSS osztály szabja meg). Ha az új logó fájl más képarányú, mint a régi,
   akkor ezt a két számot (`width`/`height`) írd át az ÚJ kép tényleges
   pixel-arányára (tartsd meg az arányukat, pl. ha az új logó 1000×700
   pixeles, akkor `width={1000} height={700}`), különben torzítva fog
   megjelenni a logó. Ha ugyanolyan (kb. 3:2-höz közeli) arányú az új kép,
   akkor nem kell hozzányúlni ehhez a két számhoz.

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia. Utána érdemes böngészőben
(`npm run dev`) megnézni a főoldalt – a fejléc bal felső sarkában lévő
logónak élesnek, jól vágottnak kell kinéznie, torzítás nélkül.
