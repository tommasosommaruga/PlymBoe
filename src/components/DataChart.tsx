"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataChart: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const labels = [
    '15 Maggio', '16 Maggio', '17 Maggio', '18 Maggio', '19 Maggio', '20 Maggio',
    '21 Maggio', '22 Maggio', '23 Maggio', '24 Maggio', '25 Maggio', '26 Maggio',
    '27 Maggio', '28 Maggio', '29 Maggio', '30 Maggio', '31 Maggio', '1 Giugno',
    '2 Giugno', '3 Giugno', '4 Giugno', '5 Giugno', '6 Giugno', '7 Giugno',
    '8 Giugno', '9 Giugno', '10 Giugno', '11 Giugno', '12 Giugno', '13 Giugno', '14 Giugno'
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
            weight: 'bold'
          },
          color: '#333'
        }
      },
      title: {
        display: true,
        text: 'Concentrazioni inquinanti nel Lago Maggiore',
        font: {
          size: 16,
          weight: 'bold'
        },
        color: '#000'
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              let unit = '';
              switch(context.dataset.label) {
                case 'IPA':
                case 'DDT':
                case 'PCB':
                case 'PBDE':
                  unit = ' μg/L';
                  break;
                case 'pH':
                  unit = '';
                  break;
                default:
                  unit = '';
              }
              label += context.parsed.y + unit;
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Concentrazione (μg/L)',
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Data',
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            weight: 'medium'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
  };

  // Sample data for the chart
  const generateData = (min: number, max: number, trend: 'up' | 'down' | 'stable' | 'fluctuate', length: number) => {
    let data = [];
    let value = (max + min) / 2;
    
    for (let i = 0; i < length; i++) {
      switch(trend) {
        case 'up':
          value += Math.random() * 0.2 * (max - min) / 10;
          if (value > max) value = max;
          break;
        case 'down':
          value -= Math.random() * 0.2 * (max - min) / 10;
          if (value < min) value = min;
          break;
        case 'stable':
          value += (Math.random() - 0.5) * 0.1 * (max - min) / 10;
          if (value > max) value = max;
          if (value < min) value = min;
          break;
        case 'fluctuate':
          value += (Math.random() - 0.5) * 0.5 * (max - min) / 10;
          if (value > max) value = max;
          if (value < min) value = min;
          break;
      }
      
      data.push(Number(value.toFixed(3)));
    }
    
    return data;
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: 'IPA',
        data: generateData(0.01, 0.26, 'up', labels.length),
        borderColor: '#D32F2F',
        backgroundColor: 'rgba(211, 47, 47, 0.5)',
        borderWidth: 2,
        yAxisID: 'y',
      },
      {
        label: 'DDT',
        data: generateData(0.005, 0.13, 'fluctuate', labels.length),
        borderColor: '#7B1FA2',
        backgroundColor: 'rgba(123, 31, 162, 0.5)',
        borderWidth: 2,
        yAxisID: 'y',
      },
      {
        label: 'PCB',
        data: generateData(0.02, 0.61, 'stable', labels.length),
        borderColor: '#1976D2',
        backgroundColor: 'rgba(25, 118, 210, 0.5)',
        borderWidth: 2,
        yAxisID: 'y',
      },
      {
        label: 'PBDE',
        data: generateData(0.03, 0.24, 'fluctuate', labels.length),
        borderColor: '#388E3C',
        backgroundColor: 'rgba(56, 142, 60, 0.5)',
        borderWidth: 2,
        yAxisID: 'y',
      }
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default DataChart; 