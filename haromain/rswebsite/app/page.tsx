"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Doctors } from "@/components/sections/doctors";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABand } from "@/components/sections/cta-band";
import { Modal } from "@/components/ui/modal";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { ScheduleView } from "@/components/views/schedule-view";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const openBooking = () => setIsBookingOpen(true);
  
  const openSchedule = (doctorName?: string) => {
    if (typeof doctorName === 'string') {
        setSelectedDoctor(doctorName);
    } else {
        setSelectedDoctor(null);
    }
    setIsScheduleOpen(true);
  };

  // Handle Hash Links
  useEffect(() => {
    const handleHashCheck = () => {
        if (window.location.hash === "#book") {
            setIsBookingOpen(true);
            history.replaceState(null, "", " ");
        }
        if (window.location.hash === "#schedule") {
            setSelectedDoctor(null); // Clear filter for general schedule view
            setIsScheduleOpen(true);
             history.replaceState(null, "", " ");
        }
    };
    
    // Custom Event Listener for cross-component interactions
    const handleCustomOpenBooking = () => {
        setIsBookingOpen(true);
    };
    
    // Check on mount
    handleHashCheck();

    // Check on hash change (if link is clicked while on same page)
    window.addEventListener("hashchange", handleHashCheck);
    window.addEventListener("open-booking-modal", handleCustomOpenBooking);
    
    return () => {
        window.removeEventListener("hashchange", handleHashCheck);
        window.removeEventListener("open-booking-modal", handleCustomOpenBooking);
    };
  }, []);

  return (
    <>
      <Hero onBookClick={openBooking} onScheduleClick={() => openSchedule()} />
      <Services />
      <About />
      <Doctors onScheduleClick={openSchedule} />
      <Testimonials />
      <CTABand onBookClick={openBooking} />
      <Contact />

      {/* Modals */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        title="Buat Janji Temu"
      >
        <AppointmentForm onClose={() => setIsBookingOpen(false)} />
      </Modal>

      <Modal 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
        title={selectedDoctor ? `Jadwal ${selectedDoctor}` : "Jadwal Dokter Spesialis"}
      >
        <ScheduleView selectedDoctor={selectedDoctor} />
      </Modal>
    </>
  );
}
