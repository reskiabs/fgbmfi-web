"use client";

import ActivityGallery from "@/components/ActivityGallery";
import Container from "@/components/contents/Container";
import DetailHeader from "@/components/DetailHeader";
import useActivityDetail from "@/hooks/useActivityDetail";
import Image from "next/image";
import { useParams } from "next/navigation";

const ActivityDetailPage = () => {
  const params = useParams();
  const { id } = params;

  const { activity, loading, error } = useActivityDetail(id as string);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error || !activity)
    return (
      <p className="text-center py-10">
        Error: {error || "Activity not found"}
      </p>
    );

  let imageNames: string[] = [];
  try {
    imageNames = JSON.parse(activity.image_names);
  } catch (e) {
    console.warn("Invalid image_names JSON:", activity.image_names, e);
  }

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

      {imageNames.length > 0 && (
        <div className="relative w-[340px] h-[170px] md:w-[920px] md:h-[424px] lg:w-[1140px] lg:h-[525px] rounded-[15px] md:rounded-[20px] overflow-hidden">
          <Image
            src={activity.image_url + imageNames[0]}
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

      {imageNames.length > 1 && (
        <div className="grid gap-2.5 grid-cols-2 md:gap-7 lg:gap-[40px] mt-5 mb-[50px] lg:mt-[30px] md:mt-[80px] lg:mb-[100px]">
          {imageNames.slice(1).map((name, index) => (
            <ActivityGallery
              key={index}
              src={activity.image_url + name}
              alt={activity.title}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default ActivityDetailPage;
