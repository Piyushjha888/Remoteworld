import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import SmoothScroll from "@/components/providers/SmoothScroll";
import SplashScreen from "@/components/ui/SplashScreen";

// Lazy load below-the-fold components for optimal initial bundle size and performance
const ProblemSection = dynamic(() => import("@/components/landing/ProblemSection"));
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks"));
const Features = dynamic(() => import("@/components/landing/Features"));
const WhyWeStarted = dynamic(() => import("@/components/landing/WhyWeStarted"));
const StorySection = dynamic(() => import("@/components/landing/StorySection"));
const DiseaseCommunities = dynamic(() => import("@/components/landing/DiseaseCommunities"));
const Download = dynamic(() => import("@/components/landing/Download"));
const PartnerForm = dynamic(() => import("@/components/landing/PartnerForm"));
const FAQ = dynamic(() => import("@/components/landing/FAQ"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <SplashScreen>
      <SmoothScroll>
        <Navbar />
        <main className="pb-24 sm:pb-28">
          <Hero />
          <StatsBar />
          <ProblemSection />
          <HowItWorks />
          <Features />
          <WhyWeStarted />
          <StorySection />
          <DiseaseCommunities />
          <Download />
          <PartnerForm />
          <FAQ />
        </main>
        <Footer />
      </SmoothScroll>
    </SplashScreen>
  );
}

