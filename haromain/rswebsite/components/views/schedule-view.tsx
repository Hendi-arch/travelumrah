"use client";

import { Check } from "lucide-react";

// Mock Schedule Data based on research findings
const scheduleData = [
  {
    poli: "Poli Kebidanan & Kandungan (Obgyn)",
    doctors: [
      { name: "dr. Luhut Sinaga, Sp.OG", days: ["Senin", "Rabu", "Jumat"], time: "08:00 - 12:00" },
      { name: "dr. Wahyu Ginealdy, Sp.OG", days: ["Selasa", "Kamis"], time: "13:00 - 16:00" },
      { name: "dr. Chakti Ari Swastika, Sp.OG", days: ["Sabtu"], time: "09:00 - 13:00" },
    ],
  },
  {
    poli: "Poli Anak (Pediatric)",
    doctors: [
      { name: "dr. Amrina Rasyada, Sp.A", days: ["Senin", "Selasa", "Kamis"], time: "09:00 - 14:00" },
      { name: "dr. Putu Fristia, Sp.A", days: ["Rabu", "Jumat"], time: "08:00 - 13:00" },
    ],
  },
  {
    poli: "Poli Penyakit Dalam (Internist)",
    doctors: [
      { name: "dr. Gladys Sudiyanto, Sp.PD", days: ["Senin - Jumat"], time: "08:00 - 14:00" },
      { name: "dr. Dicka Adhitya Kamil, Sp.PD", days: ["Senin", "Rabu", "Jumat"], time: "14:00 - 17:00" },
    ],
  },
  {
    poli: "Poli Saraf (Neurology)",
    doctors: [
      { name: "dr. Nadia Husein H, Sp.N", days: ["Senin", "Kamis"], time: "08:00 - 12:00" },
    ],
  },
   {
    poli: "Poli THT-KL",
    doctors: [
      { name: "dr. Bilqis, Sp.THT.BKL", days: ["Selasa", "Jumat"], time: "09:00 - 13:00" },
    ],
  },
];

export function ScheduleView({ selectedDoctor }: { selectedDoctor?: string | null }) {
  // Filter data if a doctor is selected
  const displayData = selectedDoctor 
    ? scheduleData.map(dept => ({
        ...dept,
        doctors: dept.doctors.filter(d => d.name === selectedDoctor)
      })).filter(dept => dept.doctors.length > 0)
    : scheduleData;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-700">
        <Check className="h-5 w-5 flex-shrink-0" />
        <p>
            Jadwal dapat berubah sewaktu-waktu. Untuk kepastian, silakan hubungi bagian pendaftaran atau booking online.
        </p>
      </div>

      <div className="space-y-8">
        {displayData.length > 0 ? (
          displayData.map((dept) => (
            <div key={dept.poli}>
              <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
                {dept.poli}
              </h3>
              <div className="space-y-3">
                {dept.doctors.map((doc) => (
                  <div key={doc.name} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm bg-slate-50 p-3 rounded-md">
                    <span className="font-medium text-slate-700">{doc.name}</span>
                    <div className="flex items-center gap-4 mt-1 sm:mt-0 text-slate-500">
                      <span>{doc.days.join(", ")}</span>
                      <span className="w-1 h-1 bg-slate-400 rounded-full hidden sm:block"/>
                      <span>{doc.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
           <div className="text-center py-8 text-slate-500">
             <p>Jadwal dokter tidak ditemukan.</p>
             <button 
               onClick={() => window.location.reload()} // Fallback or clear filter logic could be better handled by parent but this is simple for now
               className="text-primary hover:underline mt-2 text-sm"
             >
               Lihat semua jadwal
             </button>
           </div>
        )}
      </div>
    </div>
  );
}
