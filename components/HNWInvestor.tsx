"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, TrendingUp, Users, Briefcase, Phone, Mail, AlertCircle } from "lucide-react"

export default function HNWInvestor() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "HNW Investor Interest",
          email: email,
          company: "N/A",
          message: `New HNW investor interest registration from: ${email}`,
          type: "investor",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    { icon: Briefcase, text: "Invest alongside FabCap in live deals" },
    { icon: TrendingUp, text: "Join existing portfolio companies generating revenue" },
    { icon: Users, text: "Personal investment director who picks up the phone" },
    { icon: CheckCircle, text: "Early access to new in-flight opportunities" },
  ]

  const stats = [
    { value: "£500M+", label: "Portfolio Valuation" },
    { value: "30+", label: "Years Experience" },
    { value: "44", label: "Companies Founded" },
  ]

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Exclusive Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Best Deals Aren't Advertised
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                They get done quietly between people who already know each other. Until now, that's stayed between us, our partners and the founders we back. <span className="text-orange-400 font-semibold">From today, we're changing that.</span>
              </p>
              <p className="text-gray-400 mb-8">
                FabCapital is opening up to a small number of HNW individuals who want to invest alongside us. Same deals, great terms, no funds and no middlemen.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
                      <benefit.icon size={18} className="text-orange-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Email Capture Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join Our Investor Network
                </h3>
                <p className="text-gray-600 mb-6">
                  Register your interest and we'll be in touch to have a proper conversation about it.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  >
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank You</h4>
                    <p className="text-gray-600">We'll be in touch shortly to discuss investment opportunities.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="hnw-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="hnw-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle size={16} />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Register Interest"}
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-4 text-sm text-gray-500">
                  <a href="mailto:investment@fabcap.co.uk" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                    <Mail size={16} />
                    investment@fabcap.co.uk
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="tel:+44" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                    <Phone size={16} />
                    Get in touch
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Regulatory Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 pt-6 border-t border-gray-800"
          >
            <p className="text-gray-500 text-xs text-center max-w-3xl mx-auto">
              Capital is at risk. Suitable for sophisticated or high net worth investors only. This is not financial advice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
