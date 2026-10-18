import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { SocialSection } from "@/components/landing/SocialSection";
import { ContactSection } from "@/components/landing/ContactSection";

// A BookingSection egyelőre le van véve a főoldalról – a foglalási rendszert
// (saját, jóváhagyásos megoldás) még ki kell találni/megépíteni. A komponens
// fájlja megmaradt (src/components/landing/BookingSection.tsx), csak nincs
// ide behúzva. Ha újra kell, egyszerűen vissza kell tenni az importot és a
// <BookingSection /> sort.
//
// A PortfolioPreviewSection ("Munkáim") is egyelőre le van véve, ugyanígy –
// a fájl megmaradt (src/components/landing/PortfolioPreviewSection.tsx),
// a /galeria oldal is elérhető marad közvetlen URL-en, csak sehonnan nincs
// rá mutató link/nav-menüpont, amíg nincs döntés arról, hogy kelljen-e.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}
