"use client"

import { motion } from "framer-motion"
import { Target, Search, TrendingUp, Users } from "lucide-react"

const approaches = [
  {
    icon: Search,
    title: "Rigorous Selection",
    description: "We employ a thorough due diligence process to identify the most promising investment opportunities.",
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description:
      "Concentrated investments in financial technology and business services sectors where we have deep expertise.",
  },
  {
    icon: TrendingUp,
    title: "Value Creation",
    description: "Active involvement in portfolio companies to drive growth and maximize returns.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "Close collaboration with management teams and co-investors to achieve shared success.",
  },
]

export default function InvestmentApproach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Investment Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a disciplined investment strategy focused on creating long-term value through active partnership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

