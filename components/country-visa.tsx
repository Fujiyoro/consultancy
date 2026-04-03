'use client';

import { CountryData } from '@/lib/countries-data';
import { Check } from 'lucide-react';

export function CountryVisa({ country }: { country: CountryData }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            Entry Requirements
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {country.visa.title}
          </h2>
          <p className="text-lg text-foreground/70">
            Understand the visa requirements and application process for studying in {country.name}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {country.visa.types.map((visaType, index) => (
            <div
              key={visaType.name}
              className="bg-gradient-to-br from-white to-slate-50 rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{visaType.name}</h3>
                <p className="text-primary font-medium">{visaType.duration}</p>
              </div>

              <p className="text-foreground/70 mb-6">{visaType.description}</p>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground uppercase tracking-widest">
                  Key Requirements
                </p>
                {visaType.requirements.map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 text-sm">{req}</p>
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
