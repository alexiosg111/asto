'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const values = [
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified processes ensure every project meets the highest standards of excellence.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified engineers and technicians with decades of combined experience in vertical infrastructure.',
  },
  {
    icon: Award,
    title: 'Industry Leader',
    description: 'Trusted by Fortune 500 companies and government agencies for critical infrastructure projects.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Proven track record of delivering complex projects on schedule and within budget.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-zinc-900 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-800/50 glass border border-zinc-700 rounded-sm mb-6">
              <span className="text-xs font-mono text-orange-500 tracking-widest">02</span>
              <span className="text-xs text-zinc-400 tracking-wider">// ABOUT US</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 tracking-wider">
              ENGINEERING EXCELLENCE SINCE 2008
            </h2>
            
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Vertical Service Solutions has been at the forefront of vertical infrastructure 
              innovation for over 15 years. We combine cutting-edge technology with proven 
              engineering principles to deliver solutions that stand the test of time.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-8">
              Our team of certified professionals brings expertise from diverse industries, 
              including telecommunications, construction, and aerospace. This cross-disciplinary 
              approach enables us to tackle complex challenges and deliver innovative solutions 
              that exceed expectations.
            </p>

            <button className="group px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium tracking-wide transition-colors duration-200 flex items-center space-x-2">
              <span>LEARN MORE</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          {/* Right Column - Values Grid */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-zinc-800/50 glass border border-zinc-700 hover:border-orange-500/30 rounded-sm p-6 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-700/50 rounded-sm flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <value.icon className="w-6 h-6 text-zinc-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
