"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, Search } from "lucide-react"
import Link from "next/link"

const categories = ["All", "Press Releases", "Company News", "Investment Updates", "Industry Insights"]

const newsItems = [
  {
    id: 1,
    title: "FabCapital Announces Major Investment in Financial Technology Sector",
    category: "Press Releases",
    date: "February 15, 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-A1T4RIoZdCTC7ip1TOy9bZruPiBXof.jpeg",
    excerpt: "Strategic £100M commitment to revolutionize financial services through technology investment.",
    content:
      "FabCapital, a leading venture capital firm, has announced a significant £100M investment initiative focused on the financial technology sector. This strategic move aims to accelerate innovation and drive the digital transformation of financial services...",
    author: "Sarah Johnson",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Portfolio Company Achieves Unicorn Status",
    category: "Investment Updates",
    date: "February 10, 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-fcPwnxGgznQPO1luO80pF4C3PTpjeX.jpeg",
    excerpt: "Leading fintech platform reaches £1B valuation milestone.",
    content:
      "In a landmark achievement, one of FabCapital's portfolio companies has reached unicorn status with a valuation exceeding £1 billion. This significant milestone underscores the company's rapid growth and market leadership in the competitive fintech landscape...",
    author: "Michael Chen",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "FabCapital Expands European Presence",
    category: "Company News",
    date: "February 5, 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-HRvvrMnMZYdCQUwqbbvvBnpamUpJ8I.jpeg",
    excerpt: "New office opening in Berlin to support growing European portfolio.",
    content:
      "FabCapital is pleased to announce the opening of its new office in Berlin, Germany. This expansion marks a significant step in our commitment to supporting and investing in innovative European startups. The Berlin office will serve as a hub for our operations in Central and Eastern Europe...",
    author: "Lisa Mueller",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "The Future of Digital Banking: Trends to Watch",
    category: "Industry Insights",
    date: "January 30, 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-YhtFJsPDuMFl8CU3r6DxwmX3txyvaX.jpeg",
    excerpt: "Analysis of emerging trends shaping the future of digital banking.",
    content:
      "As we move further into the digital age, the banking sector continues to evolve at a rapid pace. In this article, we explore the key trends that are set to shape the future of digital banking, including AI-driven personalization, blockchain technology, and the rise of neobanks...",
    author: "David Thompson",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "FabCapital Leads Series A Funding for AI-Powered Fintech Startup",
    category: "Investment Updates",
    date: "January 25, 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-bACJPWs4YBCQTDvheSYMevc5mygD3o.jpeg",
    excerpt: "£20M investment in revolutionary AI-driven financial planning platform.",
    content:
      "FabCapital has led a £20 million Series A funding round for an innovative AI-powered financial planning startup. This investment highlights our commitment to supporting cutting-edge technologies that have the potential to transform the financial services landscape...",
    author: "Emma Roberts",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Strategic Partnership Announcement",
    category: "Press Releases",
    date: "January 20, 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-AABaPGTPMKzbuCj0Mmst3CUsVqE7mv.jpeg",
    excerpt: "FabCapital forms strategic alliance with leading global investment firm.",
    content:
      "FabCapital is excited to announce a strategic partnership with a leading global investment firm, expanding our reach and capabilities in the financial technology sector. This collaboration will enhance our ability to support portfolio companies...",
    author: "James Wilson",
    readTime: "5 min read",
  },
]

export default function NewsLayout() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredNews, setFilteredNews] = useState(newsItems)

  useEffect(() => {
    const filtered = newsItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredNews(filtered)
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202025-02-15T132845.513-hzJX04CYByT5klxTbEabqNc07JWSkD.png"
            alt="London Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Latest Updates
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">FabCapital Newsroom</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Stay informed with the latest updates, insights, and announcements from FabCapital
            </p>
            <div className="relative max-w-2xl">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    activeCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
              >
                <Link href={`/news/${item.id}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {item.date}
                      </span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.author}</span>
                      <span className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                        Read More <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

