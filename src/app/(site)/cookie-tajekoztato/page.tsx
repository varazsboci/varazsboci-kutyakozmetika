// FONTOS: vázlat / helykitöltő – frissítsd, ha analitikai (pl. Google
// Analytics) vagy marketing (pl. Meta Pixel) mérőkód kerül az oldalra, és
// kösd be hozzá a CookieConsent komponens elfogadás-logikáját.
export default function CookieTajekoztatoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Cookie tájékoztató</h1>

      <div className="mt-8 space-y-6 text-stone-700">
        <section>
          <h2 className="font-semibold text-stone-900">
            Szükséges (elengedhetetlen) sütik
          </h2>
          <p className="mt-1">
            Ezek a weboldal alapműködéséhez szükségesek (pl. cookie
            hozzájárulásod megjegyzése), ezekhez nem kérünk külön
            hozzájárulást, de tájékoztatunk róluk.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">
            Statisztikai / marketing sütik
          </h2>
          <p className="mt-1">
            [PLACEHOLDER – jelenleg nincs ilyen mérőkód az oldalon. Ha
            például Google Analytics kerül bekötésre, itt kell felsorolni a
            süti nevét, célját és élettartamát, és csak elfogadás esetén
            szabad betölteni.]
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-stone-900">
            Böngésző-beállítások
          </h2>
          <p className="mt-1">
            A sütiket böngésződ beállításai között bármikor törölheted vagy
            letilthatod.
          </p>
        </section>
      </div>
    </div>
  );
}
