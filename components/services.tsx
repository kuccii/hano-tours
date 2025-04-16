"use client"

import { AnimatedElement } from "./AnimatedElement"
import { ArrowRight, Car, Map, Heart, Plane, Building2 } from "lucide-react"

const services = [
  {
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Car Rentals",
    description: "Premium vehicles for daily, weekly, or monthly rentals with professional drivers.",
    link: "/services/car-rentals"
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Guided Country Tours",
    description: "Explore Rwanda's natural beauty and cultural heritage with expert local guides.",
    link: "/services/guided-tours"
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Luxury Wedding Cars",
    description: "Make your special day memorable with our elegant fleet of luxury vehicles.",
    link: "/services/wedding-cars"
  },
  {
    icon: <Plane className="w-8 h-8 text-primary" />,
    title: "Airport Transfers",
    description: "Reliable and comfortable transportation to and from Kigali International Airport.",
    link: "/services/airport-transfers"
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Corporate Transport",
    description: "Professional transportation solutions for business events and corporate clients.",
    link: "/services/corporate"
  }
]

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-accent/5 to-background/30">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_100%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float mix-blend-soft-light" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float-delayed mix-blend-soft-light" />
      <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-primary/6 rounded-full blur-2xl animate-float mix-blend-soft-light" />

      <div className="container relative mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/80 mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Discover our range of premium transportation and tour services designed to make your
            Rwandan experience comfortable, memorable, and hassle-free.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animationType="cardReveal"
              delay={index * 0.1}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-[1px] bg-white/30 hover:-translate-y-2 transition-all duration-300 hover:bg-white/40">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/8 via-accent/8 to-primary/8 w-fit group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary/80 group-hover:text-primary/90 transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground/70 mb-6">{service.description}</p>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-accent/80 hover:text-accent/90 transition-colors group-hover:translate-x-2 duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:animate-bounce-x" />
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
} 