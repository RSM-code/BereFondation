# init-berefondation.ps1

# Variables
$projectName = "berefondation-website"
$gitRepo = "https://github.com/YourUsername/$projectName.git" # À modifier avec votre repo

# Création du projet Next.js
Write-Host "🚀 Création du projet Next.js..." -ForegroundColor Green
npx create-next-app@latest $projectName --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Déplacement dans le dossier du projet
Set-Location $projectName

# Installation des dépendances supplémentaires
Write-Host "📦 Installation des dépendances..." -ForegroundColor Green
npm install @react-three/fiber @react-three/drei three framer-motion @react-spring/web recharts lucide-react

# Création de la structure des dossiers
Write-Host "🗂️ Création de la structure des dossiers..." -ForegroundColor Green
$folders = @(
    "src/components/layout",
    "src/components/ui",
    "src/components/three",
    "src/components/sections",
    "src/lib/utils",
    "src/hooks",
    "src/styles/animations",
    "src/types",
    "public/assets/images",
    "public/assets/models"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force
}

# Création des fichiers de base
Write-Host "📄 Création des fichiers de base..." -ForegroundColor Green

# Layout de base
$layoutContent = @"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
"@
Set-Content -Path "src/app/layout.tsx" -Value $layoutContent

# Page d'accueil
$pageContent = @"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BereFondation',
  description: 'Une vision tridimensionnelle pour l'avenir',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>BereFondation</h1>
    </main>
  )
}
"@
Set-Content -Path "src/app/page.tsx" -Value $pageContent

# Initialisation de Git si pas déjà fait
if (-not (Test-Path ".git")) {
    Write-Host "🔧 Initialisation de Git..." -ForegroundColor Green
    git init
    git add .
    git commit -m "Initial commit: Project setup"
}

# Clean et build initial
Write-Host "🧹 Nettoyage et build initial..." -ForegroundColor Green
npm run build

Write-Host "`n✨ Setup terminé! Prochaines étapes:" -ForegroundColor Green
Write-Host "1. Créez un repo sur GitHub"
Write-Host "2. Connectez le repo à Vercel"
Write-Host "3. Poussez votre code avec:"
Write-Host "   git remote add origin $gitRepo"
Write-Host "   git push -u origin main"
Write-Host "`n▶️ Pour démarrer le serveur de développement:"
Write-Host "   npm run dev"