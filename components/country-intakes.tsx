'use client';

interface Intake {
  name: string;
  period: string;
  months: string;
  type: string;
}

interface CountryIntakesProps {
  intakes: Intake[];
}

export function CountryIntakes({ intakes }: CountryIntakesProps) {
  return (
    <section className="py-20 bg-[#F7F9F9]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Intakes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Available Intakes
          </h2>
        </div>

        {/* Intakes Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {intakes.map((intake, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                {intake.name}
              </h3>
              <p className="text-foreground/60 text-sm mb-4">
                {intake.months}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mt-4">
                  {intake.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
