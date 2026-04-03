'use client';

import { CountryData } from '@/lib/countries-data';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function CountryFAQ({ country }: { country: CountryData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            Questions & Answers
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about studying in {country.name}.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          {country.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-6 bg-white hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 bg-slate-50 border-t border-slate-200">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
          <p className="text-foreground/70 mb-6">
            Our education consultants are here to help you navigate your journey to {country.name}.
          </p>
          <button className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
