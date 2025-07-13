import ArrowLeftActive from "@/public/icons/arrow-left-active.svg";
import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";
import ReviewCard from "../ReviewCard";

const ReviewList = () => {
  return (
    <section className="px-[50px] py-[30px] bg-gradient-to-b from-secondary to-tertiary mt-[50px] lg:mt-[100px] lg:px-[150px] lg:py-[100px] ">
      <div className="flex items-center gap-[70px] lg:max-w-[1165px] lg:mx-auto">
        <Image
          src={ArrowLeftActive}
          alt="Arrow Left"
          width={35}
          height={35}
          className="hidden lg:block"
        />
        <ReviewCard />
        <Image
          src={ArrowRightActive}
          alt="Arrow Right"
          width={35}
          height={35}
          className="hidden lg:block"
        />
      </div>
      <div className="hidden lg:flex justify-center mt-2.5 space-x-2 lg:space-x-[20px] lg:mt-6">
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-teal-700 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
      </div>
    </section>
  );
};

export default ReviewList;
