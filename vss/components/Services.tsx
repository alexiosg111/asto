'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Signal, Wrench, Radio, TrendingUp } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'aufzuege',
      title: 'Tower Installation',
      subtitle: 'Aufzug-Systeme',
      description: 'Moderne Aufzug-Installation und Modernisierung bestehender Systeme. Zertifizierte Techniker für sichere und effiziente Lösungen.',
      icon: ArrowUp,
      specs: ['bis 300m Höhe', '24/7 Wartung', 'EN 81 zertifiziert'],
      accent: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobilfunk',
      title: 'Signal Optimization',
      subtitle: 'Mobilfunk-Lösungen',
      description: 'Optimierung von Mobilfunk-Netzwerken und Installation von Signal-Verstärkern für maximale Konnektivität in Gebäuden.',
      icon: Signal,
      specs: ['5G ready', 'Multi-Operator', 'Indoor Coverage'],
      accent: 'from-green-500 to-emerald-500'
    },
    {
      id: 'maintenance',
      title: 'Industrial Maintenance',
      subtitle: 'Wartung & Service',
      description: 'Präventive Wartung und schnelle Störungsbehebung für alle vertikalen Transportsysteme und Kommunikationsinfrastruktur.',
      icon: Wrench,
      specs: ['24/7 Support', 'Remote Monitoring', 'Predictive Maintenance'],
      accent: 'from-orange-500 to-red-500'
    },
    {
      id: 'optimization',
      title: 'System Integration',
      subtitle: 'System-Integration',
      description: 'Nahtlose Integration bestehender Systeme mit modernen IoT-Lösungen für optimierte Leistung und Überwachung.',
      icon: Radio,
      specs: ['IoT enabled', 'Cloud Analytics', 'Smart Monitoring'],
      accent: 'from-purple-500 to-pink-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

  return (
    <section id="services" className="relative py-20 px-6">
      {/* Section Header */}
      <div className="container mx-auto max-w-6xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-safety-orange rounded-full" />
            <span className="font-mono text-safety-orange text-sm tracking-wider uppercase">System Modules</span>
            <div className="w-2 h-2 bg-safety-orange rounded-full" />
          </div>
          <h2 className="font-condensed font-bold text-4xl md:text-5xl tracking-widest text-white mb-6">
            CORE <span className="text-safety-orange">SERVICES</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Präzisionslösungen für moderne Infrastruktur. Jeder Service mit industrieller Zuverlässigkeit entwickelt.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group relative"
          >
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-zinc-600 group-hover:border-safety-orange transition-colors duration-300" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-zinc-600 group-hover:border-safety-orange transition-colors duration-300" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-zinc-600 group-hover:border-safety-orange transition-colors duration-300" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-zinc-600 group-hover:border-safety-orange transition-colors duration-300" />

            {/* Main Card */}
            <div className="relative p-8 bg-zinc-900/50 border border-zinc-800 group-hover:border-safety-orange transition-all duration-300 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.accent} bg-opacity-20 border border-zinc-700 group-hover:border-safety-orange transition-colors duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold text-xl tracking-wide text-white group-hover:text-safety-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-safety-orange text-sm font-mono tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-8 h-1 bg-gradient-to-r from-safety-orange to-transparent mb-1" />
                  <span className="font-mono text-xs text-zinc-500">MODULE-{String(index + 1).padStart(3, '0')}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Technical Specs */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">Technical Specs</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-safety-orange rounded-full" />
                      <span className="font-mono text-sm text-zinc-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-zinc-500 tracking-wider">STATUS: ONLINE</span>
                </div>
                <TrendingUp className="w-4 h-4 text-safety-orange" />
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-safety-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl mt-16 text-center"
      >
        <div className="p-8 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
          <h3 className="font-condensed font-bold text-2xl tracking-wide text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-zinc-400 mb-6">
            Unsere Ingenieure entwickeln maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen.
          </p>
          <button className="bg-safety-orange hover:bg-orange-600 text-white font-condensed font-bold px-6 py-3 tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 border border-safety-orange">
            Consultation Anfragen
          </button>
        </div>
      </motion.div>
    </section>
  )
}