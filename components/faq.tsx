'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is this product?',
    answer: 'This is a comprehensive solution designed to help you streamline your workflow and achieve your goals more efficiently. Our product combines cutting-edge technology with user-friendly design to deliver exceptional results.',
  },
  {
    id: 'faq-2',
    question: 'How do I get started?',
    answer: 'Getting started is easy! Simply sign up for an account, follow our onboarding guide, and you\'ll be ready to use all features within minutes. We provide step-by-step tutorials and documentation to help you every step of the way.',
  },
  {
    id: 'faq-3',
    question: 'What are the pricing options?',
    answer: 'We offer flexible pricing plans to suit different needs. Our plans include a free tier for individuals, professional plans for small teams, and enterprise solutions for larger organizations. Visit our pricing page for detailed information.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer customer support?',
    answer: 'Yes! We provide comprehensive customer support through multiple channels including email, live chat, and our knowledge base. Our support team is available 24/7 to help you with any questions or issues.',
  },
  {
    id: 'faq-5',
    question: 'Can I cancel my subscription?',
    answer: 'Absolutely. You can cancel your subscription anytime from your account settings. There are no long-term contracts or hidden fees. Your cancellation will take effect at the end of your billing cycle.',
  },
  {
    id: 'faq-6',
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use industry-standard encryption, regular security audits, and comply with international data protection regulations to ensure your information is always safe.',
  },
]

function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  return (
    <div className="w-full space-y-2">
      {faqItems.map((item) => (
        <div
          key={item.id}
          className="border-b border-border transition-colors hover:bg-muted/30"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex w-full items-start justify-between px-6 py-5 text-left transition-colors hover:text-foreground/80"
            aria-expanded={openId === item.id}
            aria-controls={`${item.id}-content`}
          >
            <span className="flex-1 text-lg font-medium text-foreground">
              {item.question}
            </span>
            <ChevronDown
              className={`ml-4 h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {openId === item.id && (
            <div
              id={`${item.id}-content`}
              className="border-t border-border bg-card px-6 py-5 text-foreground/80"
            >
              <p className="leading-relaxed text-base">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto container px-6 py-12">
          <h1 className="text-4xl font-bold text-foreground">FAQ</h1>
          <p className="mt-4 text-foreground/70">
            Find answers to common questions about our product and services.
          </p>
        </div>
      </header>

      {/* FAQ Content */}
      <div className="mx-auto container px-6 py-12">
        <FAQAccordion />
      </div>

      {/* CTA Section */}

       <div className="container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden py-10">
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
  )
}
