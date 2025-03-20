import Navigation from "@/components/Navigation"
import InvestorHero from "@/components/InvestorHero"
import InvestmentStrategy from "@/components/InvestmentStrategy"
import TrackRecord from "@/components/TrackRecord"
import InvestmentProcess from "@/components/InvestmentProcess"
import InvestorCTA from "@/components/InvestorCTA"
import Footer from "@/components/Footer"

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <InvestorHero />
      <InvestmentStrategy />
      <TrackRecord />
      <InvestmentProcess />
      <InvestorCTA />
      <Footer />
    </main>
  )
}

