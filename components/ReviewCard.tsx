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
    <div className="lg:max-w-[900px]">
      <Image src="/icons/quote.svg" alt="Quote" width={22} height={18} />
      <p className="mt-4 mb-5">
        <em>{review.text}</em>
      </p>
      <UserCard name={review.name} role={review.role} image={review.image} />
    </div>
  );
};

export default ReviewCard;
