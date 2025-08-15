import dayjs from "dayjs";
import "dayjs/locale/id";
import Image from "next/image";
import Link from "next/link";
dayjs.locale("id");

interface ActivityCardProps {
  src: string;
  title: string;
  date: string;
  href: string;
}

const ActivityCard = ({ src, title, date, href }: ActivityCardProps) => {
  return (
    <Link href={href}>
      <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden md:w-[450px] md:h-[272px] lg:w-[550px] lg:h-[309px] md:rounded-[20px]">
        <Image src={src} alt={title} fill className="object-center" />
      </div>
      <div className="mt-2.5 md:mt-5">
        <h2 className="font-bold text-[16px] md:text-2xl">{title}</h2>
        <p className="font-medium text-sm text-gray-400 md:text-lg md:mt-0.5">
          {dayjs(date).format("DD MMMM YYYY")}
        </p>
      </div>
    </Link>
  );
};

export default ActivityCard;
