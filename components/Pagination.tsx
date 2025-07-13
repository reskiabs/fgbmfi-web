import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className="flex items-center gap-x-2.5 lg:gap-x-5">
      <div className="size-[35px] lg:size-[50px] border border-primary rounded-full text-[15px] font-medium text-primary flex justify-center items-center">
        1
      </div>
      <div className="size-[35px] lg:size-[50px] border border-gray-900 rounded-full text-[15px] font-medium text-gray-900 flex justify-center items-center">
        2
      </div>
      <div className="size-[35px] lg:size-[50px] border border-gray-900 rounded-full text-[15px] font-medium text-gray-900 flex justify-center items-center">
        3
      </div>
      <div className="relative size-[35px] lg:size-[50px]">
        <Image src={ArrowRightActive} alt="Arrow Right" fill />
      </div>
    </div>
  );
};

export default Pagination;
