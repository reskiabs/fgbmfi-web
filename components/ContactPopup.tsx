"use client";

import useContactUs, { ContactItem } from "@/hooks/useContactUs";
import { Mail, MapPin, Phone, X } from "lucide-react";
import LoaderContent from "./LoaderContent";
import SomethingWentWrong from "./SomethingWentWrong";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup = ({ onClose }: ContactPopupProps) => {
  const { contacts, loading, error } = useContactUs();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  const renderContactItem = (item: ContactItem) => {
    switch (item.type) {
      case 0:
        return (
          <div key={item.id} className="flex items-center gap-2.5 md:gap-4">
            <Phone className="text-primary min-h-5 min-w-5 md:min-w-[30px] md:min-h-[30px]" />
            <a href={item.link} className="text-xs font-medium md:text-xl">
              {item.label}
            </a>
          </div>
        );
      case 1:
        return (
          <div key={item.id} className="flex items-center gap-2.5 md:gap-4">
            <Mail className="text-primary min-h-5 min-w-5 md:min-w-[30px] md:min-h-[30px]" />
            <a
              href={`mailto:${item.label}`}
              className="text-xs font-medium md:text-xl"
            >
              {item.label}
            </a>
          </div>
        );
      case 2:
        return (
          <div key={item.id} className="flex items-start gap-2.5 md:gap-4">
            <MapPin className="text-primary min-h-5 min-w-5 md:min-w-[30px] md:min-h-[30px]" />
            <span className="text-xs font-medium md:text-xl">{item.label}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="bg-white rounded-2xl md:rounded-[20px] p-5 md:p-10 w-[90%] md:w-[600px] relative">
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
          {contacts.map(renderContactItem)}

          <button
            onClick={() =>
              window.open(
                contacts.find((c) => c.type === 2)?.link || "#",
                "_blank"
              )
            }
            className="w-full h-[32px] md:h-[40px] bg-primary rounded-full text-white text-[12px] md:text-[16px] font-medium text-center"
          >
            Direction Google Maps
          </button>
        </div>

        {/* <div className="flex gap-[15px] md:gap-[30px] mt-4 md:mt-7 justify-center">
          {[
            { src: Instagram, link: "https://instagram.com/fgbmfi_indonesia" },
            { src: TikTok, link: "#" },
            { src: Twitter, link: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative size-[30px] rounded-full border border-primary flex items-center justify-center md:size-[45px] md:size-[60px] hover:bg-primary/10"
            >
              <Image
                src={social.src}
                alt="social icon"
                className="md:size-[18px] md:size-[30px]"
              />
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ContactPopup;
