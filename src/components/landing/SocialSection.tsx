import { siteContent } from "@/lib/content";

export function SocialSection() {
  const { social } = siteContent;
  const links = [
    { label: "Instagram", href: social.instagramUrl },
    { label: "Facebook", href: social.facebookUrl },
    { label: "TikTok", href: social.tiktokUrl },
  ].filter((link) => link.href);

  if (links.length === 0) return null;

  return (
    <section id="social" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {social.heading}
      </h2>
      <p className="mt-2 text-stone-600">
        Napi szintű bepillantás a szalon életébe – kövess minket a
        közösségi médiában!
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-100 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
