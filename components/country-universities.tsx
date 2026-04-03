'use client';

import { CountryData } from '@/lib/countries-data';
import { Award } from 'lucide-react';

export function CountryUniversities({ country }: { country: CountryData }) {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Top Institutions</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Featured Universities
          </h2>
          <p className="text-base text-foreground/70 font-light">
            Explore some of the most prestigious universities in {country.name}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.universities.map((uni) => (
            <div
              key={uni.name}
              className="border border-foreground/10 p-8 hover:border-foreground/30 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-lg font-light text-foreground mb-2">{uni.name}</h3>
                  <p className="text-xs text-foreground/50 font-light">{uni.ranking}</p>
                </div>
                <Award className="w-4 h-4 text-foreground/40 flex-shrink-0 ml-4" />
              </div>

              <div className="border-t border-foreground/10 pt-6">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-3">Specialization</p>
                <p className="text-sm text-foreground/70 font-light">{uni.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
