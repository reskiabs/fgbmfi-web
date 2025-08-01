"use client";

import useArticles from "@/hooks/useArticles";
import ArticleCard from "../ArticleCard";
import ContentTitle from "../ContentTitle";
import Container from "./Container";

const NewArticles = () => {
  const { articles, loading, error } = useArticles();

  const latestArticles = articles.slice(0, 3);

  return (
    <Container>
      <section className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Artikel Terbaru" href="/articles" />
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid content-center grid-cols-2 gap-3 md:grid-cols-3 md:gap-9 lg:gap-11">
            {latestArticles.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}

            {latestArticles[2] && (
              <div className="hidden md:flex">
                <ArticleCard article={latestArticles[2]} />
              </div>
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default NewArticles;
