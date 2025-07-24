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
      <div className="bg-white rounded-2xl md:rounded-[20px] p-5 md:p-10 w-[90%] md:w-[600px] md:h-[546px] relative">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-4 right-4 md:top-6 md:right-6 hover:text-black"
        >
          <X className="size-5 md:size-[25px]" />
        </button>

        <h2 className="mb-4 md:mb-6 text-xl md:text-[40px] font-bold text-center text-primary">
          Hubungi Kami
        </h2>

        <div className="space-y-4 md:space-y-9">
          <div className="flex items-center gap-2.5 md:gap-4">
            <Phone className="text-primary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              +62 21 42882988
            </span>
          </div>

          <div className="flex items-center gap-2.5 md:gap-4">
            <Mail className="text-primary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              kontak.fgbmfi@gmail.com
            </span>
          </div>

          <div className="flex items-start gap-2.5 md:gap-4">
            <MapPin className="text-primary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              Graha Cempaka Mas,
              <br />
              Jl. Letjen Suprapto Blok E/11, RW.8, Sumur Batu,
              <br />
              Kec. Kemayoran, Jakarta Pusat, DKI Jakarta 10640
            </span>
          </div>

          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/4fCszdCJcPYPNxdU7", "_blank")
            }
            className="w-full h-[32px] md:h-[40px] bg-primary rounded-full text-white text-[12px] md:text-[16px] font-medium text-center"
          >
            Direction Google Maps
          </button>
        </div>
        <div className="flex gap-[15px] md:gap-[30px] mt-4 md:mt-7 justify-center">
          <a
            href="https://instagram.com/fgbmfi_indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="relative size-[30px] rounded-full border border-primary flex items-center justify-center  md:size-[45px] md:size-[60px] hover:bg-primary/10"
          >
            <Image
              src={Instagram}
              alt="Instagram"
              className="md:size-[18px] md:size-[30px]"
            />
          </a>

          <div className="relative size-[30px] rounded-full border border-primary flex items-center justify-center  md:size-[45px] md:size-[60px] hover:bg-primary/10 hover:cursor-pointer">
            <Image
              src={TikTok}
              alt="Instagram"
              className="md:size-[18px] md:size-[30px]"
            />
          </div>
          <div className="relative size-[30px] rounded-full border border-primary flex items-center justify-center  md:size-[45px] md:size-[60px] hover:bg-primary/10 hover:cursor-pointer">
            <Image
              src={Twitter}
              alt="Instagram"
              className="md:size-[18px] md:size-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
