import { Header } from "@/components/header-3";
import { DestinationsDesign1 } from "@/components/destinations-design-1";
import { DestinationsDesign2 } from "@/components/destinations-design-2";
import { DestinationsDesign3 } from "@/components/destinations-design-3";
import { DestinationsDesign4 } from "@/components/destinations-design-4";
import { DestinationsDesign5 } from "@/components/destinations-design-5";

export const metadata = {
  title: "Study Destinations - KBA Consultancy",
  description: "Explore study destinations including Japan, Australia, and United Kingdom with detailed information about universities, costs, and visa requirements.",
};

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Favorite Design
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Scroll through all 5 design options below. Each one presents Japan, Australia, and the United Kingdom in a unique way. Choose the design that resonates most with your vision.
            </p>
          </div>
        </div>

        {/* Design 1 */}
        <div className="border-t-2 border-gray-200 pt-16">
          <DestinationsDesign1 />
        </div>

        {/* Design 2 */}
        <div className="border-t-2 border-gray-200 pt-16">
          <DestinationsDesign2 />
        </div>

        {/* Design 3 */}
        <div className="border-t-2 border-gray-200 pt-16">
          <DestinationsDesign3 />
        </div>

        {/* Design 4 */}
        <div className="border-t-2 border-gray-200 pt-16">
          <DestinationsDesign4 />
        </div>

        {/* Design 5 */}
        <div className="border-t-2 border-gray-200 pt-16 pb-24">
          <DestinationsDesign5 />
        </div>

        {/* Footer Note */}
        <section className="py-12 bg-primary/5 px-6">
          <div className="container mx-auto text-center">
            <p className="text-foreground/70 text-sm">
              Once you&apos;ve chosen your favorite design, let us know which one (Design 1-5) you&apos;d like to use for the final destinations page.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
