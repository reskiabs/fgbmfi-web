import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/components/contents/AboutUs"), {
  loading: () => <p>Loading...</p>,
});
const ActivityCoverage = dynamic(
  () => import("@/components/contents/ActivityCoverage"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const HeroSection = dynamic(() => import("@/components/contents/HeroSection"), {
  loading: () => <p>Loading...</p>,
});
const NewArticles = dynamic(() => import("@/components/contents/NewArticles"), {
  loading: () => <p>Loading...</p>,
});
const OrganizationStructure = dynamic(
  () => import("@/components/contents/OrganizationStructure"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const ReviewList = dynamic(() => import("@/components/contents/ReviewList"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <ActivityCoverage />
      <NewArticles />
      <ReviewList />
      <OrganizationStructure />
    </main>
  );
}
