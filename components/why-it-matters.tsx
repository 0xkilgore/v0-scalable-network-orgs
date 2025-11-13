export function WhyItMatters() {
  const benefits = [
    "Channels investment toward open networks",
    "Makes open-source code investable",
    "Returns profits to contributors",
    "Funds continuous development",
  ]

  return (
    <section id="why-it-matters" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">Why It Matters</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-[85ch]">
          Capitalism is productive yet uneven in who it serves. Open source is pro-innovation and pro-consumer yet
          underfunded. Open-source capitalism bridges the two so doing the right thing becomes financially rational.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
              <span className="text-foreground leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
