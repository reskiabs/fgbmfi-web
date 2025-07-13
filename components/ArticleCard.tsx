import Image from "next/image";

const ArticleCard = () => {
  return (
    <div className="relative w-[165px] h-[248px] rounded-[15px] overflow-hidden lg:w-[350px] lg:h-[525px] lg:rounded-[20px]">
      <Image
        src="/images/Banner.png"
        alt="Event"
        fill
        className="object-cover"
      />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-0 z-20 pb-5 pl-3 text-white pr-7 lg:pl-6 lg:pb-10">
        <p className="text-[10px] font-medium mb-1.5 lg:text-[15px] lg:mb-2.5">
          01 Apr 2025
        </p>
        <h3 className="text-[15px] font-bold mb-2.5 lg:text-xl lg:mb-5">
          Judul Artikel dengan <br className="hidden lg:block" />
          Dua Baris
        </h3>
        <p className="text-[10px] font-normal text-[#FFA325] lg:text-[15px]">
          Baca Selengkapnya &gt;
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
