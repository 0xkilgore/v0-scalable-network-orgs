import Link from "next/link"

export function TheStakes() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:pl-80">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-[#FF7A1A]/20 bg-[#FF7A1A]/5 backdrop-blur-sm p-8 sm:p-10 shadow-[0_0_40px_rgba(255,122,26,0.08)]">
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FF7A1A]/10 to-transparent pointer-events-none" />

          <div className="relative">
            <p className="text-xs font-medium tracking-wider uppercase text-[#FF7A1A] mb-4">
              This is already happening
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              OpenAI&apos;s acquisition of the OpenClaw team isn&apos;t the scandal — it&apos;s the symptom.
              Open source lacks organizations that can scale into real institutions. OpenClaw had no
              DAO, no IP entity, no treasury — nothing to make &quot;staying independent&quot; a
              competitive option against a Big Tech comp package.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              An SNO changes the equation. With governance, shared ownership, and operational
              infrastructure baked in, open-source projects become institutions — not just repos
              waiting to be acqui-hired.{" "}
              <Link
                href="https://opensourcecapitalism.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF7A1A] hover:text-[#FF7A1A]/80 underline underline-offset-4 transition-colors"
              >
                Open-Source Capitalism
              </Link>{" "}
              provides the economic framework; SNOs provide the structure to enforce it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
