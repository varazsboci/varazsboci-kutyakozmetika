# Feladat: 5 új kutyafotó beillesztése (1 a Szolgáltatások közé, 4 a Galériába)

Az mappában (`kepek/`) megjelent 5 új fotó. Ezeket kikonvertáltam webre
alkalmas, tömörített JPEG-re (az eredetiek HEIC formátumban voltak, amit a
böngészők nem tudnak megjeleníteni), és visszatettem a `kepek/web-ready/`
almappába:

- `kepek/web-ready/szolgaltatas-karomvagas.jpg`
- `kepek/web-ready/galeria-1.jpg`
- `kepek/web-ready/galeria-2.jpg`
- `kepek/web-ready/galeria-3.jpg`
- `kepek/web-ready/galeria-4.jpg`

(Mindegyik max. 1600px széles, JPEG minőség 82, EXIF-forgatás javítva –
tehát nem kell még egyszer átméretezni/konvertálni őket, csak a végleges
helyükre kell másolni a projektben.)

**Fontos technikai megjegyzés**: a sandbox (tesztkörnyezetem) időközben
resetelődött, ezért ezt a kört **nem tudtam nálam lefuttatott
`eslint`/`build`-del leellenőrizni**, és nincs pontos, friss másolatom a ti
jelenlegi `content.ts` / `ServicesSection.tsx` / galéria-oldal tartalmáról.
Emiatt ezúttal nem konkrét fájl-tartalmakat adok, hanem egy feladatleírást –
nálad megvan a valós, aktuális állapot, abból dolgozz. A végén **muszáj**
lefuttatni `npx eslint .` és `npm run build`-et, hogy biztosan hibamentes
legyen.

## Mit kérek

### 1. Egy fotó a Szolgáltatások közé (karomvágás/fülápolás)

Emlékeim szerint a `src/lib/content.ts`-ben a `services` tömbben 3
szolgáltatásnak már van valódi fotója, és a "Karomvágás / fülápolás"
szolgáltatásnak még PLACEHOLDER képe van. Ha ez így van:

- Másold a `kepek/web-ready/szolgaltatas-karomvagas.jpg`-t a projekt
  `public/` mappájába, ugyanoda és ugyanolyan elnevezési konvencióval, ahogy
  a másik 3 szolgáltatás fotója is ott van (nézd meg, ők pontosan hova
  kerültek és milyen névmintát követnek, és kövesd ugyanazt).
- Frissítsd a `services` tömbben a "Karomvágás / fülápolás" elem
  `imageUrl` mezőjét erre az új fotóra, és vedd ki mellőle a "PLACEHOLDER"
  jelzést/kommentet, ha volt ilyen.

Ha időközben már minden szolgáltatásnak van valódi fotója (tehát nincs
placeholder), akkor ezt a képet inkább tedd a galériába, az alábbi 4
mellé – ebben az esetben bízom a döntésedben.

### 2. A másik 4 fotó a galéria oldalra

A projektben van egy `/galeria` route (`src/app/(site)/galeria/`), ami
eddig – tudomásom szerint – még nem kapott valódi képeket. Másold a 4
`galeria-*.jpg` fájlt a `public/` alá (kövesd a galéria oldal/komponens
jelenlegi elvárt mappaszerkezetét, ha már van ilyen konvenció; ha még
semmilyen kép nincs bekötve, hozz létre egy értelmes helyet, pl.
`public/galeria/`), és kösd be őket a galéria oldal adatforrásába úgy, hogy
megjelenjenek a galéria rácsban/listában. A sorrend, pontos elrendezés nem
számít, az ügyfél (Merci) kérése szerint ez random lehet – csak jelenjenek
meg szépen, egységes méretezéssel/vágással a többi galéria-elemmel
összhangban (ha van már ott minta elem, kövesd annak stílusát).

Ha esetleg a galéria oldal jelenleg még egyáltalán nincs kész / nincs
adatforrása képekhez, akkor elég egyszerűen, a meglévő design-nyelvhez
illesztve (a lila/levendula paletta, lekerekített sarkok stb., ahogy a
többi szekció) egy egyszerű rácsos elrendezésbe betenni a 4 képet – ha ez
nagyobb munka lenne, mint egy gyors változtatás, inkább állj meg, és jelezd
vissza, mielőtt nagyobb új komponenst építenél.

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia, mielőtt készként jelented vissza.
