"use client"

import { motion } from "framer-motion"
import { Calendar, PoundSterling, Globe } from "lucide-react"

const exitedInvestments = [
  {
    name: "Oplo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oplo%20image-tfQkyWvjyleWKy71lf1IdbcdhtcICf.png",
    description: "Loans helping hardworking mainstream UK consumers realise their potential",
    investmentDate: "2009",
    exitDate: "2016",
    exitValue: "£100M-£250M",
    website: "https://www.oplo.com",
  },
  {
    name: "Loop Money",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loop%20money-rvkHeQF0FKrlXFeXBABXSX8cmhn9T2.png",
    description: "Money sharing made easy for the next generation of UK consumers",
    investmentDate: "2022",
    exitDate: "2024",
    exitValue: "£1M-£5M",
    website: "https://www.loopmoney.com",
  },
  {
    name: "Adcroft Hilton",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adcroft%20hilton%20%281%29.jpg-NnnpiuRAuU6GGegUOw9jyptu3nrp8o.jpeg",
    description: "Business recovery and insolvency practitioners helping businesses in challenging circumstances",
    investmentDate: "2007",
    exitDate: "2009",
    exitValue: "£0-£50K",
  },
]

export default function ExitedInvestments() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Exited Investments</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exitedInvestments.map((investment, index) => (
            <motion.div
              key={investment.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={investment.image || "/placeholder.svg"}
                  alt={investment.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{investment.name}</h3>
                <p className="text-gray-600 mb-4">{investment.description}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Investment: {investment.investmentDate}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Exit: {investment.exitDate}</span>
                  </div>
                </div>

                {investment.website && (
                  <a
                    href={investment.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2 px-4 mb-4 rounded-lg border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Globe size={16} className="mr-2" />
                    Visit Website
                  </a>
                )}

                <div className="p-4 rounded-lg border border-orange-200 bg-orange-50">
                  <div className="flex items-center">
                    <PoundSterling size={24} className="text-orange-500 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Exit Value</div>
                      <div className="text-orange-500 font-bold text-xl">{investment.exitValue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

