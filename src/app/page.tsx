"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { FiAnchor, FiDroplet, FiTrendingUp, FiCpu, FiAlertCircle } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Import the Map component dynamically to prevent SSR issues with Leaflet
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-gray-100 flex items-center justify-center">Caricamento mappa...</div>
});

export default function Home() {
  return (
    <main>
      <Header />
      <Hero 
        title="Monitoraggio Avanzato del Lago Maggiore" 
        subtitle="Sistema integrato con boe intelligenti, AI predittiva e imbarcazioni specializzate per il controllo e la raccolta degli inquinanti organici persistenti."
      />
      
      <section className="section bg-white">
        <div className="container-padded">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading text-black">Protezione Innovativa per il Lago Maggiore</h2>
              <p className="mb-6 text-black font-medium">
                PolyMBoe è un sistema integrato che combina una rete di boe intelligenti, algoritmi di machine learning
                e imbarcazioni specializzate per affrontare l'inquinamento del Lago Maggiore. Le nostre boe sono equipaggiate 
                con sensori avanzati che rilevano IPA, DDT, PCB e PBDE nelle acque del lago.
              </p>
              <p className="mb-6 text-black font-medium">
                I dati raccolti vengono analizzati in tempo reale dal nostro sistema di intelligenza artificiale, che prevede 
                la diffusione degli inquinanti e genera allerte dettagliate. Queste informazioni vengono inviate alle imbarcazioni 
                di raccolta specializzate, che possono così intervenire rapidamente con tecnologie di filtraggio specifiche per 
                ciascun tipo di inquinante.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/monitoraggio" className="btn-primary">
                  Visualizza i Dati
                </Link>
                <Link href="/progetto" className="btn-secondary">
                  Scopri il Progetto
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/lake-maggiore.jpg" 
                alt="Lago Maggiore con boe di monitoraggio installate" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-padded">
          <h2 className="heading text-center mb-12 text-black">Come Funziona il Nostro Sistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDroplet className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Monitoraggio</h3>
              <p className="text-black">
                Boe intelligenti equipaggiate con sensori avanzati rilevano costantemente la presenza di inquinanti organici persistenti.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCpu className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Analisi AI</h3>
              <p className="text-black">
                I dati vengono elaborati in tempo reale dal nostro sistema di machine learning per analizzare concentrazione e diffusione.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAlertCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Previsione</h3>
              <p className="text-black">
                L'AI prevede l'evoluzione della contaminazione e invia allerte dettagliate alle imbarcazioni con il percorso ottimale.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAnchor className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Raccolta</h3>
              <p className="text-black">
                Le imbarcazioni specializzate intervengono tempestivamente con tecnologie di filtraggio specifiche per ogni inquinante.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      
      <section className="section bg-light">
        <div className="container-padded">
          <h2 className="heading text-center text-black mb-12">Mappa delle Nostre Boe sul Lago Maggiore</h2>
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <MapComponent />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-black font-medium mb-6">
              Le nostre boe sono strategicamente posizionate nelle aree più a rischio del Lago Maggiore,
              garantendo una copertura ottimale per il monitoraggio e la raccolta degli inquinanti.
            </p>
            <Link href="/monitoraggio" className="btn-primary">
              Visualizza Dati Dettagliati
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-padded">
          <h2 className="heading text-center text-black mb-12">Inquinanti Organici Persistenti (POPs)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-light rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-primary text-4xl mb-4">IPA</div>
              <h3 className="text-xl font-bold text-black mb-3">Idrocarburi Policiclici Aromatici</h3>
              <p className="text-black">
                Derivano principalmente da combustioni incomplete, scarichi di motoscafi e attività industriali. 
                Si accumulano nei sedimenti e possono risalire la catena alimentare.
              </p>
            </div>
            
            <div className="bg-light rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-red-600 text-4xl mb-4">DDT</div>
              <h3 className="text-xl font-bold text-black mb-3">Diclorodifeniltricloroetano</h3>
              <p className="text-black">
                Pesticida persistente utilizzato in passato in agricoltura, ora vietato ma ancora presente nell'ambiente 
                e nei sedimenti del Lago Maggiore a causa della sua lenta degradazione.
              </p>
            </div>
            
            <div className="bg-light rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-blue-600 text-4xl mb-4">PCB</div>
              <h3 className="text-xl font-bold text-black mb-3">Policlorobifenili</h3>
              <p className="text-black">
                Composti chimici utilizzati in passato in apparecchiature elettriche e vernici. Estremamente 
                persistenti nell'ambiente acquatico, si accumulano nei tessuti grassi dei pesci.
              </p>
            </div>
            
            <div className="bg-light rounded-lg p-6 shadow-md border border-gray-200">
              <div className="text-green-600 text-4xl mb-4">PBDE</div>
              <h3 className="text-xl font-bold text-black mb-3">Eteri di Difenile Polibromurati</h3>
              <p className="text-black">
                Ritardanti di fiamma utilizzati in elettronica, tessuti e materiali da costruzione. 
                Raggiungono gli ambienti acquatici attraverso gli scarichi e persistono per lungo tempo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary text-white">
        <div className="container-padded text-center">
          <h2 className="heading text-white mb-8">Unisciti alla Nostra Missione</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 font-medium">
            Aiutaci a proteggere il Lago Maggiore per le generazioni future. Con il tuo contributo,
            possiamo espandere la rete di boe e migliorare la tecnologia di monitoraggio e raccolta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contatti" className="btn-white">
              Contattaci
            </Link>
            <Link href="/supportaci" className="btn-outline-white">
              Supporta il Progetto
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 