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
    question: 'Which countries can I apply to?',
    answer: 'We help students apply to top destinations like Australia, Canada, the UK, and the USA. Our counselors guide you in choosing the best country based on your academic background, budget, and career goals.',
  },
  {
    id: 'faq-2',
    question: 'How do I get started with my study abroad journey?',
    answer: 'Getting started is simple. Book a consultation with our experts, and we will assess your profile, suggest suitable universities, and guide you step by step through the entire process.',
  },
  {
    id: 'faq-3',
    question: 'Do you help with university applications?',
    answer: 'Yes, we provide complete support for university applications including document preparation, SOP guidance, and application submission to maximize your chances of acceptance.',
  },
  {
    id: 'faq-4',
    question: 'Will you assist with visa processing?',
    answer: 'Absolutely. We offer full visa guidance including documentation, financial preparation, and interview support to ensure a high success rate.',
  },
  {
    id: 'faq-5',
    question: 'Are there any consultation fees?',
    answer: 'We offer affordable and transparent pricing. In many cases, our counseling services are free when you apply through our partnered universities. Contact us for detailed information.',
  },
  {
    id: 'faq-6',
    question: 'Can you help me find scholarships?',
    answer: 'Yes, we guide you in exploring scholarship opportunities and help you prepare strong applications to improve your chances of receiving financial aid.',
  },
];

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
      <div className="mx-auto container md:px-6 py-12">
        <FAQAccordion />
      </div>

      {/* CTA Section */}

     c

      
    </main>
  )
}
