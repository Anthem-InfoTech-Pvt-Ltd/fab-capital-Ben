"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function InvestorHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
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
          className="max-w-3xl"
        >
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Investment Opportunities
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Partner with FabCapital</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Join us in investing in the next generation of financial and business services companies. Access exclusive
            opportunities in high-growth markets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#investment-process"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

