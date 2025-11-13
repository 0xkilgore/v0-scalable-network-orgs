import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <>
      {/* Powerhouse logo - top left */}
      <header className="fixed top-0 left-0 z-50 p-6 sm:p-8">
        <Link
          href="https://www.powerhouse.inc"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-80"
        >
          <Image
            src="/powerhouse-logo.svg"
            alt="Powerhouse"
            width={180}
            height={21}
            className="h-5 w-auto sm:h-6"
            priority
          />
        </Link>
      </header>

      {/* SNO logo - top right */}
      <div className="fixed top-0 right-0 z-50 p-6 sm:p-8">
        <Image
          src="/sno-logo.png"
          alt="SNO"
          width={80}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </div>
    </>
  )
}

