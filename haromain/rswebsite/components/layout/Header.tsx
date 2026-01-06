"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationItem = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

const navigation: NavigationItem[] = [
  { name: "Beranda", href: "/" },
  { 
    name: "Tentang Kami", 
    children: [
        { name: "Profil RSUD", href: "/#about" },
        { name: "Tim Dokter", href: "/#doctors" },
        { name: "Kontak", href: "/#contact" }
    ]
  },
  { 
    name: "Layanan", 
    children: [
        { name: "Fasilitas & Layanan", href: "/#services" },
        { name: "Jadwal Dokter", href: "/#schedule" },
        { name: "Booking Online", href: "/#book" }
    ]
  },
  { 
    name: "Informasi Publik", 
    children: [
        { name: "Panduan Pasien", href: "/informasi" },
        { name: "Berita & Artikel", href: "/berita" }
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // State for mobile sub-menus
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    if (openMobileSubmenu === name) {
        setOpenMobileSubmenu(null);
    } else {
        setOpenMobileSubmenu(name);
    }
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800"
      >
        <nav
          className="container-custom flex items-center justify-between py-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                 <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                RSUD Kebayoran Lama
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
               <div key={item.name} className="relative group">
                  {item.children ? (
                      <>
                          <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 hover:text-primary transition-colors group-hover:text-primary outline-none">
                              {item.name}
                              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                          </button>
                          {/* Dropdown Menu */}
                          <div className="absolute -left-4 top-full z-10 mt-3 w-56 max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                              <div className="p-2">
                                  {item.children.map((child) => (
                                      <Link
                                          key={child.name}
                                          href={child.href}
                                          className="relative flex gap-x-6 rounded-lg p-3 hover:bg-slate-50 text-sm leading-6"
                                      >
                                          <div className="flex-auto">
                                              <span className="block font-semibold text-slate-900">
                                                  {child.name}
                                                  <span className="absolute inset-0" />
                                              </span>
                                          </div>
                                      </Link>
                                  ))}
                              </div>
                          </div>
                      </>
                  ) : (
                      <Link
                          href={item.href || "#"}
                          className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
                      >
                          {item.name}
                      </Link>
                  )}
               </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
              <Button variant="outline" className="gap-2 hidden xl:flex" onClick={() => window.location.href = 'tel:119'}>
                  <Phone className="h-4 w-4" />
                  Emergency: 119
              </Button>
              <Link href="/#book" className={buttonVariants({ variant: "default" })} onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}>
                  Book Appointment
              </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[100] w-full bg-white dark:bg-slate-950 px-6 py-6 lg:hidden transition-transform duration-300 ease-in-out shadow-2xl flex flex-col h-screen",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full invisible"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
               <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">RSUD Kebayoran Lama</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root flex-1 overflow-y-auto">
          <div className="-my-6 divide-y divide-slate-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                    {item.children ? (
                        <div className="space-y-1">
                            <button
                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                                onClick={() => toggleMobileSubmenu(item.name)}
                            >
                                {item.name}
                                <ChevronDown
                                    className={cn("h-5 w-5 flex-none transition-transform", openMobileSubmenu === item.name ? "rotate-180" : "")}
                                    aria-hidden="true"
                                />
                            </button>
                            <div className={cn("mt-2 space-y-2 pl-6", openMobileSubmenu === item.name ? "block" : "hidden")}>
                                {item.children.map((child) => (
                                    <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block rounded-lg py-2 pl-3 pr-3 text-sm font-semibold leading-7 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {child.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                         <Link
                            href={item.href || "#"}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    )}
                </div>
              ))}
            </div>
            <div className="py-6 space-y-3">
                 <Link 
                    href="tel:119"
                    className={buttonVariants({ variant: "outline", className: "w-full justify-start gap-2" })}
                 >
                    <Phone className="h-4 w-4" />
                    Emergency: 119
                </Link>
                <Link 
                    href="/#book" 
                    className={buttonVariants({ variant: "default", className: "w-full" })} 
                    onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new Event('open-booking-modal')); }}
                >
                    Book Appointment
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
