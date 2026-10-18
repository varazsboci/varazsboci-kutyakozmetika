import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { BrandBlobs } from "@/components/decor/BrandBlobs";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-brand-50">
      <BrandBlobs />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-600">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.ctaHref}
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              {hero.ctaLabel}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-white transition-colors"
            >
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-brand-100">
          <Image
            src={hero.imageUrl}
            alt="Kutya kozmetikázás közben"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
