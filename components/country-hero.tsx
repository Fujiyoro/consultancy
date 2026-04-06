'use client';

import { CountryData } from '@/components/countrydata';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function CountryHero({ country }: { country: CountryData }) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link
          href="/#destinations"
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground mb-12 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-6">Explore</p>
            <h1 className="text-6xl md:text-7xl font-light text-foreground mb-8 leading-tight tracking-tight">
              {country.name}
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed mb-12 font-light max-w-xl">
              {country.overview}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 md:gap-12">
              <div>
                <p className="text-2xl md:text-3xl font-light text-foreground">{country.universityCount}+</p>
                <p className="text-xs uppercase tracking-widest text-foreground/50 mt-3">Universities</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-light text-foreground">{country.process.steps.length}</p>
                <p className="text-xs uppercase tracking-widest text-foreground/50 mt-3">Steps</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-light text-foreground">{country.visa.types.length}</p>
                <p className="text-xs uppercase tracking-widest text-foreground/50 mt-3">Visas</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block">
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-96 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
