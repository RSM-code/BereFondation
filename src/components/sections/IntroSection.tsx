// src/components/sections/IntroSection.tsx
"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const PILIERS = ['Tradition', 'Excellence', 'Innovation']

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
          variants={fadeInUp}
        >
          BereFondation
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-foreground/80"
          variants={fadeInUp}
        >
          Une vision tridimensionnelle pour l&apos;avenir
        </motion.p>

        <motion.div 
          className="flex justify-center gap-8"
          variants={staggerChildren}
        >
          {PILIERS.map((pilier) => (
            <motion.div
              key={pilier}
              className="glass-panel p-6 text-center"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2">{pilier}</h3>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full p-2">
            <div className="w-2 h-2 bg-primary rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}