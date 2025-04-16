import Hero from "@/components/hero"
import ServiceSection from "@/components/service-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialSection from "@/components/testimonial-section"
import BookingPreview from "@/components/booking-preview"
import FeaturedTours from "@/components/featured-tours"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServiceSection />
      <HowItWorks />
      <FeaturedTours />
      <TestimonialSection />
      <BookingPreview />
    </div>
  )
}
