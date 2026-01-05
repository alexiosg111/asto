'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Zap, Shield, Cog, ChevronRight, CheckCircle } from 'lucide-react'

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

  const features = [
    { icon: ArrowDown, label: 'Aufzüge', desc: 'Installation & Wartung', status: 'online' },
    { icon: Zap, label: 'Mobilfunk', desc: 'Signal-Optimierung', status: 'online' },
    { icon: Shield, label: 'Sicherheit', desc: 'Zertifizierte Lösungen', status: 'online' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Infrastructure Silhouette - Taiga Style */}
        <motion.div
          className="absolute inset-0 opacity-8"
          style={{ y: scrollY * 0.3 }}
        >
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <defs>
              <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Professional Tower Structure */}
            <g stroke="url(#infraGrad)" strokeWidth="1.5" fill="none">
              <rect x="200" y="200" width="60" height="400" rx="4" />
              <rect x="920" y="150" width="60" height="450" rx="4" />
              <line x1="230" y1="300" x2="950" y2="250" strokeWidth="1" />
              <line x1="230" y1="400" x2="950" y2="350" strokeWidth="1" />
              <line x1="230" y1="500" x2="950" y2="450" strokeWidth="1" />
              <circle cx="230" cy="300" r="3" fill="#f97316" />
              <circle cx="950" cy="250" r="3" fill="#f97316" />
              <circle cx="230" cy="400" r="3" fill="#f97316" />
              <circle cx="950" cy="350" r="3" fill="#f97316" />
              <circle cx="230" cy="500" r="3" fill="#f97316" />
              <circle cx="950" cy="450" r="3" fill="#f97316" />
            </g>
          </svg>
        </motion.div>

        {/* Professional Scanning Line */}
        <motion.div
          className="absolute w-0.5 bg-gradient-to-b from-transparent via-safety-orange to-transparent opacity-40"
          style={{
            height: '100vh',
            left: '60%',
          }}
          animate={{
            y: ['-100vh', '100vh'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3" />
      </div>

      {/* Main Content - Taiga Style */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Status Bar - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl px-6 py-3 elevation-1 mb-8 inline-flex items-center space-x-3"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-sm text-zinc-300 tracking-wider">SYSTEM STATUS: ONLINE</span>
          </div>
          <div className="w-px h-4 bg-zinc-600" />
          <div className="font-mono text-xs text-zinc-500">
            UPTIME: 99.9%
          </div>
        </motion.div>

        {/* Main Headline - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-condensed font-bold text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4">
            <span className="block text-white leading-tight">REACHING</span>
            <span className="block text-safety-orange leading-tight">NEW HEIGHTS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-safety-orange to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Subtitle - Taiga Style */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-300 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Vertical Service Solutions - Ihr Partner für moderne Infrastruktur. 
          Professionelle Lösungen für Aufzüge & Mobilfunk-Systeme mit höchsten Qualitätsstandards.
        </motion.p>

        {/* Feature Cards - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="group glass rounded-2xl p-6 elevation-1 hover:elevation-2 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-safety-orange/20 to-orange-600/20 rounded-xl border border-safety-orange/20">
                    <feature.icon className="w-6 h-6 text-safety-orange" />
                  </div>
                  <CheckCircle className="absolute -top-1 -right-1 w-4 h-4 text-green-500 bg-zinc-900 rounded-full" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-condensed font-bold text-white tracking-wide group-hover:text-safety-orange transition-colors duration-300">
                    {feature.label}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            onClick={scrollToServices}
            className="group mechanical-btn bg-safety-orange hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl tracking-wide elevation-1 hover:elevation-2 transition-all duration-300 hover:scale-105 flex items-center space-x-3"
          >
            <span>Services Erkunden</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center space-x-3 px-6 py-4 glass rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">
              Live-Demo ansehen
            </span>
            <Cog className="w-4 h-4 text-zinc-500 group-hover:text-safety-orange group-hover:rotate-180 transition-all duration-500" />
          </button>
        </motion.div>

        {/* Bottom Metrics - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Projekte', value: '500+' },
            { label: 'Erfahrung', value: '15+ Jahre' },
            { label: 'Kunden', value: '200+' },
            { label: 'Verfügbarkeit', value: '24/7' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-safety-orange mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Accent Line - Taiga Style */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safety-orange to-transparent opacity-60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      />
    </section>
  )
}