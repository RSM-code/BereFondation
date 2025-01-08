// src/app/page.tsx
import dynamic from 'next/dynamic'

// Import dynamique des composants client
const MainLayout = dynamic(() => import('@/components/layout/MainLayout'), { ssr: false })
const IntroSection = dynamic(() => import('@/components/sections/IntroSection'), { ssr: false })
const PillarsSection = dynamic(() => import('@/components/sections/PillarsSection'), { ssr: false })
const StoneSchoolSection = dynamic(() => import('@/components/sections/StoneSchoolSection'), { ssr: false })
const SportsExcellenceSection = dynamic(() => import('@/components/sections/SportsExcellenceSection'), { ssr: false })
const InnovationSection = dynamic(() => import('@/components/sections/InnovationSection'), { ssr: false })

export default function Home() {
  return (
    <main>
      <MainLayout>
        <IntroSection />
        <PillarsSection />
        <StoneSchoolSection />
        <SportsExcellenceSection />
        <InnovationSection />
      </MainLayout>
    </main>
  )
}