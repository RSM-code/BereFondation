// src/components/layout/Navigation.tsx
import { useCallback, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { href: '#intro', label: 'Introduction' },
  { href: '#piliers', label: 'Les 3 Piliers' },
  { href: '#ecole', label: 'École de la Pierre' },
  { href: '#sport', label: 'Excellence Sportive' },
  { href: '#innovation', label: 'Innovation' }
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('intro')
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    setIsScrolled(scrollPosition > 50)

    // Déterminer la section active
    const sections = navItems.map(item => item.href.slice(1))
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link 
                href={href}
                className={`relative px-3 py-2 transition-colors hover:text-primary ${
                  activeSection === href.slice(1) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}