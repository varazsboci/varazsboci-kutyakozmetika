// TODO: valós session-ellenőrzés Supabase Auth-tal.
//
// Ha kész a Supabase projekt, ide kerül egy szerver oldali ellenőrzés
// (pl. @supabase/ssr csomaggal, cookie-alapú session olvasással), ami
// bejelentkezés nélkül /admin/login-ra irányít. Amíg ez nincs bekötve,
// ez a layout csak egy egyszerű admin keretet ad, VALÓS VÉDELEM NÉLKÜL –
// ezért ne töltsetek fel ide éles adatot, amíg a védelem nincs kész.
export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="border-b border-stone-200 bg-white px-6 py-4">
        <p className="text-sm font-semibold">Admin felület</p>
      </div>
      <div className="px-6 py-8">{children}</div>
    </div>
  );
}
