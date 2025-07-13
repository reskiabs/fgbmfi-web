import ActivityCard from "../ActivityCard";
import ContentTitle from "../ContentTitle";
import Container from "./Container";

const ActivityCoverage = () => {
  return (
    <Container>
      <section className="mt-[50px] lg:mt-[100px]">
        <div className="mb-2.5">
          <ContentTitle title="Liputan Kegiatan" />
        </div>
        {/* <div className="grid grid-cols-1 bg-red-500 lg:grid-cols-2"> */}
        <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:justify-between">
          <ActivityCard />
          <ActivityCard />
        </div>
      </section>
    </Container>
  );
};

export default ActivityCoverage;
