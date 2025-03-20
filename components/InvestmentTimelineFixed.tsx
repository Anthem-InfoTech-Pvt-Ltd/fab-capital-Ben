"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const investments = [
  {
    name: "Oplo",
    investmentDate: "2009",
    exitDate: "2016",
    exitValue: "£100M-£250M",
    status: "exited",
  },
  {
    name: "Loop Money",
    investmentDate: "2022",
    exitDate: "2024",
    exitValue: "£1M-£5M",
    status: "exited",
  },
  {
    name: "Adcroft Hilton",
    investmentDate: "2007",
    exitDate: "2009",
    exitValue: "£0-£50K",
    status: "exited",
  },
  {
    name: "Tandem Bank",
    investmentDate: "2022",
    status: "live",
  },
  {
    name: "Perch",
    investmentDate: "2016",
    status: "live",
  },
]

export default function InvestmentTimelineFixed() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Investment Timeline</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {investments.map((investment, index) => (
            <motion.div
              key={investment.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "text-right pr-12 md:ml-auto md:mr-1/2" : "pl-12 md:mr-auto md:ml-1/2"}`}
              style={{ maxWidth: "45%" }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500"></div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{investment.name}</h3>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Investment: {investment.investmentDate}</span>
                  </div>

                  {investment.exitDate && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>Exit: {investment.exitDate}</span>
                    </div>
                  )}
                </div>

                {investment.exitValue && (
                  <div className="p-4 rounded-lg border border-orange-200 bg-orange-50">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-3 font-bold text-xl">£</span>
                      <div>
                        <div className="text-sm text-gray-600">Exit Value</div>
                        <div className="text-orange-500 font-bold text-xl">{investment.exitValue}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

