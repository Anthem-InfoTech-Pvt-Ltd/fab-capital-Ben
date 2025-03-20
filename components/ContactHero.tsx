"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Whether you're an entrepreneur looking for investment or an investor interested in our opportunities, we'd
            love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

