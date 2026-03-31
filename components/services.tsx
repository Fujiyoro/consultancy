"use client";

import { Card } from "@/components/ui/card";
import {
  BookOpen,
  FileCheck,
  Plane,
  MapPin,
  DollarSign,
  Users,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "University Selection",
    description:
      "Personalized guidance to help you choose the right university based on your academic goals, budget, and career aspirations.",
    bg: "bg-blue-500",
  },
  {
    icon: FileCheck,
    title: "Application Support",
    description:
      "Complete assistance with application forms, SOPs, LORs, and documentation to maximize your chances of acceptance.",
    bg: "bg-emerald-500",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description:
      "Step-by-step visa support including document preparation, interview guidance, and application submission.",
    bg: "bg-purple-500",
  },
  {
    icon: MapPin,
    title: "Destination Services",
    description:
      "Support with accommodation, airport pickup, and orientation to help you settle smoothly in your new country.",
    bg: "bg-orange-500",
  },
  {
    icon: DollarSign,
    title: "Scholarship Guidance",
    description:
      "Expert help in finding and applying for scholarships and financial aid to reduce your overall study costs.",
    bg: "bg-pink-500",
  },
  {
    icon: Users,
    title: "Career Counseling",
    description:
      "Professional career advice, CV building, and job placement support to prepare you for global opportunities.",
    bg: "bg-indigo-500",
  },
];

export function Services() {
  return (
    <section
      id="pricing"
      className="py-24 bg-white bg-no-repeat bg-cover relative overflow-hidden"
      style={{}}
    >
      <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-140]"/>
      <img src = "plane.png" className="absolute right-[-300] top-[-10]"></img>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Left aligned */}
        <div className="max-w-3xl mb-20">
          <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Complete Education Support
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            From university selection to visa processing, we handle every aspect
            of your educational journey with expert precision.
          </p>
        </div>

        {/* Services Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mb-6 inline-flex p-4 rounded-xl ${service.bg} 
  group-hover:scale-110 transition-all duration-300 shadow-md`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  {service.description}
                </p>
                <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-accent to-accent/0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
