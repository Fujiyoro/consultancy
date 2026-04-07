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

export function DestinationsDesign5() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Design 5: Split-Screen Design</h2>
          <p className="text-foreground/70">Alternating left-right layout with visual rhythm</p>
        </div>

        <div className="space-y-0">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-96 md:h-80 overflow-hidden relative group">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Content Side */}
              <div className={`w-full md:w-1/2 flex items-center px-8 md:px-16 py-12 md:py-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}>
                <div className="w-full max-w-xl">
                  {/* Label */}
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                    Destination {index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                    {destination.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                    {destination.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                    <div>
                      <p className="text-foreground/60 text-xs uppercase tracking-widest font-semibold mb-2">
                        Universities
                      </p>
                      <p className="text-3xl font-bold text-primary">{destination.universities}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs uppercase tracking-widest font-semibold mb-2">
                        Top Schools
                      </p>
                      <p className="text-sm text-foreground font-semibold">{destination.highlights.join(', ')}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/countries/${destination.slug}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-white group/btn">
                      Discover {destination.name}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
