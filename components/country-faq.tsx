'use client';

import { CountryData } from '@/components/countrydata';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function CountryFAQ({ country }: { country: CountryData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-foreground/70 font-light">
            Find answers to common questions about studying in {country.name}.
          </p>
        </div>

        <div className="max-w-3xl space-y-px">
          {country.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-foreground/10 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left hover:bg-foreground/2 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-light text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-foreground/40 flex-shrink-0 mt-1 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-6 pr-8">
                  <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
