"use client";

import ActivityCard from "@/components/ActivityCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import OutlineButton from "@/components/OutlineButton";
import Pagination from "@/components/Pagination";
import useActivities from "@/hooks/useActivities";
import { useState } from "react";

const Activities = () => {
  const { activities, loading, error } = useActivities();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil((activities?.length || 0) / itemsPerPage);
  const paginatedActivities = activities?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Container>
      <section className="mb-12">
        <div className="mb-2.5 md:mb-10 lg:flex lg:flex-row items-center justify-between">
          <ContentTitle title="Liputan Kegiatan" removeButton href="/" />
          <div className="items-center hidden gap-5 lg:flex">
            <OutlineButton title="Monthly" />
          </div>
        </div>
        <div className="grid gap-2.5 grid-cols-1 md:gap-7 md:grid-cols-2 lg:gap-11 content-center mb-[30px]">
          {paginatedActivities?.map((activity) => {
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
        <div className="flex justify-center lg:justify-end">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </Container>
  );
};

export default Activities;
