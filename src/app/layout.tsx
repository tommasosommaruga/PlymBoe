import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'PolymBoe - Monitoraggio e Pulizia del Lago',
  description: 'Sistema di monitoraggio e pulizia degli inquinanti nei laghi attraverso boe intelligenti',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
} 