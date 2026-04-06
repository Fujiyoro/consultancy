'use client';

import { GraduationCap, DollarSign, Building2, FileText, Plane, Calendar } from 'lucide-react';

const iconMap: Record<string, any> = {
  GraduationCap,
  DollarSign,
  Building2,
  FileText,
  Plane,
  Calendar,
};

interface Country {
  name: string;
  whyStudy?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  costs?: {
    tuitionRange: string;
    livingRange?: string;
    note?: string;
  };
  requirements?: string[];
  visaSteps?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  intakes?: Array<{
    name: string;
    months: string;
    popularity: string;
  }>;
}

export function CountryDetails({ country }: { country: Country }) {
  return (
    <>
      {/* Why Study Here */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-body text-sm font-semibold mb-3">
              <GraduationCap className="inline w-4 h-4 mr-1 -mt-0.5" /> Why {country.name}?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Study in {country.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {country.whyStudy?.map((item, i) => {
              const Icon = iconMap[item.icon] || GraduationCap;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-gold/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-body text-sm font-semibold mb-3">
              <DollarSign className="inline w-4 h-4 mr-1 -mt-0.5" /> Cost Breakdown
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Estimated Costs in NPR
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <GraduationCap className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-body text-sm text-muted-foreground mb-1">Tuition Fee</p>
                <p className="font-display text-xl font-bold text-foreground">{country.costs?.tuitionRange}</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <Building2 className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-body text-sm text-muted-foreground mb-1">Living Cost</p>
                <p className="font-display text-xl font-bold text-foreground">{country.costs?.livingRange}</p>
              </div>
            </div>
            <p className="text-center font-body text-sm text-muted-foreground italic">
              💡 {country.costs?.note}
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-body text-sm font-semibold mb-3">
              <FileText className="inline w-4 h-4 mr-1 -mt-0.5" /> Requirements
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What You Need to Apply
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-3">
              {country.requirements?.map((req, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-gold">{i + 1}</span>
                  </div>
                  <p className="font-body text-foreground">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-body text-sm font-semibold mb-3">
              <Plane className="inline w-4 h-4 mr-1 -mt-0.5" /> Visa Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Step-by-Step Visa Guide
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/20" />
              {country.visaSteps?.map((step, i) => (
                <div key={i} className="relative pl-16 pb-8 last:pb-0">
                  <div className="absolute left-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                  </div>
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <h4 className="font-display text-lg font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="font-body text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-body text-sm font-semibold mb-3">
              <Calendar className="inline w-4 h-4 mr-1 -mt-0.5" /> Intakes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Available Intakes
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.intakes?.map((intake, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-card border border-border text-center hover:border-gold/30 transition-colors"
                >
                  <p className="font-display text-lg font-bold text-foreground mb-1">{intake.name}</p>
                  <p className="font-body text-sm text-muted-foreground mb-2">{intake.months}</p>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold font-body ${
                      intake.popularity === 'Major'
                        ? 'bg-gold/10 text-gold'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {intake.popularity} Intake
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
