import type { Metadata } from 'next';
import { Outfit, Cormorant_Garamond } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Qiswah Heritage Umrah Services',
  description: 'Experience a spiritual journey with comfort and peace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
