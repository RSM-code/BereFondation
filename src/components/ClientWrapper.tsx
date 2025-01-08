// src/components/ClientWrapper.tsx
"use client"

import dynamic from 'next/dynamic'

const MainLayout = dynamic(() => import('./layout/MainLayout'), { ssr: false })
const IntroSection = dynamic(() => import('./sections/IntroSection'), { ssr: false })
const PillarsSection = dynamic(() => import('./sections/PillarsSection'), { ssr: false })
const StoneSchoolSection = dynamic(() => import('./sections/StoneSchoolSection'), { ssr: false })
const SportsExcellenceSection = dynamic(() => import('./sections/SportsExcellenceSection'), { ssr: false })
const InnovationSection = dynamic(() => import('./sections/InnovationSection'), { ssr: false })

export default function ClientWrapper() {
  return (
    <MainLayout>
      <IntroSection />
      <PillarsSection />
      <StoneSchoolSection />
      <SportsExcellenceSection />
      <InnovationSection />
    </MainLayout>
  )
}