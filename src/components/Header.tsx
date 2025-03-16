"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="mr-2">🔵</span> 
            <span>PolyMBoe<span className="text-xs align-top ml-1 text-gray-800 font-medium">Lago Maggiore</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link text-gray-800 font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/progetto" className="nav-link text-gray-800 font-medium hover:text-primary">
              Il Progetto
            </Link>
            <Link href="/monitoraggio" className="nav-link text-gray-800 font-medium hover:text-primary">
              Monitoraggio
            </Link>
            <Link href="/contatti" className="nav-link text-gray-800 font-medium hover:text-primary">
              Contatti
            </Link>
            <Link href="/supportaci" className="btn-primary-sm">
              Supportaci
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="nav-link-mobile text-gray-800 font-medium py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/progetto" 
                className="nav-link-mobile text-gray-800 font-medium py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Il Progetto
              </Link>
              <Link 
                href="/monitoraggio" 
                className="nav-link-mobile text-gray-800 font-medium py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Monitoraggio
              </Link>
              <Link 
                href="/contatti" 
                className="nav-link-mobile text-gray-800 font-medium py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatti
              </Link>
              <Link 
                href="/supportaci" 
                className="btn-primary block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Supportaci
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 