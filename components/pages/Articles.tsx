"use client";

import ActivityCard from "@/components/ActivityCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import Pagination from "@/components/Pagination";
import useArticles from "@/hooks/useArticles";
import { useState } from "react";
import LoaderContent from "../LoaderContent";
import SomethingWentWrong from "../SomethingWentWrong";

const Articles = () => {
  const { articles, loading, error } = useArticles();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil((articles?.length || 0) / itemsPerPage);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <Container>
      <section className="mb-12">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Artikel" removeButton href="/" />
        </div>
        <>
          <div className="grid gap-6 grid-cols-1 md:gap-7 md:grid-cols-2 lg:gap-11 content-center mb-[30px]">
            {paginatedArticles.map((article) => {
              const imageSrc = article.full_image_url || "";
              const date = article.created_at || "";

              return (
                <ActivityCard
                  key={article.id}
                  src={imageSrc}
                  title={article.title}
                  date={date}
                  href={`/articles/${article.slug}`} // sesuaikan dengan slug atau id
                />
              );
            })}
          </div>

          <div className="flex justify-center lg:justify-end">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      </section>
    </Container>
  );
};

export default Articles;
