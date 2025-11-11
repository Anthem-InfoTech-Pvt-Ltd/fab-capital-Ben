"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

export default function FounderProfile() {
  return (
    <section className="py-24 bg-white scroll-mt-20" id="founder-profile">
      <div className="container mx-auto px-4">
        

          {/* Wrapper not using grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* FLOAT IMAGE LEFT */}
            <div className="relative float-left mr-6 mb-6 w-full md:w-1/2 max-w-lg">

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

            {/* TEXT WRAPS AROUND IMAGE */}
            <div className="clear-left md:clear-none">
              <h2 className="text-3xl font-bold mb-6">Meet Alex</h2>

              <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                I’ve spent over 30 years building and leading businesses in financial services — starting in the North of England and growing ventures that have gone on to have a national impact.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                In 2004, I founded 1st Stop, which became Oplo, with a simple goal: to build a lender that treated customers fairly and put people at the heart of finance. Over 15 years, we grew from a small regional firm into one of the UK’s leading consumer lenders. In 2022, Oplo came together with Tandem Bank, where I became CEO, helping to build what we called the UK’s fairer, greener bank.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                Today, Tandem is one of Blackpool’s biggest employers and a major contributor to the North West economy, something I’m immensely proud of as a Northern founder who believes deeply in the region’s untapped potential.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                After stepping back from corporate life, I knew I wanted to keep building, just differently. FabCap was born from that desire: to work with like-minded people, ready to embark on their own entrepreneurial journey, sharing the highs and lows that inevitably follow. I wanted to back the next generation of builders.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                I’ve lived through booms, busts and everything in between and one thing’s clear — <strong>builders beat dreamers</strong>. Dreamers sometimes win big, but builders win more often. That’s why I back founders with real-world experience, solving real problems and giving it everything to build something that endures.
              </p>
            </div>

          </motion.div>
       
      </div>
    </section>
  )
}
