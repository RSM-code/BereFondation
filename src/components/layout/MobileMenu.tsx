// src/components/layout/MobileMenu.tsx
"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: Array<{
    id: string
    label: string
    icon: React.ElementType
  }>
  activeSection: string
  onNavigate: (id: string) => void
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigationItems,
  activeSection,
  onNavigate
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-background/95 backdrop-blur-sm border-l border-white/10 z-50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu items */}
            <nav className="px-4 pt-16">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id)
                      onClose()
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg transition-colors
                      ${activeSection === item.id 
                        ? 'bg-primary/20 text-primary' 
                        : 'hover:bg-white/5'
                      }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                )
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}