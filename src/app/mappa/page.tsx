import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

// Dynamic import for the map component (to avoid SSR issues with Leaflet)
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-gray-100 flex items-center justify-center">Caricamento mappa...</div>
});

export default function MapPage() {
  return (
    <main>
      <Header />
      
      {/* Map Hero */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mappa delle Boe</h1>
          <p className="text-xl max-w-3xl">
            Visualizza in tempo reale la posizione delle nostre boe di monitoraggio e lo stato di salute del lago.
          </p>
        </div>
      </div>
      
      {/* Map Section */}
      <section className="section bg-white">
        <div className="container-padded">
          <div className="bg-light p-4 rounded-lg mb-8">
            <p className="text-gray-700">
              La mappa interattiva mostra l'ubicazione di tutte le nostre boe di monitoraggio. 
              Fai clic su ciascuna boa per visualizzare i dati in tempo reale e lo stato degli inquinanti rilevati.
            </p>
          </div>
          
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <MapComponent />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                Stato Ottimale
              </h3>
              <p className="text-sm text-gray-600">
                Nessun inquinante rilevato. La qualità dell'acqua è eccellente.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                Stato di Allerta
              </h3>
              <p className="text-sm text-gray-600">
                Rilevati livelli di inquinanti in aumento. Monitoraggio intensificato.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                Stato Critico
              </h3>
              <p className="text-sm text-gray-600">
                Livelli di inquinanti superiori alle soglie. Intervento di pulizia in corso.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Info */}
      <section className="section bg-light">
        <div className="container-padded">
          <h2 className="heading">Informazioni sulle Zone Monitorate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="subheading">Zone ad Alta Priorità</h3>
              <p className="mb-4">
                Alcune aree del lago richiedono un monitoraggio più intenso a causa di fattori di rischio specifici:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Foci dei fiumi principali</strong> - Punti di ingresso di inquinanti provenienti dall'entroterra
                </li>
                <li>
                  <strong>Zone industriali costiere</strong> - Aree con presenza di attività produttive che potrebbero rilasciare scarichi
                </li>
                <li>
                  <strong>Aree agricole intensive</strong> - Regioni con elevato utilizzo di pesticidi e fertilizzanti
                </li>
                <li>
                  <strong>Porti turistici</strong> - Zone con alta concentrazione di imbarcazioni da diporto
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="subheading">Dati Storici</h3>
              <p className="mb-4">
                Grazie alla raccolta continua di dati, possiamo identificare tendenze stagionali e sviluppare modelli predittivi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Durante la stagione estiva, si registra un aumento degli idrocarburi nelle zone turistiche</li>
                <li>Dopo forti piogge, aumentano i livelli di pesticidi nelle vicinanze delle aree agricole</li>
                <li>Il periodo primaverile coincide con maggiori rilasci di fertilizzanti</li>
                <li>In inverno, la diminuzione del ricambio d'acqua può causare accumuli localizzati di inquinanti</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 