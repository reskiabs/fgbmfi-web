import { Article } from "@/hooks/useArticles";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const date = new Date(article.created_at).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="relative w-[165px] h-[248px] rounded-[15px] overflow-hidden md:w-[300px] md:h-[465px] lg:w-[350px] lg:h-[525px] lg:rounded-[20px]"
    >
      <Image
        src={article.full_image_url}
        alt={article.title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 z-20 pb-5 pl-3 text-white pr-7 lg:pl-6 lg:pb-10">
        <p className="text-[10px] font-medium mb-1.5 md:text-[15px] md:mb-2.5">
          {date}
        </p>
        <h3 className="text-[15px] font-bold mb-2.5 md:text-xl md:mb-5">
          {article.title}
        </h3>
        <p className="text-[10px] font-normal text-[#FFA325] md:text-[15px]">
          Baca Selengkapnya &gt;
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;
