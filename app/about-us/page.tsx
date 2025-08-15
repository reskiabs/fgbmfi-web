"use client";

import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import FaqAccordion from "@/components/FaqAccordion";
import LoaderContent from "@/components/LoaderContent";
import SomethingWentWrong from "@/components/SomethingWentWrong";
import useAboutUs from "@/hooks/useAboutUs";

const AboutUsPage = () => {
  const { aboutItems, loading, error } = useAboutUs();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <Container>
      <section className="mb-8 lg:mb-24">
        <div className="mb-2.5 lg:mb-10">
          <ContentTitle title="Tentang Kami" removeButton />
        </div>

        {aboutItems && <FaqAccordion aboutUsItems={aboutItems} />}
      </section>
    </Container>
  );
};

export default AboutUsPage;
