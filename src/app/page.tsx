import { MadeWithDyad } from "@/components/made-with-dyad";
import { WebsiteSpecificationForm } from "@/components/website-specification-form";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <HeroSection />

      <main className="flex flex-col gap-8 w-full items-center">
        <WebsiteSpecificationForm />
      </main>
      <MadeWithDyad />
    </div>
  );
}