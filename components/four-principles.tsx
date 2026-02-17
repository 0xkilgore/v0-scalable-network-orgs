import { Card } from "@/components/ui/card"
import Link from "next/link"

export function FourPrinciples() {
  const entities = [
    {
      number: "01",
      title: "DAO",
      subtitle: "Governance and direction",
      description:
        "The community decision layer. Token holders and contributors vote on budgets, set priorities, and maintain shared standards. The DAO doesn't try to do operations — it steers the network and delegates execution to purpose-built entities.",
    },
    {
      number: "02",
      title: "Operational Hub",
      subtitle: "Turnkey back office for global teams",
      description: null,
      richDescription: true,
    },
    {
      number: "03",
      title: "OCF (Open Capital Facility)",
      subtitle: "Investment linked to real work",
      description:
        "The funding layer that connects capital to contribution. Uses non-transferable work receipts so investors can track where money goes and contributors build verifiable track records. Designed to make open-source projects investable without turning them into traditional startups.",
    },
    {
      number: "04",
      title: "RGH (Revenue-Generating Hub)",
      subtitle: "The commercial arm",
      description:
        "Signs contracts, invoices customers, and generates revenue on behalf of the network. A portion flows back to public goods and core contributors through retroactive funding. This is how open networks become self-sustaining instead of grant-dependent.",
    },
    {
      number: "05",
      title: "IP Entity",
      subtitle: "Brand and rights steward",
      description:
        "Holds trademarks, software rights, and licensing on behalf of the network. Prevents any single actor from capturing shared IP. This is the entity that would have protected OpenClaw's commons — the piece most open-source projects are missing.",
    },
  ]

  return (
    <section id="five-entities" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:pl-80">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">Five Entities, One Network</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch] mb-10">
          Each entity has a clear role. Together they give open networks the legal, financial, and operational
          infrastructure to function like real institutions — without centralizing control.
        </p>

        <div className="space-y-4">
          {entities.map((entity, index) => (
            <Card
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-[#FF7A1A]/10 hover:border-[#FF7A1A]/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF7A1A] to-purple-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="pl-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono font-medium tracking-wider text-[#FF7A1A]/60">
                    {entity.number}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight">{entity.title}</h3>
                </div>
                <p className="text-xs font-medium tracking-wider uppercase text-[#FF7A1A] mb-3">
                  {entity.subtitle}
                </p>
                <p className="text-[15px] text-white/60 leading-relaxed max-w-[75ch]">
                  {entity.richDescription ? (
                    <>
                      A compliant legal entity — typically a Swiss Association — that handles the day-to-day:
                      contributor payments across jurisdictions, invoice management, payroll, expense tracking,
                      onboarding, and regulatory filings. The Operational Hub is the first product live on{" "}
                      <Link href="https://achra.com" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] hover:text-[#FF7A1A]/80 underline underline-offset-4 decoration-[#FF7A1A]/40 transition-colors">
                        Achra
                      </Link>
                      , with entity formation, accounting, and legal services bundled in.
                    </>
                  ) : (
                    entity.description
                  )}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-base text-muted-foreground leading-relaxed max-w-[85ch] mt-8">
          Together these entities route capital, operations, and IP without concentrating control. The DAO sets direction. The Operational Hub executes. The OCF and RGH handle money in and money out. The IP Entity protects the commons.
        </p>
      </div>
    </section>
  )
}
