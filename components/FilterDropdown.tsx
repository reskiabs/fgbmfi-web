"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const options = [
  { label: "All", value: "ALL" },
  { label: "This Week", value: "THIS_WEEK" },
  { label: "This Month", value: "THIS_MONTH" },
  { label: "Last Month", value: "LAST_MONTH" },
  { label: "This Year", value: "THIS_YEAR" },
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const FilterDropdown = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="relative min-w-[240px]">
      <div
        onClick={() => setOpen(!open)}
        className={clsx(
          "w-full px-8 py-4 border-2 rounded-full flex space-x-12 justify-between items-center hover:bg-tertiary cursor-pointer transition",
          value !== "ALL" ? " text-primary border-primary" : "border-primary"
        )}
      >
        <p className={clsx("text-xl font-medium text-primary")}>
          {selected?.label}
        </p>
        <ChevronDown size={25} color="#1A817D" />
      </div>

      {open && (
        <div className="absolute top-[75px] w-full rounded-lg border-2 border-primary bg-white shadow z-10 overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="px-4 py-2 text-md font-medium text-primary hover:bg-tertiary cursor-pointer"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
