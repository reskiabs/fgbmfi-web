"use client";

import Instagram from "@/public/icons/instagram.svg";
import TikTok from "@/public/icons/tik-tok.svg";
import Twitter from "@/public/icons/twitter.svg";
import { Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup = ({ onClose }: ContactPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-60">
      <div className="bg-white rounded-2xl lg:rounded-[20px] p-5 lg:p-10 w-[90%] lg:w-[600px] lg:h-[546px] relative">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-4 right-4 lg:top-6 lg:right-6 hover:text-black"
        >
          <X className="size-5 lg:size-[25px]" />
        </button>

        <h2 className="mb-4 lg:mb-6 text-xl lg:text-[40px] font-bold text-center text-primary">
          Hubungi Kami
        </h2>

        <div className="space-y-4 lg:space-y-9">
          <div className="flex items-center gap-2.5 lg:gap-4">
            <Phone className="text-primary size-5 lg:size-[30px]" />
            <span className="text-xs font-medium lg:text-xl">
              +62 21 42882988
            </span>
          </div>

          <div className="flex items-center gap-2.5 lg:gap-4">
            <Mail className="text-primary size-5 lg:size-[30px]" />
            <span className="text-xs font-medium lg:text-xl">
              kontak.fgbmfi@gmail.com
            </span>
          </div>

          <div className="flex items-start gap-2.5 lg:gap-4">
            <MapPin className="text-primary size-5 lg:size-[30px]" />
            <span className="text-xs font-medium lg:text-xl">
              Graha Cempaka Mas,
              <br />
              Jl. Letjen Suprapto Blok E/11, RW.8, Sumur Batu,
              <br />
              Kec. Kemayoran, Jakarta Pusat, DKI Jakarta 10640
            </span>
          </div>

          <button className="w-full h-[32px] lg:h-[40px] bg-primary rounded-full text-white text-[12px] lg:text-[16px] font-medium text-center">
            Direction Google Maps
          </button>
        </div>
        <div className="flex gap-[15px] lg:gap-[30px] mt-4 lg:mt-7 justify-center">
          <div className="relative size-[30px] rounded-full border border-primary flex items-center justify-center  md:size-[45px] lg:size-[60px]">
            <Image
              src={Instagram}
              alt="Instagram"
              className="md:size-[18px] lg:size-[30px]"
            />
          </div>
          <div className="relative size-[30px] rounded-full border border-primary flex items-center justify-center  md:size-[45px] lg:size-[60px]">
            <Image
              src={TikTok}
              alt="Instagram"
              className="md:size-[18px] lg:size-[30px]"
            />
          </div>
          <div className="relative size-[30px] rounded-full border border-primary flex items-center justify-center  md:size-[45px] lg:size-[60px]">
            <Image
              src={Twitter}
              alt="Instagram"
              className="md:size-[18px] lg:size-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
