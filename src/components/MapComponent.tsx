"use client";

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

// Fix Leaflet default icon issue
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Sample data for buoys
interface Buoy {
  id: number;
  name: string;
  position: [number, number]; // [latitude, longitude]
  status: 'optimal' | 'alert' | 'critical';
  lastUpdated: string;
  readings: {
    parameter: string;
    value: number;
    unit: string;
    threshold?: number;
  }[];
}

const MapComponent: React.FC = () => {
  // Using Lake Maggiore coordinates as default center
  const centerPosition: [number, number] = [45.9501, 8.6100]; // Lake Maggiore
  
  // Sample data for buoys - in a real app this would come from an API
  const [buoys] = useState<Buoy[]>([
    {
      id: 1,
      name: "Boa Nord - Locarno",
      position: [46.1403, 8.7740], // Moved further south from Locarno
      status: 'optimal',
      lastUpdated: "2023-06-15 08:45",
      readings: [
        { parameter: "pH", value: 7.2, unit: "pH", threshold: 8.5 },
        { parameter: "Temperatura", value: 22.3, unit: "°C" },
        { parameter: "IPA", value: 0.03, unit: "μg/L", threshold: 0.2 },
        { parameter: "DDT", value: 0.01, unit: "μg/L", threshold: 0.1 },
        { parameter: "PCB", value: 0.02, unit: "μg/L", threshold: 0.5 },
        { parameter: "PBDE", value: 0.05, unit: "μg/L", threshold: 0.2 }
      ]
    },
    {
      id: 2,
      name: "Boa Est - Laveno",
      position: [45.9080, 8.6150], // Updated: In the water near Laveno
      status: 'alert',
      lastUpdated: "2023-06-15 09:12",
      readings: [
        { parameter: "pH", value: 8.1, unit: "pH", threshold: 8.5 },
        { parameter: "Temperatura", value: 23.1, unit: "°C" },
        { parameter: "IPA", value: 0.18, unit: "μg/L", threshold: 0.2 },
        { parameter: "DDT", value: 0.08, unit: "μg/L", threshold: 0.1 },
        { parameter: "PCB", value: 0.4, unit: "μg/L", threshold: 0.5 },
        { parameter: "PBDE", value: 0.15, unit: "μg/L", threshold: 0.2 }
      ]
    },
    {
      id: 3,
      name: "Boa Sud - Arona",
      position: [45.7581, 8.5702], // Updated: In the water near Arona
      status: 'critical',
      lastUpdated: "2023-06-15 09:30",
      readings: [
        { parameter: "pH", value: 8.7, unit: "pH", threshold: 8.5 },
        { parameter: "Temperatura", value: 24.2, unit: "°C" },
        { parameter: "IPA", value: 0.26, unit: "μg/L", threshold: 0.2 },
        { parameter: "DDT", value: 0.13, unit: "μg/L", threshold: 0.1 },
        { parameter: "PCB", value: 0.61, unit: "μg/L", threshold: 0.5 },
        { parameter: "PBDE", value: 0.24, unit: "μg/L", threshold: 0.2 }
      ]
    },
    {
      id: 4,
      name: "Boa Ovest - Verbania",
      position: [45.9060, 8.5525], // Moved further south from Verbania
      status: 'optimal',
      lastUpdated: "2023-06-15 09:22",
      readings: [
        { parameter: "pH", value: 7.0, unit: "pH", threshold: 8.5 },
        { parameter: "Temperatura", value: 21.8, unit: "°C" },
        { parameter: "IPA", value: 0.02, unit: "μg/L", threshold: 0.2 },
        { parameter: "DDT", value: 0.01, unit: "μg/L", threshold: 0.1 },
        { parameter: "PCB", value: 0.09, unit: "μg/L", threshold: 0.5 },
        { parameter: "PBDE", value: 0.04, unit: "μg/L", threshold: 0.2 }
      ]
    },
    {
      id: 5,
      name: "Boa Maccagno",
      position: [46.0350, 8.7380], // In the water near Maccagno, slightly south
      status: 'alert',
      lastUpdated: "2023-06-15 09:10",
      readings: [
        { parameter: "pH", value: 7.3, unit: "pH", threshold: 8.5 },
        { parameter: "Temperatura", value: 21.9, unit: "°C" },
        { parameter: "IPA", value: 0.07, unit: "μg/L", threshold: 0.2 },
        { parameter: "DDT", value: 0.06, unit: "μg/L", threshold: 0.1 },
        { parameter: "PCB", value: 0.11, unit: "μg/L", threshold: 0.5 },
        { parameter: "PBDE", value: 0.08, unit: "μg/L", threshold: 0.2 }
      ]
    }
  ]);

  // Fix for the default Leaflet icon issue
  const defaultIcon = new Icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });

  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-600';
      case 'alert': return 'text-yellow-500';
      case 'optimal': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <FiAlertTriangle className="text-red-600" />;
      case 'alert': return <FiAlertTriangle className="text-yellow-500" />;
      case 'optimal': return <FiCheckCircle className="text-green-500" />;
      default: return null;
    }
  };

  const renderReadingStatus = (reading: { value: number; threshold?: number }) => {
    if (reading.threshold && reading.value > reading.threshold) {
      return <span className="text-red-600 text-sm ml-2 font-semibold">Sopra soglia</span>;
    }
    return null;
  };

  return (
    <MapContainer 
      center={centerPosition} 
      zoom={10} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {buoys.map((buoy) => (
        <Marker 
          key={buoy.id} 
          position={buoy.position}
          icon={defaultIcon}
        >
          <Popup className="leaflet-popup-content-wrapper">
            <div className="p-1">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-bold mr-2 text-gray-900">{buoy.name}</h3>
                {getStatusIcon(buoy.status)}
              </div>
              
              <div className="text-sm text-gray-800 mb-3">
                Ultimo aggiornamento: {buoy.lastUpdated}
              </div>
              
              <div className="border-t pt-2">
                <h4 className="font-bold mb-1 text-gray-900">Letture attuali:</h4>
                <ul className="space-y-1">
                  {buoy.readings.map((reading, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{reading.parameter}:</span> 
                      <span className="font-bold text-gray-900">
                        {reading.value} {reading.unit}
                        {renderReadingStatus(reading)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent; 