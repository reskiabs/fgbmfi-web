import { ChevronDown } from "lucide-react";

const OutlineButton = ({ title }: { title: string }) => {
  return (
    <div className="w-[240px] h-[60px] pl-7 pr-6 border-2 border-primary rounded-full flex justify-between items-center hover:bg-tertiary hover:cursor-pointer">
      <p className="text-xl font-medium text-primary">{title}</p>
      <ChevronDown color="#1A817D" size={20} />
    </div>
  );
};

export default OutlineButton;
