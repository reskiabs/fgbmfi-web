"use client";

import useArticleDetail from "@/hooks/useArticleDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import ArticleCard from "../ArticleCard";
import Container from "../contents/Container";
import ContentTitle from "../ContentTitle";
import DetailHeader from "../DetailHeader";
import LoaderContent from "../LoaderContent";
import SomethingWentWrong from "../SomethingWentWrong";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const { article, loading, error } = useArticleDetail(slug as string);

  if (loading) return <LoaderContent />;
  if (error || !article) return <SomethingWentWrong />;

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

        <div className="relative w-[340px] md:w-[920px] lg:w-[1140px] rounded-[15px] md:rounded-[20px] overflow-hidden">
          <Image
            src={article.full_image_url}
            alt={article.title}
            width={1140}
            height={0}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-5 md:mt-11">
          <div
            className="text-sm font-normal text-justify md:text-xl"
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
