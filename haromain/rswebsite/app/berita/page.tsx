"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Mail, Stethoscope, Bell } from "lucide-react";
import { articles } from "@/lib/articles";

export default function NewsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary py-12 text-center text-white">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Berita & Artikel</h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto px-6">
          Informasi terkini dan tips kesehatan terpercaya dari tim medis kami.
        </p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/berita/${article.id}`} className="block h-full">
              <Card className="flex flex-col h-full border-slate-200 hover:shadow-lg transition-shadow bg-white overflow-hidden group cursor-pointer">
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 border-t border-slate-50 mt-auto">
                  <div className="flex items-center text-sm font-medium text-primary w-full justify-between pt-4">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 via-primary to-blue-800 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-center">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mb-8 shadow-inner">
              <Bell className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Dapatkan Update Kesehatan Terbaru</h2>
            <p className="text-xl text-blue-50 mb-10 opacity-90 font-medium">
              Berlangganan newsletter kami untuk mendapatkan tips kesehatan, jadwal layanan, dan berita terkini langsung ke email Anda.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-[1.25rem] backdrop-blur-md border border-white/20 shadow-xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat email Anda..."
                  className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all text-lg placeholder:text-slate-400"
                  required
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 px-8 py-7 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Berlangganan
                </Button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto border border-white/30 shadow-2xl animate-in zoom-in-95 duration-500">
                <p className="text-white text-xl font-bold flex items-center justify-center gap-3">
                  <span className="bg-white text-primary rounded-full p-1"><Mail className="h-5 w-5" /></span>
                  Pendaftaran Berhasil!
                </p>
                <p className="text-blue-50 mt-2 opacity-90">Terima kasih telah bergabung dengan komunitas kami.</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/20 bg-gradient-to-br from-blue-50 to-white p-6 text-center hover:shadow-lg transition-shadow">
            <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Konsultasi dengan Dokter Spesialis</h3>
            <p className="text-slate-600 mb-4">Lihat profil lengkap dokter kami dan jadwal praktik mereka.</p>
            <Link 
              href="/#doctors"
              className={buttonVariants({ variant: "outline", className: "gap-2" })}
            >
              Lihat Tim Dokter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-emerald-50 to-white p-6 text-center hover:shadow-lg transition-shadow">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Booking Online Tersedia</h3>
            <p className="text-slate-600 mb-4">Hindari antrean panjang dengan sistem booking online kami.</p>
            <Link 
              href="/#book"
              className={buttonVariants({ className: "gap-2" })}
            >
              Buat Janji Temu Sekarang
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}
