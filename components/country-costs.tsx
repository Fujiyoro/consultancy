'use client';

interface CostBreakdown {
  category: string;
  range: string;
  icon: string;
}

interface CountryCostsProps {
  costs: CostBreakdown[];
  currency: string;
  note?: string;
}

const iconMap: { [key: string]: string } = {
  tuition: '🎓',
  living: '🏠',
  health: '🏥',
  books: '📚',
};

export function CountryCosts({ costs, currency, note }: CountryCostsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Cost Breakdown
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Estimated Costs in {currency}
          </h2>
        </div>

        {/* Costs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {costs.map((cost, index) => (
            <div
              key={index}
              className="bg-[#F7F9F9] rounded-lg p-8 border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {iconMap[cost.icon] || '💰'}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {cost.category}
              </h3>
              <p className="text-2xl font-bold text-primary">
                {cost.range}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        {note && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
            <span className="text-xl">📍</span>
            <p className="text-sm text-foreground/70">
              {note}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
