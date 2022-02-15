import Footer from "../components/layout/Footer";

export default function Impressum({}) {
  return (
    <div className="bg-white">
      <main className="py-10 max-w-5xl mx-auto">
        <h1 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <div className="mt-6 text-gray-500 space-y-6"></div>
      </main>
      <Footer />
    </div>
  );
}
