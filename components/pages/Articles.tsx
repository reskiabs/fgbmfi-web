"use client";

import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import Pagination from "@/components/Pagination";
import useArticles from "@/hooks/useArticles";

const Articles = () => {
  const { articles, loading, error } = useArticles();

  return (
    <Container>
      <section className="mb-12">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Artikel" removeButton href="/" />
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid gap-2.5 grid-cols-2 md:grid-cols-3 md:gap-7 lg:grid-cols-3 lg:gap-11 content-center mb-[30px]">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        <div className="flex justify-center lg:justify-end">
          <Pagination />
        </div>
      </section>
    </Container>
  );
};

export default Articles;
