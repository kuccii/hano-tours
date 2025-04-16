"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, ArrowRight } from "lucide-react"
import { AnimatedElement } from "@/components/AnimatedElement"

const tours = [
  {
    title: "Volcanoes National Park",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "Full Day",
    location: "Northern Province",
    groupSize: "1-8 people",
    price: "$250",
    description: "Trek through the lush forests to encounter mountain gorillas in their natural habitat.",
    featured: true,
  },
  {
    title: "Lake Kivu Experience",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "2 Days",
    location: "Western Province",
    groupSize: "1-6 people",
    price: "$320",
    description: "Enjoy the serene beauty of one of Africa's great lakes with boat trips and beach relaxation.",
    featured: true,
  },
  {
    title: "Kigali City Tour",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "Half Day",
    location: "Kigali",
    groupSize: "1-10 people",
    price: "$120",
    description: "Explore Rwanda's clean and vibrant capital city, including the Genocide Memorial and local markets.",
    featured: true,
  },
]

export default function FeaturedTours() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 dots-pattern opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-3/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-float" />

      <div className="container relative mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Tour Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty and culture of Rwanda with our carefully curated tour packages.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <AnimatedElement
              key={tour.title}
              animationType="cardReveal"
              delay={index * 0.1}
              className="group"
            >
              <Card className="relative overflow-hidden glass-card hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {tour.featured && (
                    <Badge className="absolute top-4 right-4 z-20 bg-accent/90 text-primary backdrop-blur-sm">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="relative p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-accent" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="relative p-6 pt-0 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    From <span className="text-accent">{tour.price}</span>
                  </span>
                  <Button 
                    variant="accent"
                    className="group/btn hover:translate-x-1 transition-transform"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animationType="fadeInUp" delay={0.4} className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
          >
            View All Tour Packages
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedElement>
      </div>
    </section>
  )
}
