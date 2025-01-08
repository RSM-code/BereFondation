// src/app/page.tsx
import dynamic from 'next/dynamic'
import IntroSection from '../components/sections/IntroSection'

// On charge l'animation de fond dynamiquement pour éviter les erreurs SSR
const BackgroundAnimation = dynamic(
  () => import('../components/three/BackgroundAnimation'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative">
      <BackgroundAnimation />
      <IntroSection />
    </main>
  )
}