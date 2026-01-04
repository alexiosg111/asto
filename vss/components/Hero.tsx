'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Zap, Shield, Cog } from 'lucide-react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Infrastructure Silhouette */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: scrollY * 0.5 }}
        >
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <defs>
              <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#a1a1aa" />
              </linearGradient>
            </defs>
            {/* Tower Structure */}
            <g stroke="url(#infraGrad)" strokeWidth="2" fill="none">
              <rect x="200" y="200" width="80" height="400" />
              <rect x="920" y="150" width="80" height="450" />
              <line x1="240" y1="300" x2="960" y2="250" />
              <line x1="240" y1="400" x2="960" y2="350" />
              <line x1="240" y1="500" x2="960" y2="450" />
              <circle cx="240" cy="300" r="4" fill="#f97316" />
              <circle cx="960" cy="250" r="4" fill="#f97316" />
              <circle cx="240" cy="400" r="4" fill="#f97316" />
              <circle cx="960" cy="350" r="4" fill="#f97316" />
              <circle cx="240" cy="500" r="4" fill="#f97316" />
              <circle cx="960" cy="450" r="4" fill="#f97316" />
            </g>
          </svg>
        </motion.div>

        {/* Vertical Scanning Line */}
        <motion.div
          className="absolute w-1 bg-gradient-to-b from-transparent via-safety-orange to-transparent opacity-60"
          style={{
            height: '100vh',
            left: '50%',
            x: '-50%',
          }}
          animate={{
            y: ['-100vh', '100vh'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-8"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-sm text-zinc-400 tracking-wider">SYSTEM ONLINE</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-condensed font-bold text-5xl md:text-7xl lg:text-8xl tracking-widest mb-6"
        >
          <span className="block text-white">REACHING</span>
          <span className="block text-safety-orange">NEW HEIGHTS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Vertical Service Solutions - Ihr Partner für moderne Infrastruktur. 
          Professionelle Lösungen für Aufzüge & Mobilfunk-Systeme.
        </motion.p>

        {/* Service Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: ArrowDown, label: 'Aufzüge', desc: 'Installation & Wartung' },
            { icon: Zap, label: 'Mobilfunk', desc: 'Signal-Optimierung' },
            { icon: Shield, label: 'Sicherheit', desc: 'Zertifizierte Lösungen' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border border-zinc-800 rounded-lg hover:border-safety-orange transition-colors duration-300"
            >
              <item.icon className="w-6 h-6 text-safety-orange flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-condensed font-bold text-white tracking-wide">{item.label}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={scrollToServices}
          className="group mechanical-btn bg-safety-orange hover:bg-orange-600 text-white font-condensed font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 border border-safety-orange"
        >
          <span className="flex items-center space-x-2">
            <span>Services Erkunden</span>
            <Cog className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          </span>
        </motion.button>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-safety-orange to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  )
}