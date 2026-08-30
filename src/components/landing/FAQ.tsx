"use client";

import Accordion from "../ui/Accordion";
import AnimatedSection from "../ui/AnimatedSection";

export default function FAQ() {
  const faqItems = [
    {
      question: "Is RemoteWard difficult to set up?",
      answer: "Not at all. We designed it specifically to be as simple as possible. The text is large, the steps are clear, and if you ever get stuck, you can tap a single button to call our support team.",
    },
    {
      question: "Who can see my health information?",
      answer: "Only you and the specific family members or caregivers you invite. We use bank-level encryption (HIPAA compliant) to ensure your data is perfectly safe and private.",
    },
    {
      question: "What happens if I miss a reminder?",
      answer: "The app will gently remind you again after 15 minutes. If it's marked as a critical medication and is missed entirely, it can optionally notify your chosen emergency contact or family member.",
    },
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-ink-muted">Clear answers to help you get started.</p>
          </div>
        </AnimatedSection>

        {/* Animated Accordion List */}
        <AnimatedSection direction="up" delay={0.2}>
          <Accordion items={faqItems} />
        </AnimatedSection>

      </div>
    </section>
  );
}
