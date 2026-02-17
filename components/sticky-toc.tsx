"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "snos", label: "SNOs" },
  { id: "future-of-work", label: "Future of Work" },
  { id: "from-daos-to-snos", label: "Why It Matters" },
  { id: "built-to-scale", label: "Built to Scale" },
  { id: "five-entities", label: "Five Entities" },
  { id: "how-it-works", label: "How It Works" },
  { id: "achra", label: "Achra" },
  { id: "vetra", label: "Vetra" },
  { id: "osc-framework", label: "OSC Framework" },
]

export function StickyTOC() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-6 z-50 max-w-[180px]">
      <div className="flex flex-col gap-1.5">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-full transition-all text-left",
              activeSection === id
                ? "bg-[#FF7A1A]/20 text-[#FF7A1A] border border-[#FF7A1A]/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
