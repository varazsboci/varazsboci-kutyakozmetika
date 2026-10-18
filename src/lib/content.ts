// ---------------------------------------------------------------------------
// Központi tartalom-konfiguráció.
//
// Ez a fájl egyelőre "kézi CMS": minden szöveg, kép-útvonal és elérhetőség
// innen jön. Így egy helyen könnyű átírni, amíg nincs kész az admin felület
// (ami majd ugyanezeket az adatokat fogja adatbázisból - Supabase - olvasni
// és egy form segítségével szerkeszthetővé tenni).
//
// TODO: cseréld le a "PLACEHOLDER" jelzésű értékeket a valós adatokra!
// ---------------------------------------------------------------------------

export const siteContent = {
  brand: {
    name: "VarázsBoci Kutyakozmetika",
    shortName: "VarázsBoci",
    tagline: "Ahol a kutyád szeretetteljes gondoskodásban részesül",
    logoUrl: "/logo.png",
  },

  hero: {
    heading: "Varázsboci kutyakozmetika, ahol kutyád jó kezekben van",
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
    imageUrl: "/hero.jpg",
  },

  about: {
    heading: "Magamról",
    // Az ügyfél (Merci) végleges, jóváhagyott bemutatkozó szövege.
    body: [
      "Szia, Merci vagyok! 🐾",
      "22 éves, és 2026 februárjában végeztem kutyakozmetikusként. Jelenleg Veszprémben, a Honey Kutyakozmetikában bérlek asztalt, ahol szeretettel várom a négylábú vendégeimet. 🥰",
      "Számomra a legfontosabb, hogy a kutyusok biztonságban és jól érezzék magukat nálam, ezért mindenkihez türelemmel és szeretettel közelítek. Folyamatosan tanulok és fejlődöm, hogy mindig a lehető legjobbat nyújthassam.",
      "Remélem, hamarosan a Te kutyusoddal is találkozhatok! 🐶❤️",
    ],
    // TODO (később, ha kérik): az ügyfél szeretne majd 2-3 kísérőfotót is
    // ide, konkrét megnyírt kutyusokról – ezt egyelőre nem csináljuk meg,
    // csak a szolgáltatásonkénti képeket (lásd services lent).
    imageUrl: "/about.jpg",
  },

  // Az ügyfél kérése alapján: NE egy általános, kategória nélküli
  // "Munkáim" képrács legyen az elsődleges bemutatkozás, hanem minden
  // szolgáltatáshoz tartozzon egy konkrét, odaillő kép – így rögtön
  // látszik, hogy pl. a "Fürdetés" ténylegesen hogy néz ki.
  services: [
    {
      name: "Fürdetés és szárítás",
      description:
        "Kíméletes fürdetés, alapos szárítás és kifésülés a tiszta, puha és egészséges bunda érdekében.",
      // A kategória-hozzárendelés egyelőre "random" (az ügyfél is ezt
      // kérte) – nem feltétlenül pontos munka→kategória párosítás.
      imageUrl: "/services/furdetes.jpg",
    },
    {
      name: "Szőrzetápolás, trimmelés",
      description:
        "Kifésülés, szőrápolás és trimmelés a szőrzet típusához és kedvenced fazonjához igazítva.",
      imageUrl: "/services/trimmeles.jpg",
    },
    {
      name: "Karomvágás, fülápolás",
      description:
        "A teljes ápoltságért: gondos karomvágás és kíméletes fültisztítás, odafigyeléssel.",
      imageUrl: "/services/karomvagas.jpg",
    },
    {
      name: "Teljes körű kozmetikázás",
      description:
        "Komplett szépítő kezelés, a fürdetéstől és szárítástól egészen a fazonigazításig – kedvenced igényeire szabva.",
      imageUrl: "/services/teljes-kozmetika.jpg",
    },
  ],

  portfolioCategories: [
    { slug: "furdetes", label: "Fürdetés" },
    { slug: "trimmeles", label: "Trimmelés" },
    { slug: "vagas", label: "Vágás / formázás" },
    { slug: "elotte-utana", label: "Előtte–utána" },
  ],

  social: {
    heading: "Social media",
    // TODO: az ügyfél annyit írt, hogy Instagramon és Facebookon is
    // "ugyanez a nev" (mint az emailben) – ez alapján a legvalószínűbb
    // felhasználónévvel/linkkel töltöttük ki, de érdemes megerősíttetni
    // vele a pontos linkeket, mielőtt élesítünk.
    instagramUrl: "https://www.instagram.com/varazsboci_kutyakozmetika/",
    facebookUrl: "https://www.facebook.com/profile.php?id=61593515379346&locale=hu_HU",
    tiktokUrl: "", // ha nincs, üresen hagyva nem jelenik meg
  },

  contact: {
    heading: "Kapcsolat",
    email: "varazsbocikutyakozmetika@gmail.com",
    phone: "+36 20 254 9211",
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
  },

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

  legal: {
    companyName: "PLACEHOLDER Kft. / Egyéni Vállalkozó neve",
    registeredAddress: "PLACEHOLDER székhely cím",
    taxNumber: "PLACEHOLDER adószám",
    registrationNumber: "", // pl. NÉBIH FELIR szám, ha releváns
    hostingProvider: "PLACEHOLDER tárhelyszolgáltató neve, székhelye, email címe",
  },
} as const;
