"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/AnimatedElement"

export default function ServiceSection() {
  const router = useRouter()

  const services = [
    {
      title: "Tour Packages",
      description: "Explore Rwanda's breathtaking landscapes and wildlife with our curated tour packages.",
      icon: "🌄",
      link: "/tours"
    },
    {
      title: "Transportation",
      description: "Reliable and comfortable transportation services for all your travel needs.",
      icon: "🚗",
      link: "/transportation"
    },
    {
      title: "Custom Tours",
      description: "Create your perfect itinerary with our customizable tour options.",
      icon: "✏️",
      link: "/custom-tours"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <AnimatedElement
          animationType="fadeInUp"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the range of services we offer to make your Rwandan adventure unforgettable.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animationType="fadeInUp"
              delay={index * 0.2}
            >
              <div 
                className="p-6 rounded-lg bg-card hover:bg-card/80 transition-colors cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(service.link)
                  }}
                >
                  Learn More
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
