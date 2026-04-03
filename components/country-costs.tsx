'use client';

import { CountryData } from '@/lib/countries-data';
import { DollarSign, Home, BookOpen } from 'lucide-react';

export function CountryCosts({ country }: { country: CountryData }) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            Financial Planning
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Cost of Living & Education
          </h2>
          <p className="text-lg text-foreground/70">
            Get a complete breakdown of costs for studying and living in {country.name}.
          </p>
        </div>

        {/* Cost Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Tuition */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Tuition</h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-1">{country.costs.tuitionRange}</p>
            <p className="text-xs text-foreground/60">Per year</p>
          </div>

          {/* Living Cost */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Home className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground">Living Cost</h3>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-1">{country.costs.livingCost}</p>
            <p className="text-xs text-foreground/60">Per year</p>
          </div>

          {/* Total */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Total Estimate</h3>
            </div>
            <p className="text-2xl font-bold text-accent mb-1">{country.costs.totalEstimate}</p>
            <p className="text-xs text-foreground/60">Per year</p>
          </div>

          {/* Scholarships */}
          <div className="bg-primary/5 rounded-lg border border-primary/20 p-8 md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-foreground mb-2">Financial Aid</h3>
            <p className="text-sm text-foreground/80">{country.costs.scholarships}</p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-lg border border-slate-200 p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Budget Breakdown</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <span className="text-foreground/70">Tuition & Fees</span>
              <span className="font-semibold text-foreground">{country.costs.tuitionRange}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <span className="text-foreground/70">Accommodation</span>
              <span className="font-semibold text-foreground">Variable</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <span className="text-foreground/70">Food & Transport</span>
              <span className="font-semibold text-foreground">Variable</span>
            </div>
            <div className="flex justify-between items-center pt-4 bg-primary/5 px-4 py-3 rounded-lg">
              <span className="font-semibold text-foreground">Annual Total</span>
              <span className="font-bold text-primary text-lg">{country.costs.totalEstimate}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
