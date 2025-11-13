export function WhyItMatters() {
  const comparisons = [
    {
      label: "Governance",
      dao: "On chain voting and proposals align decisions with the community, yet often stop at signaling.",
      sno: "DAOs remain the decision layer and are wired into entities that can execute budgets, hire, and ship.",
    },
    {
      label: "Operations",
      dao: "Working groups spin up informally, with unclear scopes, accountability, and local compliance.",
      sno: "Operational Hubs give teams clear mandates, compliant payments, and reliable day to day execution.",
    },
    {
      label: "Funding and revenue",
      dao: "Often lean on one time raises and short term incentives instead of durable revenue.",
      sno: "OCFs and Revenue Hubs connect investment capital and customer income back to public goods and core contributors.",
    },
  ]

  return (
    <section id="from-daos-to-snos" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">From DAOs to SNOs</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch] mb-8">
          DAOs were the first draft of this future. They proved that open treasuries and public governance work, but they left big gaps in legal protection, operations, and sustainable funding.
        </p>

        {/* Comparison Card */}
        <div className="bg-white/2 border border-white/10 rounded-2xl p-6 sm:p-8 mt-8">
          <div className="space-y-8">
            {comparisons.map((row, index) => (
              <div key={index} className="pb-8 last:pb-0 border-b border-white/10 last:border-0">
                {/* Label */}
                <div className="text-sm font-semibold text-[#FF7A1A] uppercase tracking-wider mb-6 border-l-2 border-[#FF7A1A] pl-3">
                  {row.label}
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-mono uppercase text-white/50 mb-3">DAOs today</p>
                    <p className="text-sm text-white/80 leading-relaxed">{row.dao}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-white/50 mb-3">SNOs with the right entities</p>
                    <p className="text-sm text-white/80 leading-relaxed">{row.sno}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
