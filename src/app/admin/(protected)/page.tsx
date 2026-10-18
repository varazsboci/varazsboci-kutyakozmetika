// Admin kezdőlap – egyelőre csak egy útiterv (roadmap) arról, mi kerül ide
// a következő fejlesztési körben. A tényleges szöveg-/képszerkesztő
// űrlapokat itt fogjuk felépíteni, miután megvan a Supabase projekt és a
// Cloudflare R2 bucket.
//
// Nincs "Foglalások áttekintése" kártya: döntés alapján egyelőre nem lesz
// semmilyen online időpontfoglalás (sem SimplyBook.me, sem saját
// megoldás), így ennek adminfelülete sem releváns most.
const upcomingSections = [
  {
    title: "Tartalom szerkesztése",
    description:
      "Főoldal szövegek (hero, magamról), elérhetőségek, nyitvatartás szerkesztése.",
  },
  {
    title: "Képfeltöltés / galéria kezelés",
    description:
      "Fotók feltöltése kategóriákkal (R2 presigned URL-lel), sorrendezés, törlés.",
  },
];

export default function AdminHomePage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Üdv az admin felületen!</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Ez egyelőre egy váz – a következő lépésben ide kerülnek a
        ténylegesen szerkeszthető űrlapok.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {upcomingSections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-stone-200 bg-white p-5"
          >
            <p className="font-semibold">{section.title}</p>
            <p className="mt-1 text-sm text-stone-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
