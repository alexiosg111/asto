'use client';

import { motion } from 'framer-motion';
import { 
  Radio, 
  Building2, 
  Wrench, 
  SignalHigh,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Radio,
    title: 'Tower Installation',
    description: 'Complete tower erection and installation services for telecommunications and broadcast infrastructure.',
    specs: ['Self-Supporting', 'Guyed Towers', 'Monopoles'],
  },
  {
    icon: Building2,
    title: 'Elevator Systems',
    description: 'State-of-the-art elevator installation and modernization for commercial and industrial facilities.',
    specs: ['High-Speed', 'Goods Lifts', 'Modernization'],
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Comprehensive preventive and corrective maintenance programs for all vertical infrastructure.',
    specs: ['24/7 Response', 'Scheduled Checks', 'Emergency Repairs'],
  },
  {
    icon: SignalHigh,
    title: 'Signal Optimization',
    description: 'Advanced signal analysis and optimization for maximum coverage and performance.',
    specs: ['RF Analysis', 'Coverage Mapping', 'Performance Tuning'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-900/80 glass border border-zinc-800 rounded-sm mb-6">
            <span className="text-xs font-mono text-orange-500 tracking-widest">01</span>
            <span className="text-xs text-zinc-400 tracking-wider">// SERVICES</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider">
            CORE CAPABILITIES
          </h2>
          
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            End-to-end vertical infrastructure solutions engineered for precision, 
            reliability, and peak performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-zinc-900/50 glass border border-zinc-800 hover:border-orange-500/50 rounded-sm p-8 transition-all duration-300"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-zinc-700 group-hover:border-orange-500/50 transition-colors" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-zinc-700 group-hover:border-orange-500/50 transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-zinc-700 group-hover:border-orange-500/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-zinc-700 group-hover:border-orange-500/50 transition-colors" />

              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-zinc-800/50 rounded-sm mb-6 group-hover:bg-orange-500/10 transition-colors">
                <service.icon className="w-7 h-7 text-zinc-400 group-hover:text-orange-500 transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl text-white mb-4 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Specs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.specs.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 text-xs font-mono text-zinc-400 tracking-wider"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors group/link"
              >
                <span>LEARN MORE</span>
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-zinc-900/50 glass border border-zinc-800 rounded-sm">
            <div className="text-left">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-zinc-400 text-sm">
                Our engineering team can design specialized solutions for your unique requirements.
              </p>
            </div>
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium tracking-wide transition-colors duration-200 whitespace-nowrap">
              REQUEST CONSULTATION
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
