import ActivityGallery from "@/components/ActivityGallery";
import ComingSoon from "@/components/ComingSoon";
import Container from "@/components/contents/Container";
import DetailHeader from "@/components/DetailHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FGBMFI | Activity Detail",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ActivityDetailPage = () => {
  return (
    <Container>
      <div className="hidden md:block lg:hidden">
        <ComingSoon />
      </div>
      <div className="md:hidden lg:block">
        <DetailHeader
          page="Liputan Kegiatan"
          title="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          date="12 Apr 2025"
        />
        <div className="overflow-hidden rounded-xl">
          <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden lg:w-[1140px] lg:h-[525px] lg:rounded-[20px]">
            <Image
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-5 lg:mt-8">
          <p className="text-xs font-normal text-justify lg:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </p>
        </div>

        <div className="grid gap-2.5 grid-cols-2  lg:gap-[40px] mt-5 mb-[50px] lg:mt-[30px] lg:mb-[100px]">
          <ActivityGallery />
          <ActivityGallery />
          <ActivityGallery />
          <ActivityGallery />
          <ActivityGallery />
          <ActivityGallery />
          <ActivityGallery />
          <ActivityGallery />
        </div>
      </div>
    </Container>
  );
};

export default ActivityDetailPage;
