import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Search } from "lucide-react"

const tours = [
  {
    id: 1,
    title: "Volcanoes National Park",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "Full Day",
    location: "Northern Province",
    groupSize: "1-8 people",
    price: "$250",
    description:
      "Trek through the lush forests to encounter mountain gorillas in their natural habitat. This once-in-a-lifetime experience brings you face-to-face with these gentle giants.",
    category: "nature",
    featured: true,
  },
  {
    id: 2,
    title: "Lake Kivu Experience",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "2 Days",
    location: "Western Province",
    groupSize: "1-6 people",
    price: "$320",
    description:
      "Enjoy the serene beauty of one of Africa's great lakes with boat trips and beach relaxation. Experience stunning sunsets and the peaceful atmosphere of this magnificent lake.",
    category: "nature",
    featured: true,
  },
  {
    id: 3,
    title: "Kigali City Tour",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "Half Day",
    location: "Kigali",
    groupSize: "1-10 people",
    price: "$120",
    description:
      "Explore Rwanda's clean and vibrant capital city, including the Genocide Memorial and local markets. Learn about Rwanda's history and experience its modern development.",
    category: "city",
    featured: true,
  },
  {
    id: 4,
    title: "Nyungwe Forest National Park",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "3 Days",
    location: "Southern Province",
    groupSize: "1-8 people",
    price: "$450",
    description:
      "Discover one of Africa's oldest rainforests with its rich biodiversity, including primates and birds. Experience the canopy walk for breathtaking views of the forest.",
    category: "nature",
  },
  {
    id: 5,
    title: "Cultural Village Experience",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "Full Day",
    location: "Eastern Province",
    groupSize: "1-12 people",
    price: "$150",
    description:
      "Immerse yourself in Rwandan traditions, dance, and crafts in an authentic cultural village. Learn about local customs and participate in traditional activities.",
    category: "culture",
  },
  {
    id: 6,
    title: "Akagera National Park Safari",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    duration: "2 Days",
    location: "Eastern Province",
    groupSize: "1-6 people",
    price: "$380",
    description:
      "Experience a classic African safari in Rwanda's only savannah park, home to the Big Five. Spot elephants, lions, leopards, rhinos, and buffalos in their natural habitat.",
    category: "nature",
  },
]

export default function ToursPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Tour Packages</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Rwanda's breathtaking landscapes, vibrant culture, and unique experiences with our carefully curated
            tour packages.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-12 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search tours..." className="pl-10 focus:ring-2 focus:ring-accent transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <Select>
                <SelectTrigger className="focus:ring-2 focus:ring-accent transition-all">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="nature">Nature & Wildlife</SelectItem>
                  <SelectItem value="culture">Cultural</SelectItem>
                  <SelectItem value="city">City Tours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <Select>
                <SelectTrigger className="focus:ring-2 focus:ring-accent transition-all">
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Duration</SelectItem>
                  <SelectItem value="half-day">Half Day</SelectItem>
                  <SelectItem value="full-day">Full Day</SelectItem>
                  <SelectItem value="multi-day">Multi-Day</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary hover:scale-105 transition-transform">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {tour.featured && <Badge className="absolute top-4 right-4 bg-accent text-primary animate-pulse">Featured</Badge>}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{tour.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                <div className="flex flex-col space-y-2 text-sm text-gray-500">
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
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors">From {tour.price}</span>
                <Button className="bg-accent hover:bg-accent/90 text-primary hover:scale-105 transition-transform">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for a Custom Tour?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            We can create a personalized itinerary based on your interests, schedule, and preferences. Contact us to
            plan your perfect Rwandan adventure.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-medium hover:scale-105 transition-transform">Request Custom Tour</Button>
        </div>
      </div>
    </div>
  )
}
