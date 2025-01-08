// src/components/sections/PillarsSection.tsx
"use client"

import { motion } from 'framer-motion'
import { Brush, Medal, Lightbulb } from 'lucide-react'

const pillars = [
  {
    title: "École de la Pierre",
    description: "Formation de 3 artisans par promotion, transmission des savoirs traditionnels",
    icon: Brush,
    budget: "10k€/an",
    color: "from-amber-500 to-amber-700"
  },
  {
    title: "Excellence Sportive",
    description: "3 athlètes premium (6000€), confirmés (3000€), 3 espoirs (2000€)",
    icon: Medal,
    budget: "15k€/an",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Innovation",
    description: "Recherche sur la monnaie et la trésorerie des entreprises",
    icon: Lightbulb,
    budget: "10k€/an",
    color: "from-emerald-500 to-emerald-700"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export default function PillarsSection() {
  return (
    <section id="pillars" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Les Trois Piliers
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${pillar.color}`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 mb-6">{pillar.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10">
                    Budget: {pillar.budget}
                  </span>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 cursor-pointer"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}