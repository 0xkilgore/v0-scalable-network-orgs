"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "the-idea", label: "The Idea" },
  { id: "why-it-matters", label: "Why It Matters" },
  { id: "the-problem", label: "The Problem" },
  { id: "four-principles", label: "Four Principles" },
  { id: "how-it-works", label: "How It Works" },
  { id: "powerhouse-vision", label: "Powerhouse Vision" },
  { id: "join-the-movement", label: "Join the Movement" },
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
    <nav className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-8 z-50">
      <div className="flex flex-col gap-2">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-full transition-all text-left",
              activeSection === id
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
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
