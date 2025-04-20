import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Map, Heart, Plane, Briefcase } from "lucide-react"

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
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <h3 className="text-xl font-bold text-primary mb-4">Features & Benefits</h3>
                  <ul className="grid gap-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                    Request a Quote
                  </Button>
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
