// src/components/sections/StoneSchoolSection.tsx
"use client"

import { motion } from 'framer-motion'
import { Gavel, Book, Award } from 'lucide-react'

const features = [
  {
    icon: Gavel,
    title: "Formation Pratique",
    description: "3 artisans par promotion"
  },
  {
    icon: Book,
    title: "Programme",
    description: "Formation sur 3 ans avec maîtres artisans"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Transmission des techniques ancestrales"
  }
]

export default function StoneSchoolSection() {
  return (
    <section id="stone-school" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            L&apos;École de la Pierre
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un centre d&apos;excellence dédié à la préservation et à la transmission des savoir-faire traditionnels
          </p>
        </motion.div>

        {/* Caractéristiques */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline de la formation */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Parcours de Formation</h3>
          <div className="relative">
            {[1, 2, 3].map((year) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: year * 0.2 }}
                className="flex gap-4 mb-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">A{year}</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-lg font-semibold mb-2">
                    {year === 1 ? "Fondamentaux" : year === 2 ? "Perfectionnement" : "Spécialisation"}
                  </h4>
                  <p className="text-gray-400">
                    {year === 1 
                      ? "Apprentissage des bases et traditions"
                      : year === 2 
                      ? "Maîtrise des techniques avancées"
                      : "Excellence et innovation"
                    }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}