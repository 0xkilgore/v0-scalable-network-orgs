export function TheIdea() {
  const needs = [
    "Handle global operations and compliance as a shared service instead of every team reinventing it.",
    "Fund long term public goods, not just short programs and campaigns.",
    "Let contributors move between projects while keeping their reputation and upside.",
  ]

  return (
    <section id="future-of-work" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">The Future of Work Needs New Structures</h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch] mb-6">
          Scalable Network Organizations are a new pattern for open networks that want to act like companies without becoming companies. They coordinate people, AI agents, and institutions across borders while keeping ownership and decision power in the network.
        </p>

        <p className="text-lg font-semibold mb-4">Networks now need structures that:</p>

        <div className="space-y-3">
          {needs.map((need, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">{need}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
