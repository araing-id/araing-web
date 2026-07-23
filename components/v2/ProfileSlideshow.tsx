"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getInitials } from "@/lib/data/team";

interface ProfileSlideshowProps {
  photos: string[];
  fallbackName: string;
}

export default function ProfileSlideshow({ photos, fallbackName }: ProfileSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  if (!photos || photos.length === 0) {
    // Fallback UI matching the premium placeholder from earlier
    return (
      <div className="w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#111] to-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden group border border-white/10 shadow-[0_0_50px_rgba(192,132,252,0.1)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-[#c084fc]/10 blur-[30px] rounded-full group-hover:bg-[#c084fc]/30 group-hover:scale-150 transition-all duration-700"></div>
        <span className="text-5xl md:text-8xl font-black text-white/10 tracking-tighter absolute select-none group-hover:scale-110 transition-all duration-500">
          {getInitials(fallbackName)}
        </span>
        <span className="relative z-10 text-[#c084fc] text-xs md:text-base font-bold tracking-[0.3em] uppercase mt-4 opacity-80 group-hover:opacity-100">
          Soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(192,132,252,0.1)]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={photos[currentIndex]}
          alt={`${fallbackName} photo ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Controls - Only show if there's more than one photo */}
      {photos.length > 1 && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#c084fc]/80 hover:border-[#c084fc] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#c084fc]/80 hover:border-[#c084fc] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {photos.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-6 bg-[#c084fc]" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
