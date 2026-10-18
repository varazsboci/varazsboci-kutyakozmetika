import { siteContent } from "@/lib/content";

// Jogszabályi alap: 2001. évi CVIII. törvény az elektronikus kereskedelmi
// szolgáltatásokról. Az itt szereplő adatokat a src/lib/content.ts
// "legal" és "contact" mezőiben lehet cserélni.
//
// TODO: töltsd ki a valós céges/vállalkozói adatokkal, mielőtt élesítitek
// az oldalt.
export default function ImpresszumPage() {
  const { legal, contact } = siteContent;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Impresszum</h1>

      <div className="mt-8 space-y-6 text-stone-700">
        <section>
          <h2 className="font-semibold text-stone-900">Szolgáltató adatai</h2>
          <p className="mt-1">{legal.companyName}</p>
          <p>Székhely: {legal.registeredAddress}</p>
          {legal.taxNumber && <p>Adószám: {legal.taxNumber}</p>}
          {legal.registrationNumber && (
            <p>Nyilvántartási szám: {legal.registrationNumber}</p>
          )}
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">Elérhetőség</h2>
          <p className="mt-1">Email: {contact.email}</p>
          <p>Telefon: {contact.phone}</p>
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">Tárhelyszolgáltató</h2>
          <p className="mt-1">{legal.hostingProvider}</p>
        </section>
      </div>
    </div>
  );
}
