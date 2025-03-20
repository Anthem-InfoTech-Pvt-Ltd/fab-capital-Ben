"use client"

import { motion } from "framer-motion"

export default function Introduction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Driving Innovation Through Strategic Investment</h2>
            <p className="text-lg text-gray-600 mb-6">
              At FabCapital, we identify and nurture transformative businesses that are reshaping the future of
              financial and business services. Our strategic investments and hands-on approach help companies accelerate
              growth and achieve their full potential.
            </p>
            <p className="text-lg text-gray-600">
              With a proven track record of successful investments and a deep understanding of the financial technology
              landscape, we partner with ambitious entrepreneurs to build category-defining companies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202025-02-15T133213.764-5MSlAC5cyQYDXYwFWrKYYIJHuAlvP2.png"
              alt="Financial Technology"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

