"use client"

import type React from "react"

import { useState } from "react"

interface ContentSectionProps {
  image: string
  title: string
  reverse?: boolean
  children: React.ReactNode
}

export function ContentSectionVariant1({ image, title, reverse = false, children }: ContentSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative flex gap-12 items-center ${
        reverse ? "flex-row-reverse max-lg:flex-col-reverse" : "flex-row max-lg:flex-col"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Layered Card Effect */}
      <div className="w-[45%] max-lg:w-full relative">
        <div className="relative">
          {/* Background decorative card */}
          <div
            className={`absolute -inset-4 bg-primary/5 rounded-2xl transition-all duration-700 ${
              isHovered ? "translate-x-3 translate-y-3 opacity-100" : "translate-x-2 translate-y-2 opacity-60"
            }`}
          />

          {/* Main image card */}
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating accent element */}
          <div
            className={`absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl transition-all duration-700 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-[55%] max-lg:w-full">
        <div className="max-w-2xl">
          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-0.5 bg-primary transition-all duration-700 ${isHovered ? "w-20" : "w-12"}`} />
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-light text-foreground leading-[1.1] tracking-tight mb-8 text-balance">
            {title}
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">{children}</div>

          {/* Stats or metrics (optional enhancement) */}
         <div className="flex gap-8 mt-10 pt-8 border-t border-border/50">
  <div>
    <div className="text-3xl font-light text-foreground mb-1">500+</div>
    <div className="text-sm text-muted-foreground">Students Placed</div>
  </div>
  <div>
    <div className="text-3xl font-light text-foreground mb-1">95%</div>
    <div className="text-sm text-muted-foreground">Visa Success Rate</div>
  </div>
  <div>
    <div className="text-3xl font-light text-foreground mb-1">20+</div>
    <div className="text-sm text-muted-foreground">Partner Universities</div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}
