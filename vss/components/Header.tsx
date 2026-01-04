'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUp, ChevronRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { href: '#aufzuege', label: 'Aufzüge', description: 'Installation & Wartung' },
    { href: '#mobilfunk', label: 'Mobilfunk', description: 'Signal-Optimierung' },
    { href: '#services', label: 'Services', description: 'Alle Leistungen' },
    { href: '#kontakt', label: 'Kontakt', description: 'Jetzt Beratung' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass elevation-2 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo - Taiga Style */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-safety-orange to-orange-600 rounded-xl flex items-center justify-center elevation-1 group-hover:elevation-2 transition-all duration-300 group-hover:scale-105">
                <span className="font-bold text-white font-condensed text-xl tracking-wide">VSS</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-condensed font-bold text-xl tracking-wide text-white group-hover:text-safety-orange transition-colors duration-300">
                VERTICAL SERVICE SOLUTIONS
              </h1>
              <p className="font-mono text-xs text-zinc-400 tracking-wider">
                PRECISION ENGINEERING
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Taiga Style */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link 
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 focus-ring"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200 tracking-wide">
                    {item.label}
                  </span>
                  <ChevronRight className="w-3 h-3 text-zinc-500 group-hover:text-safety-orange group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-safety-orange group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Taiga Style */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="mechanical-btn bg-safety-orange hover:bg-orange-600 text-white font-medium px-6 py-2.5 text-sm tracking-wide elevation-1 hover:elevation-2">
              Beratung anfordern
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Taiga Style */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-4 right-4 glass elevation-3 rounded-2xl p-6 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="space-y-3">
              {navItems.map((item, index) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>
                    <h3 className="font-medium text-white group-hover:text-safety-orange transition-colors duration-200">
                      {item.label}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-safety-orange group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-white/10">
                <button className="w-full mechanical-btn bg-safety-orange hover:bg-orange-600 text-white font-medium py-3 rounded-xl elevation-1 hover:elevation-2">
                  Beratung anfordern
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Scroll to Top Button - Taiga Style */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-safety-orange hover:bg-orange-600 text-white rounded-full flex items-center justify-center elevation-2 hover:elevation-3 hover:scale-110 transition-all duration-300 focus-ring z-30"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}