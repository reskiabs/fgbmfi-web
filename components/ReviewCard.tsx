import Image from "next/image";
import UserCard from "./UserCard";

const ReviewCard = () => {
  return (
    <div>
      <Image src="/icons/quote.svg" alt="Quote" width={22} height={18} />
      <p className="mt-4 mb-5">
        <em>
          Bisnis bukan sekadar keuntungan, tapi juga panggilan. Jadilah bagian
          dari generasi pria yang membawa perubahan. Yuk, jadi bagian dari
          FGBMFI Indonesia dan temukan tujuan ilahi dalam pekerjaanmu!
        </em>
      </p>
      <UserCard />
    </div>
  );
};

export default ReviewCard;
