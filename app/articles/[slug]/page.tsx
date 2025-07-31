import ArticleDetailPage from "@/components/pages/ArticleDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Article Detail",
  description: "Full Gospel Business Men’s International - Indonesia",
};
export default function ArticlePage() {
  return <ArticleDetailPage />;
}
