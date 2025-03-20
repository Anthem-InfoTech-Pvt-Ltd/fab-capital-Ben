"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Tag, ArrowRight } from "lucide-react"

const categories = ["All", "Investments", "Portfolio News", "Company Updates", "Press Releases"]

const newsItems = [
  {
    id: 1,
    title: "FabCapital Leads £30M Series B Investment in Emerging Fintech",
    category: "Investments",
    date: "February 15, 2024",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Strategic investment to accelerate growth and international expansion of innovative payment solutions provider.",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Company Achieves Unicorn Status",
    category: "Portfolio News",
    date: "February 1, 2024",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Major milestone reached as valuation exceeds £1 billion following successful Series C funding round.",
  },
  {
    id: 3,
    title: "FabCapital Announces New £100M Fund",
    category: "Company Updates",
    date: "January 15, 2024",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "New fund to focus on early-stage financial technology investments across Europe.",
  },
  // Add more news items...
]

export default function NewsList() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredNews =
    activeCategory === "All" ? newsItems : newsItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
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

        {/* Featured News */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {newsItems
              .filter((item) => item.featured)
              .map((item) => (
                <div key={item.id} className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        {item.date}
                      </span>
                      <span className="flex items-center text-sm text-orange-500">
                        <Tag size={16} className="mr-2" />
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-gray-600 mb-6">{item.excerpt}</p>
                    <a
                      href="#"
                      className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      Read More <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews
            .filter((item) => !item.featured)
            .map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {item.date}
                    </span>
                    <span className="flex items-center text-sm text-orange-500">
                      <Tag size={16} className="mr-2" />
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a
                    href="#"
                    className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  )
}

