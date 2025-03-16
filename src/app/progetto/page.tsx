"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectPage() {
  return (
    <main>
      <Header />
      
      {/* Project Hero */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Il Progetto PolyMBoe</h1>
          <p className="text-xl max-w-3xl">
            Un sistema innovativo di monitoraggio e pulizia delle acque del Lago Maggiore per preservare 
            l'ecosistema dagli inquinanti organici persistenti.
          </p>
        </div>
      </div>
      
      {/* Project Description */}
      <section className="section bg-white">
        <div className="container-padded">
          <div className="prose max-w-none text-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Il Nostro Approccio</h2>
            <p className="text-gray-800 font-medium mb-6">
              PolyMBoe è un sistema integrato che combina ricerca scientifica, tecnologia avanzata e interventi sul campo 
              per affrontare l'inquinamento del Lago Maggiore in modo efficace e sostenibile. Il nostro approccio si articola in tre fasi 
              fondamentali:
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Identificazione delle Zone Critiche</h3>
            <p className="text-gray-800 font-medium mb-6">
              La prima fase del nostro progetto prevede uno studio approfondito del territorio circostante il Lago Maggiore e delle 
              dinamiche idriche per identificare le aree maggiormente a rischio di inquinamento. Attraverso l'analisi dei 
              dati storici, la mappatura delle attività umane nelle vicinanze (agricoltura, industrie, zone turistiche) e 
              lo studio delle correnti, identifichiamo i punti più vulnerabili dove concentrare i nostri sforzi.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Monitoraggio Continuo con Boe Intelligenti</h3>
            <p className="text-gray-800 font-medium mb-4">
              Una volta identificate le zone critiche, dispieghiamo le nostre boe equipaggiate con sensori all'avanguardia 
              capaci di monitorare in tempo reale diversi parametri dell'acqua:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800 font-medium">
              <li>Presenza di inquinanti organici persistenti (IPA, DDT, PCB, PBDE)</li>
              <li>Idrocarburi e microplastiche derivanti dalle attività nautiche</li>
              <li>pH dell'acqua e livelli di acidificazione dovuti all'assorbimento di CO₂</li>
              <li>Torbidità e presenza di solidi sospesi</li>
              <li>Temperatura dell'acqua</li>
            </ul>
            <p className="text-gray-800 font-medium mb-6">
              I dati raccolti vengono trasmessi in tempo reale alla nostra centrale operativa, dove vengono analizzati 
              utilizzando algoritmi avanzati che possono rilevare anomalie e superamenti delle soglie di sicurezza.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Interventi Mirati di Pulizia</h3>
            <p className="text-gray-800 font-medium mb-4">
              Quando i sensori rilevano livelli di inquinamento superiori alle soglie stabilite, viene attivato 
              automaticamente un sistema di allerta. Le nostre imbarcazioni specializzate, dotate di tecnologie di 
              filtraggio e raccolta, intervengono rapidamente nelle zone segnalate per rimuovere le sostanze inquinanti 
              prima che possano disperdersi ulteriormente o sedimentarsi sul fondale.
            </p>
            <p className="text-gray-800 font-medium mb-6">
              Le sostanze raccolte vengono successivamente analizzate in laboratorio e smaltite secondo rigorosi protocolli 
              ambientali, contribuendo così a chiudere il ciclo dell'inquinamento.
            </p>
          </div>
          
          <div className="mt-12 bg-light p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gli Inquinanti Organici Persistenti</h2>
            <p className="text-gray-800 font-medium mb-4">
              Il nostro sistema si concentra particolarmente sui seguenti inquinanti organici persistenti (POPs) presenti nel Lago Maggiore:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 font-medium">
              <li>
                <strong className="text-gray-900">IPA (Idrocarburi Policiclici Aromatici)</strong> - Derivanti da combustione incompleta di carburanti, 
                sono presenti negli scarichi delle imbarcazioni e nelle deposizioni atmosferiche.
              </li>
              <li>
                <strong className="text-gray-900">DDT (Diclorodifeniltricloroetano)</strong> - Pesticida persistente utilizzato in passato in agricoltura, 
                ancora presente nei sedimenti del lago e nell'ecosistema.
              </li>
              <li>
                <strong className="text-gray-900">PCB (Policlorobifenili)</strong> - Composti chimici industriali utilizzati in apparecchiature elettriche
                e vernici, estremamente persistenti nell'ambiente acquatico.
              </li>
              <li>
                <strong className="text-gray-900">PBDE (Eteri di Difenile Polibromurati)</strong> - Ritardanti di fiamma utilizzati in elettronica, tessuti
                e materiali da costruzione che raggiungono le acque lacustri tramite gli scarichi.
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="section bg-light">
        <div className="container-padded">
          <h2 className="heading text-center text-gray-900 mb-10">La Nostra Tecnologia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Boe Intelligenti</h3>
              <p className="text-gray-800 font-medium mb-4">
                Le nostre boe sono progettate per resistere alle intemperie e funzionare in modo autonomo per lunghi periodi. 
                Ogni boa è equipaggiata con:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-800 font-medium">
                <li>Sensori multiparametrici per il rilevamento di diversi inquinanti</li>
                <li>Sistema di alimentazione solare per garantire l'autonomia energetica</li>
                <li>Trasmettitore dati per la comunicazione in tempo reale con la centrale</li>
                <li>GPS per il posizionamento preciso</li>
                <li>Sistema di autodiagnosi per monitorare il funzionamento dei sensori</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Imbarcazioni di Pulizia</h3>
              <p className="text-gray-800 font-medium mb-4">
                Le imbarcazioni utilizzate per la pulizia sono dotate di:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-800 font-medium">
                <li>Sistemi di filtrazione avanzati per la raccolta di microplastiche e POPs</li>
                <li>Skimmer per la rimozione di oli e idrocarburi dalla superficie</li>
                <li>Pompe subacquee per l'aspirazione di inquinanti a diverse profondità</li>
                <li>Serbatoi isolati per lo stoccaggio sicuro delle sostanze raccolte</li>
                <li>Propulsione ibrida per minimizzare l'impatto ambientale durante le operazioni</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Future Development */}
      <section className="section bg-white">
        <div className="container-padded">
          <h2 className="heading text-gray-900 mb-6">Sviluppi Futuri</h2>
          <p className="text-gray-800 font-medium mb-6">
            Il progetto PolyMBoe per il Lago Maggiore è in costante evoluzione. Tra i nostri obiettivi futuri includiamo:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-800 font-medium">
            <li>Espansione della rete di boe per coprire una superficie maggiore del lago</li>
            <li>Sviluppo di sensori ancora più sensibili per rilevare concentrazioni minime di inquinanti emergenti</li>
            <li>Implementazione di algoritmi di intelligenza artificiale per prevedere la diffusione degli inquinanti</li>
            <li>Creazione di una piattaforma educativa per sensibilizzare la popolazione locale sull'importanza della protezione del lago</li>
            <li>Collaborazioni con altre realtà europee impegnate nella protezione degli ecosistemi acquatici</li>
          </ul>
          <p className="text-gray-800 font-medium">
            Crediamo che solo attraverso un approccio scientifico, tecnologico e collaborativo sia possibile affrontare 
            efficacemente le sfide ambientali del nostro tempo e preservare il Lago Maggiore per le generazioni future.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 