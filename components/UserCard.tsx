import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex  items-center gap-2.5">
      <div className="relative overflow-hidden rounded-full size-11">
        <Image
          src="/images/user.png"
          alt="User"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-[15px] text-neutral-900">
          SETIAWAN ATMADJA
        </h1>
        <p className="text-xs font-medium text-gray-400">Banker</p>
      </div>
    </div>
  );
};

export default UserCard;
