"use client";

import { useState, useEffect } from "react";
import { BookOpen, FileCheck, Plane, Users } from "lucide-react";

const floatingServices = [
  {
    id: 1,
    title: "Student Counseling",
    icon: Users,
    angle: 0,
    color: "from-orange-400 to-orange-500",
  },
  {
    id: 2,
    title: "IELTS Practice",
    icon: BookOpen,
    angle: 90,
    color: "from-blue-400 to-blue-500",
  },
  {
    id: 3,
    title: "Test Preparation",
    icon: FileCheck,
    angle: 180,
    color: "from-gray-400 to-gray-500",
  },
  {
    id: 4,
    title: "Abroad Studies",
    icon: Plane,
    angle: 270,
    color: "from-red-400 to-red-500",
  },
];

export default function FloatingServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % floatingServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="floating-services"
      className="pt-50 pb-30 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="max-w-2xl animate-slideInLeft"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
              Our Expertise
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              EduPath: Your Global Education Partner
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              We look ahead with an expanded vision to be students lifelong
              launch pad for realizing their highest potential—whether through
              education abroad, skilled careers or migration.
            </p>
            <div className="space-y-4 pl-6 border-l-2 border-primary/20">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">
                  Personalized counseling tailored to your academic goals and
                  career aspirations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">
                  End-to-end support from university selection to visa approval
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">
                  Transparent process with proven success rates and trusted
                  guidance
                </p>
              </div>
            </div>
            <button className="text-primary font-semibold text-lg hover:text-secondary transition-colors flex items-center gap-2 mt-10">
              LEARN MORE
              <span className="text-xl">›</span>
            </button>
          </div>

          {/* Right - Circular Image with Floating Cards */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center [@media(max-width:1023px)]:mt-30">
            {/* Large Blue Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center  relative">
                {/* Center Student Image Placeholder */}
                <div className="text-center">
                  <img
                    src="boy.png"
                    className="absolute top-[-180] left-[15]"
                  ></img>
                  <p className="text-white font-semibold">Your Success</p>a
                  <p className="text-white/80 text-sm">Our Mission</p>
                </div>
              </div>
            </div>

            {/* Floating Service Cards */}
            {floatingServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;
              const angle = index * 90 * (Math.PI / 180);
              const radius = 160; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={service.id}
                  className={`absolute transition-all duration-500 ease-out transform `}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    left: "50%",
                    top: "50%",
                  }}
                >
                  <div
                    className={`bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 hover:shadow-xl transition-all duration-300 cursor-pointer group ${isActive ? "scale-110 shadow-2xl" : "hover:scale-105"
                      }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0 group-hover:shadow-lg transition-shadow`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="whitespace-nowrap">
                      <p className="text-sm font-semibold text-foreground">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
