export function HowItWorks() {
  const steps = [
    "Decide in the DAO. Proposals set goals, budgets, and standards across hubs.",
    "Operate through Operational Hubs. Pay people, run programs, and stay compliant.",
    "Invest through the OCF. Allocate capital with work receipts so rewards reflect real work.",
    "Earn through the RGH. Sell services and products, handle contracting and invoicing, and return value to builders and public goods.",
    "Protect through the IP Entity. Keep brand and software rights aligned with governance outcomes.",
  ]

  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">How It Works</h2>

        <div className="space-y-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">{step}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch]">
          Checks and balances prevent capture. Value cycles back to the people who build.
        </p>
      </div>
    </section>
  )
}
