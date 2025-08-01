"use client";

import { ImagePlacholder } from "@/lib/helper/ImagePlacholder";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden md:w-[920px] md:h-[460px] lg:w-[1140px] lg:h-[525px] md:rounded-[20px]">
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
      </div>

      <div className="flex justify-center mt-2.5 space-x-2 md:space-x-[15px] lg:space-x-[20px] md:mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full size-1.5 md:size-3 lg:size-4 transition-all duration-300 ${
              i === activeIndex ? "bg-teal-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
