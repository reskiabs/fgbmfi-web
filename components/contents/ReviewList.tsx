"use client";
import useTestimonies from "@/hooks/useTestimonies";
import ArrowLeftActive from "@/public/icons/arrow-left-active.svg";
import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard";

const ReviewList = () => {
  const { testimonies, loading, error } = useTestimonies();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonies.length]);

  if (loading) return <p className="text-center py-10">Loading reviews...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (testimonies.length === 0) return null;

  return (
    <section className="px-[50px] py-[30px] bg-gradient-to-b from-secondary to-tertiary mt-[50px] lg:mt-[100px] lg:px-[150px] lg:py-[100px]">
      <div className="flex items-center gap-[70px] lg:max-w-[1165px] lg:mx-auto">
        <button onClick={handlePrev} className="hidden md:block">
          <Image
            src={ArrowLeftActive}
            alt="Arrow Left"
            width={50}
            height={50}
          />
        </button>

        <ReviewCard
          review={{
            id: testimonies[currentIndex].id,
            text: testimonies[currentIndex].content,
            name: testimonies[currentIndex].name,
            role: testimonies[currentIndex].position,
            image: testimonies[currentIndex].full_image_url,
          }}
        />

        <button onClick={handleNext} className="hidden md:block">
          <Image
            src={ArrowRightActive}
            alt="Arrow Right"
            width={50}
            height={50}
          />
        </button>
      </div>

      <div className="hidden lg:flex justify-center mt-2.5 space-x-2 lg:space-x-[20px] lg:mt-6">
        {testimonies.map((_, idx) => (
          <div
            key={idx}
            className={`rounded-full size-1.5 lg:size-4 ${
              idx === currentIndex ? "bg-teal-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewList;
