"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, ArrowRight } from "lucide-react"
import { AnimatedElement } from "@/components/AnimatedElement"
import { useRouter } from "next/navigation"
import { tours } from "@/app/tours/data"

export default function FeaturedTours() {
  const router = useRouter()
  const featuredTours = tours.filter(tour => tour.featured).slice(0, 3)

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Featured Tours</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400">Discover our most popular and unique tour experiences</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <AnimatedElement
              key={tour.id}
              animationType="cardReveal"
              delay={index * 0.1}
            >
              <Card 
                className="relative overflow-hidden glass-card hover:-translate-y-2 transition-all duration-300 cursor-pointer dark:bg-gray-900 dark:border-gray-800"
                onClick={() => router.push(`/tours/${tour.id}`)}
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 z-20 bg-accent/90 text-primary backdrop-blur-sm">
                    Featured
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{tour.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-400 line-clamp-2 mb-4">{tour.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{tour.location.name}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="accent"
                    className="w-full group/btn"
                    onClick={() => router.push(`/tours/${tour.id}`)}
                  >
                    Check it Out
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animationType="fadeInUp" delay={0.4} className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary dark:border-white dark:text-white hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary hover:scale-105 transition-all duration-300"
            onClick={() => router.push('/tours')}
          >
            View All Tour Packages
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedElement>
      </div>
    </section>
  )
}
