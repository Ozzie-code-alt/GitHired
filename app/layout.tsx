import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/providers/themeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Santos - Portfolio Website',
  description: 'Portfolio of Justin Santos'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className={`${inter.className} dark:bg-black overflow-y-scroll lg:overflow-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}
