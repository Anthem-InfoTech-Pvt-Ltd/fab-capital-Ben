"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const futureInvestments = [
  { id: 1, name: "Quantum Computing", description: "Next-generation computing power" },
  { id: 2, name: "Space Technology", description: "Innovations for space exploration" },
  { id: 3, name: "Biotechnology", description: "Advanced medical and genetic research" },
  { id: 3, name: "Biotechnology", description: "Advanced medical and genetic research" },
  { id: 4, name: "Sustainable Agriculture", description: "Eco-friendly farming solutions" },
  { id: 5, name: "Artificial Intelligence", description: "Advanced AI and machine learning" },
]

export default function FutureInvestments() {
  const [selectedInvestment, setSelectedInvestment] = useState(null)

  return (
    <section id="future" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Future Investment Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureInvestments.map((investment) => (
            <motion.div
              key={investment.id}
              className="bg-gray-700 rounded-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedInvestment(investment)}
            >
              <h3 className="text-2xl font-bold mb-2">{investment.name}</h3>
              <p>{investment.description}</p>
            </motion.div>
          ))}
        </div>
        {selectedInvestment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setSelectedInvestment(null)}
          >
            <div className="bg-white text-black p-8 rounded-lg max-w-md">
              <h3 className="text-2xl font-bold mb-4">{selectedInvestment.name}</h3>
              <p className="mb-4">{selectedInvestment.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setSelectedInvestment(null)}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

