"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Calendar, User, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Layanan Kesehatan Profesional, Terpercaya, dan Ramah",
    description: "RSUD Kebayoran Lama berkomitmen memberikan pelayanan medis terbaik dengan fasilitas lengkap dan tenaga ahli berpengalaman.",
    image: "/images/hero.png",
    alt: "Hospital Interior",
    primaryAction: { label: "Buat Janji Temu", icon: Calendar, type: "book" },
    secondaryAction: { label: "Jadwal Dokter", icon: User, type: "schedule" }
  },
  {
    id: 2,
    title: "IGD 24 Jam Siap Melayani Gawat Darurat",
    description: "Tim medis kami siap sedia 24/7 untuk menangani kondisi darurat Anda dengan respon cepat dan peralatan lengkap.",
    image: "/images/hero-emergency.png",
    alt: "Emergency Room",
    primaryAction: { label: "Pangilan Darurat", icon: Phone, type: "call", href: "tel:119" },
    secondaryAction: { label: "Lihat Fasilitas", icon: Calendar, type: "scroll", href: "/#services" }
  },
  {
    id: 3,
    title: "Teknologi Medis Terkini untuk Diagnosa Akurat",
    description: "Didukung oleh peralatan medis modern seperti CT-Scan dan MRI terbaru untuk memastikan ketepatan diagnosa dan pengobatan.",
    image: "/images/hero-technology.png",
    alt: "Medical Technology",
    primaryAction: { label: "Booking Online", icon: Calendar, type: "book" },
    secondaryAction: { label: "Jadwal Dokter", icon: User, type: "schedule" }
  }
];

export function Hero({ onBookClick, onScheduleClick }: { onBookClick?: () => void; onScheduleClick?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handlePrimaryClick = (action: any) => {
    if (action.type === "book") onBookClick?.();
    if (action.type === "call") window.location.href = action.href;
    // other types can be added
  };

  const handleSecondaryClick = (action: any) => {
    if (action.type === "schedule") onScheduleClick?.();
    if (action.type === "scroll") {
        const element = document.querySelector(action.href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const PrimaryIcon = slides[currentSlide].primaryAction.icon;
  const SecondaryIcon = slides[currentSlide].secondaryAction.icon;

  return (
    <div className="relative isolate overflow-hidden bg-slate-50 pt-14 min-h-[600px] flex items-center">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
           key={currentSlide}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           className="absolute inset-0 -z-20"
        >
             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10 w-full md:w-2/3 lg:w-1/2" />
             <div className="absolute inset-0 bg-white/40 z-0 md:hidden" /> {/* Mobile overlay */}
             
             {/* Current Image */}
             <div className="absolute inset-0 w-full h-full"> 
                 {/* Right aligned image on desktop */}
                 <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
                    <Image 
                        src={slides[currentSlide].image} 
                        alt={slides[currentSlide].alt} 
                        fill 
                        className="object-cover object-center"
                        priority
                    />
                 </div>
             </div>
        </motion.div>
      </AnimatePresence>

      <SectionWrapper className="relative z-20 w-full py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl"
            >
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                    {slides[currentSlide].title}
                </h1>
                <p className="text-lg leading-8 text-slate-600 mb-8">
                    {slides[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-4">
                     <Button size="lg" className="gap-2" onClick={() => handlePrimaryClick(slides[currentSlide].primaryAction)}>
                        <PrimaryIcon className="h-4 w-4" />
                        {slides[currentSlide].primaryAction.label}
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 bg-white/80 backdrop-blur-sm" onClick={() => handleSecondaryClick(slides[currentSlide].secondaryAction)}>
                         <SecondaryIcon className="h-4 w-4" />
                        {slides[currentSlide].secondaryAction.label}
                    </Button>
                </div>
            </motion.div>

            {/* Empty column for layout since image is absolute background */}
            <div className="hidden md:block"></div>
        </div>
      </SectionWrapper>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
             <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-primary w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
             />
        ))}
      </div>

       {/* Arrow Controls (Desktop) */}
       <div className="absolute inset-y-0 left-4 z-30 hidden md:flex items-center">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white/50 hover:bg-white text-slate-700 transition-colors backdrop-blur-sm shadow-sm ring-1 ring-slate-900/5">
                <ChevronLeft className="h-6 w-6" />
            </button>
       </div>
       <div className="absolute inset-y-0 right-4 z-30 hidden md:flex items-center">
            <button onClick={nextSlide} className="p-2 rounded-full bg-white/50 hover:bg-white text-slate-700 transition-colors backdrop-blur-sm shadow-sm ring-1 ring-slate-900/5">
                <ChevronRight className="h-6 w-6" />
            </button>
       </div>
    </div>
  );
}
