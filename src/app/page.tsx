import { MadeWithDyad } from "@/components/made-with-dyad";
import { WebsiteSpecificationForm } from "@/components/website-specification-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="w-full max-w-3xl text-center mb-12 p-6 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4">
          FAS0-BARA INTELLIGENCE
        </h1>
        <p className="text-xl mb-2">
          Conception de Sites Web à partir de <span className="font-bold">10 000 FCFA</span>
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">1 AN D'HÉBERGEMENT GRATUIT</span> offert pour les sites avec noms de domaines en <span className="font-bold">.BF</span>
        </p>
        <p className="text-md mb-4 italic">
          *NB: Prix du nom de domaine non inclus. Paiement supplémentaire pour fonctionnalités non incluses.
        </p>
        <p className="text-lg mb-4">
          + Un tableau analytique = Surveillance du nombre de visiteurs, des performances et de la sécurité du site web
        </p>
        <p className="text-xl font-semibold">
          Contact: <a href="https://wa.me/22656888879" target="_blank" rel="noopener noreferrer" className="underline">+226 56888879 (WhatsApp)</a>
        </p>
        <p className="text-lg">
          Ouagadougou Arrondissement 12
        </p>
        <p className="mt-6 text-xl font-bold">
          C'est le moment idéal pour vos : Portfolios, CV en ligne, et Sites Vitrines
        </p>
      </header>

      <main className="flex flex-col gap-8 w-full items-center">
        <WebsiteSpecificationForm />
      </main>
      <MadeWithDyad />
    </div>
  );
}