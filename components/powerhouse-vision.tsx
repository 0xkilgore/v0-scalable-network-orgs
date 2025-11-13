import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function PowerhouseVision() {
  const features = [
    "Run contributor payments and grants across regions",
    "Launch an Operational Hub and attach it to the DAO",
    "Set up an OCF with transparent work receipts to fund work",
    "Invoice customers through an RGH and route value to public goods",
    "Safeguard brand and software rights through an IP Entity",
  ]

  return (
    <section id="achra" className="relative px-6 py-24 sm:px-8 lg:px-12 lg:pl-80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A1A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">Achra: where SNOs operate</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Achra is the coordination platform for SNOs. It connects teams, contributors, and investors in one operational marketplace that grows with the network.
            </p>

            <p className="text-lg font-semibold">With Achra, you can:</p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <Link href="https://achra.com" target="_blank" rel="noopener noreferrer">
              <Button
                className="rounded-full bg-[#FF7A1A] hover:bg-[#FF7A1A]/90 text-white font-medium shadow-[0_0_20px_rgba(255,122,26,0.3)] hover:shadow-[0_0_30px_rgba(255,122,26,0.5)] transition-all"
              >
                Explore Achra
              </Button>
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/achra-screenshot.avif"
              alt="Achra platform interface"
              width={600}
              height={450}
              className="rounded-lg border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
