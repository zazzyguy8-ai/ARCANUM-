import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARCANUM — The Archive of Hidden Selves',
  description:
    'An ancient system of self-discovery. Discover your archetype, master your rituals, and uncover the hidden architecture of who you truly are.',
  keywords: ['arcanum', 'archetype', 'self-discovery', 'mystical', 'psychology', 'ritual', 'personality'],
  openGraph: {
    title: 'ARCANUM — The Archive of Hidden Selves',
    description: 'The Archive has been waiting for you.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-arcanum-void text-arcanum-parchment min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
