import type { Metadata } from "next";
import { siteContent } from "@/lib/content";
import "./globals.css";

// Megjegyzés: szándékosan rendszer-betűtípust használunk (nincs next/font/google
// hívás), hogy a build ne függjön a Google Fonts elérhetőségétől, és ne
// történjen kéretlen kapcsolódás külső szolgáltatóhoz. Ha lesz kiválasztott
// márka-betűtípus, azt itt (next/font/google vagy next/font/local) lehet majd
// bekötni.

export const metadata: Metadata = {
  title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
  description: siteContent.hero.subheading,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
