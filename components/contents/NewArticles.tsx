"use client";

import useArticles from "@/hooks/useArticles";
import ActivityCard from "../ActivityCard";
import ContentTitle from "../ContentTitle";
import LoaderContent from "../LoaderContent";
import SomethingWentWrong from "../SomethingWentWrong";
import Container from "./Container";

const NewArticles = () => {
  const { articles, loading, error } = useArticles();

  const latestArticles = articles.slice(0, 3);

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <Container>
      <section className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Artikel Terbaru" href="/articles" />
        </div>

        <div className="grid grid-cols-1 md:gap-7 lg:gap-11 md:grid-cols-2 gap-y-7 md:space-y-0">
          {latestArticles.slice(0, 2).map((article) => {
            const imageSrc = article.full_image_url || "";
            const date = article.created_at || article.created_at || "";

            return (
              <ActivityCard
                key={article.id}
                src={imageSrc}
                title={article.title}
                date={date}
                href={`/articles/${article.slug}`}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default NewArticles;
