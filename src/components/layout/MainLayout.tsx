// src/components/layout/MainLayout.tsx
"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundAnimation from '../three/BackgroundAnimation'
import Navigation from './Navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    // Simuler un temps de chargement pour l'animation d'entrée
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Trouver la section active basée sur le scroll
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background to-background/50">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              }}
              className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent"
            />
          </motion.div>
        ) : (
          <>
            <BackgroundAnimation />
            <Navigation activeSection={activeSection} />
            <main className="relative z-10">
              {children}
            </main>
            
            {/* Progress indicator */}
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="text-sm font-medium">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}