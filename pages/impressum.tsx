import Footer from "../components/layout/Footer";

export default function Impressum({}) {
  return (
    <div className="bg-white">
      <main className="py-10 max-w-5xl mx-auto">
        <h1 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
          Impressum
        </h1>
        <div className="mt-6 text-gray-500 space-y-6">
          <p className="text-base leading-7">
            Hinter moinNFT steht ein Team aus Freiwilligen in Koorperation mit
            opencampus.sh und der Blockchain Association SH.
          </p>
          <h2 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">
            Inhaltlicher Verantwortlicher gem&auml;&szlig; &sect; 5 TMG
          </h2>
          <p className="text-base leading-7">
            Matthias Nannt
            <br />
            c/o Starterkitchen
            <br />
            Kuhnkestr. 6<br />
            24118 Kiel
          </p>

          <h2 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">
            Kontakt
          </h2>
          <p className="text-base leading-7">E-Mail: team@moinnft.com</p>

          <h2 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">
            Umsatzsteuer-ID
          </h2>
          <p className="text-base leading-7">
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz: DE348819070
          </p>

          <h2 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">
            EU-Streitschlichtung
          </h2>
          <p className="text-base leading-7">
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p className="text-base leading-7">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
