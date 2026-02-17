import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative px-4 py-12 sm:px-6 lg:px-8 border-t border-white/10 mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Main footer content - flex layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-8">
          {/* Left section: Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-wider uppercase text-white/50 mb-4">Network</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="https://www.powerhouse.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Powerhouse
              </Link>
              <Link
                href="https://scalablenetworks.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                SNOs
              </Link>
              <Link
                href="https://achra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Achra
              </Link>
              <Link
                href="https://vetra.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Vetra
              </Link>
            </nav>
          </div>

          {/* Right section: Social */}
          <div className="lg:ml-auto">
            <h3 className="text-xs font-medium tracking-wider uppercase text-white/50 mb-4">Community</h3>
            <div className="flex gap-4">
              <Link
                href="https://x.com/PowerhouseDAO"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/x-logo.png"
                  alt="X (Twitter)"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://discord.com/invite/pwQJwgaQKd"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/discord-logo.png"
                  alt="Discord"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © 2026 Powerhouse. Building the future of open networks.
          </p>
        </div>
      </div>
    </footer>
  )
}
