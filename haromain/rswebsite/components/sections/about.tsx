import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Users, Building2, Award, Clock } from "lucide-react";

const stats = [
  { name: "Pasien Terlayani", value: "30k+", icon: Users },
  { name: "Kapasitas Tempat Tidur", value: "66", icon: Building2 },
  { name: "Layanan Spesialis", value: "12+", icon: Award },
  { name: "Beroperasi Sejak", value: "2018", icon: Clock },
];

export function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-50 relative overflow-hidden">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            RSUD Kebayoran Lama
          </h2>
          <div className="mt-4 text-lg text-slate-600 space-y-4">
             <p>
              RSUD Kebayoran Lama merupakan Rumah Sakit Pemerintah Tipe D yang berdedikasi melayani masyarakat Jakarta Selatan. 
              Diresmikan pada 16 Agustus 2018, kami terus berkembang menjadi fasilitas kesehatan terpercaya.
            </p>
            <p>
              Kami memiliki fokus Layanan Unggulan Ibu & Anak, khususnya pada tumbuh kembang anak dan imunisasi. 
              Sebagai RSUD yang pernah menjadi rujukan utama COVID-19, kami memiliki standar keselamatan dan kebersihan yang tinggi.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-slate-100"
              >
                <stat.icon className="h-6 w-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 text-center">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-1">
          {/* Decorative pattern/blob */}
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl -z-10" />
          
          <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-xl overflow-hidden relative border border-slate-100">
            <Image 
              src="/images/about.png" 
              alt="Tim Medis RSUD Kebayoran Lama" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
