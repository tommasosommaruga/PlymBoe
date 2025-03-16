"use client";

import Link from 'next/link';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PolyMBoe</h3>
            <p className="mb-4 text-gray-300 font-medium">
              Sistema innovativo di monitoraggio e raccolta degli inquinanti organici persistenti nel Lago Maggiore.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Collegamenti</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/progetto" className="text-gray-300 hover:text-white font-medium">
                  Il Progetto
                </Link>
              </li>
              <li>
                <Link href="/monitoraggio" className="text-gray-300 hover:text-white font-medium">
                  Monitoraggio
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-300 hover:text-white font-medium">
                  Contatti
                </Link>
              </li>
              <li>
                <Link href="/supportaci" className="text-gray-300 hover:text-white font-medium">
                  Supportaci
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mr-2 mt-1 text-primary" />
                <span className="text-gray-300 font-medium">            
                </span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary" />
                <a href="mailto:info@polymyboelago.ch" className="text-gray-300 hover:text-white font-medium">
                  
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary" />
                <a className="text-gray-300 hover:text-white font-medium">
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Partner</h3>
            <ul className="space-y-2">
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 font-medium">
          <p>© {currentYear} PolyMBoe Lago Maggiore. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
} 