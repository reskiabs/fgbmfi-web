"use client";

import ActivityGallery from "@/components/ActivityGallery";
import Container from "@/components/contents/Container";
import DetailHeader from "@/components/DetailHeader";
import useActivityDetail from "@/hooks/useActivityDetail";
import dayjs from "dayjs";
import "dayjs/locale/id";
import Image from "next/image";
import { useParams } from "next/navigation";
import LoaderContent from "../LoaderContent";
import SomethingWentWrong from "../SomethingWentWrong";
dayjs.locale("id");

const ActivityDetailPage = () => {
  const { slug } = useParams();

  const { activity, loading, error } = useActivityDetail(slug as string);

  if (loading) return <LoaderContent />;
  if (error || !activity) return <SomethingWentWrong />;

  return (
    <Container>
      <DetailHeader
        href="/activities"
        page="Liputan Kegiatan"
        title={activity.title}
        date={dayjs(activity.created_at).format("DD MMMM YYYY")}
      />

      {activity.full_images_url?.[0] && (
        <div className="relative w-full md:w-full lg:w-[1140px] rounded-[15px] md:rounded-[20px] overflow-hidden">
          <Image
            src={activity.full_images_url[0]}
            alt={activity.title}
            width={1140}
            height={0}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="mt-5 md:mt-11">
        <div
          className="text-sm font-normal text-justify md:text-xl"
          dangerouslySetInnerHTML={{ __html: activity.content }}
        />
      </div>

      {activity.full_images_url?.slice(1).map((url, index) => (
        <ActivityGallery key={index} src={url} alt={activity.title} />
      ))}
      <div className="mb-[100px]" />
    </Container>
  );
};

export default ActivityDetailPage;
