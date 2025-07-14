import Instagram from "@/public/icons/instagram.svg";
import TikTok from "@/public/icons/tik-tok.svg";
import Twitter from "@/public/icons/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-primary to-primary-dark w-full h-[124px] flex flex-col justify-center items-center md:flex-row md:justify-between md:px-[40px] lg:px-[200px] md:h-[162px] lg:h-[192px]">
        <div className="mb-[10px] text-center -space-y-5 md:text-left md:-space-y-3">
          <h1 className="text-xl font-bold text-white md:text-[25px] lg:text-[40px]">
            FGBMFI Indonesia
          </h1>
           
          <p className="text-sm font-normal text-white md:text-[16px] lg:text-[20px]">
            Full Gospel Business Men’s Fellowship International
          </p>
        </div>
        <div className="flex gap-[10px]">
          <div className="relative size-[30px] rounded-full bg-secondary flex items-center justify-center  md:size-[45px] lg:size-[60px]">
            <Image
              src={Instagram}
              alt="Instagram"
              className="md:size-[18px] lg:size-[30px]"
            />
          </div>
          <div className="relative size-[30px] rounded-full bg-secondary flex items-center justify-center  md:size-[45px] lg:size-[60px]">
            <Image
              src={TikTok}
              alt="Instagram"
              className="md:size-[18px] lg:size-[30px]"
            />
          </div>
          <div className="relative size-[30px] rounded-full bg-secondary flex items-center justify-center  md:size-[45px] lg:size-[60px]">
            <Image
              src={Twitter}
              alt="Instagram"
              className="md:size-[18px] lg:size-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b  gap-2 from-secondary to-teritary w-full h-[32px] flex flex-col justify-center items-center md:items-start md:px-[40px] lg:px-[200px] md:h-[42px] lg:h-[60px]">
        <p className="text-[10px] text-primary font-medium md:text-[12px] lg:text-[15px]">
          © 2025, All right reserved, FGBMFI Indonesia
        </p>
      </div>
    </div>
  );
};

export default Footer;
