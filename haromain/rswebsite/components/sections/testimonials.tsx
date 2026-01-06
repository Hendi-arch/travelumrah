"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Mutia Saputri",
    rating: 5,
    role: "Pasien Kebidanan",
    content: "Pengalaman proses bersalin di RSUD Kebayoran Lama sangat memuaskan. Terima kasih banyak untuk dr. Syahniar Mukmina Sp.OG & Bidan Shely. Keduanya terbaik. Pelayanannya sangat membantu.",
  },
  {
    name: "Ony Arya",
    rating: 5,
    role: "Pasien Rawat Inap",
    content: "Terimakasih RSUD Kebayoran lama atas pelayanannya yang sangat excellent. Walaupun RS pemerintah tapi rasanya seperti RS swasta. Cepat, tanggap, dan kebersihannya luar biasa. Recomended!",
  },
  {
    name: "Hasnah Nadhirra",
    rating: 5,
    role: "Pasien BPJS",
    content: "Saya pasien BPJS. Dr awal periksa disini sampai akhirnya rawat inap, suka banget dg pelayanannya. Mulai dr security, pendaftaran, sampai dokter, semua melayani dg ramah.",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-slate-50">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Apa Kata Pasien Kami
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Kepuasan pasien adalah prioritas utama kami. Berikut adalah pengalaman mereka.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-white border-slate-100 relative">
            <CardContent className="pt-8">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/10" />
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" className="gap-2" onClick={() => window.open("https://maps.app.goo.gl/xRLsRDUVXxj3V4iB9", "_blank")}>
          <Star className="h-4 w-4 text-yellow-500" />
          Tulis Ulasan di Google Maps
        </Button>
      </div>
    </SectionWrapper>
  );
}
