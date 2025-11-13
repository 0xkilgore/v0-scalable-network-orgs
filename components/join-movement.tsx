import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JoinMovement() {
  return (
    <section id="osc-framework" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">A Framework for Open-Source Capitalism</h2>

        <div className="space-y-6 mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch]">
            SNOs make open networks economically self-sustaining. They allow value created in public to flow back to the people who build it, aligning governance, capital, and collaboration to form a more equitable digital economy.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch]">
            This is how open systems compete with Big Tech: not by copying their structures, but by scaling cooperation itself.
          </p>
        </div>

        <Link href="/" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="rounded-full border-[#FF7A1A]/30 hover:bg-[#FF7A1A]/10 hover:border-[#FF7A1A]/50 transition-all bg-transparent"
          >
            Explore Open-Source Capitalism
          </Button>
        </Link>
      </div>
    </section>
  )
}
