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
