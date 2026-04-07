'use client';

interface VisaStep {
  number: number;
  title: string;
  description: string;
  duration?: string;
}

interface VisaStepsProps {
  steps: VisaStep[];
  title: string;
}

export function VisaSteps({ steps, title }: VisaStepsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Visa Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20" />

          {/* Steps container */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-24">
                {/* Step circle */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Content */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 mb-3 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {step.duration && (
                    <p className="text-primary text-xs font-medium uppercase tracking-widest">
                      {step.duration}
                    </p>
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
