import { MoveLeft } from "lucide-react";
import Link from "next/link";

const DetailHeader = ({
  page,
  title,
  date,
  href,
}: {
  page: string;
  title: string;
  date: string;
  href?: string;
}) => {
  return (
    <div className="flex flex-col space-y-2.5 md:space-y-5 mb-5 md:mb-8">
      <Link
        href={href || "/"}
        className="flex items-center gap-1.5 md:gap-2.5 font-medium text-[10px] text-primary md:text-[15px]"
      >
        <MoveLeft className="size-3 md:size-5" />
        Kembali
      </Link>
      <p className="font-medium text-[10px] text-primary md:text-[15px]">
        FGBMFI Indonesia / {page}
      </p>
      <h1 className="font-bold text-xl md:text-[40px]">{title}</h1>
      <p className="font-medium text-[10px] text-gray-400 md:text-[15px]">
        Diunggah pada {date}
      </p>
    </div>
  );
};

export default DetailHeader;
