// src/components/sections/InnovationSection.tsx
"use client"

import { motion } from 'framer-motion'
import { Coins, TrendingUp, LineChart } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { year: "2025", valeur: 1000000 },
  { year: "2026", valeur: 1500000 },
  { year: "2027", valeur: 2200000 },
  { year: "2028", valeur: 3000000 },
  { year: "2029", valeur: 4000000 }
]

const researchAreas = [
  {
    icon: Coins,
    title: "Monnaie & Trésorerie",
    description: "Recherche sur l'optimisation de la trésorerie des entreprises",
    progress: 65
  },
  {
    icon: TrendingUp,
    title: "Technologies Financières",
    description: "Innovation dans les systèmes de paiement et la blockchain",
    progress: 45
  },
  {
    icon: LineChart,
    title: "Analyse Prédictive",
    description: "Modèles prédictifs pour la gestion financière",
    progress: 30
  }
]

export default function InnovationSection() {
  return (
    <section id="innovation" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation & Recherche
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Développement des technologies financières de demain
          </p>
        </motion.div>

        {/* Domaines de recherche */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <area.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-400 mb-4">{area.description}</p>

              {/* Progress bar */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${area.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-400">
                Avancement: {area.progress}%
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graphique de projection */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-6">Projection de Croissance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                <YAxis 
                  stroke="rgba(255,255,255,0.5)"
                  tickFormatter={(value) => `${value / 1000000}M€`}
                />
                <Tooltip 
                  formatter={(value) => `${(value as number / 1000000).toFixed(1)}M€`}
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="valeur"
                  stroke="var(--primary)"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}