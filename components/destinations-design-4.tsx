'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

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

export function DestinationsDesign4() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Design 4: Horizontal Scroll</h2>
            <p className="text-foreground/70">Flowing timeline slider with expandable cards</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="flex-shrink-0 w-96 h-96 relative rounded-2xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-all duration-300"
                  style={{
                    opacity: hoveredIndex === index ? 0.9 : 0.7,
                  }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0px)',
                  }}>
                  <h3 className="text-4xl font-bold text-white mb-2">{destination.name}</h3>
                  
                  {hoveredIndex === index && (
                    <>
                      <p className="text-white/90 text-sm mb-4 line-clamp-2">{destination.description}</p>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {destination.highlights.map((highlight) => (
                          <span key={highlight} className="px-2 py-1 bg-primary/30 rounded text-white text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/70 text-xs mb-4">{destination.universities} Partner Universities</p>
                      <Link href={`/countries/${destination.slug}`}>
                        <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                          Explore Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
