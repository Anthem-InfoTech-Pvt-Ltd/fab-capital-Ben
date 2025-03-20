import Navigation from "@/components/Navigation"
import NewsLayout from "@/components/NewsLayout"
import Footer from "@/components/Footer"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <NewsLayout />
      <Footer />
    </main>
  )
}

