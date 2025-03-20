"use client"

import { motion } from "framer-motion"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
}

const labels = ["2019", "2020", "2021", "2022", "2023"]
const data = {
  labels,
  datasets: [
    {
      label: "Portfolio Value (£M)",
      data: [100, 150, 250, 400, 600],
      borderColor: "rgb(249, 115, 22)",
      backgroundColor: "rgba(249, 115, 22, 0.5)",
    },
  ],
}

export default function TrackRecord() {
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
          <h2 className="text-4xl font-bold mb-4">Track Record</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consistent growth and strong returns across our portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Line options={options} data={data} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-500 mb-2">35%</div>
                <div className="text-gray-600">Average IRR</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-500 mb-2">£600M</div>
                <div className="text-gray-600">AUM</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                <div className="text-gray-600">Investments</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-orange-500 mb-2">8</div>
                <div className="text-gray-600">Successful Exits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

