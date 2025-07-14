import { MoveRight } from "lucide-react";
import Link from "next/link";

const ContentTitle = ({
  title,
  removeButton,
  href,
}: {
  title: string;
  removeButton?: boolean;
  href: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-primary font-bold text-xl md:text-[35px] lg:text-[40px]">
        {title}
      </h2>
      {!removeButton && (
        <Link
          href={href}
          className="flex items-center gap-5 text-xs font-medium uppercase text-primary lg:text-xl"
        >
          Lihat Lainnya
          <MoveRight className="hidden md:inline" />
        </Link>
      )}
    </div>
  );
};

export default ContentTitle;
