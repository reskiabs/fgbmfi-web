"use client";
import ArrowLeftActive from "@/public/icons/arrow-left-active.svg";
import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard";

const reviews = [
  {
    id: 1,
    text: `Bisnis bukan sekadar keuntungan, tapi juga panggilan. Jadilah bagian dari generasi pria yang membawa perubahan. Yuk, jadi bagian dari FGBMFI Indonesia dan temukan tujuan ilahi dalam pekerjaanmu! Bergabung di komunitas ini membuka mata saya bahwa pekerjaan dan iman bisa berjalan beriringan, memberi dampak tidak hanya dalam bisnis, tapi juga dalam keluarga dan masyarakat.`,
    name: "SETIAWAN ATMADJA",
    role: "Banker",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    text: `Saya bergabung dengan FGBMFI pada masa sulit dalam hidup saya. Lewat pertemuan-pertemuan yang penuh makna dan dukungan dari rekan-rekan seiman, saya menemukan kembali arah hidup saya. Integritas, iman, dan visi menjadi fondasi saya membangun bisnis yang berdampak. Di sini saya belajar bahwa kesuksesan sejati adalah ketika kita bisa memberkati orang lain melalui pekerjaan kita.`,
    name: "ANDRE HUTAPEA",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    text: `FGBMFI bukan hanya organisasi, tapi keluarga rohani yang memperlengkapi saya untuk bertumbuh dalam iman dan kepemimpinan. Setiap sharing dari anggota lainnya membawa perspektif baru, inspirasi, dan semangat untuk terus berjuang menghadirkan nilai-nilai Kristiani di dunia kerja. Komunitas ini telah menjadi tempat saya bertumbuh, belajar, dan berdampak lebih besar.`,
    name: "MICHAEL JONATHAN",
    role: "Consultant",
    image:
      "https://images.unsplash.com/photo-1633367583895-08545d733dfe?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ReviewList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-[50px] py-[30px] bg-gradient-to-b from-secondary to-tertiary mt-[50px] lg:mt-[100px] lg:px-[150px] lg:py-[100px] ">
      <div className="flex items-center gap-[70px] lg:max-w-[1165px] lg:mx-auto">
        <button onClick={handlePrev} className="hidden md:block">
          <Image
            src={ArrowLeftActive}
            alt="Arrow Left"
            width={50}
            height={50}
          />
        </button>

        <ReviewCard review={reviews[currentIndex]} />

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
        {reviews.map((_, idx) => (
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
