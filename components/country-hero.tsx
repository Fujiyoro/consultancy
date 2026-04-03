'use client';

import { CountryData } from '@/lib/countries-data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function CountryHero({ country }: { country: CountryData }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${country.image})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <Link
          href="/#destinations"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Destinations
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {country.name}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
            {country.overview}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-accent text-3xl font-bold">{country.universityCount}+</p>
              <p className="text-white/80 text-sm mt-2">Universities</p>
            </div>
            <div>
              <p className="text-accent text-3xl font-bold">{country.highlights.length}</p>
              <p className="text-white/80 text-sm mt-2">Top Institutions</p>
            </div>
            <div>
              <p className="text-accent text-3xl font-bold">Global</p>
              <p className="text-white/80 text-sm mt-2">Recognition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
