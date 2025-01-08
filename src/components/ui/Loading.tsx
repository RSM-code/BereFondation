// src/components/ui/Loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent animate-spin" />
    </div>
  )
}