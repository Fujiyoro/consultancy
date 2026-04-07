'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const destinations = [
  {
    name: 'Japan',
    slug: 'japan',
    universities: 100,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlights: ['Todai', 'Kyoto', 'Osaka'],
    description: 'Experience a unique blend of traditional culture and cutting-edge innovation with world-class education.',
  },
  {
    name: 'Australia',
    slug: 'australia',
    universities: 43,
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
    highlights: ['Melbourne', 'Sydney', 'ANU'],
    description: 'Explore top-ranked universities in a vibrant, multicultural environment with stunning landscapes.',
  },
  {
    name: 'United Kingdom',
    slug: 'united-kingdom',
    universities: 130,
    image: 'https://images.unsplash.com/photo-1535182519407-c6a3b6ba90b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlights: ['Oxford', 'Cambridge', 'LSE'],
    description: 'Study at prestigious universities with world-leading research and academic excellence.',
  },
];

export function Destinations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Destinations - Full Screen Hero Layout */}
        <div className="space-y-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                hoveredIndex === index ? 'ring-2 ring-primary/30' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hero Image Background */}
              <div className="relative h-96 md:h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Overlay - Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500" />
              </div>

              {/* Content Overlay - Left aligned */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-8 md:px-16 py-8 md:py-12 max-w-2xl">
                  {/* Destination Label */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium uppercase tracking-widest">
                      Study Destination
                    </span>
                  </div>

                  {/* Country Name */}
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-300 group-hover:translate-x-2">
                    {destination.name}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed transition-all duration-300 group-hover:translate-x-1">
                    {destination.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-col sm:flex-row gap-8 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs uppercase tracking-widest">Universities</p>
                        <p className="text-2xl font-bold text-white">{destination.universities}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-accent">★</span>
                      </div>
                      <div>
                        <p className="text-white/70 text-xs uppercase tracking-widest">Top Schools</p>
                        <p className="text-white font-semibold">{destination.highlights.join(' • ')}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-4">
                    <Link href={`/countries/${destination.slug}`} className="block">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-semibold group/btn transition-all duration-300"
                      >
                        Explore {destination.name}
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right side accent - shows on hover */}
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
