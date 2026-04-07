'use client';

interface Highlight {
  title: string;
  description: string;
  icon: string;
}

interface CountryHighlightsProps {
  title: string;
  highlights: Highlight[];
  countryName: string;
}

const iconMap: { [key: string]: string } = {
  graduation: '🎓',
  work: '💼',
  globe: '🌍',
  award: '🏆',
  book: '📚',
  building: '🏛️',
};

export function CountryHighlights({ title, highlights, countryName }: CountryHighlightsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Why {countryName}?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-[#F7F9F9] rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">
                {iconMap[highlight.icon] || '✨'}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
