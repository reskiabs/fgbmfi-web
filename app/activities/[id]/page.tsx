import ComingSoon from "@/components/ComingSoon";
import Container from "@/components/contents/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Activity Detail",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ActivityDetailPage = () => {
  return (
    <Container>
      <ComingSoon />
    </Container>
  );
};

export default ActivityDetailPage;
