import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Vetra() {
  const features = [
    "Specification-driven AI. Define workflows as structured documents so agents act safely and predictably.",
    "Reactive apps and real-time ops. Event subscriptions and collaborative primitives that feel like Git for operations.",
    "Ready to scale. CQRS and event-driven patterns across sharded document storage for consistent performance.",
    "Web3 when needed. Wallet auth, cryptographic verification, and on-chain storage support.",
    "Open cloud option. Vetra Open Cloud on OpenStack and OpenMetal provides a true cloud exit and local-first deployments without vendor lock-in.",
  ]

  return (
    <section id="vetra" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">Vetra enables sovereignty for SNOs</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              SNOs need software and infrastructure that keep control with the network. Vetra is the builder stack for organizational software and modern web apps that embed AI and collaboration from day one while remaining open and portable.
            </p>

            <p className="text-lg font-semibold">What it gives you:</p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Vetra is the software architecture that lets a SNO stay independent, embed AI from the start, and scale without handing leverage to a closed platform.
            </p>

            <Link href="https://vetra.io" target="_blank" rel="noopener noreferrer">
              <Button
                className="rounded-full bg-[#FF7A1A] hover:bg-[#FF7A1A]/90 text-white font-medium shadow-[0_0_20px_rgba(255,122,26,0.3)] hover:shadow-[0_0_30px_rgba(255,122,26,0.5)] transition-all"
              >
                Explore Vetra
              </Button>
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/vetra-cloud.avif"
              alt="Vetra platform interface"
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

