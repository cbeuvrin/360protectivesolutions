import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { InstitutionalBacking } from "@/components/InstitutionalBacking";
import { LandscapeStats } from "@/components/LandscapeStats";
import { MissionStatement } from "@/components/MissionStatement";
import { Testimonials } from "@/components/Testimonials";
import { FeatureVideo } from "@/components/FeatureVideo";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <InstitutionalBacking />
      <LandscapeStats />
      <MissionStatement />
      <WhyChooseUs />
      <Testimonials />
      <FeatureVideo />
      <Footer />
    </main>
  );
}
