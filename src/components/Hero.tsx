"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title = "Monitoraggio Avanzato del Lago Maggiore", subtitle = "Sistema integrato di boe intelligenti per il controllo e la raccolta degli inquinanti organici persistenti." }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/lake-maggiore.jpg" 
          alt="Lago Maggiore" 
          className="w-full h-full object-cover" 
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-medium">{subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/monitoraggio" className="btn-primary">
              Visualizza Dati
            </Link>
            <Link href="/progetto" className="btn-outline-white">
              Scopri il Progetto
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path 
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M0 60L48 50C96 40 192 20 288 22C384 24 480 48 576 60C672 72 768 72 864 65C960 58 1056 44 1152 38C1248 32 1344 34 1392 35L1440 36V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
} 