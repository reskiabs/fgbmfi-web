import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import Pagination from "@/components/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Articles",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ArticlesPage = () => {
  return (
    <Container>
      <section className="mb-12">
        <div className="mb-2.5 lg:mb-10">
          <ContentTitle title="Artikel" removeButton href="/" />
        </div>
        <div className="grid gap-2.5 grid-cols-2 lg:grid-cols-3 lg:gap-11 content-center mb-[30px]">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className="flex justify-center lg:justify-end">
          <Pagination />
        </div>
      </section>
    </Container>
  );
};

export default ArticlesPage;
