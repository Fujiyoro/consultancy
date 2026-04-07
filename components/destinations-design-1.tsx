'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
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

export function DestinationsDesign1() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Design 1: Full-Screen Hero with Overlay</h2>
          <p className="text-foreground/70">Immersive travel-focused feel with stacked full-width sections</p>
        </div>

        <div className="space-y-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="relative h-96 rounded-2xl overflow-hidden group"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-medium uppercase tracking-widest">Destination</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-3">{destination.name}</h3>
                <p className="text-white/90 text-lg max-w-xl mb-6">{destination.description}</p>
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-white/70 text-xs uppercase">Universities</p>
                    <p className="text-2xl font-bold text-white">{destination.universities}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase">Featured</p>
                    <p className="text-white font-semibold">{destination.highlights.join(', ')}</p>
                  </div>
                </div>
                <Link href={`/countries/${destination.slug}`}>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-fit">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
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
