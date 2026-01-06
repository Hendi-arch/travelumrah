import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";

export function CTABand({ onBookClick }: { onBookClick?: () => void }) {
  return (
    <SectionWrapper className="py-20">
      <div className="bg-gradient-to-br from-blue-600 via-primary to-blue-800 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
              Butuh Pertolongan Medis Segera?
            </h2>
            <p className="text-xl text-blue-50 opacity-90 leading-relaxed font-medium">
              Layanan IGD kami siaga 24 jam untuk menangani kondisi gawat darurat. 
              Tim medis profesional kami siap membantu Anda kapan saja.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 flex-shrink-0">
            <Button 
              size="lg" 
              variant="secondary" 
              className="gap-3 bg-white text-primary hover:bg-blue-50 font-bold px-8 py-8 text-lg rounded-2xl shadow-xl hover:scale-105 transition-all duration-300" 
              onClick={() => window.open("tel:02127939067")}
            >
              <Phone className="h-6 w-6" />
              IGD (021) 27939067
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-400/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 gap-3 font-bold px-8 py-8 text-lg rounded-2xl shadow-xl hover:scale-105 transition-all duration-300" 
              onClick={onBookClick}
            >
              <CalendarCheck className="h-6 w-6" />
              Booking Online
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
