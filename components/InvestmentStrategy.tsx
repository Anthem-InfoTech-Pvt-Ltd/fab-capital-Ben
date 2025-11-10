"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Users, Building, Clock, PoundSterling,Briefcase } from "lucide-react"

const strategies = [
  {
    icon: Clock,
    title: "30+ Years Experience",
    description:
      "Three decades of expertise in financial services and entrepreneurship, building successful businesses.",
  },
  {
    icon: Users,
    title: "1000+ Team Members",
    description: "A vast network of professionals across our portfolio companies, driving innovation and growth.",
  },
  {
    icon: PoundSterling,
    title: "£500M+ Active Investments",
    description: "Currently managing a diverse portfolio of innovative companies in financial and business services.",
  },
  {
    icon: TrendingUp,
    title: "£150M+ Exited Investments",
    description: "Proven track record of successful exits, delivering strong returns for our investors.",
  },
  {
    icon: Building,
    title: "44 Companies Founded",
    description: "Extensive experience in founding and scaling businesses across various sectors.",
  },
  {
    icon: Briefcase,
    title: " 100% Commitment",
    description:
      "Dedicated to long-term partnerships, supporting businesses with strategic guidance and sustainable growth.",
  },
    {
    icon: Target,
    title: "Strategic Focus",
    description:
      "Concentrated investments in financial technology and business services sectors where we have deep expertise.",
  },
]

export default function InvestmentStrategy() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three decades of experience in building and scaling successful businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <strategy.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

