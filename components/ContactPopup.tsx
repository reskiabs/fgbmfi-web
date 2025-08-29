"use client";

import useContactUs, { ContactItem } from "@/hooks/useContactUs";
import Instagram from "@/public/icons/instagram.svg";
import TikTok from "@/public/icons/tik-tok.svg";
import Twitter from "@/public/icons/twitter.svg";
import { Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import LoaderContent from "./LoaderContent";
import SomethingWentWrong from "./SomethingWentWrong";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup = ({ onClose }: ContactPopupProps) => {
  const { contacts, loading, error } = useContactUs();
  console.log("🔍 > ContactPopup > contacts:", contacts);

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  // Separate contact items by type
  const basicContacts = contacts.filter(
    (item) => item.type >= 0 && item.type <= 2
  );
  const socialMediaContacts = contacts.filter((item) => item.type >= 3);

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

  const getSocialMediaIcon = (link: string) => {
    const url = link.toLowerCase();
    if (url.includes("instagram")) {
      return Instagram;
    } else if (url.includes("tiktok") || url.includes("tik-tok")) {
      return TikTok;
    } else if (url.includes("twitter") || url.includes("x.com")) {
      return Twitter;
    }
    // Default fallback - you can add more social media platforms here
    return Instagram;
  };

  const getSocialMediaAlt = (link: string) => {
    const url = link.toLowerCase();
    if (url.includes("instagram")) {
      return "Instagram";
    } else if (url.includes("tiktok") || url.includes("tik-tok")) {
      return "TikTok";
    } else if (url.includes("twitter") || url.includes("x.com")) {
      return "Twitter";
    }
    return "Social Media";
  };

  const renderSocialMediaIcon = (item: ContactItem) => {
    const icon = getSocialMediaIcon(item.link);
    const altText = getSocialMediaAlt(item.link);
    console.log("🔍 > renderSocialMediaIcon > altText:", altText);

    return (
      <a
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative size-[30px] rounded-full border border-primary flex items-center justify-center md:size-[45px] lg:size-[60px] hover:bg-secondary/40 hover:bg-opacity-10 transition-colors"
      >
        <Image
          src={icon}
          alt={altText}
          className="md:size-[18px] lg:size-[30px]"
        />
      </a>
    );
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
          {basicContacts.map(renderContactItem)}

          <button
            onClick={() =>
              window.open(
                basicContacts.find((c) => c.type === 2)?.link || "#",
                "_blank"
              )
            }
            className="w-full h-[32px] md:h-[40px] bg-primary rounded-full text-white text-[12px] md:text-[16px] font-medium text-center hover:cursor-pointer hover:opacity-80 transition-colors"
          >
            Direction Google Maps
          </button>
        </div>

        {/* Render social media icons only if there are social media contacts */}
        {socialMediaContacts.length > 0 && (
          <div className="flex gap-[15px] lg:gap-[30px] mt-4 lg:mt-7 justify-center">
            {socialMediaContacts.map(renderSocialMediaIcon)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
