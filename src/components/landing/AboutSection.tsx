import Image from "next/image";
import { siteContent } from "@/lib/content";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="magamrol" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-100 md:order-2">
          <Image
            src={about.imageUrl}
            alt="Merci, a kutyakozmetikus"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="md:order-1">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {about.heading}
          </h2>
          <div className="mt-4 space-y-4 text-stone-600">
            {about.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
