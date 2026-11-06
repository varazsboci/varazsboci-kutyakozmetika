import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

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

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur">
      {/* A logó abszolút pozícióban, a tényleges bal szélhez közel (nem a
          középre igazított tartalmi oszlop belsejében) van elhelyezve, ezért
          nem vesz részt a lenti flex sorban – így a nav+gomb rész egy
          önálló, `mx-auto max-w-6xl`-es, középre igazított dobozban lehet,
          pontosan úgy igazodva a jobb szélhez, mint a lap többi szekciója
          (Hero, Footer stb.) – nem "lóg ki" egészen a böngésző valódi jobb
          széléig. A fejléc `min-h-16`-ja biztosítja, hogy a háttér/border
          mindig legalább a logó magasságáig kitöltse a helyet, hogy a logó
          (ami középre van függőlegesen igazítva) ne lógjon ki a fejlécből. */}
      <div className="relative flex min-h-16 items-center">
        <Link
          href="/"
          className="absolute left-[520px] top-1/2 flex -translate-y-1/2 items-center sm:left-[560px]"
        >
          <Image
            src={siteContent.brand.logoUrl}
            alt={siteContent.brand.name}
            width={1000}
            height={677}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <div className="mx-auto flex w-full max-w-lg items-center justify-end px-4 sm:px-6">
          {/* Az ügyfél kérésére a fejlécből kikerült a "Kapcsolatfelvétel"
              gomb – a kapcsolat szekció továbbra is elérhető a "Kapcsolat"
              menüponton keresztül, illetve a Hero szekció saját CTA
              gombjával is. A korábbi, minup.io-ra mutató "Foglalás"
              menüpont is eltávolításra került, mivel jelenleg nincs online
              foglalási lehetőség. */}
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
