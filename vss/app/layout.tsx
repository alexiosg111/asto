import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vertical Service Solutions - Aufzüge & Mobilfunk',
  description: 'Vertical Service Solutions - Ihr Partner für Aufzüge & Mobilfunk. Professionelle Lösungen für moderne Infrastruktur.',
  keywords: 'Aufzüge, Mobilfunk, Vertical Service Solutions, VSS, Infrastruktur, Installation, Wartung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-zinc-950 text-white relative">
          {/* Grid overlay background */}
          <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />
          {children}
        </div>
      </body>
    </html>
  )
}