"use client";

import React from 'react';
import { FiSearch, FiAlertCircle, FiFilter, FiDatabase, FiAnchor, FiActivity } from 'react-icons/fi';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiSearch />,
      title: "Monitoraggio Avanzato",
      description: "Le nostre boe sono dotate di sensori di ultima generazione in grado di rilevare livelli minimi di inquinanti organici persistenti nel Lago Maggiore, inclusi IPA, DDT, PCB e PBDE."
    },
    {
      icon: <FiAlertCircle />,
      title: "Sistema di Allerta",
      description: "In caso di rilevamento di livelli anomali di inquinanti, il sistema invia automaticamente notifiche alle imbarcazioni competenti per interventi tempestivi nelle aree sensibili del Lago Maggiore."
    },
    {
      icon: <FiFilter />,
      title: "Filtrazione e Raccolta",
      description: "Oltre a monitorare, le boe sono dotate di un sistema di filtrazione che raccoglie attivamente gli inquinanti organici persistenti dall'acqua, riducendo la loro concentrazione nel Lago Maggiore."
    },
    {
      icon: <FiDatabase />,
      title: "Analisi dei Dati",
      description: "I dati raccolti vengono analizzati attraverso algoritmi avanzati che identificano tendenze e prevedono potenziali picchi di inquinamento, consentendo interventi preventivi per proteggere il Lago Maggiore."
    },
    {
      icon: <FiAnchor />,
      title: "Distribuzione Strategica",
      description: "Le boe sono posizionate in punti strategici del Lago Maggiore, con particolare attenzione alle aree più vulnerabili come foci dei fiumi, zone turistiche e aree vicine a insediamenti industriali."
    },
    {
      icon: <FiActivity />,
      title: "Monitoraggio in Tempo Reale",
      description: "La piattaforma offre una visualizzazione in tempo reale dei livelli di IPA, DDT, PCB e PBDE nel Lago Maggiore, con aggiornamenti continui e accesso sia per le autorità che per il pubblico."
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container-padded">
        <h2 className="heading text-center text-gray-900 mb-12">Il Sistema PolyMBoe per il Lago Maggiore</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 