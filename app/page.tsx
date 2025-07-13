import AboutUs from "@/components/contents/AboutUs";
import ActivityCoverage from "@/components/contents/ActivityCoverage";
import HeroSection from "@/components/contents/HeroSection";
import NewArticles from "@/components/contents/NewArticles";
import OrganizationStructure from "@/components/contents/OrganizationStructure";
import ReviewList from "@/components/contents/ReviewList";

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
