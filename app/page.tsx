import Hero from "@/components/hero"
import ServiceSection from "@/components/service-section"
import { HowItWorks } from "@/components/how-it-works"
import FeaturedTours from "@/components/featured-tours"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServiceSection />
      <HowItWorks />
      <FeaturedTours />
      <TestimonialSection />
    </div>
  )
}
