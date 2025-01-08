// src/components/layout/Navigation.tsx
"use client"

import { motion } from 'framer-motion'
import { Gavel, Trophy, Lightbulb, Home } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

const navigationItems = [
  { id: 'intro', label: 'Accueil', icon: Home },
  { id: 'stone-school', label: 'École de la Pierre', icon: Gavel },
  { id: 'sports', label: 'Excellence Sportive', icon: Trophy },
  { id: 'innovation', label: 'Innovation', icon: Lightbulb }
]

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            BereFondation
          </motion.div>

          {/* Navigation items */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
                  ${activeSection === item.id 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-white/5'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-md hover:bg-white/5"
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-current" />
              <div className="w-6 h-0.5 bg-current" />
              <div className="w-6 h-0.5 bg-current" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}