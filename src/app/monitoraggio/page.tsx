"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

// Dynamic import for the chart components (to avoid SSR issues)
const DataChart = dynamic(() => import('@/components/DataChart'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 flex items-center justify-center">Caricamento grafico...</div>
});

const PollutantTrends = dynamic(() => import('@/components/PollutantTrends'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 flex items-center justify-center">Caricamento grafico...</div>
});

export default function MonitoringPage() {
  return (
    <main>
      <Header />
      
      {/* Monitoring Hero */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Monitoraggio Inquinanti Lago Maggiore</h1>
          <p className="text-xl max-w-3xl">
            Visualizza i dati raccolti dalle nostre boe e analizza le tendenze degli inquinanti persistenti nel Lago Maggiore.
          </p>
        </div>
      </div>
      
      {/* Current Status Section */}
      <section className="section bg-white">
        <div className="container-padded">
          <h2 className="heading text-gray-900">Stato Attuale del Lago</h2>
          <p className="mb-8 text-gray-800 font-medium">
            Panoramica dei principali parametri monitorati nelle diverse aree del Lago Maggiore.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-primary">
              <h3 className="text-lg font-bold mb-2 text-primary">IPA</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">0.12 <span className="text-base font-normal">μg/L</span></div>
              <p className="text-sm text-gray-800 font-medium">Media delle ultime 24 ore</p>
              <div className="mt-2 text-yellow-600 text-sm font-medium">Attenzione - In aumento</div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
              <h3 className="text-lg font-bold mb-2 text-red-600">DDT</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">0.11 <span className="text-base font-normal">μg/L</span></div>
              <p className="text-sm text-gray-800 font-medium">Media delle ultime 24 ore</p>
              <div className="mt-2 text-red-600 text-sm font-medium">Critico - Sopra soglia limite</div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold mb-2 text-blue-600">PCB</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">0.42 <span className="text-base font-normal">μg/L</span></div>
              <p className="text-sm text-gray-800 font-medium">Media delle ultime 24 ore</p>
              <div className="mt-2 text-yellow-600 text-sm font-medium">Vicino alla soglia limite</div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
              <h3 className="text-lg font-bold mb-2 text-green-600">PBDE</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">0.09 <span className="text-base font-normal">μg/L</span></div>
              <p className="text-sm text-gray-800 font-medium">Media delle ultime 24 ore</p>
              <div className="mt-2 text-green-600 text-sm font-medium">Sotto la soglia limite</div>
            </div>
          </div>
          
          <div className="bg-light rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="subheading text-gray-900">Tendenze degli Inquinanti nel Tempo</h3>
            <p className="mb-6 text-gray-800 font-medium">
              Il grafico mostra l'andamento dei principali inquinanti organici persistenti monitorati negli ultimi 30 giorni nel Lago Maggiore.
            </p>
            <div className="h-[400px]">
              <DataChart />
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Cosa sono questi inquinanti?</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                <li><span className="font-bold">IPA</span> (Idrocarburi Policiclici Aromatici): Derivano principalmente da combustioni incomplete, scarichi di motoscafi e attività industriali.</li>
                <li><span className="font-bold">DDT</span>: Pesticida persistente utilizzato in passato in agricoltura, ora vietato ma ancora presente nell'ambiente.</li>
                <li><span className="font-bold">PCB</span> (Policlorobifenili): Composti chimici utilizzati in passato in apparecchiature elettriche e vernici.</li>
                <li><span className="font-bold">PBDE</span> (Eteri di Difenile Polibromurati): Ritardanti di fiamma utilizzati in elettronica, tessuti e materiali da costruzione.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Analysis by Area */}
      <section className="section bg-light">
        <div className="container-padded">
          <h2 className="heading text-gray-900">Analisi per Area</h2>
          <p className="mb-8 text-gray-800 font-medium">
            Confronto dei livelli di inquinamento tra le diverse zone del Lago Maggiore.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="subheading text-gray-900">Concentrazione di IPA per Area</h3>
              <div className="h-[400px]">
                <PollutantTrends type="ipa" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="subheading text-gray-900">Concentrazione di PCB per Area</h3>
              <div className="h-[400px]">
                <PollutantTrends type="pcb" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alerts History */}
      <section className="section bg-white">
        <div className="container-padded">
          <h2 className="heading text-gray-900">Storico Allerte</h2>
          <p className="mb-8 text-gray-800 font-medium">
            Gli ultimi eventi di inquinamento significativo che hanno richiesto interventi.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border border-gray-200">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-bold">Data</th>
                  <th className="py-3 px-4 text-left font-bold">Area</th>
                  <th className="py-3 px-4 text-left font-bold">Tipo di Inquinante</th>
                  <th className="py-3 px-4 text-left font-bold">Livello Rilevato</th>
                  <th className="py-3 px-4 text-left font-bold">Azione Intrapresa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">15/06/2023</td>
                  <td className="py-3 px-4 text-gray-800">Arona (Sud)</td>
                  <td className="py-3 px-4 text-gray-800">IPA</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">0.26 μg/L</td>
                  <td className="py-3 px-4 text-green-600 font-medium">Raccolta completata</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">02/06/2023</td>
                  <td className="py-3 px-4 text-gray-800">Laveno (Est)</td>
                  <td className="py-3 px-4 text-gray-800">DDT</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">0.13 μg/L</td>
                  <td className="py-3 px-4 text-green-600 font-medium">Raccolta completata</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">25/05/2023</td>
                  <td className="py-3 px-4 text-gray-800">Arona (Sud)</td>
                  <td className="py-3 px-4 text-gray-800">PCB</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">0.61 μg/L</td>
                  <td className="py-3 px-4 text-green-600 font-medium">Raccolta completata</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">13/05/2023</td>
                  <td className="py-3 px-4 text-gray-800">Locarno (Nord)</td>
                  <td className="py-3 px-4 text-gray-800">PBDE</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">0.24 μg/L</td>
                  <td className="py-3 px-4 text-green-600 font-medium">Raccolta completata</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">29/04/2023</td>
                  <td className="py-3 px-4 text-gray-800">Verbania (Ovest)</td>
                  <td className="py-3 px-4 text-gray-800">IPA</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">0.22 μg/L</td>
                  <td className="py-3 px-4 text-green-600 font-medium">Raccolta completata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 