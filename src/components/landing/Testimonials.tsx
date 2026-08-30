"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerParent, staggerChild } from "../ui/StaggerContainer";
import { useMobileCarousel, MobileCarouselDots } from "../ui/MobileCarousel";

export default function Testimonials() {
  const { scrollRef, activeIndex } = useMobileCarousel();

  const reviews = [
    {
      name: "Sarah K.",
      role: "Caregiver for her father",
      quote: "I no longer have to call Dad every morning to check if he took his meds. The notification circles give my sibling and me complete peace of mind.",
    },
    {
      name: "Rajesh M.",
      role: "SCD Patient",
      quote: "The interface is extremely large and clean. Logging my daily pain scores and water intake takes just a few seconds and updates my daughter automatically.",
    },
    {
      name: "Dr. Jenkins",
      role: "Clinic Partner",
      quote: "When patients share their monthly vital log PDFs, it makes our consultation time much more productive. The data is neat and reliable.",
    },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Real Stories
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
            Loved by patients. Trusted by families.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-ink-muted">
            Hear from families and clinical partners who use RemoteWard to coordinate daily routines.
          </p>
        </AnimatedSection>

        {/* Reviews — horizontal carousel on mobile, grid on md+ */}
        <motion.div
          ref={scrollRef}
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mobile-carousel md:grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {reviews.map((rev, idx) => {
            return (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -4 }}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-5 sm:mb-6 text-highlight-dark">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-ink-muted text-sm sm:text-base leading-relaxed italic mb-5 sm:mb-6">
                    &quot;{rev.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-surface-100 pt-4 sm:pt-6">
                  <div>
                    <h5 className="font-bold text-ink text-sm sm:text-base">{rev.name}</h5>
                    <p className="text-xs text-ink-muted mt-0.5">{rev.role}</p>
                  </div>
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-brand/10" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <MobileCarouselDots count={reviews.length} activeIndex={activeIndex} />
      </div>
    </section>
  );
}

