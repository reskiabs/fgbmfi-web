import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className="flex items-center gap-x-2.5">
      <div className="size-[35px] border border-primary rounded-full text-[15px] font-medium text-primary flex justify-center items-center">
        1
      </div>
      <div className="size-[35px] border border-gray-900 rounded-full text-[15px] font-medium text-gray-900 flex justify-center items-center">
        2
      </div>
      <div className="size-[35px] border border-gray-900 rounded-full text-[15px] font-medium text-gray-900 flex justify-center items-center">
        3
      </div>
      <Image src={ArrowRightActive} alt="Arrow Right" width={35} height={35} />
    </div>
  );
};

export default Pagination;
