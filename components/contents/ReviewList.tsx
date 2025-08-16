"use client";
import useTestimonies from "@/hooks/useTestimonies";
import ArrowLeftActive from "@/public/icons/arrow-left-active.svg";
import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import LoaderContent from "../LoaderContent";
import ReviewCard from "../ReviewCard";
import SomethingWentWrong from "../SomethingWentWrong";

const ReviewList = () => {
  const { testimonies, loading, error } = useTestimonies();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  }, [testimonies.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  }, [testimonies.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;
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
            image: testimonies[currentIndex]?.full_image_url || "",
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
