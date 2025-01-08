// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BereFondation - Vision Tridimensionnelle',
  description: 'Une fondation innovante alliant tradition, excellence et futur',
  keywords: ['fondation', 'innovation', 'tradition', 'excellence'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        {/* Ajout ultérieur du composant BackgroundAnimation ici */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}