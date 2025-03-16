"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiHeart, FiDollarSign, FiUsers, FiCoffee, FiPlusCircle, FiCpu, FiAlertCircle, FiAnchor, FiActivity } from 'react-icons/fi';

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Donazione Singola",
      description: "Sostieni il nostro progetto con una donazione una tantum di qualsiasi importo.",
      icon: <FiDollarSign size={40} />,
      buttonText: "Dona Ora"
    },
    {
      title: "Sostegno Mensile",
      description: "Diventa un sostenitore regolare con una piccola donazione mensile.",
      icon: <FiHeart size={40} />,
      buttonText: "Diventa Sostenitore"
    },
    {
      title: "Volontariato",
      description: "Offri il tuo tempo e le tue competenze per aiutare nelle attività del progetto.",
      icon: <FiUsers size={40} />,
      buttonText: "Unisciti a Noi"
    },
    {
      title: "Offrici un Caffè",
      description: "Anche un piccolo contributo fa la differenza per il nostro team.",
      icon: <FiCoffee size={40} />,
      buttonText: "Offri un Caffè"
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Support Hero */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Supportaci</h1>
          <p className="text-xl max-w-3xl mb-4">
            Il tuo contributo è fondamentale per proteggere il Lago Maggiore. 
            Scopri come puoi sostenere il progetto PolyMBoe.
          </p>
          <p className="text-xl max-w-3xl font-medium bg-blue-700 p-4 rounded-lg shadow-lg border-l-4 border-yellow-400">
            Il nostro sistema innovativo combina <span className="font-bold text-yellow-300">boe di monitoraggio intelligenti</span>, 
            <span className="font-bold text-yellow-300"> intelligenza artificiale predittiva</span> e 
            <span className="font-bold text-yellow-300"> imbarcazioni di raccolta specializzate</span>. 
            I dati raccolti dalle boe vengono analizzati in tempo reale dai nostri algoritmi di machine learning, 
            che allertano le imbarcazioni di pulizia permettendo interventi rapidi e mirati.
          </p>
        </div>
      </div>
      
      {/* Support Options */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Come Puoi Aiutarci</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-primary mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{option.title}</h3>
                <p className="text-black mb-6">{option.description}</p>
                <button className="btn-primary px-6 py-2 rounded-md">
                  {option.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Support Us */}
      <section className="section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Perché Supportarci</h2>
          
          <div className="max-w-3xl mx-auto prose lg:prose-lg">
            <p className="text-black">
              Il progetto PolyMBoe mira alla salvaguardia dell'ecosistema del Lago Maggiore, 
              affrontando il crescente problema degli inquinanti organici persistenti. Con il tuo supporto, possiamo:
            </p>
            
            <ul className="text-black">
              <li>Espandere la rete di boe intelligenti per un monitoraggio più efficace</li>
              <li>Migliorare gli algoritmi di intelligenza artificiale per previsioni più accurate</li>
              <li>Potenziare la flotta di imbarcazioni per la raccolta degli inquinanti</li>
              <li>Condurre più ricerche sull'impatto ambientale</li>
              <li>Organizzare iniziative educative nelle comunità locali</li>
            </ul>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Tecnologia all'avanguardia</h3>
            
            <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary text-black">
              Il nostro ecosistema tecnologico integrato è basato su <strong>algoritmi di machine learning avanzati</strong> che analizzano 
              continuamente i dati raccolti dalle boe. Questo sistema predittivo permette alle nostre imbarcazioni di:
            </p>
            
            <ul className="text-black">
              <li>Ricevere dati in tempo reale sulla presenza di inquinanti organici persistenti (IPA, DDT, PCB e PBDE)</li>
              <li>Conoscere in anticipo la direzione e la velocità di diffusione delle sostanze inquinanti</li>
              <li>Prepararsi con l'attrezzatura adeguata prima di raggiungere le zone contaminate</li>
              <li>Ottimizzare i percorsi e coordinare più imbarcazioni per interventi efficaci</li>
              <li>Raccogliere dati sugli interventi per migliorare costantemente l'efficienza del sistema</li>
            </ul>
            
            <p className="text-black">
              Ogni contributo, grande o piccolo, fa la differenza nel nostro impegno per 
              preservare questo prezioso ecosistema per le generazioni future e nell'avanzamento di questa tecnologia innovativa.
            </p>
          </div>
        </div>
      </section>
      
      {/* Advanced Technology Section - Updated */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">La Nostra Pipeline Tecnologica</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FiActivity size={40} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Monitoraggio</h3>
              <p className="text-black">
                Le nostre boe intelligenti sono equipaggiate con sensori avanzati che rilevano IPA, DDT, PCB e PBDE nelle acque del lago.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FiCpu size={40} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Analisi AI</h3>
              <p className="text-black">
                I dati raccolti vengono elaborati in tempo reale dal nostro sistema di machine learning che analizza concentrazione e diffusione.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FiAlertCircle size={40} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Previsione</h3>
              <p className="text-black">
                L'AI prevede l'evoluzione della contaminazione e genera allerte per le imbarcazioni di raccolta con informazioni dettagliate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FiAnchor size={40} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Raccolta</h3>
              <p className="text-black">
                Le imbarcazioni specializzate, già allertate e preparate, intervengono con tecnologie di filtraggio specifiche per ciascun inquinante.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Il Nostro Impatto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">x%</div>
              <p className="text-black">dei fondi raccolti va direttamente al progetto</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <p className="text-black">nuove boe installate nell'ultimo anno</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">x kg</div>
              <p className="text-black">di inquinanti rimossi dal lago</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a Fare la Differenza?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Unisciti a noi nella nostra missione di proteggere il Lago Maggiore 
            per le generazioni future.
          </p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <button className="bg-white text-primary font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors mb-4 sm:mb-0">
              Dona Ora
            </button>
            <button className="bg-transparent text-white font-medium px-8 py-3 rounded-md border border-white hover:bg-white hover:text-primary transition-colors">
              Contattaci
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 