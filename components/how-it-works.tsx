import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HowItWorks() {
  const steps = [
    {
      title: "Builders contribute code",
      body: "Builders ship code, documentation, and operations into shared repositories. Their work is tracked in the open and used as the basis for governance, recognition, and future funding decisions.",
    },
    {
      title: "Capital funds development",
      body: "Funds, foundations, and other backers provide capital to Operational Collateral Funds (OCFs) that support new features, teams, and experiments with transparent rules for how projects are evaluated and renewed.",
    },
    {
      title: "Businesses generate revenue",
      body: "Revenue-Generating Hubs (RGHs) turn the open-source stack into services, products, and integrations for customers, then route a portion of their commercial activity back into the network as fees.",
    },
    {
      title: "DAOs steer the network",
      body: "DAOs set priorities, manage shared brand and IP entities, and allocate treasury across OCFs and Operational Hubs so contributors, funders, and operators stay aligned over time.",
    },
  ]

  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">How It Works</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-[85ch]">
          Open Source Capitalism links contributors, capital, and businesses into a single economic loop around shared open-source infrastructure.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-mono font-medium text-cyan-400">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2 leading-tight text-base">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="p-10 bg-card/30 backdrop-blur-sm border-cyan-500/10 lg:sticky lg:top-8 h-fit">
            <div className="space-y-10">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-5 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-base font-mono text-cyan-400">
                  DAO
                </div>
                <div className="text-cyan-500/50 text-xl">→</div>
                <div className="px-5 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-base font-mono text-purple-400">
                  Operational Hub
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-5 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-base font-mono text-cyan-400">
                  OCF
                </div>
                <div className="text-cyan-500/50 text-xl">↔</div>
                <div className="px-5 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-base font-mono text-purple-400">
                  RGH
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-5 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-base font-mono text-cyan-400">
                  IP Entity
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center leading-relaxed pt-6 border-t border-border/50">
                Capital and contributions circulate through OCF, RGH, and Operational Hubs while DAO and IP entities
                keep direction and rights aligned.
              </p>
            </div>
          </Card>
        </div>

        {/* Closing CTA Section */}
        <Card className="max-w-4xl mx-auto mt-16 p-8 bg-card/50 backdrop-blur-sm border-cyan-500/20">
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Together, these pieces form a <span className="text-foreground font-semibold">Scalable Network Organization</span>, a template for open source capitalism that makes decentralization work in practice instead of only in theory.
            </p>
            <Button
              variant="outline"
              className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
            >
              Learn more about SNOs →
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
