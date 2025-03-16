"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  const teamMembers = [
    {
      name: "Tommaso Sommaruga",
      role: "Developer and Data Science and AI student",
      image: "/images/team/placeholder.jpg"
    },
    {
      name: "Alessandro Cucina",
      role: "Electrical Engineering student",
      image: "/images/team/placeholder.jpg"
    },
    {
      name: "Niccolò Pollini",
      role: "Economics student",
      image: "/images/team/placeholder.jpg"
    },
    {
      name: "Daniele Cipolletta",
      role: "Communication Student",
      image: "/images/team/placeholder.jpg"
    },
    {
      name: "Iacopo Natuzzi",
      role: "Economics Master student",
      image: "/images/team/placeholder.jpg"
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Contact Hero */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contatti</h1>
          <p className="text-xl max-w-3xl">
            Conosci il team di PolyMBoe e scopri come puoi collaborare al nostro progetto per la protezione del Lago Maggiore.
          </p>
        </div>
      </div>
      
      {/* Team Section */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Il Nostro Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  {/* If you have actual images, replace this with Image component */}
                  <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                    {member.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <FiMail size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <FiLinkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contattaci</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="La tua email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Oggetto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Oggetto del messaggio"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Il tuo messaggio"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Invia Messaggio
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Direct Contact Information */}
      <section className="section bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contatto Diretto</h2>
            <p className="text-gray-600 mb-6">
              Per richieste urgenti o informazioni dirette, puoi contattarci via email:
            </p>
            
            <div className="inline-flex items-center justify-center space-x-2 text-primary font-medium">
              <FiMail size={20} />
              <a href="mailto:contact@tommasosommaruga.com" className="hover:underline">
                contact@tommasosommaruga.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 