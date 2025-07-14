import Image from "next/image";
import UserCard from "./UserCard";

interface Review {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="md:w-[750px] lg:w-[900px]">
      <Image src="/icons/quote.svg" alt="Quote" width={22} height={18} />
      <p className="my-5 font-normal text-[15px] md:text-xl md:font-medium lg:text-[22px]">
        <em>{review.text}</em>
      </p>
      <UserCard name={review.name} role={review.role} image={review.image} />
    </div>
  );
};

export default ReviewCard;
