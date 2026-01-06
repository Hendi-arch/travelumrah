import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Hubungi Kami
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Kami siap membantu Anda. Silakan hubungi kami untuk informasi lebih
          lanjut atau pendaftaran pasien.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Informasi Kontak</h3>
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Alamat</h4>
                <p className="mt-1 text-slate-600">
                  Jl. Jatayu No.12, RT.1/RW.12, Kby. Lama Sel., Kec. Kby. Lama,
                  Kota Jakarta Selatan, DKI Jakarta 12240
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
               <div className="flex-none">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Telepon</h4>
                <p className="mt-1 text-slate-600">(021) 7222444</p>
                <p className="text-sm text-slate-500">24 Jam (UGD)</p>
              </div>
            </div>

            <div className="flex gap-4">
               <div className="flex-none">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="mt-1 text-slate-600">info@rsudkebayoranlama.co.id</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400">
             {/* Map Placeholder */}
             <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Google Maps Embed
             </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  Nama Depan
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  Nama Belakang
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-slate-900">
                Nomor Telepon
              </label>
              <div className="mt-2.5">
                 <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                Pesan
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50"
                  defaultValue={""}
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full">
                Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
