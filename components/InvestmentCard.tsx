"use client"

import { motion } from "framer-motion"
import { Calendar, PoundSterling, Globe } from "lucide-react"

interface InvestmentCardProps {
  name: string
  image: string
  description: string
  investmentDate?: string
  exitDate?: string
  exitValue?: string
  website?: string
}

export default function InvestmentCard({
  name,
  image,
  description,
  investmentDate,
  exitDate,
  exitValue,
  website,
}: InvestmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {investmentDate && (
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>Investment: {investmentDate}</span>
            </div>

            {exitDate && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span>Exit: {exitDate}</span>
              </div>
            )}
          </div>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-2 px-4 mb-4 rounded-lg border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
          >
            <Globe size={16} className="mr-2" />
            Visit Website
          </a>
        )}

        {exitValue && (
          <div className="p-4 rounded-lg border border-orange-200 bg-orange-50">
            <div className="flex items-center">
              <PoundSterling size={24} className="text-orange-500 mr-3" />
              <div>
                <div className="text-sm text-gray-600">Exit Value</div>
                <div className="text-orange-500 font-bold text-xl">{exitValue}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

