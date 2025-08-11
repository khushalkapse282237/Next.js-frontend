import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import StickyBar from "@/components/StickyBar";
import InfiniteMoving from "@/components/InfiniteMoving";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyBar />
      <InfiniteMoving />
      <UpcomingWebinars />
    </main>
  );
}
