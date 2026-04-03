'use client';

import { CountryData } from '@/lib/countries-data';
import { DollarSign, Home, BookOpen } from 'lucide-react';

export function CountryCosts({ country }: { country: CountryData }) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Financial Planning</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Cost of Living & Education
          </h2>
          <p className="text-base text-foreground/70 font-light">
            Get a complete breakdown of costs for studying and living in {country.name}.
          </p>
        </div>

        {/* Cost Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Tuition */}
          <div className="border border-foreground/10 p-8">
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Tuition</p>
            <p className="text-3xl font-light text-foreground mb-2">{country.costs.tuitionRange}</p>
            <p className="text-xs text-foreground/50 font-light">Per year</p>
          </div>

          {/* Living Cost */}
          <div className="border border-foreground/10 p-8">
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Living Cost</p>
            <p className="text-3xl font-light text-foreground mb-2">{country.costs.livingCost}</p>
            <p className="text-xs text-foreground/50 font-light">Per year</p>
          </div>

          {/* Total */}
          <div className="border border-foreground/10 p-8 md:col-span-2 lg:col-span-1">
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Total Estimate</p>
            <p className="text-3xl font-light text-foreground mb-2">{country.costs.totalEstimate}</p>
            <p className="text-xs text-foreground/50 font-light">Per year</p>
          </div>
        </div>

        {/* Financial Aid */}
        <div className="border border-foreground/10 p-10 md:p-12">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Financial Aid & Scholarships</p>
          <p className="text-base text-foreground/70 font-light leading-relaxed">{country.costs.scholarships}</p>
        </div>
      </div>
    </section>
  );
}
