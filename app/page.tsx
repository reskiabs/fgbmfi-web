"use client";

import LoaderContent from "@/components/LoaderContent";
import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/components/contents/AboutUs"), {
  loading: () => <LoaderContent />,
});
const ActivityCoverage = dynamic(
  () => import("@/components/contents/ActivityCoverage"),
  {
    loading: () => <LoaderContent />,
  }
);

const HeroSection = dynamic(() => import("@/components/contents/HeroSection"), {
  loading: () => <LoaderContent />,
});
const NewArticles = dynamic(() => import("@/components/contents/NewArticles"), {
  loading: () => <LoaderContent />,
});
const OrganizationStructure = dynamic(
  () => import("@/components/contents/OrganizationStructure"),
  {
    loading: () => <LoaderContent />,
  }
);
const ReviewList = dynamic(() => import("@/components/contents/ReviewList"), {
  loading: () => <LoaderContent />,
});

export default function Home() {
  return (
    <main className="pt-[30px] md:pt-[40px] lg:pt-[100px]">
      <HeroSection />
      <AboutUs />
      <ActivityCoverage />
      <NewArticles />
      <ReviewList />
      <OrganizationStructure />
    </main>
  );
}
