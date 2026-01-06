import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/floating-cta";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSUD Kebayoran Lama",
  description: "Layanan Kesehatan Profesional dan Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-slate-50 text-slate-900 overflow-x-hidden w-full relative antialiased`}>
        <Header />
        <main className="w-full relative">
            {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
