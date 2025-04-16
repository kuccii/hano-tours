"use client"

import { AnimatedElement } from "./AnimatedElement"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    image: "https://i.pravatar.cc/150?img=1",
    content: "The gorilla trekking experience was incredible! Our guide was knowledgeable and the whole trip was perfectly organized.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    image: "https://i.pravatar.cc/150?img=2",
    content: "Exceptional corporate transport service. Professional drivers and luxurious vehicles made our business trip seamless.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Newlywed",
    image: "https://i.pravatar.cc/150?img=3",
    content: "The wedding car service was perfect! The vintage car added such elegance to our special day. Highly recommended!",
    rating: 5
  }
]

export default function TestimonialSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-primary/5 to-background/50">
        <div className="absolute inset-0 lines-pattern opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_100%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float mix-blend-soft-light" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed mix-blend-soft-light" />
      <div className="absolute top-3/4 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-2xl animate-float mix-blend-soft-light" />

      <div className="container relative mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/90 mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
            Read about the experiences of travelers who have explored Rwanda with us.
            Their stories inspire us to maintain our high standards of service.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={testimonial.name}
              animationType="cardReveal"
              delay={index * 0.1}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-[2px] bg-white/40 hover:-translate-y-2 transition-all duration-300 hover:bg-white/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 via-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <Quote className="w-10 h-10 text-accent/40 mb-4" />
                  
                  <p className="text-muted-foreground/80 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary/90 font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-8 right-0 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent/80" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animationType="fadeInUp" delay={0.4} className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/30 backdrop-blur-sm">
            <div className="px-6 py-2 rounded-full bg-accent/90 text-primary font-medium hover:bg-accent/80 transition-colors cursor-pointer">
              View All Reviews
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
