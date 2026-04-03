'use client';

import { Header } from '@/components/header-3';
import { CountryHero } from '@/components/country-hero';
import { CountryVisa } from '@/components/country-visa';
import { CountryProcess } from '@/components/country-process';
import { CountryUniversities } from '@/components/country-universities';
import { CountryCosts } from '@/components/country-costs';
import { CountryFAQ } from '@/components/country-faq';
import Link from 'next/link';

interface Country {
  slug: string;
  name: string;
  overview: string;
  image: string;
  [key: string]: any;
}

export function CountryPageWrapper({ country }: { country: Country }) {
  return (
    <>
      <Header />
      <main>
        <CountryHero country={country} />
        <CountryVisa country={country} />
        <CountryProcess country={country} />
        <CountryUniversities country={country} />
        <CountryCosts country={country} />
        <CountryFAQ country={country} />

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background border-t border-foreground/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">Ready to Begin?</h2>
              <p className="text-base md:text-lg text-foreground/70 font-light mb-12">
                Let our expert consultants guide you through every step of your journey to {country.name}.
              </p>
              <button className="px-8 py-3 border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 text-sm font-medium tracking-wide">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background text-foreground py-16 md:py-20 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4 font-light">EduPath</p>
              <p className="text-foreground/70 text-sm font-light">Your trusted partner in international education.</p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4 font-light">Navigation</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#destinations" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4 font-light">Contact</p>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@edupath.com" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    contact@edupath.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    +1 234 567 890
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4 font-light">Legal</p>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/10 pt-8">
            <p className="text-foreground/50 text-center text-xs font-light">
              © 2024 EduPath. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
