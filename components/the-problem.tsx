import { Card } from "@/components/ui/card"

export function TheProblem() {
  const problems = [
    {
      title: "Capitalism's force",
      description: "High productivity with inequality and neglected commons, where profits concentrate in private firms while shared infrastructure, communities, and ecosystems are treated as expendable inputs.",
    },
    {
      title: "Open source underfunded",
      description: "Critical digital infrastructure relies on donations or sponsors, leaving maintainers burned out, upgrades delayed, and essential systems vulnerable to both neglect and corporate capture.",
    },
    {
      title: "Weak incentives for builders",
      description: "Contributors rarely capture the value they create, so the most impactful work for the commons is often unpaid, unstable, or sidelined in favor of proprietary projects that can raise capital.",
    },
    {
      title: "DAOs and DeFi underperform",
      description: "Decentralized in name yet fragile in structure and revenue, with governance tokens that drift, treasuries that sit idle, and no reliable way to fund long term maintenance or real world operations.",
    },
  ]

  return (
    <section id="the-problem" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">The Problem</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-xs font-mono font-medium tracking-wider uppercase text-cyan-400 mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold mb-3 leading-tight">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
