# Feladat: kisebb logó a fejlécben, vékonyabb felső csík

Az eddigi `h-32` (128px magas) logó túl nagyra húzta a fejléc/felső csík
magasságát. Cseréld `h-16`-ra (64px), így jóval vékonyabb lesz a fejléc, de
a logó (ami már korábban szorosan körbe van vágva) még mindig jól látható,
éles marad.

**Csak egyetlen fájlt kell módosítani**: a `src/components/layout/Header.tsx`-t,
azon belül is csak a logó `<Image>` komponensének `className` értékét.

Leellenőriztem a sandboxban: `npx eslint .` és `npm run build` hibamentesen
lefutott.

## `src/components/layout/Header.tsx` – a releváns rész

Keresd meg ezt:

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

Cseréld erre (csak a `className` sor változik, minden más ugyanaz marad):

```tsx
          <Image
            src={siteContent.brand.logoUrl}
            alt={siteContent.brand.name}
            width={900}
            height={609}
            priority
            className="h-16 w-auto"
          />
```

## Ellenőrzés

```
npx eslint .
npm run build
```

Mindkettőnek hibamentesen kell lefutnia (nálam, a sandboxban is így volt).
