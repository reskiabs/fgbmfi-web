import Image from "next/image";

const ActivityGallery = () => {
  return (
    <div className="relative size-[165px] rounded-[10px] overflow-hidden lg:w-[550px] lg:h-[309px] lg:rounded-[20px]">
      <Image
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Event"
        fill
        className="object-center"
      />
    </div>
  );
};

export default ActivityGallery;
