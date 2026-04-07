import { Header } from "@/components/header-3";
import { Destinations } from "@/components/destination";

export const metadata = {
  title: "Study Destinations - KBA Consultancy",
  description: "Explore study destinations including Japan, Australia, and United Kingdom with detailed information about universities, costs, and visa requirements.",
};

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Study Destinations
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore world-class education opportunities in Japan, Australia, and the United Kingdom. Each destination offers unique advantages for international students.
            </p>
          </div>
        </div>

        <Destinations />
      </main>
    </>
  );
}
