"use client"

import { motion } from "framer-motion"

const accreditations = [
  {
    name: "EY Entrepreneur Of The Year",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ey%20logo%20-feNupwl4afrZpUhNO6KtUDSK7pVnIY.png",
    height: 60,
  },
  {
    name: "Investor in Customers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invesors%20customers.jpg-EEnWHbfaDxZstGebVa3XGkGHySDrYv.jpeg",
    height: 50,
  },
  {
    name: "Sunday Times Best Places to Work 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunday%20times.jpg-mnhoZK18ACWlA7loaiLiRW8Hprjbf3.jpeg",
    height: 70,
  },
  {
    name: "Business in the Community",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business%20in%20the%20community-vCVLnfr8Hm2DocDPdfmtMZzrJPUsl6.png",
    height: 50,
  },
  {
    name: "Investors in People Gold",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/investors%20in%20people%20-tSHUbTFAaVrqJdA179pWUpr6or9GDx.png",
    height: 45,
  },
  {
    name: "BIBAS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adcroft%20hilton%20%282%29.jpg-Wp4taMZlXbHy0kuXeLxxUdrQ9bQywa.jpeg",
    height: 40,
  },
]

export default function AccreditationsScroll() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold ">Our Recognition</h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: [0, -1200],
              transition: {
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 24,
                  ease: "linear",
                },
              },
            }}
            className="flex items-center space-x-16 whitespace-nowrap"
          >
            {/* First set of logos */}
            {accreditations.map((accreditation, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ height: "100px" }}
              >
                <img
                  src={accreditation.image || "/placeholder.svg"}
                  alt={accreditation.name}
                  style={{
                    height: `${accreditation.height}px`,
                    width: "auto",
                    objectFit: "contain",
                  }}
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for seamless scrolling */}
            {accreditations.map((accreditation, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ height: "100px" }}
              >
                <img
                  src={accreditation.image || "/placeholder.svg"}
                  alt={accreditation.name}
                  style={{
                    height: `${accreditation.height}px`,
                    width: "auto",
                    objectFit: "contain",
                  }}
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}

