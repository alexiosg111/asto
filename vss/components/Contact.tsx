'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Clock, CheckCircle, ChevronRight, Users, Award } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@vertical-service-solutions.com',
      description: 'Schreiben Sie uns eine Nachricht',
      action: 'E-Mail senden'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+49 (0) XXX XXX XXXX',
      description: 'Mo-Fr 8:00-18:00 Uhr erreichbar',
      action: 'Jetzt anrufen'
    },
    {
      icon: MapPin,
      label: 'Standort',
      value: 'Deutschland',
      description: 'Bundesweite Verfügbarkeit',
      action: 'Route planen'
    }
  ]

  const divisions = [
    {
      title: 'Aufzüge Division',
      subtitle: 'Vertical Transportation',
      description: 'Modernisierung, Installation und Wartung von Aufzug-Systemen. Zertifizierte Lösungen für jede Höhenlage.',
      icon: '🏢',
      status: 'available',
      responseTime: '24h',
      projects: '250+',
      specialties: ['EN 81 zertifiziert', 'bis 300m Höhe', '24/7 Wartung'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Mobilfunk Division',
      subtitle: 'Signal Optimization',
      description: 'Signal-Optimierung und Netzwerk-Lösungen für optimale Konnektivität in Gebäuden.',
      icon: '📡',
      status: 'available',
      responseTime: '12h',
      projects: '180+',
      specialties: ['5G ready', 'Multi-Operator', 'Indoor Coverage'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20'
    }
  ]

  return (
    <section id="kontakt" className="relative py-24 px-6 bg-gradient-to-b from-transparent to-zinc-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-3 glass rounded-2xl px-6 py-3 elevation-1 mb-6">
            <div className="w-2 h-2 bg-safety-orange rounded-full animate-pulse" />
            <span className="font-mono text-safety-orange text-sm tracking-wider uppercase">Contact Hub</span>
            <div className="w-2 h-2 bg-safety-orange rounded-full animate-pulse" />
          </div>
          
          <h2 className="font-condensed font-bold text-4xl md:text-5xl tracking-widest text-white mb-6">
            GET IN <span className="text-safety-orange">TOUCH</span>
          </h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to reach new heights? Contact our team of experts for your next project. 
            Wir freuen uns auf Ihre Herausforderung.
          </p>
        </motion.div>

        {/* Contact Methods - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 elevation-1 hover:elevation-2 transition-all duration-300 border border-white/5"
            >
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-safety-orange/20 to-orange-600/20 rounded-2xl mb-4 border border-safety-orange/20">
                  <method.icon className="w-8 h-8 text-safety-orange" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="font-condensed font-bold text-xl text-white mb-2 group-hover:text-safety-orange transition-colors duration-300">
                  {method.label}
                </h3>
                <p className="font-mono text-sm text-safety-orange mb-2">
                  {method.value}
                </p>
                <p className="text-sm text-zinc-400 mb-4">
                  {method.description}
                </p>
                <button className="flex items-center space-x-2 mx-auto text-sm text-zinc-300 group-hover:text-safety-orange transition-colors duration-300">
                  <span>{method.action}</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divisions - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative glass rounded-3xl p-8 elevation-1 hover:elevation-3 transition-all duration-500 border border-white/5 overflow-hidden h-full">
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${division.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${division.bgColor} rounded-2xl flex items-center justify-center text-2xl border ${division.borderColor}`}>
                          {division.icon}
                        </div>
                        <div className="absolute -top-1 -right-1">
                          <CheckCircle className="w-5 h-5 text-green-500 bg-zinc-900 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-condensed font-bold text-2xl tracking-wide text-white group-hover:text-safety-orange transition-colors duration-300 mb-1">
                          {division.title}
                        </h3>
                        <p className="text-safety-orange text-sm font-mono tracking-wider">
                          {division.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 mb-8 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="font-mono text-2xl font-bold text-safety-orange mb-1">
                        {division.projects}
                      </div>
                      <div className="text-xs text-zinc-400 tracking-wide">
                        Abgeschlossene Projekte
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-2xl font-bold text-safety-orange mb-1">
                        {division.responseTime}
                      </div>
                      <div className="text-xs text-zinc-400 tracking-wide">
                        Antwortzeit
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="space-y-3 mb-8">
                    <h4 className="font-mono text-sm text-zinc-400 tracking-wider uppercase">Specialties</h4>
                    <div className="space-y-2">
                      {division.specialties.map((specialty, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-safety-orange rounded-full" />
                          <span className="font-mono text-sm text-zinc-300">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-mono text-xs text-zinc-400 tracking-wider">STATUS: AVAILABLE</span>
                    </div>
                    <div className="flex items-center space-x-1 text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span className="font-mono text-xs">{division.responseTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <button className="w-full group/btn flex items-center justify-center space-x-2 mechanical-btn bg-gradient-to-r from-safety-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 rounded-xl elevation-1 hover:elevation-2 transition-all duration-300">
                      <span>Kontakt aufnehmen</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Taiga Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 elevation-2 border border-white/5 max-w-4xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Users className="w-8 h-8 text-safety-orange" />
                <Award className="w-8 h-8 text-safety-orange" />
              </div>
              <h3 className="font-condensed font-bold text-3xl tracking-wide text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Unser Expertenteam steht bereit, Ihre Vision in die Realität umzusetzen. 
                Von der ersten Beratung bis zur finalen Implementierung - wir begleiten Sie durch den gesamten Prozess.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="mechanical-btn bg-safety-orange hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl elevation-1 hover:elevation-2 transition-all duration-300 flex items-center space-x-3">
                  <span>Kostenlose Beratung</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="flex items-center space-x-2 px-6 py-4 glass rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/10">
                  <span className="text-zinc-300">Projekt anfragen</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}