"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "Sejarah FGBMFI Indonesia",
    answer:
      "Full Gospel Business Men’s Fellowship International (FGBMFI) adalah organisasi Kristen Internasional yang berfokus pada pengusaha dan profesional. FGBMFI didirikan pada tahun 1951 oleh Demos Shakarian di Amerika Serikat. Organisasi ini menyebar ke seluruh dunia, termasuk Indonesia.",
  },
  {
    question: "Definisi Nama FGBMFI?",
    answer: "Coming soon...",
  },
  {
    question: "Apa itu FGBMFI?",
    answer: "Coming soon...",
  },
  {
    question: "Moto FGBMFI Indonesia",
    answer: "Coming soon...",
  },
  {
    question: "Visi dan Misi FGBMFI Indonesia",
    answer: "Coming soon...",
  },
  {
    question: "Nilai-nilai FGBMFI Indonesia",
    answer: "Coming soon...",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2.5 lg:space-y-5">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border border-primary bg-white ${
              isOpen ? "shadow-md" : "border-transparent"
            }`}
          >
            <button
              className="flex items-center justify-between w-full px-[15px] py-[17px]  text-xs font-medium text-left text-gray-900 lg:text-xl lg:px-6 lg:py-7"
              onClick={() => toggleIndex(index)}
            >
              <span>{item.question}</span>
              {isOpen ? (
                <ChevronUp className="text-teal-600 size-5 lg:size-7 " />
              ) : (
                <ChevronDown className="text-teal-600 size-5 lg:size-7 " />
              )}
            </button>
            {isOpen && (
              <div className="px-[15px] border-gray-200 pb-[15px] text-xs font-normal text-gray-400 lg:text-xl lg:px-6 lg:pb-7">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
