import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import InteractiveQuiz from "@/components/landing/InteractiveQuiz";
import Features from "@/components/landing/Features";
import StorySection from "@/components/landing/StorySection";
import Download from "@/components/landing/Download";
import FAQ from "@/components/landing/FAQ";
import PartnerForm from "@/components/landing/PartnerForm";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pb-28">
        <Hero />
        <InteractiveQuiz />
        <Features />
        <StorySection />
        <Download />
        <PartnerForm />
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
