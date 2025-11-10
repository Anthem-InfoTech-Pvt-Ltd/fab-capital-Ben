"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Top grid (text + image side by side) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
             className="mt-12 md:mt-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
              Founders Funding Founders
            </h1>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              Backing the builders, not the dreamers entrepreneurs.
            </h2>

           <p className="text-gray-600  mb-3 leading-relaxed text-justify">
              FabCapital was founded on a simple belief: big ideas usually start small.</p>
              <p className="text-gray-600 mb-3  leading-relaxed text-justify">
              After three decades of building and leading businesses, FabCap founder Alex Mollart saw that
              the best entrepreneurs often start as intrapreneurs. They know their industry inside out,
              have seen the problems first hand and are ready to build something better.
           </p>


         <p className="text-gray-600 mb-3  leading-relaxed text-justify">
            FabCapital exists to back those people – the builders, not the dreamers – with independent
            capital, a network that delivers and the straight-talking support they need to turn real-world
            knowledge into real businesses.
       </p>
       <p className="text-gray-600 mb-3  leading-relaxed text-justify">
            We invest in founders solving real problems, executing fast and building sustainable
            businesses, not hype.
          </p>

          <Link
            href="/#portfolio"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Explore Our Investments
          </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3F0A2202-Edit-scaled.jpg-tYKg0YSkO511Y8whRwRBAGc0VNO2ix.jpeg"
              alt="Blackpool Tower with Fireworks"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Full-width paragraph section below image */}
     
    </section>
  )
}
