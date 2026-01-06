"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        aria-label="Chat WhatsApp"
        onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-red-600 hover:bg-red-700 shadow-lg animate-pulse"
        aria-label="Emergency Call"
        onClick={() => window.open("tel:119", "_self")}
      >
        <Phone className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}
