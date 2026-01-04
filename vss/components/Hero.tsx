'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, Wrench } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
      
      {/* Scanning Line Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-orange-500/5 to-zinc-950/0 h-full animate-scan-vertical" />
        <div className="absolute left-0 right-0 h-px bg-orange-500/30 animate-scan-vertical" />
      </motion.div>

      {/* Background Elements with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange-500/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange-500/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Technical Spec Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-900/80 glass border border-zinc-800 rounded-sm mb-8"
        >
          <Zap className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-mono text-zinc-400 tracking-wider">
            EST. 2008 • ISO 9001:2015 CERTIFIED
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white mb-6"
        >
          REACHING NEW
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            HEIGHTS
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 mb-12 font-light"
        >
          Precision-engineered vertical infrastructure solutions for telecommunications, 
          industrial facilities, and commercial developments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium tracking-wide transition-all duration-200 flex items-center space-x-2">
            <span>START PROJECT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-zinc-900/80 glass border border-zinc-800 hover:border-orange-500/50 text-white font-medium tracking-wide transition-all duration-200">
            VIEW PORTFOLIO
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-12"
        >
          {[
            { value: '500+', label: 'Projects' },
            { value: '15', label: 'Years Exp' },
            { value: '98%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-xs font-mono text-zinc-500 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
