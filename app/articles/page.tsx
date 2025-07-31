import Articles from "@/components/pages/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Articles",
  description: "Full Gospel Business Men’s International - Indonesia",
};
const ArticlesPage = () => {
  return <Articles />;
};

export default ArticlesPage;
