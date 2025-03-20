"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "£500M+",
    label: "Assets Under Management",
  },
  {
    value: "25+",
    label: "Portfolio Companies",
  },
  {
    value: "85%",
    label: "Success Rate",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

