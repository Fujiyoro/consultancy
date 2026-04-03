'use client';

import { CountryData } from '@/lib/countries-data';
import { Check } from 'lucide-react';

export function CountryVisa({ country }: { country: CountryData }) {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Entry Requirements</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            {country.visa.title}
          </h2>
          <p className="text-base text-foreground/70 font-light">
            Understand the visa requirements and application process for studying in {country.name}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {country.visa.types.map((visaType) => (
            <div
              key={visaType.name}
              className="pb-12 border-b border-foreground/10"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-light text-foreground mb-2">{visaType.name}</h3>
                <p className="text-sm text-foreground/60 font-light">{visaType.duration}</p>
              </div>

              <p className="text-foreground/70 mb-8 text-sm leading-relaxed font-light">{visaType.description}</p>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Requirements</p>
                {visaType.requirements.map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0 mt-2" />
                    <p className="text-foreground/70 text-sm font-light">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
