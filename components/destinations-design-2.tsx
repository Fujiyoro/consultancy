'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

export function DestinationsDesign2() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Design 2: Minimalist Dark Layout</h2>
          <p className="text-white/60">Professional consultancy aesthetic with focus on typography</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group flex flex-col"
            >
              {/* Image - smaller, more subtle */}
              <div className="relative h-56 rounded-lg overflow-hidden mb-6 bg-gray-900">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-primary/80 text-xs uppercase tracking-widest font-semibold mb-3">
                  {destination.universities} Universities
                </p>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {destination.description}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-6">
                  {destination.highlights.join(' · ')}
                </p>
                <Link href={`/countries/${destination.slug}`}>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full justify-between">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
