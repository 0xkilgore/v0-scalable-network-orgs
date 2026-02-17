import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StickyTOC } from "@/components/sticky-toc"
import { TheIdea } from "@/components/the-idea"
import { WhyItMatters } from "@/components/why-it-matters"
import { TheProblem } from "@/components/the-problem"
import { FourPrinciples } from "@/components/four-principles"
import { HowItWorks } from "@/components/how-it-works"
import { PowerhouseVision } from "@/components/powerhouse-vision"
import { OperationalHub } from "@/components/operational-hub"
import { Vetra } from "@/components/vetra"
import { TheStakes } from "@/components/the-stakes"
import { JoinMovement } from "@/components/join-movement"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <Header />

      <div className="relative">
        <StickyTOC />
        <Hero />
        <TheIdea />
        <TheStakes />
        <WhyItMatters />
        <TheProblem />
        <FourPrinciples />
        <HowItWorks />
        <PowerhouseVision />
        <OperationalHub />
        <Vetra />
        <JoinMovement />
        <Footer />
      </div>
    </div>
  )
}
