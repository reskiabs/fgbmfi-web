import Image from "next/image";

const ImageCarousel = () => {
  return (
    <div>
      <div className="overflow-hidden rounded-xl">
        <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden lg:w-[1140px] lg:h-[525px] lg:rounded-[20px]">
          <Image
            src="/images/Banner.png"
            alt="Event"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-2.5 space-x-2 lg:space-x-[20px] lg:mt-5 ">
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-teal-700 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
        <div className="bg-gray-300 rounded-full size-1.5 lg:size-4" />
      </div>
    </div>
  );
};

export default ImageCarousel;
