"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function InvestorCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl mb-8 text-orange-50">
            With over 30 years of experience, 44 companies founded, and £650M+ in total investments, we know what it
            takes to turn ambitious professionals into successful entrepreneurs. Let's discuss how we can help you
            achieve your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Pitch  Your Idea
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

