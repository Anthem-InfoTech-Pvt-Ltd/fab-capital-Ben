"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Initial Contact",
    description: "Schedule an introductory call to discuss your investment goals and our opportunities.",
  },
  {
    number: "02",
    title: "Due Diligence",
    description: "Review detailed information about our investment strategy and track record.",
  },
  {
    number: "03",
    title: "Investment Committee",
    description: "Meet with our investment committee to discuss specific opportunities.",
  },
  {
    number: "04",
    title: "Documentation",
    description: "Complete necessary documentation and investment agreements.",
  },
]

export default function InvestmentProcess() {
  return (
    <section id="investment-process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Investment Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to becoming an investor with FabCapital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-orange-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-500" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Start the Process
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

