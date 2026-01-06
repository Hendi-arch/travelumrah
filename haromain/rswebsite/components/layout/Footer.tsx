import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const footerNavigation = {
  services: [
    { name: "IGD 24 Jam", href: "/#services" },
    { name: "Kebidanan & Kandungan", href: "/#services" },
    { name: "Klinik Anak", href: "/#services" },
    { name: "Penyakit Dalam", href: "/#services" },
    { name: "Bedah Umum", href: "/#services" },
  ],
  company: [
    { name: "Tentang Kami", href: "/#about" },
    { name: "Dokter Spesialis", href: "/#doctors" },
    { name: "Jadwal Dokter", href: "/#doctors" },
    { name: "Karir", href: "#" },
    { name: "Berita & Artikel", href: "#" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
                 <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                 </div>
                 <span className="font-bold text-xl text-white">
                   RSUD Kebayoran Lama
                 </span>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Melayani masyarakat Jakarta Selatan dengan layanan kesehatan tipe D yang profesional dan sepenuh hati.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Layanan
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-slate-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Informasi
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-slate-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Hubungi Kami
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3 text-sm leading-6 text-slate-300">
                    <MapPin className="h-6 w-5 flex-none text-slate-400" aria-hidden="true" />
                     Jl. Jatayu No.12, RT.1/RW.12, Kby. Lama Sel., Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12240
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-slate-300">
                    <Phone className="h-6 w-5 flex-none text-slate-400" aria-hidden="true" />
                    (021) 27939067
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-slate-300">
                    <Mail className="h-6 w-5 flex-none text-slate-400" aria-hidden="true" />
                    rsudkebayoranlama@jakarta.go.id
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} RSUD Kebayoran Lama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
