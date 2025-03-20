"use client"

import { motion } from "framer-motion"

const newsItems = [
  {
    date: "February 15, 2024",
    title: "FabCapital Leads £30M Series B Investment in Emerging Fintech",
    excerpt: "Strategic investment to accelerate growth and international expansion.",
  },
  {
    date: "February 1, 2024",
    title: "Portfolio Company Achieves Unicorn Status",
    excerpt: "Major milestone reached as valuation exceeds £1 billion.",
  },
  {
    date: "January 15, 2024",
    title: "FabCapital Announces New £100M Fund",
    excerpt: "New fund to focus on early-stage financial technology investments.",
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">
            Stay updated with our latest investments and portfolio company achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <time className="text-sm text-gray-500">{item.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
                <a href="#" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium">
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

