"use client"

import { motion } from "framer-motion"
import { Linkedin, TrendingUp, Users, Briefcase, Building, PoundSterling, CheckCircle } from "lucide-react"

export default function FounderProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allex%20mollart-zUMWXijAzsXxsiN3ksKITfldCOip9G.jpeg"
                  alt="Alex Mollart"
                  className="w-full aspect-4/3 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Alex Mollart</h3>
                    <p className="text-gray-200">Founder & CEO</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/alex-mollart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Alex</h2>
              <p className="text-gray-600 mb-8">
                Alex Mollart brings over three decades of experience in financial services and entrepreneurship. His
                vision of founders funding founders has helped numerous employed professionals transition into
                successful entrepreneurs, creating lasting impact in the financial and business services sector.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold text-orange-500">30+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <PoundSterling className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold text-orange-500">£500M+</div>
                  <div className="text-sm text-gray-600">Active Investments</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <CheckCircle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold text-orange-500">£150M+</div>
                  <div className="text-sm text-gray-600">Exited Investments</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <Building className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold text-orange-500">44</div>
                  <div className="text-sm text-gray-600">Companies Founded</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <Briefcase className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

