"use client";

import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import Pagination from "@/components/Pagination";
import useArticles from "@/hooks/useArticles";
import { useState } from "react";

const Articles = () => {
  const { articles, loading, error } = useArticles();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil((articles?.length || 0) / itemsPerPage);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          <>
            <div className="grid gap-2.5 grid-cols-2 md:grid-cols-3 md:gap-7 lg:grid-cols-3 lg:gap-11 content-center mb-[30px]">
              {paginatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="flex justify-center lg:justify-end">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </>
        )}
      </section>
    </Container>
  );
};

export default Articles;
