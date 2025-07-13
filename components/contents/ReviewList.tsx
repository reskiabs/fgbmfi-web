import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import ReviewCard from "../ReviewCard";

const ReviewList = () => {
  return (
    <section className="px-[50px] py-[30px] bg-gradient-to-b from-secondary to-tertiary mt-[50px] lg:mt-[100px] lg:px-[150px] lg:py-[100px]">
      <div className="flex items-center gap-[70px]">
        <ArrowLeftCircle
          size={55}
          color="#1a817d"
          className="hidden lg:inline"
        />
        <ReviewCard />
        <ArrowRightCircle
          size={55}
          color="#1a817d"
          className="hidden lg:inline"
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
