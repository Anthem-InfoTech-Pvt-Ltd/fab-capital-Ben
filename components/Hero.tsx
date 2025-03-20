"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Founders Funding Founders</h1>
            <p className="text-lg text-gray-600 mb-6">
              Supporting Intrapreneurs (employed superstars) become Entrepreneurs, doing what they do best for
              themselves.
            </p>
            <Link
              href="/#portfolio"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore Our Investments
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg"
          >
            <div className="absolute inset-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3F0A2202-Edit-scaled.jpg-tYKg0YSkO511Y8whRwRBAGc0VNO2ix.jpeg"
                alt="Blackpool Tower with Fireworks"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
            {/* Removed the text overlay from the image */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

