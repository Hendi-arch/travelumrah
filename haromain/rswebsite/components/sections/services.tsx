import {
  Activity,
  Bed,
  Stethoscope,
  FlaskConical,
  Scan,
  Pill,
  Baby,
  Eye,
  Brain,
  Scissors,
  Smile,
  HeartPulse,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Layanan 24 Jam",
    items: [
      {
        title: "IGD 24 Jam",
        description: "Penanganan gawat darurat cepat dan sigap setiap saat.",
        icon: Activity,
      },
      {
        title: "Laboratorium",
        description: "Pemeriksaan patologi klinik lengkap dan akurat.",
        icon: FlaskConical,
      },
      {
        title: "Radiologi",
        description: "Layanan Rontgen untuk diagnosa pencitraan medis.",
        icon: Scan,
      },
      {
        title: "Farmasi",
        description: "Ketersediaan obat lengkap dengan layanan resep 24 jam.",
        icon: Pill,
      },
    ],
  },
  {
    category: "Poliklinik Rawat Jalan",
    items: [
      {
        title: "Kebidanan & Kandungan",
        description: "Layanan kehamilan, persalinan, dan kesehatan reproduksi.",
        icon: Baby,
      },
      {
        title: "Klinik Anak",
        description: "Spesialis tumbuh kembang anak dan imunisasi.",
        icon: Smile,
      },
      {
        title: "Penyakit Dalam",
        description: "Diagnosa dan penanganan masalah kesehatan organ dalam.",
        icon: Stethoscope,
      },
      {
        title: "Bedah Umum",
        description: "Layanan konsultasi dan tindakan pembedahan umum.",
        icon: Scissors,
      },
      {
        title: "Poli Mata",
        description: "Pemeriksaan kesehatan mata dan visus.",
        icon: Eye,
      },
      {
        title: "Saraf (Neurologi)",
        description: "Penanganan gangguan sistem saraf dan otak.",
        icon: Brain,
      },
      {
        title: "Gigi & Mulut",
        description: "Perawatan kesehatan gigi dewasa dan anak.",
        icon: Smile, // Reusing smile/face icon for lack of specific tooth icon in standard import
      },
      {
        title: "Rehab Medik",
        description: "Fisioterapi untuk pemulihan fungsi tubuh.",
        icon: HeartPulse,
      },
    ],
  },
];

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Layanan Unggulan Kami
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Menyediakan layanan kesehatan komprehensif mulai dari gawat darurat hingga poliklinik spesialis.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((category) => (
          <div key={category.category}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((service) => (
                <Card
                  key={service.title}
                  className="bg-slate-50 border-slate-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
       
       <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-center text-slate-500 font-medium mb-6">Layanan Penunjang Lainnya:</p>
          <div className="flex flex-wrap justify-center gap-4">
              {[
                  "Klinik Gizi", 
                  "Klinik Paru (TB)", 
                  "Klinik VCT (HIV)", 
                  "Medical Check-Up (MCU)", 
                  "Fisioterapi",
                  "Layanan Imunisasi"
              ].map((item) => (
                  <span key={item} className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-white hover:shadow-md transition-all cursor-default border border-slate-200">
                      {item}
                  </span>
              ))}
          </div>
       </div>
    </SectionWrapper>
  );
}
