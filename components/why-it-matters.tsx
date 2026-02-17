export function WhyItMatters() {
  const challenges = [
    {
      label: "DAOs proved governance works — but couldn't scale operations",
      description:
        "On-chain voting and transparent treasuries were breakthroughs. But most DAOs stall when they try to hire, invoice, manage compliance, or coordinate across jurisdictions. The governance layer works; the execution layer is missing.",
    },
    {
      label: "AI agents are about to change what's possible",
      description:
        "Autonomous agents can already draft budgets, process invoices, monitor compliance, and coordinate contributor payments. But agents need structured organizations to operate in — clear roles, permissions, and accountability. Without that structure, you're just adding automation to chaos.",
    },
    {
      label: "Open networks need real institutions",
      description:
        "Building great technology at scale requires more than a repo and a Discord. It requires legal entities that can sign contracts, manage IP, employ people, and handle money across borders — without giving up community ownership. That's the gap SNOs fill.",
    },
  ]

  return (
    <section id="from-daos-to-snos" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:pl-80">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
          Why New Structures Matter
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch] mb-12">
          The tools for building open technology have never been better. What&apos;s missing is the organizational infrastructure to turn contributors into institutions and projects into networks that last.
        </p>

        <div className="space-y-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden group hover:border-[#FF7A1A]/20 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF7A1A] to-[#FF7A1A]/0 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="pl-4">
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {item.label}
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed max-w-[75ch]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
