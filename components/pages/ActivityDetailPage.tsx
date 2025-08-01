"use client";

import ActivityGallery from "@/components/ActivityGallery";
import Container from "@/components/contents/Container";
import DetailHeader from "@/components/DetailHeader";
import useActivityDetail from "@/hooks/useActivityDetail";
import Image from "next/image";
import { useParams } from "next/navigation";

const ActivityDetailPage = () => {
  const { slug } = useParams();

  const { activity, loading, error } = useActivityDetail(slug as string);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error || !activity)
    return (
      <p className="text-center py-10">
        Error: {error || "Activity not found"}
      </p>
    );

  return (
    <Container>
      <DetailHeader
        href="/activities"
        page="Liputan Kegiatan"
        title={activity.title}
        date={new Date(activity.created_at).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      />

      {activity.full_images_url?.[0] && (
        <div className="relative w-[340px] h-[170px] md:w-[920px] md:h-[424px] lg:w-[1140px] lg:h-[525px] rounded-[15px] md:rounded-[20px] overflow-hidden">
          <Image
            src={activity.full_images_url[0]}
            alt={activity.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-5 md:mt-8">
        <div
          className="text-xs font-normal text-justify md:text-xl"
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
