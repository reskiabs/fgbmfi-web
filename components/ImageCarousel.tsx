import Image from "next/image";

const ImageCarousel = () => {
  return (
    <div>
      <div className="overflow-hidden rounded-xl">
        <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden lg:w-[1140px] lg:h-[525px] lg:rounded-[20px]">
          <Image
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
