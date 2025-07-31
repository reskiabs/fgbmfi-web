"use client";

import useArticleDetail from "@/hooks/useArticleDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import ArticleCard from "../ArticleCard";
import Container from "../contents/Container";
import ContentTitle from "../ContentTitle";
import DetailHeader from "../DetailHeader";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  console.log("🔍 > ArticleDetailPage > slug:", slug);
  const { article, loading, error } = useArticleDetail(slug as string);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error || !article)
    return <p className="text-center py-10">Error: {error || "Not found"}</p>;

  return (
    <>
      <Container>
        <DetailHeader
          href="/articles"
          page="Artikel"
          title={article.title}
          date={new Date(article.created_at).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        />

        <div className="relative w-[340px] h-[170px] rounded-[15px] overflow-hidden md:w-[920px] md:h-[424px] lg:w-[1140px] lg:h-[525px] md:rounded-[20px]">
          <Image
            src={article.full_image_url}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-5 md:mt-8">
          <div
            className="text-xs font-normal text-justify md:text-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </Container>

      {article.recommendations.length > 0 && (
        <section className="py-[50px] px-[30px] bg-gradient-to-b from-secondary to-tertiary mt-[50px] lg:mt-[100px] lg:px-[150px] lg:py-[100px]">
          <div className="mb-2.5 md:mb-10 lg:max-w-[1165px] lg:mx-auto">
            <ContentTitle title="Artikel Lainnya" removeButton />
          </div>
          <div className="flex items-center lg:max-w-[1165px] lg:mx-auto">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-11">
              {article.recommendations.map((rec) => (
                <ArticleCard key={rec.id} article={rec} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticleDetailPage;
