import Link from "next/link";

// MVP: statikus placeholder rács. Amint kész az admin/feltöltés, ez a szekció
// a legutóbb feltöltött N fotót fogja lekérdezni a /api/photos végpontról.
const placeholderCount = 6;

export function PortfolioPreviewSection() {
  return (
    <section id="munkaim" className="bg-stone-50 py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Munkáim
            </h2>
            <p className="mt-2 text-stone-600">
              Néhány friss munka a szalonból – a teljes galéria kategóriák
              szerint böngészhető.
            </p>
          </div>
          <Link
            href="/galeria"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            Összes munka megtekintése →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-2xl bg-brand-100 flex items-center justify-center text-xs text-brand-600/60"
            >
              Fotó helye
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
