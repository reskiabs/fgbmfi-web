import Container from "@/components/contents/Container";
import ContentTitle from "@/components/ContentTitle";
import FaqAccordion from "@/components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | About Us",
  description: "Full Gospel Business Men’s International - Indonesia",
};

const AboutUsPage = () => {
  return (
    <Container>
      <section className="mb-8 lg:mb-24">
        <div className="mb-2.5 lg:mb-10">
          <ContentTitle title="Tentang Kami" removeButton />
        </div>
        <div>
          <FaqAccordion />
        </div>
      </section>
    </Container>
  );
};

export default AboutUsPage;
