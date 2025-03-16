"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PollutantTrendsProps {
  type: 'ipa' | 'pcb';
}

const PollutantTrends: React.FC<PollutantTrendsProps> = ({ type }) => {
  // Areas of the lake
  const areas = ['Locarno (Nord)', 'Laveno (Est)', 'Arona (Sud)', 'Verbania (Ovest)', 'Centro Lago'];
  
  // Config based on pollutant type
  const config = {
    ipa: {
      label: 'IPA (μg/L)',
      color: '#D32F2F',
      data: [0.03, 0.18, 0.26, 0.02, 0.01],
      threshold: 0.2,
      max: 0.3
    },
    pcb: {
      label: 'PCB (μg/L)',
      color: '#1976D2',
      data: [0.02, 0.4, 0.61, 0.09, 0.08],
      threshold: 0.5,
      max: 0.7
    }
  };

  const selectedConfig = config[type];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `Concentrazione di ${type === 'ipa' ? 'IPA' : 'PCB'} nel Lago Maggiore`,
        font: {
          size: 16,
          weight: 'bold' as const
        },
        color: '#000'
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = selectedConfig.label || '';
            if (label) {
              label = label.split(' ')[0] + ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
              label += ' μg/L';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: selectedConfig.max,
        title: {
          display: true,
          text: selectedConfig.label,
          font: {
            size: 14,
            weight: 'bold' as const
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            weight: 'bold' as const
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        afterDataLimits: (scale: any) => {
          // Add a threshold line
          scale.max = selectedConfig.max;
        }
      },
      x: {
        title: {
          display: true,
          text: 'Area del Lago Maggiore',
          font: {
            size: 14,
            weight: 'bold' as const
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            weight: 'medium' as const
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    }
  };

  // Generate background colors based on threshold
  const backgroundColor = selectedConfig.data.map(value => 
    value > selectedConfig.threshold 
      ? 'rgba(211, 47, 47, 0.8)' // Red for above threshold
      : value > selectedConfig.threshold * 0.8 
        ? 'rgba(255, 152, 0, 0.8)' // Orange for approaching threshold
        : 'rgba(0, 137, 123, 0.8)' // Teal for safe levels
  );

  const data = {
    labels: areas,
    datasets: [
      {
        label: selectedConfig.label,
        data: selectedConfig.data,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor.map(color => color.replace('0.8', '1')),
        borderWidth: 1
      }
    ]
  };

  // Add annotation plugin to show threshold line
  const annotationPlugin = {
    id: 'thresholdLine',
    afterDatasetsDraw: (chart: any) => {
      const ctx = chart.ctx;
      const yAxis = chart.scales.y;
      const thresholdPixel = yAxis.getPixelForValue(selectedConfig.threshold);
      
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(chart.chartArea.left, thresholdPixel);
      ctx.lineTo(chart.chartArea.right, thresholdPixel);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(211, 47, 47, 0.7)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();

      // Add threshold label
      ctx.fillStyle = 'rgba(211, 47, 47, 0.9)';
      ctx.textAlign = 'right';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('Soglia limite', chart.chartArea.right - 5, thresholdPixel - 5);
      
      ctx.restore();
    }
  };

  ChartJS.register(annotationPlugin);

  return <Bar options={options} data={data} />;
};

export default PollutantTrends; 