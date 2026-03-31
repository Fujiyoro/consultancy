"use client"

import type React from "react"

import { useState } from "react"

interface ContentSectionProps {
  image: string
  title: string
  reverse?: boolean
  children: React.ReactNode
  number : string
}

export function ContentSectionVariant2({ image, title, reverse = false,number, children }: ContentSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative grid lg:grid-cols-2 gap-0 border-border/50 overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section with Geometric Clip */}
      <div className={`relative overflow-hidden ${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
          {/* Diagonal geometric accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Geometric overlay shape */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-primary transition-all duration-700 ${
              isHovered ? "opacity-90" : "opacity-0"
            }`}
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`relative p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-background via-background to-muted/30 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Number badge */}
        <div className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
          <span className="text-2xl font-light text-primary hidden">{number}</span>
        </div>

        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-primary" />
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Expertise</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-light text-foreground leading-[1.15] tracking-tight mb-6 text-balance">
          {title}
        </h2>

        {/* Content */}
        <div className="space-y-5 text-base text-muted-foreground leading-relaxed mb-8">{children}</div>

        {/* CTA Link */}
        <button
          className={`group/btn inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all duration-300 ${
            isHovered ? "gap-4" : "gap-2"
          }`}
        >
          <span>Explore Our Approach</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
