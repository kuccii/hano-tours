"use client"

import { AnimatedElement } from "./AnimatedElement"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "The gorilla trekking experience was absolutely incredible! Our guide was not only knowledgeable but also very attentive to safety and comfort. The whole trip was perfectly organized down to the smallest detail.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Exceptional corporate transport service that exceeded our expectations. The professional drivers and luxurious vehicles made our business delegation's trip seamless and comfortable. Their attention to punctuality was impressive.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Travel Photographer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "As a photographer, I was amazed by the unique locations and viewpoints they took us to. The guides understood exactly what I was looking for and made sure I got the perfect shots. A truly memorable experience!",
    rating: 5
  }
]

export default function TestimonialSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/10 via-transparent to-gray-200/10">
        <div className="absolute inset-0 lines-pattern opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float mix-blend-overlay" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed mix-blend-overlay" />
      <div className="absolute top-3/4 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-2xl animate-float mix-blend-overlay" />

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
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-[2px] bg-white/10 hover:-translate-y-2 transition-all duration-300 border border-white/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <Quote className="w-10 h-10 text-accent/60 mb-6" />
                  
                  <p className="text-muted-foreground/90 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 ring-offset-2 ring-offset-transparent">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary/90 font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground/80 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-8 right-0 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent/40 text-accent/60" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
