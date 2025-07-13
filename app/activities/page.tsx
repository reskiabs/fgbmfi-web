import ActivityCard from "@/components/ActivityCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import OutlineButton from "@/components/OutlineButton";
import Pagination from "@/components/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Activities",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ActivitiesPage = () => {
  return (
    <Container>
      <section className="mb-12">
        <div className="mb-2.5 lg:mb-10 lg:flex lg:flex-row items-center justify-between">
          <ContentTitle title="Liputan Kegiatan" removeButton />
          <div className="items-center hidden gap-5 lg:flex">
            <OutlineButton title="Nasional" />
            <OutlineButton title="Jenis Acara" />
          </div>
        </div>
        <div className="grid gap-2.5 grid-cols-1 lg:grid-cols-2 lg:gap-11 content-center mb-[30px]">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
        <div className="flex justify-center lg:justify-end">
          <Pagination />
        </div>
      </section>
    </Container>
  );
};

export default ActivitiesPage;
