'use client';

interface CostItem {
  item: string;
  minAmount: string;
  maxAmount: string;
  average: string;
  notes?: string;
}

interface CountryCostsProps {
  costs: CostItem[];
  currency: string;
  totalEstimate?: string;
  note?: string;
}

export function CountryCosts({ costs, currency, totalEstimate, note }: CountryCostsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            💰 Cost Breakdown
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Estimated Costs in {currency}
          </h2>
          <p className="text-lg text-foreground/70">
            Detailed breakdown of tuition, living expenses, and other costs for international students
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-primary/5 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Cost Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Minimum ({currency})
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Maximum ({currency})
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Average ({currency})
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {costs.map((cost, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="px-6 py-5 text-sm font-semibold text-foreground">
                    {cost.item}
                  </td>
                  <td className="px-6 py-5 text-sm text-foreground/70">
                    {cost.minAmount}
                  </td>
                  <td className="px-6 py-5 text-sm text-foreground/70">
                    {cost.maxAmount}
                  </td>
                  <td className="px-6 py-5 text-sm font-semibold text-primary">
                    {cost.average}
                  </td>
                  <td className="px-6 py-5 text-xs text-foreground/60">
                    {cost.notes || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Estimate */}
        {totalEstimate && (
          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-foreground/70 font-medium uppercase tracking-widest mb-1">
                  Estimated Total (Per Year)
                </p>
                <p className="text-3xl font-bold text-primary">
                  {totalEstimate}
                </p>
              </div>
              <div className="text-5xl text-primary/20">💰</div>
            </div>
          </div>
        )}

        {/* Note */}
        {note && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
            <span className="text-xl flex-shrink-0">📍</span>
            <p className="text-sm text-foreground/70">
              {note}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
