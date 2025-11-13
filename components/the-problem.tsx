export function TheProblem() {
  const growthSteps = [
    {
      number: 1,
      title: "Pilot",
      description: "Start with a shared treasury, a few contributors, and a single Operational Hub focused on one clear mission.",
    },
    {
      number: 2,
      title: "Add Hubs",
      description: "Spin up additional Operational Hubs as work spreads into new regions, programs, or teams.",
    },
    {
      number: 3,
      title: "Attach Capital",
      description: "Launch an OCF that funds real work, using transparent work receipts to track where resources go.",
    },
    {
      number: 4,
      title: "Scale Revenue",
      description: "Bring on Revenue Generating Hubs that serve customers, sign contracts, and route value back to the network.",
    },
  ]

  return (
    <section id="built-to-scale" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">Built to Scale</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch] mb-12">
          Start small with a shared treasury and a few contributors. Add Operational Hubs as you expand into new regions. Connect an investment vehicle that rewards real work. Add a commercial arm that serves customers and routes value back to the network. The same architecture that supports a pilot today can run full international operations tomorrow.
        </p>

        {/* Growth Timeline */}
        <div className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {growthSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="relative z-10 p-5 rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm hover:border-[#FF7A1A]/30 transition-colors">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#FF7A1A] bg-[#FF7A1A]/10 flex items-center justify-center mb-4">
                    <span className="text-[#FF7A1A] font-mono font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base font-semibold mb-2 text-white">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                </div>

                {/* Connecting Line (desktop only) */}
                {index < growthSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-4 z-0">
                    <div className="h-0.5 bg-[#FF7A1A]/30 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
