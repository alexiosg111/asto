'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Tower Installation', href: '#services' },
    { name: 'Elevator Systems', href: '#services' },
    { name: 'Maintenance', href: '#services' },
    { name: 'Signal Optimization', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#contact' },
    { name: 'News', href: '#contact' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#contact' },
    { name: 'Support', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-sm" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg tracking-wider text-white">
                    VSS
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 tracking-widest">
                    VERTICAL SYSTEMS
                  </span>
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Precision-engineered vertical infrastructure solutions for 
                telecommunications, industrial facilities, and commercial developments.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 rounded-sm flex items-center justify-center text-zinc-400 hover:text-orange-500 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider mb-6">
                SERVICES
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider mb-6">
                COMPANY
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider mb-6">
                SUPPORT
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider mb-6">
                CERTIFICATION
              </h4>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-sm p-4">
                <div className="text-center">
                  <div className="text-xs font-mono text-orange-500 mb-2">
                    ISO 9001:2015
                  </div>
                  <div className="text-xs text-zinc-500">
                    CERTIFIED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Vertical Service Solutions. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 rounded-sm text-xs text-zinc-400 hover:text-orange-500 transition-all duration-200"
              whileHover={{ y: -2 }}
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
