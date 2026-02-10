import Footer from "./_components/Footer";
import MediaContent from "./_components/MediaContent";
import LearnersExperience from "./_components/LearnersExperience";
import FaqSection from "./_components/FaqSection";
import Pricing from "./_components/Pricing";
import Awards from "./_components/Awards";
import LandingSection from "./_components/LandingSection";
import IntensiveUpgrades from "./_components/IntensiveUpgrades";
import AluminiSection from "./_components/AluminiSection";
import Reviews from "./_components/Reviews";
import GetInterviewReady from "./_components/GetInterviewReady";
import DoubtsClarrified from "./_components/DoubtsClarrified";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <LandingSection />
      <IntensiveUpgrades />
      <AluminiSection />
      <Awards />
      <Reviews />
      <GetInterviewReady />
      <DoubtsClarrified />
      <Pricing />
      <FaqSection />
      <LearnersExperience />
      <MediaContent />
      <Footer />
    </main>
  );
}
