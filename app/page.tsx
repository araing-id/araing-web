import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import PillarsSection from "@/components/PillarsSection";
import DivisionsSection from "@/components/DivisionsSection";
import TeamSection from "@/components/TeamSection";
import RoadmapSection from "@/components/RoadmapSection";
import ContactBlock from "@/components/ContactBlock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <VisionMissionSection />
        <PillarsSection />
        <DivisionsSection />
        <TeamSection />
        <RoadmapSection />
        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}
