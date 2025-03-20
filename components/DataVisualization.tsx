"use client"

import { useEffect, useRef } from "react"
import { Chart } from "chart.js/auto"

const data = {
  labels: ["TechCorp", "GreenEnergy", "HealthTech", "AI Ventures", "Fintech Solutions"],
  datasets: [
    {
      label: "Investment Amount ($M)",
      data: [5, 10, 8, 15, 7],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Exit Value ($M)",
      data: [50, 100, 80, 0, 0],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
}

export default function DataVisualization() {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          animation: {
            duration: 2000,
            easing: "easeOutBounce",
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14,
                },
              },
            },
            title: {
              display: true,
              text: "Investment Performance",
              font: {
                size: 20,
              },
            },
          },
        },
      })
    }
  }, [])

  return (
    <section id="data" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
          Investment Performance
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <canvas ref={chartRef} />
        </div>
      </div>
    </section>
  )
}

