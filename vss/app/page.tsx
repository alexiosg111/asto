'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </main>
  )
}