'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-20 px-6 bg-zinc-900/30">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-safety-orange rounded-full" />
            <span className="font-mono text-safety-orange text-sm tracking-wider uppercase">Contact Hub</span>
            <div className="w-2 h-2 bg-safety-orange rounded-full" />
          </div>
          
          <h2 className="font-condensed font-bold text-4xl md:text-5xl tracking-widest text-white mb-6">
            GET IN <span className="text-safety-orange">TOUCH</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            Ready to reach new heights? Contact our team of experts for your next project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group p-8 border border-zinc-800 bg-zinc-900/50 hover:border-safety-orange transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-condensed font-bold text-xl tracking-wide text-white group-hover:text-safety-orange transition-colors duration-300">
                  Aufzüge Division
                </h3>
              </div>
              <p className="text-zinc-400 mb-6 text-left">
                Modernisierung, Installation und Wartung von Aufzug-Systemen. Zertifizierte Lösungen für jede Höhenlage.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-zinc-500 tracking-wider">STATUS: AVAILABLE</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group p-8 border border-zinc-800 bg-zinc-900/50 hover:border-safety-orange transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-condensed font-bold text-xl tracking-wide text-white group-hover:text-safety-orange transition-colors duration-300">
                  Mobilfunk Division
                </h3>
              </div>
              <p className="text-zinc-400 mb-6 text-left">
                Signal-Optimierung und Netzwerk-Lösungen für optimale Konnektivität in Gebäuden.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-zinc-500 tracking-wider">STATUS: AVAILABLE</span>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-4 border border-zinc-800 bg-zinc-900/30">
              <Mail className="w-6 h-6 text-safety-orange mx-auto mb-2" />
              <p className="font-mono text-sm text-zinc-400">info@vertical-service-solutions.com</p>
            </div>
            <div className="p-4 border border-zinc-800 bg-zinc-900/30">
              <Phone className="w-6 h-6 text-safety-orange mx-auto mb-2" />
              <p className="font-mono text-sm text-zinc-400">+49 (0) XXX XXX XXXX</p>
            </div>
            <div className="p-4 border border-zinc-800 bg-zinc-900/30">
              <MapPin className="w-6 h-6 text-safety-orange mx-auto mb-2" />
              <p className="font-mono text-sm text-zinc-400">Germany, DE</p>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-safety-orange hover:bg-orange-600 text-white font-condensed font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-300 border border-safety-orange mechanical-btn"
          >
            <span className="flex items-center space-x-2">
              <span>Contact Now</span>
              <ExternalLink className="w-4 h-4" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}