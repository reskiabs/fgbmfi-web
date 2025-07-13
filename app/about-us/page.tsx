import ComingSoon from "@/components/ComingSoon";
import Container from "@/components/contents/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | About Us",
  description: "Full Gospel Business Men’s International - Indonesia",
};

const AboutUsPage = () => {
  return (
    <Container>
      <ComingSoon />
    </Container>
  );
};

export default AboutUsPage;
