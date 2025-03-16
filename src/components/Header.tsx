"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiHome, FiUsers, FiActivity, FiMail, FiHeart } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary flex items-center transition-transform hover:scale-105">
            <span className="mr-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">🔵</span> 
            <span>PolyMBoe<span className="text-xs align-top ml-1 text-black font-medium">Lago Maggiore</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <Link href="/" className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-200 font-medium">
              <FiHome className="text-primary" />
              <span>Home</span>
            </Link>
            
            <Link href="/progetto" className="flex items-center gap-1 px-4 py-2 rounded-md bg-yellow-50 text-black font-bold border-b-2 border-yellow-400 shadow-sm hover:bg-yellow-100 transition-all duration-200 transform hover:-translate-y-1">
              <FiActivity className="text-yellow-600" />
              <span>Il Progetto</span>
            </Link>
            
            <Link href="/monitoraggio" className="flex items-center gap-1 px-4 py-2 rounded-md bg-blue-50 text-black font-bold border-b-2 border-blue-400 shadow-sm hover:bg-blue-100 transition-all duration-200 transform hover:-translate-y-1">
              <FiActivity className="text-blue-600" />
              <span>Monitoraggio</span>
            </Link>
            
            <Link href="/contatti" className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-200 font-medium">
              <FiMail className="text-primary" />
              <span>Contatti</span>
            </Link>
            
            <Link href="/supportaci" className="flex items-center gap-1 ml-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-200 shadow-sm font-medium">
              <FiHeart />
              <span>Supportaci</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg transition-opacity opacity-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="flex items-center gap-2 py-3 px-4 rounded-md text-black font-medium hover:bg-gray-100 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome className="text-primary" />
                <span>Home</span>
              </Link>
              
              <Link 
                href="/progetto" 
                className="flex items-center gap-2 py-3 px-4 my-1 rounded-md bg-yellow-50 text-black font-bold border-l-4 border-yellow-400 hover:bg-yellow-100 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiActivity className="text-yellow-600" />
                <span>Il Progetto</span>
              </Link>
              
              <Link 
                href="/monitoraggio" 
                className="flex items-center gap-2 py-3 px-4 my-1 rounded-md bg-blue-50 text-black font-bold border-l-4 border-blue-400 hover:bg-blue-100 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiActivity className="text-blue-600" />
                <span>Monitoraggio</span>
              </Link>
              
              <Link 
                href="/contatti" 
                className="flex items-center gap-2 py-3 px-4 rounded-md text-black font-medium hover:bg-gray-100 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiMail className="text-primary" />
                <span>Contatti</span>
              </Link>
              
              <Link 
                href="/supportaci" 
                className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark shadow-sm transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHeart />
                <span>Supportaci</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 