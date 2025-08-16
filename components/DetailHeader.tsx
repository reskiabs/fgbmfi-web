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
    <div className="flex flex-col mb-5 md:mb-8">
      <Link
        href={href || "/"}
        className="flex items-center gap-1.5 md:gap-2.5 mb-7 lg:mb-12 font-medium text-sm text-primary hover:text-primary-dark md:text-xl"
      >
        <MoveLeft className="size-3 md:size-5 " />
        Kembali
      </Link>
      <p className="font-medium text-sm text-primary md:text-xl hover:cursor-pointer">
        FGBMFI Indonesia / {page}
      </p>
      <h1 className="font-bold text-xl md:text-[40px] my-2.5 md:my-5">
        {title}
      </h1>
      <p className="font-medium text-sm text-gray-400 md:text-xl">
        Diunggah pada {date}
      </p>
    </div>
  );
};

export default DetailHeader;
