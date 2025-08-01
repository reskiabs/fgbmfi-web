import ArrowRightActive from "@/public/icons/arrow-right-active.svg";
import Image from "next/image";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center gap-x-2.5 lg:gap-x-5">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`size-[35px] lg:size-[50px] border-2 rounded-full text-[15px] font-semibold flex justify-center items-center transition ${
            page === currentPage
              ? "border-primary text-primary"
              : "border-gray-400 text-gray-500 hover:border-primary hover:text-primary"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className={`relative size-[35px] lg:size-[50px] flex justify-center items-center transition ${
          isLastPage
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-80 cursor-pointer"
        }`}
      >
        <Image src={ArrowRightActive} alt="Arrow Right" fill />
      </button>
    </div>
  );
};

export default Pagination;
