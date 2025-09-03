"use client";

import ActivityCard from "@/components/ActivityCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import Pagination from "@/components/Pagination";
import useActivities from "@/hooks/useActivities";
import { useState } from "react";
import FilterDropdown from "../FilterDropdown";
import LoaderContent from "../LoaderContent";
import SomethingWentWrong from "../SomethingWentWrong";

type FilterType =
  | "ALL"
  | "THIS_WEEK"
  | "THIS_MONTH"
  | "LAST_MONTH"
  | "THIS_YEAR";

const Activities = () => {
  const { activities, loading, error } = useActivities();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<FilterType>("ALL");

  const itemsPerPage = 6;

  const filteredActivities = activities?.filter((activity) => {
    const activityDate = new Date(activity.created_at);
    const now = new Date();

    switch (filter) {
      case "THIS_WEEK": {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        return activityDate >= startOfWeek && activityDate <= endOfWeek;
      }

      case "THIS_MONTH": {
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        startOfMonth.setHours(0, 0, 0, 0);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        endOfMonth.setHours(23, 59, 59, 999);

        return activityDate >= startOfMonth && activityDate <= endOfMonth;
      }

      case "LAST_MONTH": {
        const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
        const yearOfLastMonth =
          now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();

        const startOfLastMonth = new Date(yearOfLastMonth, lastMonth, 1);
        startOfLastMonth.setHours(0, 0, 0, 0);
        const endOfLastMonth = new Date(yearOfLastMonth, lastMonth + 1, 0);
        endOfLastMonth.setHours(23, 59, 59, 999);

        return (
          activityDate >= startOfLastMonth && activityDate <= endOfLastMonth
        );
      }

      case "THIS_YEAR": {
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        startOfYear.setHours(0, 0, 0, 0);
        const endOfYear = new Date(now.getFullYear(), 11, 31);
        endOfYear.setHours(23, 59, 59, 999);

        return activityDate >= startOfYear && activityDate <= endOfYear;
      }

      case "ALL":
      default:
        return true;
    }
  });

  const totalPages = Math.ceil(
    (filteredActivities?.length || 0) / itemsPerPage
  );
  const paginatedActivities = filteredActivities?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <Container>
      <section className="mb-12">
        <div className="mb-5 md:mb-10 flex items-center justify-between">
          <ContentTitle title="Liputan Kegiatan" removeButton href="/" />
          <FilterDropdown
            value={filter}
            onChange={(val) => {
              setFilter(val as FilterType);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 md:gap-7 md:grid-cols-2 lg:gap-11 content-center mb-[30px]">
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
