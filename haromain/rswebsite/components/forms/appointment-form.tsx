"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, User, Phone, CheckCircle2 } from "lucide-react";

export function AppointmentForm({ onClose }: { onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Berhasil!</h3>
        <p className="text-slate-600 mb-6">
          Permintaan janji temu Anda telah diterima. Tim kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal.
        </p>
        <Button onClick={onClose} className="w-full">
          Tutup
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
        <div className="relative">
          <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          <input
            type="text"
            required
            placeholder="Masukkan nama anda"
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
        <div className="relative">
          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          <input
            type="tel"
            required
            placeholder="Contoh: 08123456789"
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Tanggal</label>
            <div className="relative">
             <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
             <input
                type="date"
                required
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Poliklinik</label>
            <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                <option>Pilih Poli...</option>
                <option>Poli Anak</option>
                <option>Poli Kandungan</option>
                <option>Poli Penyakit Dalam</option>
                <option>Poli Bedah</option>
                <option>Poli Gigi</option>
                <option>Poli Mata</option>
                <option>Poli Saraf</option>
            </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Keluhan / Catatan</label>
        <textarea
          rows={3}
          placeholder="Jelaskan keluhan singkat anda..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
        />
      </div>

      <Button type="submit" className="w-full mt-4" disabled={loading}>
        {loading ? "Memproses..." : "Buat Janji Temu"}
      </Button>
    </form>
  );
}
