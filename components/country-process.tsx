'use client';

import { CountryData } from '@/lib/countries-data';

export function CountryProcess({ country }: { country: CountryData }) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            Your Journey Starts Here
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {country.process.title}
          </h2>
          <p className="text-lg text-foreground/70">
            Follow these steps to begin your educational journey in {country.name}.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl">
          {country.process.steps.map((step, index) => (
            <div key={step.number} className="flex gap-8 mb-12 last:mb-0">
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">
                  {step.number}
                </div>
                {index !== country.process.steps.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-accent" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12 pt-2 flex-1">
                <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/70 mb-4">{step.description}</p>
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
