import { Card } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      title: "Decide in the DAO",
      body: "Proposals set goals, budgets, and standards across hubs.",
    },
    {
      title: "Operate through Operational Hubs",
      body: "Pay people, run programs, and stay compliant.",
    },
    {
      title: "Invest through the OCF",
      body: "Allocate capital with work receipts so rewards reflect real work.",
    },
    {
      title: "Earn through the RGH",
      body: "Sell services and products, handle contracting and invoicing, and return value to builders and public goods.",
    },
    {
      title: "Protect through the IP Entity",
      body: "Keep brand and software rights aligned with governance outcomes.",
    },
  ]

  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:pl-80">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">How It Works</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#FF7A1A]/20 border border-[#FF7A1A]/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-mono font-medium text-[#FF7A1A]">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2 leading-tight text-base">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.body}</p>
                </div>
              </div>
            ))}
            
            <p className="text-muted-foreground leading-relaxed pt-4">
              Checks and balances prevent capture. Value cycles back to the people who build.
            </p>
          </div>

          <Card className="p-10 bg-card/30 backdrop-blur-sm border-[#FF7A1A]/10 lg:sticky lg:top-8 h-fit">
            <div className="space-y-10">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-5 py-3 rounded-lg bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-base font-mono text-[#FF7A1A]">
                  DAO
                </div>
                <div className="text-[#FF7A1A]/50 text-xl">→</div>
                <div className="px-5 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-base font-mono text-purple-400">
                  Operational Hub
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-5 py-3 rounded-lg bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-base font-mono text-[#FF7A1A]">
                  OCF
                </div>
                <div className="text-[#FF7A1A]/50 text-xl">↔</div>
                <div className="px-5 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-base font-mono text-purple-400">
                  RGH
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-5 py-3 rounded-lg bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-base font-mono text-[#FF7A1A]">
                  IP Entity
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center leading-relaxed pt-6 border-t border-border/50">
                Capital and contributions circulate through OCF, RGH, and Operational Hubs while DAO and IP entities keep direction and rights aligned.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
