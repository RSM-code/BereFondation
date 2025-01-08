// src/app/page.tsx
import MainLayout from '@/components/layout/MainLayout'
import IntroSection from '@/components/sections/IntroSection'
import PillarsSection from '@/components/sections/PillarsSection'
import StoneSchoolSection from '@/components/sections/StoneSchoolSection'
import SportsExcellenceSection from '@/components/sections/SportsExcellenceSection'
import InnovationSection from '@/components/sections/InnovationSection'

export default function Home() {
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