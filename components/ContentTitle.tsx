import { MoveRight } from "lucide-react";

const ContentTitle = ({
  title,
  removeButton,
}: {
  title: string;
  removeButton?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-primary font-bold text-xl lg:text-[40px]">{title}</h2>
      {!removeButton && (
        <button className="flex items-center gap-5 text-xs font-medium uppercase text-primary lg:text-xl">
          Lihat Lainnya
          <MoveRight className="hidden md:inline" />
        </button>
      )}
    </div>
  );
};

export default ContentTitle;
