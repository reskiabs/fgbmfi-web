"use client";

import { AboutUsItem } from "@/types/about"; // pastikan file ini sudah ada
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FaqAccordionProps {
  aboutUsItems: AboutUsItem[];
}

export default function FaqAccordion({ aboutUsItems }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2.5 lg:space-y-5">
      {aboutUsItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`rounded-xl border border-primary bg-white ${
              isOpen ? "shadow-md" : "border-transparent"
            }`}
          >
            <button
              className="flex items-center justify-between w-full px-[15px] py-[17px] text-xs md:text-[14px] font-medium text-left text-gray-900 lg:text-xl lg:px-6 lg:py-7"
              onClick={() => toggleIndex(index)}
            >
              <span>{item.title}</span>
              {isOpen ? (
                <ChevronUp className="text-teal-600 size-5 lg:size-7 " />
              ) : (
                <ChevronDown className="text-teal-600 size-5 lg:size-7 " />
              )}
            </button>
            {isOpen && (
              <div className="px-[15px] border-gray-200 pb-[15px] lg:px-6 lg:pb-7">
                <div
                  className="text-xs font-normal text-gray-500 text-justify md:text-[14px] lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
