import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import ProblemSection from "@/components/landing/ProblemSection";
import InteractiveQuiz from "@/components/landing/InteractiveQuiz";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import WhyWeStarted from "@/components/landing/WhyWeStarted";
import LiveSyncDemo from "@/components/landing/LiveSyncDemo";
import StorySection from "@/components/landing/StorySection";
import DiseaseCommunities from "@/components/landing/DiseaseCommunities";
import SecurityMission from "@/components/landing/SecurityMission";
import Download from "@/components/landing/Download";
import ImpactAnalytics from "@/components/landing/ImpactAnalytics";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import PartnerForm from "@/components/landing/PartnerForm";
import SmoothScroll from "@/components/providers/SmoothScroll";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <SmoothScroll>
        <Navbar />
        <main className="pb-28">
          <Hero />
          <StatsBar />
          <ProblemSection />
          <InteractiveQuiz />
          <HowItWorks />
          <Features />
          <WhyWeStarted />
          <LiveSyncDemo />
          <StorySection />
          <DiseaseCommunities />
          <SecurityMission />
          <Download />
          <ImpactAnalytics />
          <Testimonials />
          <PartnerForm />
          <FAQ />
        </main>
        <Footer />
      </SmoothScroll>
    </SplashScreen>
  );
}

