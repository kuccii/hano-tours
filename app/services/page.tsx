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
    pricing: [
      { name: "Economy", price: "$80", unit: "per day" },
      { name: "Standard SUV", price: "$120", unit: "per day" },
      { name: "Premium", price: "$150", unit: "per day" },
      { name: "Luxury", price: "$200", unit: "per day" },
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
    pricing: [
      { name: "Kigali City Tour", price: "$120", unit: "per person" },
      { name: "Volcanoes National Park", price: "$250", unit: "per person" },
      { name: "Lake Kivu Experience", price: "$320", unit: "per person" },
      { name: "Cultural Village Tour", price: "$150", unit: "per person" },
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
    pricing: [
      { name: "Classic Sedan", price: "$300", unit: "for 5 hours" },
      { name: "Luxury SUV", price: "$400", unit: "for 5 hours" },
      { name: "Premium Package", price: "$600", unit: "for 8 hours" },
      { name: "Full Day Package", price: "$800", unit: "full day" },
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
    pricing: [
      { name: "Standard Transfer", price: "$40", unit: "one way" },
      { name: "Premium Transfer", price: "$60", unit: "one way" },
      { name: "Group Transfer", price: "$80", unit: "one way" },
      { name: "VIP Service", price: "$100", unit: "one way" },
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
    pricing: [
      { name: "Hourly Service", price: "$50", unit: "per hour" },
      { name: "Half Day", price: "$200", unit: "4 hours" },
      { name: "Full Day", price: "$350", unit: "8 hours" },
      { name: "Event Package", price: "Custom", unit: "quote" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium transportation and tour services designed to make your Rwandan experience
            comfortable, memorable, and hassle-free.
          </p>
        </div>

        <Tabs defaultValue="car-rentals" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm md:text-base">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-bold text-primary ml-4">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-8">{service.description}</p>

                  <h3 className="text-xl font-bold text-primary mb-4">Features</h3>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-accent hover:bg-accent/90 text-primary">Book {service.title}</Button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-6">Pricing Options</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.pricing.map((option, index) => (
                      <Card key={index} className="border-gray-100">
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-bold text-primary mb-2">{option.name}</h4>
                          <p className="text-2xl font-bold text-accent">{option.price}</p>
                          <p className="text-sm text-gray-500">{option.unit}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Select
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
