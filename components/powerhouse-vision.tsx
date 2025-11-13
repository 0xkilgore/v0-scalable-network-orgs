import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PowerhouseVision() {
  return (
    <section id="powerhouse-vision" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight text-center">The Powerhouse Vision</h2>

        {/* Top block - intro paragraphs */}
        <div className="space-y-4 max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerhouse is building the open alternative to Big Tech for the age of AI. Our vision is a world where networks of people, machines, and institutions can coordinate at scale without giving up ownership, privacy, or control.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open Source Capitalism is the economic foundation for this vision and the basis of the Scalable Network Organization model. It focuses on routing value from real products and services back into shared infrastructure, contributors, and public goods instead of locking it inside centralized platforms.
          </p>
        </div>

        {/* Two product cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/2 border border-white/5 rounded-2xl p-6 backdrop-blur flex flex-col">
            <div className="mb-6">
              <Image
                src="/achra-logo.svg"
                alt="Achra"
                width={120}
                height={24}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              Achra is the global marketplace for coordination, where networks design workflows, route payments, and manage contributors across many entities as if they were one organization. Use Achra to run day to day operations for SNOs, DAOs, and other distributed teams.
            </p>
            <Button
              className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all w-full sm:w-auto"
            >
              Explore Achra
            </Button>
          </div>

          <div className="bg-white/2 border border-white/5 rounded-2xl p-6 backdrop-blur flex flex-col">
            <div className="mb-6">
              <Image
                src="/vetra-logo.svg"
                alt="Vetra"
                width={135}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              Vetra turns documents into portable, auditable, API ready data so AI agents and applications can plug into the same shared record of agreements, operations, and history. Use Vetra to keep your network's contracts, policies, and processes in sync across tools.
            </p>
            <Button
              className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all w-full sm:w-auto"
            >
              Explore Vetra
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
