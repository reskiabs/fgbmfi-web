import Image from "next/image";

interface ActivityGalleryProps {
  src: string;
  alt: string;
}

const ActivityGallery = ({ src, alt }: ActivityGalleryProps) => {
  return (
    <div className="relative size-[165px] rounded-[10px] overflow-hidden w-[450px] h-[253px] lg:w-[550px] lg:h-[309px] md:rounded-[20px]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default ActivityGallery;
