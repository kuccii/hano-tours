"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedElement } from "./AnimatedElement"

const services = [
  {
    title: "Tour Packages",
    description: "Explore Rwanda's stunning landscapes and culture with our curated tour packages.",
    icon: "🏞️",
    href: "/tours",
  },
  {
    title: "Transportation",
    description: "Reliable and comfortable transportation services for all your travel needs.",
    icon: "🚗",
    href: "/services#transportation",
  },
  {
    title: "Custom Tours",
    description: "Personalized tour experiences tailored to your preferences and schedule.",
    icon: "✨",
    href: "/contact",
  },
]

export default function ServiceSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container relative mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium transportation and tour services designed to make your Rwandan experience
            comfortable, memorable, and hassle-free.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animationType="cardReveal"
              delay={index * 0.1}
              className="group"
            >
              <Link href={service.href}>
                <div className="relative h-full p-8 rounded-2xl bg-card hover:bg-accent/5 hover:-translate-y-2 transition-all duration-300">
                  <div className="relative space-y-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex items-center text-primary font-medium pt-2 group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
