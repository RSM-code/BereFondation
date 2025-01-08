// src/components/ClientWrapper.tsx
"use client"

import dynamic from 'next/dynamic'
import ClientOnly from './hoc/ClientOnly'

// Load Three.js components with NO SSR
const BackgroundAnimation = dynamic(
  () => import('./three/BackgroundAnimation'),
  { ssr: false }
)

// Load other components normally
const MainLayout = dynamic(() => import('./layout/MainLayout'))
const IntroSection = dynamic(() => import('./sections/IntroSection'))
const PillarsSection = dynamic(() => import('./sections/PillarsSection'))
const StoneSchoolSection = dynamic(() => import('./sections/StoneSchoolSection'))
const SportsExcellenceSection = dynamic(() => import('./sections/SportsExcellenceSection'))
const InnovationSection = dynamic(() => import('./sections/InnovationSection'))

export default function ClientWrapper() {
  return (
    <ClientOnly>
      <MainLayout>
        <BackgroundAnimation />
        <IntroSection />
        <PillarsSection />
        <StoneSchoolSection />
        <SportsExcellenceSection />
        <InnovationSection />
      </MainLayout>
    </ClientOnly>
  )
}