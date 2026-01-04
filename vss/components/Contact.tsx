'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@vertical-service-solutions.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Industrial Blvd, Suite 500\nHouston, TX 77001',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-xs font-mono text-orange-500 tracking-widest">03</span>
            <span className="text-xs text-zinc-400 tracking-wider">// CONTACT</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider">
            GET IN TOUCH
          </h2>
          
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Ready to elevate your project? Contact our team for a consultation or quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/50 glass border border-zinc-800 rounded-sm p-8"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="tower">Tower Installation</option>
                  <option value="elevator">Elevator Systems</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="signal">Signal Optimization</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium tracking-wide transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="bg-zinc-900/50 glass border border-zinc-800 hover:border-orange-500/30 rounded-sm p-6 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-zinc-800/50 rounded-sm flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white mb-2">
                        {info.label}
                      </h3>
                      <p className="text-zinc-400 whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 glass border border-zinc-800 rounded-sm p-6"
            >
              <h3 className="font-display font-bold text-lg text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Monday - Friday</span>
                  <span className="text-white font-mono">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Saturday</span>
                  <span className="text-white font-mono">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Sunday</span>
                  <span className="text-orange-500 font-mono">Closed</span>
                </div>
                <div className="pt-4 mt-4 border-t border-zinc-800">
                  <p className="text-xs text-orange-500 font-mono tracking-wider">
                    EMERGENCY SERVICE AVAILABLE 24/7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
