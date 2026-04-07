'use client';

interface CountryRequirementsProps {
  requirements: string[];
}

export function CountryRequirements({ requirements }: CountryRequirementsProps) {
  return (
    <section className="py-20 bg-[#F7F9F9]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Requirements
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What You Need to Apply
          </h2>
        </div>

        {/* Requirements Grid */}
        <div className="space-y-4">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-foreground text-base font-medium">
                  {requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
