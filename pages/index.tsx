import Footer from "../components/layout/Footer";
import styles from "../styles/Home.module.css";

/* const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
]; */
/* const logos = [
  {
    name: "Transistor",
    url: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "Laravel",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
]; */

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="flex items-center w-full justify-center">
            <div className={styles.logo}></div>
          </div>
          <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
            <div className="mt-20">
              <div className="flex justify-center">
                <span className="rounded bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-500 tracking-wide uppercase">
                  Neu im Norden
                </span>
              </div>
              <div className="mt-6 sm:max-w-5xl">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight sm:text-5xl">
                  Kunst- &amp; NFT-Projekte aus Norddeutschland
                </h1>
                <p className="mt-6 text-xl text-gray-500 text-center">
                  Wir bringen das NFT-Ökosystem in Norddeutschland auf ein neues
                  Niveau. Komm in unsere Discord-Community, diskutiere mit uns
                  über neue NFT-Projekte aus Norddeutschland, lerne andere
                  NFT-Enthusiasten kennen und verpasse keine News zu moinNFT.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <a
                  href="https://discord.gg/UUHfRdPywv"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-md border text-center border-transparent px-5 py-3 bg-sky-500 text-base font-medium text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:px-10"
                >
                  Zur Discord Community
                </a>
                <a
                  href="#about"
                  className="block rounded-md px-5 py-3 text-center bg-white text-base font-medium text-sky-500 border border-sky-500 shadow hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:px-10"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/stats section */}
        <div className="relative mt-20" id="about">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                {/* Testimonial card*/}
                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/img/nft-image.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-sky-500 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-600 via-sky-600 opacity-90" />
                  <div className="relative px-8">
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Es ist ein grundlegend neues Konzept, die Idee, etwas
                          im Internet zu besitzen.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-sky-200">
                          Chris Dixon
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                  Unsere Mission
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-base leading-7">
                    moinNFT befindet sich im Aufbau eines digitalen
                    Schaufensters für Kunst- und NFT-Projekte aus
                    Norddeutschland. Zukünftig können auf unserer Web-Plattform
                    Künstler:innen, Startups und Creator ihre Non-Fungible-Token
                    (NFT) einem interessierten Publikum präsentieren und
                    erreichen auf diese Art und Weise eine deutlich höhere
                    Präsenz und Reichweite als bei alleinigem Nutzung global
                    agierender Marktplätze.
                    <br /> <br />
                    NFTs bieten die Möglichkeit, Eigentum an bspw. Kunst oder
                    sonstigem kreativen Eigentum in die digitale Welt zu
                    transferieren. Mit Hilfe der Blockchain Technologie werden
                    Rechte an Inhalten in der digitalen Welt handelbar gemacht
                    und stellen eine neue Einnahmequellen für die Ersteller dar
                    sowie die Möglichkeit zur Markendarstellung oder für
                    Kundenbindungsprogramme für Unternehmen.
                    <br />
                    <br />
                    moinNFT bietet hierbei nicht bloß die Möglichkeit die
                    Web-Plattform als lokale Bühne zu nutzen, ebenso werden im
                    Rahmen von Workshops und zukünftig erstellten digitalen
                    Inhalten auch die technische Seite hinter NFTs erläutert und
                    für Interessierte greifbar gemacht. Unser Ziel ist es, durch
                    das Leuchtturmprojekt moinNFT Mehrwerte für Kunst- und
                    Kreativschaffende aus Norddeutschland zu schaffen und
                    gleichzeitig ein greifbares Projekt mit Hilfe der
                    State-of-the-Art Technologie Blockchain umzusetzen.
                  </p>
                </div>
              </div>

              {/* Stats section */}
              {/*               <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-t-2 border-gray-100 pt-6"
                    >
                      <dt className="text-base font-medium text-gray-500">
                        {stat.label}
                      </dt>
                      <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10">
                  <a href="#" className="text-base font-medium text-sky-500">
                    Learn more about how we&apos;re changing the
                    world&nbsp&rarr;
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Logo cloud section */}
        {/*  <div className="mt-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Backed by world-renowned investors
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <div className="mt-6">
                  <a href="#" className="text-base font-medium text-sky-500">
                    Meet our investors and advisors&nbsp&rarr;
                  </a>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <img className="max-h-12" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-sky-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-sky-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-sky-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Komm&apos; in unsere Community!
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-sky-100">
                    Tausche dich mit uns aus, lerne mit uns, baue mit uns. In
                    unserer moinNFT Discord Community versammeln sich die NFT
                    Interessierten aus dem Norden mit regelmäßigen virutellen
                    Community Treffen und auch alle moinNFT News landen hier als
                    erstes!
                  </p>
                </div>
                <div className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  {" "}
                  <a
                    href="https://discord.gg/UUHfRdPywv"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-md border text-center border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500 sm:px-10"
                  >
                    Zur moinNFT Discord Community 🤗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
