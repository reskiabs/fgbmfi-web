import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import DetailHeader from "@/components/DetailHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FGBMFI | Article Detail",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ArticleDetailPage = () => {
  return (
    <>
      <Container>
        <DetailHeader
          page="Artikel"
          title="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          date="12 Apr 2025"
        />
        <div className="relative h-[170px] w-[340px] rounded-[15px] overflow-hidden lg:w-[1140px] lg:h-[525px] lg:rounded-[20px]">
          <Image
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Event"
            fill
            className="object-cover"
          />
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
            <br />
            <br />
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from
            &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
            reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham.
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
          </p>
        </div>
      </Container>

      {/* Artikel Lainnya */}
      <section className="py-[50px] px-[30px] bg-gradient-to-b from-secondary to-tertiary mt-[50px] lg:mt-[100px] lg:px-[150px] lg:py-[100px] ">
        <div className="mb-2.5 lg:mb-10 lg:max-w-[1165px] lg:mx-auto">
          <ContentTitle title="Artikel Lainnya" removeButton />
        </div>
        <div className="flex items-center lg:max-w-[1165px] lg:mx-auto">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-11">
            <ArticleCard />
            <ArticleCard />
            <div className="hidden lg:flex">
              <ArticleCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetailPage;
