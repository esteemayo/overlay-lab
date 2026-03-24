import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import SharedLayout from '@/components/layout/SharedLayout';
import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://overlaylab.vercel.com'),
  title: {
    default: 'OverlayLab',
    template: '%s | OverlayLab',
  },
  description:
    'OverlayLab is a headless popup system built with React and Next.js, featuring stack-based state management, accessibility, and composable UI patterns.',
  keywords: [
    'React modal',
    'popup system',
    'headless UI',
    'Next.js overlay',
    'frontend architecture',
    'accessibility',
  ],
  authors: [{ name: 'Emmanuel Adebayo', url: '' }],
  openGraph: {
    title: 'OverlayLab',
    description:
      'A headless popup system with stack-based state and accessibility built with React and Next.js.',
    url: 'https://overlaylab.vercel.com',
    siteName: 'OverlayLab',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'OverlayLab Preview',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OverlayLab',
    description:
      'Headless popup system with stack-based architecture and accessibility.',
    images: ['/preview.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://overlaylab.vercel.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <SharedLayout>{children}</SharedLayout>
        <div id='overlay-root' />
      </body>
    </html>
  );
}
