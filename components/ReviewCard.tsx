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
    <div className="md:w-[750px] min-h-[250px] lg:w-[900px]">
      <Image src="/icons/quote.svg" alt="Quote" width={22} height={18} />
      <div
        className="my-5 font-normal line-clamp-6 text-[15px] md:text-xl md:font-medium lg:text-[22px] prose prose-sm md:prose-base lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: review.text }}
      />
      <UserCard name={review.name} role={review.role} image={review.image} />
    </div>
  );
};

export default ReviewCard;
