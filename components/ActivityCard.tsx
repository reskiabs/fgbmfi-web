import Image from "next/image";
import Link from "next/link";

const ActivityCard = () => {
  return (
    <Link href="/activities/147">
      <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden lg:w-[550px] lg:h-[309px] lg:rounded-[20px]">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event"
          fill
          className="object-center"
        />
      </div>
      <div className="mt-2.5 lg:mt-5 space-y-0.5 lg:space-y-2.5">
        <h2 className="font-bold text-[15px] lg:text-xl">
          Judul Liputan Kegiatan Acara FGBMFI 1
        </h2>
        <p className="font-medium text-[10px] text-gray-400 lg:text-[15px]">
          12 April 2025
        </p>
      </div>
    </Link>
  );
};

export default ActivityCard;
