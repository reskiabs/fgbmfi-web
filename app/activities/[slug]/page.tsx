import ActivityDetailPage from "@/components/pages/ActivityDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGBMFI | Activity Detail",
  description: "Full Gospel Business Men’s International - Indonesia",
};

export default function ActivityPage() {
  return <ActivityDetailPage />;
}
