import Link from "next/link"

export function TheStakes() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:pl-80">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF7A1A]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#FF7A1A]/20 bg-gradient-to-br from-[#FF7A1A]/10 via-[#FF7A1A]/5 to-transparent backdrop-blur-sm shadow-[0_0_60px_rgba(255,122,26,0.1)]">
          {/* Accent left border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF7A1A] via-[#FF7A1A] to-[#FF7A1A]/0" />

          <div className="p-8 sm:p-10 pl-10 sm:pl-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF7A1A] mb-5">
              This is already happening
            </p>
            <p className="text-xl sm:text-2xl font-medium text-white leading-snug mb-5 max-w-[52ch]">
              OpenAI&apos;s acquisition of the OpenClaw team isn&apos;t the scandal — it&apos;s the symptom.
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-5 max-w-[70ch]">
              Open source lacks organizations that can scale into real institutions. OpenClaw had no
              DAO, no IP entity, no treasury — nothing to make &quot;staying independent&quot; a
              competitive option against a Big Tech comp package.
            </p>
            <p className="text-base text-white/60 leading-relaxed max-w-[70ch]">
              An SNO changes the equation. With governance, shared ownership, and operational
              infrastructure baked in, open-source projects become institutions — not just repos
              waiting to be acqui-hired.{" "}
              <Link
                href="https://opensourcecapitalism.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF7A1A] hover:text-[#FF7A1A]/80 underline underline-offset-4 decoration-[#FF7A1A]/40 hover:decoration-[#FF7A1A] transition-colors"
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
