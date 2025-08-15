import useActivities from "@/hooks/useActivities";
import ActivityCard from "../ActivityCard";
import ContentTitle from "../ContentTitle";
import LoaderContent from "../LoaderContent";
import SomethingWentWrong from "../SomethingWentWrong";
import Container from "./Container";

const ActivityCoverage = () => {
  const { activities, loading, error } = useActivities();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <Container>
      <section className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <div className="mb-2.5 md:mb-10">
          <ContentTitle title="Liputan Kegiatan" href="/activities" />
        </div>

        <div className="grid grid-cols-1 md:gap-7 lg:gap-11 md:grid-cols-2 gap-y-7 md:space-y-0">
          {activities?.slice(0, 2).map((activity) => {
            const imageSrc = activity.full_images_url?.[0] || "";

            return (
              <ActivityCard
                key={activity.id}
                src={imageSrc}
                title={activity.title}
                date={activity.created_at}
                href={`/activities/${activity.slug}`}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default ActivityCoverage;
