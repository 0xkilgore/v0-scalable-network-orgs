import { Card } from "@/components/ui/card"

export function FourPrinciples() {
  const entities = [
    {
      number: "1",
      title: "DAO",
      description:
        "The decision-making community. Sets direction in public, allocates resources, and maintains shared standards.",
    },
    {
      number: "2",
      title: "Operational Hub",
      description:
        "A nonprofit or service entity. Handles compliant payments, payroll, grants, and contributor onboarding across regions.",
    },
    {
      number: "3",
      title: "OCF (Open Capital Facility)",
      description:
        "The investment layer. Links capital to contribution using non-transferable work receipts so funding tracks real work.",
    },
    {
      number: "4",
      title: "RGH (Revenue-Generating Hub)",
      description:
        "The commercial arm. Signs contracts, invoices customers, and shares a portion of revenue back to the network through retroactive public goods funding.",
    },
    {
      number: "5",
      title: "IP Entity",
      description:
        "The brand and rights steward. Holds trademarks and software rights on behalf of the network to protect the commons.",
    },
  ]

  return (
    <section id="five-entities" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:pl-80">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">Five Entities, One Network</h2>

        <div className="space-y-6 mb-8">
          {entities.map((entity, index) => (
            <Card
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-[#FF7A1A]/10 hover:border-[#FF7A1A]/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF7A1A] to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="pl-4">
                <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#FF7A1A] mb-3">
                  {entity.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{entity.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[85ch]">{entity.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch]">
          Together these entities route capital and contributions without concentrating control. Governance and IP set direction and rights. Hubs do the work and meet compliance needs.
        </p>
      </div>
    </section>
  )
}
