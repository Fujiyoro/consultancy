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
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let our expert consultants guide you through every step of your application process to {country.name}.
              </p>
              <button className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors text-lg">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 md:py-20 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center font-bold text-lg">
                  E
                </div>
                <span className="font-bold text-xl">EduPath</span>
              </div>
              <p className="text-white/70 text-sm">Your trusted partner in international education.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#destinations" className="text-white/70 hover:text-white transition-colors text-sm">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-white/70 hover:text-white transition-colors text-sm">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@edupath.com" className="text-white/70 hover:text-white transition-colors text-sm">
                    contact@edupath.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors text-sm">
                    +1 234 567 890
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-center text-sm">
              © 2024 EduPath. All rights reserved. Your trusted education consultancy partner.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
