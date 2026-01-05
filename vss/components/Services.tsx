'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Signal, Wrench, Radio, TrendingUp, ChevronRight, CheckCircle, Clock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'aufzuege',
      title: 'Tower Installation',
      subtitle: 'Aufzug-Systeme',
      description: 'Moderne Aufzug-Installation und Modernisierung bestehender Systeme. Zertifizierte Techniker für sichere und effiziente Lösungen.',
      icon: ArrowUp,
      specs: ['bis 300m Höhe', '24/7 Wartung', 'EN 81 zertifiziert'],
      accent: 'from-blue-500 to-cyan-500',
      bgAccent: 'from-blue-500/10 to-cyan-500/10',
      borderAccent: 'border-blue-500/20',
      status: 'available',
      responseTime: '24h'
    },
    {
      id: 'mobilfunk',
      title: 'Signal Optimization',
      subtitle: 'Mobilfunk-Lösungen',
      description: 'Optimierung von Mobilfunk-Netzwerken und Installation von Signal-Verstärkern für maximale Konnektivität in Gebäuden.',
      icon: Signal,
      specs: ['5G ready', 'Multi-Operator', 'Indoor Coverage'],
      accent: 'from-green-500 to-emerald-500',
      bgAccent: 'from-green-500/10 to-emerald-500/10',
      borderAccent: 'border-green-500/20',
      status: 'available',
      responseTime: '12h'
    },
    {
      id: 'maintenance',
      title: 'Industrial Maintenance',
      subtitle: 'Wartung & Service',
      description: 'Präventive Wartung und schnelle Störungsbehebung für alle vertikalen Transportsysteme und Kommunikationsinfrastruktur.',
      icon: Wrench,
      specs: ['24/7 Support', 'Remote Monitoring', 'Predictive Maintenance'],
      accent: 'from-orange-500 to-red-500',
      bgAccent: 'from-orange-500/10 to-red-500/10',
      borderAccent: 'border-orange-500/20',
      status: 'available',
      responseTime: '4h'
    },
    {
      id: 'optimization',
      title: 'System Integration',
      subtitle: 'System-Integration',
      description: 'Nahtlose Integration bestehender Systeme mit modernen IoT-Lösungen für optimierte Leistung und Überwachung.',
      icon: Radio,
      specs: ['IoT enabled', 'Cloud Analytics', 'Smart Monitoring'],
      accent: 'from-purple-500 to-pink-500',
      bgAccent: 'from-purple-500/10 to-pink-500/10',
      borderAccent: 'border-purple-500/20',
      status: 'available',
      responseTime: '6h'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
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
    <section id="services" className="relative py-24 px-6">
      {/* Section Header - Taiga Style */}
      <div className="container mx-auto max-w-6xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-3 glass rounded-2xl px-6 py-3 elevation-1 mb-6">
            <div className="w-2 h-2 bg-safety-orange rounded-full animate-pulse" />
            <span className="font-mono text-safety-orange text-sm tracking-wider uppercase">System Modules</span>
            <div className="w-2 h-2 bg-safety-orange rounded-full animate-pulse" />
          </div>
          <h2 className="font-condensed font-bold text-4xl md:text-5xl tracking-widest text-white mb-6">
            CORE <span className="text-safety-orange">SERVICES</span>
          </h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Präzisionslösungen für moderne Infrastruktur. Jeder Service mit industrieller Zuverlässigkeit entwickelt und kontinuierlich optimiert.
          </p>
        </motion.div>
      </div>

      {/* Services Grid - Taiga Style */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="group relative"
          >
            {/* Main Card - Taiga Style */}
            <div className="relative glass rounded-3xl p-8 elevation-1 hover:elevation-3 transition-all duration-500 border border-white/5 overflow-hidden">
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgAccent} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className={`p-4 bg-gradient-to-br ${service.bgAccent} rounded-2xl border ${service.borderAccent} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <CheckCircle className="w-5 h-5 text-green-500 bg-zinc-900 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold text-2xl tracking-wide text-white group-hover:text-safety-orange transition-colors duration-300 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-safety-orange text-sm font-mono tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-8 h-1 bg-gradient-to-r from-safety-orange to-transparent mb-2" />
                  <span className="font-mono text-xs text-zinc-500">MODULE-{String(index + 1).padStart(3, '0')}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Technical Specs - Taiga Style */}
              <div className="space-y-4 mb-8">
                <h4 className="font-mono text-sm text-zinc-400 tracking-wider uppercase">Technical Specifications</h4>
                <div className="grid grid-cols-1 gap-3">
                  {service.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-safety-orange rounded-full" />
                      <span className="font-mono text-sm text-zinc-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status and Response Time - Taiga Style */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-zinc-400 tracking-wider">STATUS: AVAILABLE</span>
                  </div>
                  <div className="flex items-center space-x-1 text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span className="font-mono text-xs">{service.responseTime}</span>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-safety-orange" />
              </div>

              {/* CTA Button - Taiga Style */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <button className="w-full group/btn flex items-center justify-center space-x-2 mechanical-btn bg-gradient-to-r from-safety-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 rounded-xl elevation-1 hover:elevation-2 transition-all duration-300">
                  <span>Mehr erfahren</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-safety-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section CTA - Taiga Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl mt-20"
      >
        <div className="glass rounded-3xl p-10 elevation-2 text-center border border-white/5">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-condensed font-bold text-3xl tracking-wide text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-zinc-300 mb-8 leading-relaxed">
              Unsere Ingenieure entwickeln maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen. 
              Von der Beratung bis zur Implementierung - wir begleiten Sie durch den gesamten Prozess.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="mechanical-btn bg-safety-orange hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl elevation-1 hover:elevation-2 transition-all duration-300">
                Kostenlose Beratung
              </button>
              <button className="flex items-center space-x-2 px-6 py-4 glass rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/10">
                <span className="text-zinc-300">Portfolio ansehen</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}