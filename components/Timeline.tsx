"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const timelineData = [
  { year: 2010, event: "First major investment in TechCorp" },
  { year: 2013, event: "Expansion into renewable energy sector with GreenEnergy" },
  { year: 2015, event: "Launch of HealthTech initiative" },
  { year: 2018, event: "Major exit: TechCorp acquired for $50M" },
  { year: 2020, event: "Venture into AI and machine learning startups" },
  { year: 2023, event: "Establishment of $100M venture fund" },
]

export default function Timeline() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const timeline = timelineRef.current
    const items = timeline.querySelectorAll(".timeline-item")

    gsap.fromTo(
      items,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timeline,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      },
    )
  }, [])

  return (
    <section id="timeline" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
          Investment Timeline
        </h2>
        <div ref={timelineRef} className="relative">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item mb-8 flex items-center">
              <div className="w-24 text-right mr-4">
                <span className="text-2xl font-bold">{item.year}</span>
              </div>
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-4"></div>
              <div className="flex-1 bg-gray-700 rounded-lg p-4">
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

