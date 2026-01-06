import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "dr. Dicka Adhitya Kamil, Sp.PD",
    role: "Spesialis Penyakit Dalam",
    schedule: "Senin, Kamis, Jumat",
    image: "/images/dr-andi.png", // Mapped from dr-andi (Male Internist)
  },
  {
    name: "dr. Amrina Rasyada, Sp.A",
    role: "Spesialis Anak",
    schedule: "Senin - Jumat",
    image: "/images/dr-siti.png", // Mapped from dr-siti (Female Pediatrician)
  },
  {
    name: "dr. Luhut Sinaga, Sp.OG", 
    role: "Spesialis Kebidanan & Kandungan",
    schedule: "Selasa - Kamis",
    image: "/images/dr-budi.png", // Mapped from dr-budi (Senior Male)
  },
  {
    name: "dr. Chakti Ari Swastika, Sp.OG",
    role: "Spesialis Kebidanan & Kandungan",
    schedule: "Senin, Rabu, Jumat",
    image: "/images/dr-rina.png", // Mapped from dr-rina (Female Obgyn)
  },
];

export function Doctors({ onScheduleClick }: { onScheduleClick?: (doctorName: string) => void }) {
  return (
    <SectionWrapper id="doctors" className="bg-white">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Tim Dokter Spesialis
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Ditangani oleh dokter spesialis yang berpengalaman dan berdedikasi
          tinggi untuk kesehatan Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doctor) => (
          <Card key={doctor.name} className="overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="aspect-[3/4] w-full bg-slate-100 relative">
              <Image 
                src={doctor.image} 
                alt={doctor.name} 
                fill 
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                {doctor.name}
              </h3>
              <p className="text-sm text-slate-500 font-medium mb-4">
                {doctor.role}
              </p>
              <div className="flex items-center text-sm text-slate-600 gap-2 mb-4">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{doctor.schedule}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={() => onScheduleClick?.(doctor.name)}>
                Lihat Jadwal
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
