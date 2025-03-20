"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, X } from "lucide-react"

interface MDProfilePopupProps {
  isOpen: boolean
  onClose: () => void
  mdInfo: {
    name: string
    title: string
    company: string
    image: string
    linkedinUrl: string
  }
}

export default function MDProfilePopup({ isOpen, onClose, mdInfo }: MDProfilePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Orange Header */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-24" />

              {/* Profile Content */}
              <div className="px-6 py-8 text-center">
                {/* Profile Image - positioned to not overlap with text */}
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden mx-auto -mt-20 mb-6 bg-white shadow-lg">
                  <img
                    src={mdInfo.image || "/placeholder.svg"}
                    alt={mdInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-1">{mdInfo.name}</h3>
                <p className="text-gray-600 mb-2">{mdInfo.title}</p>
                <p className="text-orange-500 font-medium mb-6">{mdInfo.company}</p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.a
                    href={mdInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin className="inline-block mr-2 -mt-1" size={20} />
                    View LinkedIn Profile
                  </motion.a>

                  <motion.button
                    onClick={onClose}
                    className="block w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

