// src/components/sections/SportsExcellenceSection.tsx
"use client"

import { motion } from 'framer-motion'
import { Trophy, Star, Target } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const categories = [
  { name: 'Premium', value: 6000, color: '#FFD700', count: 3 },
  { name: 'Confirmés', value: 3000, color: '#C0C0C0', count: 1 },
  { name: 'Espoirs', value: 2000, color: '#CD7F32', count: 3 }
]

export default function SportsExcellenceSection() {
  return (
    <section id="sports" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Excellence Sportive
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soutien et accompagnement des athlètes de haut niveau
          </p>
        </motion.div>

        {/* Catégories d'athlètes */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-8 last:mb-0"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: category.color + '20' }}
                  >
                    {index === 0 ? <Trophy className="text-yellow-500" /> :
                     index === 1 ? <Star className="text-gray-400" /> :
                     <Target className="text-orange-600" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-gray-400">
                      {category.count} athlète{category.count > 1 ? 's' : ''} · {category.value}€/an
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden ml-16">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: category.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(category.value / 6000) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Graphique */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  innerRadius={60}
                  dataKey="value"
                >
                  {categories.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Objectifs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Objectifs 2025-2027</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Médailles", count: "3", subtitle: "Internationales" },
              { title: "Titres", count: "5", subtitle: "Nationaux" },
              { title: "Qualifications", count: "2", subtitle: "Olympiques" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-xl font-semibold mb-1">{stat.title}</div>
                <div className="text-gray-400">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}