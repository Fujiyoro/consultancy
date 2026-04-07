'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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

export function DestinationsDesign3() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Design 3: Grid with Image Reveals</h2>
          <p className="text-foreground/70">Modern grid layout with interactive image reveals on hover</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden bg-gray-200">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1) blur(0px)' : 'scale(1.1) blur(4px)',
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                />
              </div>

              {/* Content Overlay - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0.5,
                }}>
                <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-white/90 text-sm mb-4">{destination.description}</p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-white text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white/70 text-sm font-medium">{destination.universities} Universities</p>
                  <Link href={`/countries/${destination.slug}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-white h-10">
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
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
