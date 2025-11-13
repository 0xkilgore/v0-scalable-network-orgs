import { Card } from "@/components/ui/card"

export function FourPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Coordination Through a Marketplace Platform",
      description:
        "Builder marketplaces coordinate developers, designers, and product teams on transparent roadmaps. Efficient collaboration replaces ad-hoc contribution.",
    },
    {
      number: "02",
      title: "Profits Before Distribution",
      description:
        "Revenue-Generating Hubs use open-source products to serve users. A portion of profit flows back to builders and investors through structured retroactive rewards.",
    },
    {
      number: "03",
      title: "Maximizing Value Capture (Commercial Licensing)",
      description:
        "Dual licensing blends growth with reciprocation. Open license for collaboration. Commercial license for enterprises that prefer not to share all code.",
    },
    {
      number: "04",
      title: "Making Open Source Investable",
      description:
        "Operational Collateral Funds let investors back open networks. Capital enters through instruments like POWt that represent future revenue from open projects.",
    },
  ]

  return (
    <section id="four-principles" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">The Four Principles</h2>

        <div className="space-y-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="pl-4">
                <div className="text-xs font-mono font-medium tracking-wider uppercase text-cyan-400 mb-3">
                  {principle.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[85ch]">{principle.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
