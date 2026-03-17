import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import LinkedInFeed from "@/components/LinkedInFeed"
import Portfolio from "@/components/Portfolio"
import InvestmentStrategy from "@/components/InvestmentStrategy"
import InvestorCTA from "@/components/InvestorCTA"
import Footer from "@/components/Footer"
import FounderProfile from "@/components/FounderProfile"
import AccreditationsScroll from "@/components/AccreditationsScroll"
import GlobalStyles from "@/components/GlobalStyles"
import HNWInvestor from "@/components/HNWInvestor"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <GlobalStyles />
      <Navigation />
      <Hero />
      <AccreditationsScroll />
      <FounderProfile />
      <HNWInvestor />
      <Portfolio />
      <LinkedInFeed />
      <InvestmentStrategy />
      <InvestorCTA />
      <Footer />
    </main>
  )
}

