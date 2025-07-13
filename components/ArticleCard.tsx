import Image from "next/image";
import Link from "next/link";

const ArticleCard = () => {
  return (
    <Link
      href="/articles/147"
      className="relative w-[165px] h-[248px] rounded-[15px] overflow-hidden lg:w-[350px] lg:h-[525px] lg:rounded-[20px]"
    >
      <Image
        src="https://images.unsplash.com/photo-1549551986-baf21f73d351?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    </Link>
  );
};

export default ArticleCard;
