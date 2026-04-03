'use client';

import { CountryData } from '@/lib/countries-data';

export function CountryProcess({ country }: { country: CountryData }) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Application Process</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            {country.process.title}
          </h2>
          <p className="text-base text-foreground/70 font-light">
            Follow these steps to begin your educational journey in {country.name}.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl">
          {country.process.steps.map((step, index) => (
            <div key={step.number} className="flex gap-8 md:gap-12 mb-12 md:mb-16 last:mb-0">
              {/* Left: Number and Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center font-light text-lg text-foreground mb-6">
                  {step.number}
                </div>
                {index !== country.process.steps.length - 1 && (
                  <div className="w-px h-32 bg-foreground/10" />
                )}
              </div>

              {/* Right: Content */}
              <div className="pt-1 pb-4 flex-1">
                <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm md:text-base font-light mb-4 leading-relaxed">{step.description}</p>
                <p className="text-xs text-foreground/50 font-light tracking-widest">{step.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
