'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUp } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 bg-safety-orange rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <span className="font-bold text-white font-condensed text-lg">VSS</span>
          </div>
          <span className="font-condensed font-bold text-xl tracking-wider text-white hidden sm:block">
            VERTICAL SERVICE SOLUTIONS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="#aufzuege" 
            className="text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
          >
            Aufzüge
          </Link>
          <Link 
            href="#mobilfunk" 
            className="text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
          >
            Mobilfunk
          </Link>
          <Link 
            href="#services" 
            className="text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
          >
            Services
          </Link>
          <Link 
            href="#kontakt" 
            className="text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-zinc-800">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              href="#aufzuege" 
              className="block text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Aufzüge
            </Link>
            <Link 
              href="#mobilfunk" 
              className="block text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mobilfunk
            </Link>
            <Link 
              href="#services" 
              className="block text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#kontakt" 
              className="block text-zinc-400 hover:text-safety-orange transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-safety-orange hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      )}
    </header>
  )
}