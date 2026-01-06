"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, ShieldCheck, Calendar, MessageCircle, Phone } from "lucide-react";

export default function PatientInfoPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
       {/* Page Header */}
      <div className="bg-primary py-12 text-center text-white">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Informasi Pasien</h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto px-6">
          Panduan lengkap untuk pasien dan pengunjung RSUD Kebayoran Lama.
        </p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Jam Besuk */}
          <Card className="border-slate-200 shadow-sm h-full">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Jam Besuk Pasien</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Siang</h4>
                  <p className="text-slate-600">Pukul 11.00 - 12.00 WIB</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Sore</h4>
                  <p className="text-slate-600">Pukul 17.00 - 18.00 WIB</p>
                </div>
                <p className="text-xs text-slate-500 mt-4 italic">
                  *Anak sehat di bawah usia 12 tahun dilarang masuk area rawat inap.
                  <br/>*Maksimal 2 orang penunggu pasien (bergantian).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alur Pendaftaran */}
           <Card className="border-slate-200 shadow-sm h-full">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Alur Pendaftaran</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-slate-200 ml-3 space-y-6">
                 <li className="ml-6">
                    <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white"></span>
                    <h4 className="font-semibold text-slate-900">Ambil Nomor Antrean</h4>
                    <p className="text-sm text-slate-600">Melalui mesin antrean di lobby utama (Pilih BPJS/Umum).</p>
                 </li>
                 <li className="ml-6">
                    <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white"></span>
                    <h4 className="font-semibold text-slate-900">Registrasi di Loket</h4>
                    <p className="text-sm text-slate-600">Tunjukkan KTP/Kartu BPJS & Surat Rujukan (untuk pasien BPJS).</p>
                 </li>
                 <li className="ml-6">
                    <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white"></span>
                    <h4 className="font-semibold text-slate-900">Menuju Poliklinik</h4>
                    <p className="text-sm text-slate-600">Tunggu panggilan perawat di depan poli tujuan.</p>
                 </li>
                  <li className="ml-6">
                    <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white"></span>
                    <h4 className="font-semibold text-slate-900">Farmasi / Kasir</h4>
                    <p className="text-sm text-slate-600">Pengambilan obat atau pembayaran tindakan.</p>
                 </li>
              </ol>
            </CardContent>
          </Card>

          {/* Asuransi & BPJS */}
           <Card className="border-slate-200 shadow-sm h-full lg:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Layanan BPJS & Asuransi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">Persyaratan Pasien BPJS</h4>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm">
                        <li>KTP Asli & Fotokopi</li>
                        <li>Kartu BPJS Kesehatan Aktif</li>
                        <li>Surat Rujukan dari Faskes 1 (Puskesmas/Klinik) yang masih berlaku</li>
                        <li>Surat Rujukan Internal (untuk kontrol ulang)</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">Asuransi Rekanan</h4>
                    <p className="text-slate-600 text-sm mb-4">
                        Kami juga menerima pasien dengan jaminan asuransi swasta yang telah bekerjasama (Admedika, dll).
                        Konfirmasikan kepesertaan Anda di bagian pendaftaran.
                    </p>
                    <div className="flex gap-2">
                         <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">BPJS Kesehatan</span>
                         <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Jasa Raharja</span>
                         <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Admedika</span>
                    </div>
                 </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 via-primary to-blue-800 rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
              Butuh Bantuan Lebih Lanjut?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed opacity-90 font-medium">
              Tim pelayanan kami siap memberikan informasi yang Anda butuhkan. Hubungi kami atau buat janji temu sekarang.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/#book">
                <Button 
                  size="lg" 
                  className="gap-2 bg-white text-primary hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-8 py-7"
                >
                  <Calendar className="h-6 w-6" />
                  Buat Janji Temu
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg px-8 py-7"
                onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20RSUD%20Kebayoran%20Lama,%20saya%20mau%20bertanya', '_blank')}
              >
                <MessageCircle className="h-6 w-6" />
                Chat WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="gap-2 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-7"
                onClick={() => window.location.href = 'tel:+622173883507'}
              >
                <Phone className="h-6 w-6" />
                (021) 7388-3507
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
