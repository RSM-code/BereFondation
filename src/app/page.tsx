// src/app/page.tsx
import ClientWrapper from '@/components/ClientWrapper'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Fallback minimal pendant le chargement */}
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent animate-spin" />
      </div>
      <ClientWrapper />
    </main>
  )
}