'use client';

import { Header } from '@/components/header-3';
import { CountryHero } from '@/components/country-hero';
import { CountryVisa } from '@/components/country-visa';
import { CountryFAQ } from '@/components/country-faq'
import { VisaSteps } from '@/components/visa-steps';
import { CountryRequirements } from '@/components/country-requirements';
import { CountryHighlights } from '@/components/country-highlights';
import { CountryIntakes } from '@/components/country-intakes';
import { CountryCosts } from '@/components/country-costs';
import Link from 'next/link';
import { ContentSectionVariant2 } from './ui/content-section';

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
        
        {country.countryHighlights && (
          <CountryHighlights 
            title={`Why Study in ${country.name}`}
            highlights={country.countryHighlights}
            countryName={country.name}
          />
        )}

        <VisaSteps 
          steps={country.process.steps}
          title={country.process.title}
        />

        {country.requirements && (
          <CountryRequirements requirements={country.requirements} />
        )}

        {country.intakes && (
          <CountryIntakes intakes={country.intakes} />
        )}

        {country.detailedCosts && (
          <CountryCosts 
            costs={country.detailedCosts}
            currency={country.costCurrency || 'USD'}
            totalEstimate={country.totalEstimate}
            note={country.costNote}
          />
        )}
     
        <CountryVisa country={country} />
       
        <CountryFAQ country={country} />

          <div className="container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden py-15">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-220]" />
        <img src="circle_top_right.png" className="absolute right-[160] top-[-50]" alt="circle decoration" />
        <img src="top_left.png" className="absolute left-[-40] top-[-50]" alt="top left decoration" />
        <img src="top_left_2.png" className="absolute left-[-100] top-[-50]" alt="top left decoration 2" />
        
         <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Still have questions?
          </h2>
          <p className="mt-3 text-white">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <button className="mt-6 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Contact Support
          </button>
        </div>
      </div>

        
      </main>
       <footer className="bg-primary text-white py-16 md:py-20 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Company Logo" className="h-10" />
              </div>

              <p className="text-white/70 text-sm">
                Your trusted partner in international education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    University Selection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Visa Assistance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Scholarships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Career Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>
              &copy; 2024 EduPath. All rights reserved. | Your trusted partner
              in global education
            </p>
          </div>
        </div>
      </footer>

    
    </>
  );
}
