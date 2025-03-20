"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Calendar, Users, Clock, Fish, Sun, Moon } from "lucide-react"
import Script from "next/script"

const pricingOptions = [
  {
    name: "Day Ticket",
    price: "£15",
    icon: Sun,
    color: "bg-blue-500",
    features: ["Access from 7am to 7pm", "Single rod fishing", "Access to main lake", "Parking included"],
    popular: false,
  },
  {
    name: "Premium Day",
    price: "£25",
    icon: Sun,
    color: "bg-orange-500",
    features: ["Access from 7am to 7pm", "Two rod fishing", "Access to all lakes", "Parking included", "Bait included"],
    popular: true,
  },
  {
    name: "Night Fishing",
    price: "£35",
    icon: Moon,
    color: "bg-indigo-600",
    features: ["24-hour access", "Two rod fishing", "Access to all lakes", "Parking included", "Bivvy allowed"],
    popular: false,
  },
]

export default function PricingSection() {
  const [selectedOption, setSelectedOption] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOptionClick = (index) => {
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedOption(index)
      setIsAnimating(false)
    }, 300)
  }

  // Function to open the SwimBooker widget
  const openBookingWidget = () => {
    if (typeof window !== "undefined" && window.SbWidget) {
      window.SbWidget("openWidget")
    }
  }

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
          <h2 className="text-4xl font-bold mb-4">Fishing Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of fishing experiences and book your next adventure instantly
          </p>
        </motion.div>

        {/* Interactive Pricing Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-200 rounded-full">
            {pricingOptions.map((option, index) => (
              <button
                key={option.name}
                onClick={() => handleOptionClick(index)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedOption === index ? "text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {selectedOption === index && (
                  <motion.div
                    layoutId="activePill"
                    className={`absolute inset-0 rounded-full ${option.color}`}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <option.icon size={16} className="mr-2" />
                  {option.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`relative rounded-2xl overflow-hidden ${
                selectedOption === index ? "ring-4 ring-orange-500 shadow-xl" : "bg-white shadow-lg"
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 -translate-y-1">
                    POPULAR
                  </div>
                </div>
              )}

              <div className={`${option.color} p-6 text-white`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{option.name}</h3>
                  <option.icon size={24} />
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{option.price}</span>
                  <span className="text-sm opacity-80"> / per person</span>
                </div>
              </div>

              <div className="p-6 bg-white">
                <ul className="space-y-4 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={openBookingWidget}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
                    selectedOption === index
                      ? `${option.color} text-white`
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <Calendar size={18} className="mr-2" />
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                <Fish size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Well-Stocked Lakes</h3>
              <p className="text-gray-600">Our lakes are stocked with carp, tench, bream, and more</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Friendly</h3>
              <p className="text-gray-600">Facilities for all the family with on-site café and play area</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Booking</h3>
              <p className="text-gray-600">Book your spot instantly with our online booking system</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.button
              onClick={openBookingWidget}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Check Availability & Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* SwimBooker Script */}
      <Script id="swimbooker-script" strategy="afterInteractive">
        {`
          ((d, w, s) => {
            w.SBConfig = {
              "fisheryId": "bca67d65-fde5-4ec8-81e8-8b0f83f97eb4",
              "buttonPosition": "tr"
            }; 
            w[s] = w[s] || (() => {});
            let sc = d.createElement("script");
            sc.async = true;
            sc.src = (w.SBConfig.domain ?? "https://swimbooker.com") + "/widget/dist/sb-widget.js";
            if (d.head) d.head.appendChild(sc);
          })(document, window, "SbWidget");
        `}
      </Script>
    </section>
  )
}

