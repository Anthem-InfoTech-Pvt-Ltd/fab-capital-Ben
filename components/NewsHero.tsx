"use client"

import { motion } from "framer-motion"

export default function NewsHero() {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Insights</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest developments from FabCapital and our portfolio companies
          </p>
        </motion.div>
      </div>
    </section>
  )
}

