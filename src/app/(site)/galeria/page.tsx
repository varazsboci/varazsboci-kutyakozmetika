"use client";

import { useMemo, useState } from "react";
import { siteContent } from "@/lib/content";
import { PhotoCard } from "@/components/gallery/PhotoCard";
import type { PortfolioCategorySlug } from "@/types";

// MVP: a Mercitől kapott első 4 valódi fotó, kézzel felvéve. Amint kész az
// admin feltöltés + /api/photos végpont, ez a lista onnan fog jönni (server
// component + fetch, vagy client-oldali lekérdezés szűréssel). A
// kategória-hozzárendelés egyelőre "random" (az ügyfél is ezt kérte) – nem
// pontos munka→kategória párosítás, csak hogy a szűrőgombak is működjenek.
const placeholderPhotos: { id: string; alt: string; category: PortfolioCategorySlug; url: string }[] = [
  {
    id: "1",
    alt: "Frissen kozmetikázott kutyus a szalonban",
    category: "elotte-utana",
    url: "/galeria/galeria-1.jpg",
  },
  {
    id: "2",
    alt: "Kutyus a nyírás után",
    category: "trimmeles",
    url: "/galeria/galeria-2.jpg",
  },
  {
    id: "3",
    alt: "Megkozmetikázott kutyus portré",
    category: "vagas",
    url: "/galeria/galeria-3.jpg",
  },
  {
    id: "4",
    alt: "Kutyus kozmetikázás közben",
    category: "furdetes",
    url: "/galeria/galeria-4.jpg",
  },
];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategorySlug | "all">("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return placeholderPhotos;
    return placeholderPhotos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Munkáim – galéria</h1>
      <p className="mt-2 text-stone-600">
        Böngéssz a korábbi munkák között kategória szerint.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-brand-600 text-white"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          Összes
        </button>
        {siteContent.portfolioCategories.map((category) => (
          <button
            key={category.slug}
            onClick={() => setActiveCategory(category.slug as PortfolioCategorySlug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "bg-brand-600 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
        {filtered.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
