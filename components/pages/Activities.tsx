"use client";

import ActivityCard from "@/components/ActivityCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import OutlineButton from "@/components/OutlineButton";
import Pagination from "@/components/Pagination";
import useActivities from "@/hooks/useActivities";

const Activities = () => {
  const { activities, loading, error } = useActivities();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Container>
      <section className="mb-12 ">
        <div className="mb-2.5 md:mb-10 lg:flex lg:flex-row items-center justify-between">
          <ContentTitle title="Liputan Kegiatan" removeButton href="/" />
          <div className="items-center hidden gap-5 lg:flex">
            <OutlineButton title="Monthly" />
          </div>
        </div>
        <div className="grid gap-2.5 grid-cols-1 md:gap-7 md:grid-cols-2 lg:gap-11 content-center mb-[30px]">
          {activities?.map((activity) => {
            let imageSrc = "";
            try {
              const imageNames = JSON.parse(activity.image_names) as string[];
              imageSrc = activity.image_url + imageNames[0];
            } catch (err) {
              console.warn(
                "Invalid image_names JSON:",
                activity.image_names,
                err
              );
            }

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
        <div className="flex justify-center lg:justify-end">
          <Pagination />
        </div>
      </section>
    </Container>
  );
};

export default Activities;
