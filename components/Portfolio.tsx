"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  PoundSterling,
  Users,
  Building,
  FolderOpen,
  FileText,
  Map,
  BarChart,
  CheckCircle,
  XCircle,
  Clock,
  Globe,
  Linkedin,
  TrendingUp,
  Facebook,
} from "lucide-react"
import MDProfilePopup from "./MDProfilePopup"

const hidePoundIconStyle = `
  .text-gray-500:has(span:contains("Exit")) svg[data-lucide="pound-sterling"] {
    opacity: 0;
  }
`

const companies = [
  // Live Investments
  {
    name: "Tandem Bank",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tandem-e33DFANw0n8aloxC6I5vpv3tH4Jf10.png",
    description: "Helping Consumers transition to a lower carbon economy, whilst saving money along the way",
    investmentDate: "2022",
    whyInvest: "Alex Mollart founder of 1St Stop/Oplo Group from 2004-2021 alongside Pollen street Capital believed merging Oplo into Tandem Bank would create an exciting new Green driven consumer banking proposition.This completed a journey for Alex from Intrapeneur in a UK lending Plc 1995-2004, too Entrepreneur at Oplo 2004-2021, to holding a corporate investment/shareholding in Tandem Bank today.",
    website: "https://www.tandem.co.uk/",
    stats: [
      { label: "Customers", value: "400K+", icon: Users },
      { label: "ARR", value: "250M+", icon: BarChart },
      { label: "Balance Sheet", value: "4B+", icon: PoundSterling },
    ],
    status: "live",
    managingDirector: {
      name: "Alex Mollart",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allex%20mollart-vibHeEStEAnaLwLgwKeA6Oib3fIok3.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/alex-mollart/",
    },
  },
  {
    name: "Perch",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perch.jpg-JxImigYG6wm3Ii1LX2YCNVUU85Vnvn.jpeg",
    description: "Helping Consumers manage their debt in an accessible and sustainable way",
    investmentDate: "2016",
    whyInvest: "Criag Hinchliffe and the team had all reached C-Level roles at leading companies across Debt purchasing including Arrow Global andbefore startup debt up debt purchaser, Perch Group.With the incumbent industry jugganauts generally over leveraged and lacking capital to buy,Craig and team believed in building a new digital player(using Financial Cloud) without funding or system restraints. ",
    website: "https://www.perchcapital.co.uk/",
    stats: [
      { label: "Debt Purchased", value: "1B+", icon: PoundSterling },
      { label: "Expected Renaming Collections", value: "400M+", icon: BarChart },
      { label: "Employees", value: "400+", icon: Users },
    ],
    status: "live",
    managingDirector: {
      name: "Craig Hincliffe",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/craig%20hincliffe-vJInpMclTOlm75dkNaOwu6gDG6xDYA.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/craighinchliffe/",
    },
  },
  {
    name: "Financial Cloud",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/financial%20cloud.jpg-JI9D7Zb0IJ8zzcLUnRKnTX3yTDpIDr.jpeg",
    description:
      "A flexible and scalable SaaS FS&Banking platform. The Salesforce of Financial Services, simply better!",
    investmentDate: "2018",
    whyInvest:"Cloud – Kyle and Grant had worked for a large Debt purchase and collection business for over 10 years. Uniquely they understood the industry and how legacy technology holds a business back. They had the vision to build a Finanical services SaaS platform from the ground up in an industry they truely understood. A great example of Builders not Dreamers.",
    website: "https://www.financial-cloud.com/",
    stats: [
      { label: "Hosted Users", value: "1M+", icon: Users },
      { label: "ARR", value: "2.5M+", icon: BarChart },
      { label: "Annual Payments Processed", value: "750M", icon: PoundSterling },
    ],
    status: "live",
    managingDirector: {
      name: "Kyle MacDonald",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kyle%20MacDonald-Ojg4NnamoHXDRbnYVxsrmDT68FJ7ax.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/fckylemacdonald/",
    },
  },
  {
    name: "RedKite",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redkite.jpg-pqY9Ddgogj4p2wd2sQstILzzvOikJk.jpeg",
    description: "Funding Regional Developers improve their communities, housing and commercial property",
    investmentDate: "2023",
    whyInvest:"Jake and Lee are a great example of what FabCap looks for. Two founders with a solid career to Director level in Property lendingat Shawbrook Bank keen to start on their own, switching from Intrapeneurs to Entrepreneurs supported with capital and experience from FabCap.. ",
    website: "https://redkite-lending.co.uk/",
    stats: [
      { label: "Funding", value: "25M+", icon: PoundSterling },
      { label: "ARR", value: "3M+", icon: BarChart },
      { label: "Employees", value: "4", icon: Users },
    ],
    status: "live",
    managingDirector: {
      name: "Jake Francis",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jake%20Francis-rG5z6W2fSenU8A0LSmkt7M2JBAHBAb.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/jake-francis-a778b412a/",
    },
  },

  {
    name: "Clearwater Fisheries",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clearwater%20fishery.jpg-uG4PJAz1XWuKajYW9CougpWe4B8gu2.jpeg",
    description: "The North Wests Premier carp and course fishery with 10 lakes over 50 acres managed by Michael Pennington.",
    investmentDate: "2016",
    website: "https://www.gocatch.fish/profile/0f49a352-b002-4950-a64e-5e6e24f12b34",
    stats: [
      { label: "Followers", value: "15k", icon: Users },
      { label: "Turnover", value: "0.5m", icon: PoundSterling },
      { label: "Land Size", value: "80 acres", icon: Map },
    ],
    status: "live",
    managingDirector: {
      name: "Alex Mollart",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allex%20mollart-vibHeEStEAnaLwLgwKeA6Oib3fIok3.jpeg",
      linkedinUrl: "https://www.facebook.com/clearwaterfisheries",
    },
  },
  {
    name: "Clear Property NW",
    image:
      "/property.png",
    description: "A mix of Residential and Commercial Development properties developed then sold.",
    investmentDate: "2018",
    website: "",
    stats: [
      { label: "Projects", value: "25+", icon: FolderOpen },
      { label: "Realisations ", value: "10m+", icon: PoundSterling },
      { label: "Deployable Capital", value: "2m", icon: Users },
    ],
    status: "live",
    managingDirector: {
      name: "Alex Mollart",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allex%20mollart-vibHeEStEAnaLwLgwKeA6Oib3fIok3.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/alex-mollart/",
    },
  }, {
    name: "Clear Advisory",
    image:
      "/advisory.png",
    description: "Bespoke advisory services for businesses or founders looking to leverage Alex, his contacts and experience",
    investmentDate: " 2025 ",
    website: "",
    stats: [
      { label: "Agreements", value: "Bespoke", icon: FileText },
      { label: "Experience", value: "30 years", icon: Building },
      { label: "Network", value: "CEO Network", icon: Users },
    ],
    status: "live",
    managingDirector: {
      name: "Alex Mollart",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allex%20mollart-vibHeEStEAnaLwLgwKeA6Oib3fIok3.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/alex-mollart/",
    },
  },
  {
    name: "Raffily",
    image: "/Raffily.png",
    description: "A brand new LaaS (Loyalty as a service) platform helping brands engage better with their audiences",
    investmentDate: "2024",
    whyInvest:"Ben Govier had led the sales teams of Deal Monster building a direct to consumer discount marketing retail offering across the UK. His vision is to modernise and digitise traditional ways brands engage with their prospective and existing customers.",
    website: "https://www.rewardlabs.co.uk/",
    stats: [
      { label: "Customers", value: "TBC", icon: Users },
      { label: "ARR", value: "TBC", icon: BarChart },
      { label: "Growth", value: "TBC", icon: TrendingUp },
    ],
    status: "live",
    launched: true,
    managingDirector: {
      name: "Ben Govier",
      title: "CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ben%20govier%20-obYZM76bTmmtX7aPxPKt96sKYcRS4r.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/ben-govier-76b0a652/",
    },
  },

  // Exited Investments
  {
    name: "Oplo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oplo%20image-tfQkyWvjyleWKy71lf1IdbcdhtcICf.png",
    description: "Loans helping hardworking mainstream UK consumers realise their potential",
    investmentDate: "2009",
    exitDate: "2016",
    exitValue: "£100M-£250M",
    // website: "https://www.oplo.com",
    status: "exited",
  },
  {
    name: "Loop Money",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loop%20money-rvkHeQF0FKrlXFeXBABXSX8cmhn9T2.png",
    description: "Money sharing made easy for the next generation of UK consumers",
    investmentDate: "2022",
    exitDate: "2024",
    exitValue: "£1M-£5M",
    // website: "https://www.loopmoney.com",
    status: "exited",
  },
  {
    name: "Adcroft Hilton",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adcroft%20hilton%20%281%29.jpg-NnnpiuRAuU6GGegUOw9jyptu3nrp8o.jpeg",
    description: "Business recovery and insolvency practitioners helping businesses in challenging circumstances",
    investmentDate: "2007",
    exitDate: "2009",
    exitValue: "£0-£50K",
    status: "exited",
  },

  // Closed Investments
  {
    name: "Fig Recruitment Limited",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fig%20recruitment%20.jpg-rNIYg3Ocg4y8hXVwa0RZgwrvkQhK2M.jpeg",
    description: "Specialized recruitment services for professional sectors.",
    status: "closed",
  },
  {
    name: "Lightbox Recruitment Limited",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lightbox%20recruitment%20.jpg-iAxMyiRvei5d7LQKjUl2444PIj3SY7.jpeg",
    description: "Talent acquisition services for creative industries.",
    status: "closed",
  },
  {
    name: "Clear Hire Limited",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exited%20%281%29.jpg-IvGptbIxPNMHeKDRdknlBIVl0ke8WG.jpeg",
    description: "Equipment rental and hiring services for construction.",
    status: "closed",
  },
  {
    name: "Elysian Fuels 12 LLP",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elysian%20fuels.jpg-yV0Ovp1V5InGscjlToMNHyZOCj7LcK.jpeg",
    description: "Alternative energy and sustainable fuel solutions.",
    status: "closed",
  },
  {
    name: "Blackpool Design Associates",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackpool%20design%20associates.jpg-jqE5DqqfL8apwMyyjM2Kh32OLEwNUE.jpeg",
    description: "Creative design and architectural services.",
    status: "closed",
  },
  {
    name: "1st Stop Finance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st%20stop.jpg-xRyVUPeFHCV2VGbXvkXX0i4z1oi8F8.jpeg",
    description: "Financial services and lending solutions provider.",
    status: "closed",
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("all")
  const [selectedMD, setSelectedMD] = useState(null)

  const filteredCompanies = companies.filter((company) => {
    if (filter === "all") return true
    return company.status === filter
  })

  const getStatusDetails = (status: string, launched = false) => {
    if (launched) {
      return {
        label: "LAUNCHED",
        icon: Clock,
        bgColor: "bg-blue-600",
        textColor: "text-blue-600",
        borderColor: "border-blue-200",
        bgLight: "bg-blue-50",
      }
    }

    switch (status) {
      case "live":
        return {
          label: "ACTIVE",
          icon: CheckCircle,
          bgColor: "bg-green-600",
          textColor: "text-green-600",
          borderColor: "border-green-200",
          bgLight: "bg-green-50",
        }
      case "exited":
        return {
          label: "EXITED",
          icon: CheckCircle,
          bgColor: "bg-orange-500",
          textColor: "text-orange-500",
          borderColor: "border-orange-200",
          bgLight: "bg-orange-50",
        }
      case "closed":
        return {
          label: "CLOSED",
          icon: XCircle,
          bgColor: "bg-gray-600",
          textColor: "text-gray-600",
          borderColor: "border-gray-200",
          bgLight: "bg-gray-50",
        }
      default:
        return {
          label: "UNKNOWN",
          icon: Clock,
          bgColor: "bg-gray-600",
          textColor: "text-gray-600",
          borderColor: "border-gray-200",
          bgLight: "bg-gray-50",
        }
    }
  }

  // Helper function to determine if a value needs a pound symbol
  const needsPoundSymbol = (label: string) => {
    const financialLabels = [
      "ARR",
      "Funding",
      "Balance Sheet",
      "Recoverable Debt",
      "Expected Remaining Debt",
      // "Annual Payments",
      "Property GDV",
      "Debt Purchased",
    ]
    return financialLabels.some((term) => label.includes(term))
  }

  return (
    <section id="portfolio" className="py-12 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Investments</h2>
          <p className="text-xl text-gray-600 mb-8">
            Partnering with innovative companies to drive growth and create value
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === "all" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Companies
            </motion.button>
            <motion.button
              onClick={() => setFilter("live")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === "live" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Active Investments
            </motion.button>
            <motion.button
              onClick={() => setFilter("exited")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === "exited" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Exited Investments
            </motion.button>
            <motion.button
              onClick={() => setFilter("closed")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === "closed" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Closed Investments
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCompanies.map((company, index) => {
              const statusDetails = getStatusDetails(company.status, company.launched)

              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col h-full"
                >
                  {/* Status Badge - Prominent at the top */}
                  <div
                    className={`w-full py-2 ${statusDetails.bgColor} text-white text-center font-semibold tracking-wider text-sm`}
                  >
                    <div className="flex items-center justify-center">
                      <statusDetails.icon size={16} className="mr-2" />
                      {statusDetails.label}
                    </div>
                  </div>

                  <div className="relative h-48">
                    <img
                      src={company.image || "/placeholder.svg"}
                      alt={company.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${company.status === "closed" ? "opacity-80 grayscale hover:grayscale-0 hover:opacity-100" : ""
                        }`}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                    <p className="text-gray-600 mb-0 leading-tight line-clamp-2 h-[3.7rem] text-sm overflow-hidden">
                      {company.description}
                    </p>

                    {/* Investment Date */}
                    {company.investmentDate && (
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-2">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>Investment: {company.investmentDate}</span>
                        </div>

                        {company.exitDate && (
                          <div className="flex items-center bg-orange-50 px-2 Why we invest: rounded">
                            <Calendar size={16} className="mr-2 text-orange-500" />
                            <span className="font-medium">Exit: {company.exitDate}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {company.whyInvest &&(<p className="text-sm text-gray-600 mb-4 gap-4"><b>Why We Invested:</b>  {company.whyInvest}</p>)}

                    {/* Stats for Live Companies */}
                    {company.status === "live" && company.stats && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-3 gap-4 mt-4"
                      >
                        {company.stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            className="text-center p-3 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors"
                            whileHover={{ scale: 1.05, backgroundColor: "#FFF7ED" }}
                          >
                            <div className="flex justify-center mb-2">
                              <div className="bg-orange-100 p-2 rounded-full">
                                <stat.icon size={16} className="text-orange-500" />
                              </div>
                            </div>
                            <div className="text-orange-500 font-bold">
                              {needsPoundSymbol(stat.label) && stat.value !== "TBC" ? `£${stat.value}` : stat.value}
                            </div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {/* Spacer to push buttons to bottom */}
                    <div className="flex-grow"></div>

                    {/* Website Link Button */}
                    {(company.status === "live" || company.status === "exited") && (
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {company.website && (
                          <motion.a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center py-2 px-4 rounded-lg border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Globe size={16} className="mr-2" />
                            Visit Website
                          </motion.a>
                        )}

                        {company.status === "live" && company.managingDirector && (
                          company.name === "Clearwater Fisheries" ? (
                            <motion.a
                              href={company.managingDirector.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center py-2 px-4 rounded-lg border border-[#3b5998] text-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-all duration-300 ${!company.website ? 'col-span-2' : ''}`}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              <Facebook size={16} className="mr-2" />
                              Facebook
                            </motion.a>
                          ) : (
                            <motion.button
                              onClick={() =>
                                setSelectedMD({
                                  name: company.managingDirector.name,
                                  title: company.managingDirector.title,
                                  company: company.name,
                                  image: company.managingDirector.image,
                                  linkedinUrl: company.managingDirector.linkedinUrl,
                                })
                              }
                              className={`flex items-center justify-center py-2 px-4 rounded-lg border border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300
                             ${!company.website ? 'col-span-2' : ''}`}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              <Linkedin size={16} className="mr-2" />
                              Meet the Boss
                            </motion.button>
                          )
                        )}
                      </div>
                    )}

                    {/* Redesigned Exit Value for Exited Companies */}
                    {company.status === "exited" && company.exitValue && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg p-4 text-white"
                      >
                        <h4 className="text-sm uppercase tracking-wider font-semibold mb-1">Exit Valuation</h4>
                        <div className="text-xl font-bold">{company.exitValue}</div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <MDProfilePopup
          isOpen={!!selectedMD}
          onClose={() => setSelectedMD(null)}
          mdInfo={
            selectedMD || {
              name: "",
              title: "",
              company: "",
              image: "/placeholder.svg",
              linkedinUrl: "",
              likes: "",
              dislikes: "",
              funFact: "",
            }
          }
        />
      </div>
    </section>
  )
}
; <style jsx>{hidePoundIconStyle}</style>

