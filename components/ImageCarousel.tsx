"use client";

import { ImagePlacholder } from "@/lib/helper/ImagePlacholder";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="overflow-hidden rounded-xl">
        <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden lg:w-[1140px] lg:h-[525px] lg:rounded-[20px]">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              placeholder="blur"
              blurDataURL={ImagePlacholder}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2.5 space-x-2 lg:space-x-[20px] lg:mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full size-1.5 lg:size-4 transition-all duration-300 ${
              i === activeIndex ? "bg-teal-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
