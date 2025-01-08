"use client"

import dynamic from 'next/dynamic'
import ClientOnly from './hoc/ClientOnly'

// Charger BackgroundAnimation sans SSR et avec un fallback
const BackgroundAnimation = dynamic(
  () => import('./three/BackgroundAnimation'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10 bg-background" />
  }
)

// Charger les autres composants normalement
const MainLayout = dynamic(() => import('./layout/MainLayout'))
const IntroSection = dynamic(() => import('./sections/IntroSection'))
const PillarsSection = dynamic(() => import('./sections/PillarsSection'))
const StoneSchoolSection = dynamic(() => import('./sections/StoneSchoolSection'))
const SportsExcellenceSection = dynamic(() => import('./sections/SportsExcellenceSection'))
const InnovationSection = dynamic(() => import('./sections/InnovationSection'))

export default function ClientWrapper() {
  return (
    <ClientOnly>
      <BackgroundAnimation />
      <MainLayout>
        <IntroSection />
        <PillarsSection />
        <StoneSchoolSection />
        <SportsExcellenceSection />
        <InnovationSection />
      </MainLayout>
    </ClientOnly>
  )
}