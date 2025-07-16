import ActivityGallery from "@/components/ActivityGallery";
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
      <DetailHeader
        page="Liputan Kegiatan"
        title="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
        date="12 Apr 2025"
      />
      <div
        className="relative w-[340px] h-[170px] rounded-[15px] overflow-hidden
                md:w-[920px] md:h-[424px] 
                lg:w-[1140px] lg:h-[525px] md:rounded-[20px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Event"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-5 md:mt-8">
        <p className="text-xs font-normal text-justify md:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32.
        </p>
      </div>

      <div className="grid gap-2.5 grid-cols-2 md:gap-7 lg:gap-[40px] mt-5 mb-[50px] lg:mt-[30px] md:mt-[80px] lg:mb-[100px]">
        <ActivityGallery />
        <ActivityGallery />
        <ActivityGallery />
        <ActivityGallery />
        <ActivityGallery />
        <ActivityGallery />
        <ActivityGallery />
        <ActivityGallery />
      </div>
    </Container>
  );
};

export default ActivityDetailPage;
