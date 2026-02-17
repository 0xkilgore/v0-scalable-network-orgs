import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OperationalHub() {
  const services = [
    {
      category: "Setup",
      items: [
        "Swiss Association formation with legal counsel",
        "Registered address in Zug",
        "Legal document templates (open-source, counsel-reviewed)",
        "KYB/KYC onboarding",
      ],
    },
    {
      category: "Recurring",
      items: [
        "Monthly accounting and financial close",
        "Invoice management and multi-currency payouts",
        "Contributor onboarding and offboarding",
        "Annual tax filing and regulatory compliance",
      ],
    },
    {
      category: "Add-ons",
      items: [
        "Crypto-friendly bank and exchange setup",
        "Payment processing and offramp integration",
        "AML monitoring and compliance reporting",
        "EOR/PEO onboarding for full-time hires",
      ],
    },
  ]

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:pl-80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#FF7A1A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF7A1A] mb-3">
            Now live on Achra
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            The Operational Hub
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-[75ch]">
            A turnkey back office for global teams. Entity formation, accounting, legal,
            and contributor payments — bundled into one product so you can start building
            instead of navigating jurisdictions.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {services.map((group) => (
            <div
              key={group.category}
              className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-[#FF7A1A]/20 transition-colors"
            >
              <p className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A] mb-4">
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#FF7A1A]/60 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="https://achra.com" target="_blank" rel="noopener noreferrer">
            <Button
              className="rounded-full bg-[#FF7A1A] hover:bg-[#FF7A1A]/90 text-white font-medium shadow-[0_0_20px_rgba(255,122,26,0.3)] hover:shadow-[0_0_30px_rgba(255,122,26,0.5)] transition-all"
            >
              Get started on Achra
            </Button>
          </Link>
          <Link href="https://opensourcecapitalism.org" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full border-[#FF7A1A]/30 hover:bg-[#FF7A1A]/10 hover:border-[#FF7A1A]/50 transition-all bg-transparent"
            >
              Learn the economic framework
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
