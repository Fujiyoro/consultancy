'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    name: 'United States',
    slug: 'united-states',
    universities: 2500,
    image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
    highlights: ['Harvard', 'MIT', 'Stanford'],
    color: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Australia',
    slug: 'australia',
    universities: 43,
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
    highlights: ['Melbourne', 'Sydney', 'ANU'],
    color: 'from-yellow-600 to-orange-500',
  },
  {
    name: 'Japan',
    slug: 'japan',
    universities: 100,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlights: ['Todai', 'Kyoto', 'Osaka'],
    color: 'from-red-500 to-orange-400',
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-24 container bg-[#F7F9F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Left aligned */}
        <div className="max-w-3xl mb-20">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            Popular Destinations
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Study Abroad Opportunities
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Access thousands of universities across the world&apos;s top educational hubs. We guide you to the perfect institution for your goals.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Background */}
              <div className={`relative h-56 bg-gradient-to-br ${destination.color} overflow-hidden`}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {destination.name}
                </h3>
                <p className="text-primary font-medium mb-6 text-sm">
                  {destination.universities} partner universities
                </p>

                {/* Top Universities */}
                <div className="mb-8 border-l-2 border-accent pl-4">
                  <p className="text-xs text-foreground/60 uppercase tracking-widest font-medium mb-3">
                    Featured Universities
                  </p>
                  <div className="space-y-2">
                    {destination.highlights.map((uni) => (
                      <p key={uni} className="text-foreground text-sm">
                        {uni}
                      </p>
                    ))}
                  </div>
                </div>

                <Link href={`/countries/${destination.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white font-medium transition-all duration-300"
                  >
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
