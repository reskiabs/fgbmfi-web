import ActivityCard from "../ActivityCard";
import ContentTitle from "../ContentTitle";
import Container from "./Container";

const ActivityCoverage = () => {
  return (
    <Container>
      <section className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Liputan Kegiatan" href="/activities" />
        </div>
        <div className="grid grid-cols-1 md:gap-7 lg:gap-11 md:grid-cols-2 space-y-2.5">
          <ActivityCard />
          <ActivityCard />
        </div>
      </section>
    </Container>
  );
};

export default ActivityCoverage;
