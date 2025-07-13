import ComingSoon from "@/components/ComingSoon";
import Container from "@/components/contents/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Article Detail",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ArticleDetailPage = () => {
  return (
    <Container>
      <ComingSoon />
    </Container>
  );
};

export default ArticleDetailPage;
