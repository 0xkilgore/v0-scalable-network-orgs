export function Hero() {
  return (
    <section id="snos" className="relative px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FF7A1A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-mono font-medium tracking-wider uppercase bg-[#FF7A1A]/10 text-[#FF7A1A] rounded-full border border-[#FF7A1A]/20">
          Explainer
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-8 leading-[1.1]">
          Scalable Network Organizations
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            SNOs are how open ecosystems beat Big Tech. They channel funding and revenue back to contributors, protect the commons, and scale operations while the community sets the rules.
          </p>
        </div>
      </div>
    </section>
  )
}
