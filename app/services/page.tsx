"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Map, Heart, Plane, Briefcase, Check } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "car-rentals",
    icon: <Car className="h-12 w-12 text-accent" />,
    title: "Car Rentals",
    description:
      "Our fleet of well-maintained vehicles is available for daily, weekly, or monthly rentals. Each rental comes with a professional driver who knows Rwanda's roads and attractions.",
    features: [
      "Premium vehicles (SUVs, sedans, vans)",
      "Professional, English-speaking drivers",
      "Flexible rental periods",
      "Fuel-efficient options",
      "24/7 customer support",
      "Complimentary water and Wi-Fi",
    ],
    image: "https://gsat.jp/wp-content/uploads/2022/09/2018-Toyota-Land-Cruiser-Prado-TXL-Package-4WD-Black-Right-Hand-01-825x483.jpg"
  },
  {
    id: "tours",
    icon: <Map className="h-12 w-12 text-accent" />,
    title: "Guided Country Tours",
    description:
      "Explore Rwanda's breathtaking landscapes and rich cultural heritage with our expert guides. Our tours are designed to provide authentic experiences while ensuring comfort and safety.",
    features: [
      "Customizable itineraries",
      "Knowledgeable local guides",
      "Comfortable transportation",
      "Entrance fees included",
      "Meals and refreshments",
      "Photo opportunities",
    ],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wedding-cars",
    icon: <Heart className="h-12 w-12 text-accent" />,
    title: "Luxury Wedding Cars",
    description:
      "Make your special day even more memorable with our luxury wedding transportation. We offer elegant vehicles decorated to match your wedding theme.",
    features: [
      "Elegant vehicle decoration",
      "Professional chauffeurs in formal attire",
      "Red carpet service",
      "Champagne service available",
      "Photography stops",
      "Air-conditioned comfort",
    ],
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/492620310/IJ/OD/XG/40152041/white-toyota-fortuner-wedding-car-rental-500x500.jpeg"
  },
  {
    id: "airport-transfers",
    icon: <Plane className="h-12 w-12 text-accent" />,
    title: "Airport Transfers",
    description:
      "Start and end your journey in Rwanda with our reliable airport transfer service. We monitor flight arrivals to ensure timely pickups, even if your flight is delayed.",
    features: [
      "Flight monitoring",
      "Meet and greet service",
      "Luggage assistance",
      "Comfortable vehicles",
      "No waiting time",
      "Fixed pricing",
    ],
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corporate",
    icon: <Briefcase className="h-12 w-12 text-accent" />,
    title: "Corporate Transport",
    description:
      "We provide professional transportation solutions for business events, conferences, and corporate clients. Our service ensures punctuality and comfort for your team and guests.",
    features: [
      "Corporate accounts available",
      "Professional drivers",
      "Fleet management",
      "Event logistics coordination",
      "Multiple vehicle types",
      "Customized branding options",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Discover our range of premium transportation and tour services. Contact us for a personalized quote tailored to your needs.
        </p>
      </div>

      <div className="mb-12">
        <Tabs defaultValue={services[0].id} className="w-full">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto flex-wrap">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm md:text-base">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-col lg:flex-row gap-8 bg-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      {service.icon}
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-primary hover:bg-primary/90">
                        Check it Out
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:w-[400px] h-[300px] lg:h-auto relative rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-gray-100">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold text-primary mb-4">Get a Personalized Quote</h3>
                      <p className="text-muted-foreground mb-4">
                        Contact us for a detailed quote tailored to your specific requirements. Our team will help you plan the perfect transportation solution.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                        <li>• Customized to your needs</li>
                        <li>• Transparent pricing</li>
                        <li>• No hidden fees</li>
                        <li>• Flexible options available</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Contact Us
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
