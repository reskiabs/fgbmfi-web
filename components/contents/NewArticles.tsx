import ArticleCard from "../ArticleCard";
import ContentTitle from "../ContentTitle";
import Container from "./Container";

const NewArticles = () => {
  return (
    <Container>
      <section className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Artikel Terbaru" href="/articles" />
        </div>
        <div className="grid content-center grid-cols-2 gap-3 md:grid-cols-3 md:gap-9 lg:gap-11">
          <ArticleCard />
          <ArticleCard />
          <div className="hidden md:flex">
            <ArticleCard />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NewArticles;
