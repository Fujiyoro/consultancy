'use client';

import { CountryData } from '@/lib/countries-data';
import { Award } from 'lucide-react';

export function CountryUniversities({ country }: { country: CountryData }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            Featured Institutions
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Top Universities in {country.name}
          </h2>
          <p className="text-lg text-foreground/70">
            Explore some of the most prestigious and renowned universities in {country.name}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.universities.map((uni, index) => (
            <div
              key={uni.name}
              className="group bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-200 p-8 hover:shadow-xl transition-all hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-accent" />
                  <p className="text-accent font-semibold text-sm">{uni.ranking}</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{uni.name}</h3>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <p className="text-sm text-foreground/60 uppercase tracking-widest font-medium mb-2">
                  Specialization
                </p>
                <p className="text-foreground font-semibold">{uni.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
