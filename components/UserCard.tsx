import Image from "next/image";

interface UserCardProps {
  name: string;
  role: string;
  image: string;
}

const UserCard = ({ name, role, image }: UserCardProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative overflow-hidden rounded-full size-11">
        <Image src={image} alt="User" fill className="object-cover" />
      </div>
      <div>
        <h1 className="font-bold text-[15px] text-neutral-900">{name}</h1>
        <p className="text-xs font-medium text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default UserCard;
