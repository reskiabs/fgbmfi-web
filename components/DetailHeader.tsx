import { MoveLeft } from "lucide-react";

const DetailHeader = ({
  page,
  title,
  date,
}: {
  page: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex flex-col space-y-2.5 lg:space-y-5 mb-5 lg:mb-8">
      <div className="flex items-center gap-1.5 font-medium text-[10px] text-primary lg:text-[15px] lg:hidden">
        <MoveLeft size={10} />
        Kembali
      </div>
      <p className="font-medium text-[10px] text-primary lg:text-[15px]">
        FGBMFI Indonesia / {page}
      </p>
      <h1 className="font-bold text-xl lg:text-[40px]">{title}</h1>
      <p className="font-medium text-[10px] text-gray-400 lg:text-[15px]">
        Diunggah pada {date}
      </p>
    </div>
  );
};

export default DetailHeader;
