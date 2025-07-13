import ArticleCard from "../ArticleCard";
import ContentTitle from "../ContentTitle";
import Container from "./Container";

const NewArticles = () => {
  return (
    <Container>
      <section className="mt-[50px] lg:mt-[100px]">
        <div className="mb-2.5">
          <ContentTitle title="Artikel Terbaru" />
        </div>
        <div className="grid content-center grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-11">
          <ArticleCard />
          <ArticleCard />
          <div className="hidden lg:flex">
            <ArticleCard />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NewArticles;
