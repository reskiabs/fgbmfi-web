"use client";

import { ImagePlacholder } from "@/lib/helper/ImagePlacholder";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi untuk reset interval agar manual click tidak bentrok
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => resetTimeout();
  }, [activeIndex, images.length]);

  // Fungsi pindah slide manual
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Fungsi pindah slide berikutnya/sebelumnya (opsional)
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden md:w-[920px] md:h-[460px] lg:w-[1140px] lg:h-[641px] md:rounded-[20px]">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className={`absolute top-0 left-0 object-center transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            placeholder="blur"
            blurDataURL={ImagePlacholder}
            priority={index === 0}
          />
        ))}

        {/* Tombol prev/next */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 md:p-3 z-20 hover:cursor-pointer"
        >
          <ChevronLeft size={20} className="md:size-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 md:p-3 z-20 hover:cursor-pointer"
        >
          <ChevronRight size={20} className="md:size-12" />
        </button>
      </div>

      {/* Indikator titik */}
      <div className="flex justify-center mt-2.5 space-x-2 md:space-x-[15px] lg:space-x-[20px] md:mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full size-1.5 md:size-3 lg:size-4 cursor-pointer transition-all duration-300 ${
              i === activeIndex ? "bg-teal-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
