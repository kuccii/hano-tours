"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Compass, Users, Camera, Bike, Coffee, Bird } from "lucide-react"
import { AnimatedElement } from "@/components/AnimatedElement"

// Define types for our data structures
interface Destination {
  name: string
  description: string
  image: string
  type: 'town' | 'park' | 'other'
}

interface Experience {
  name: string
  description: string
  image: string
  category: 'wildlife' | 'cultural' | 'adventure'
}

// Data
const destinations: Destination[] = [
  // Towns
  {
    name: 'Huye',
    description: 'A centre of academia and home to the Ethnographic Museum, with perhaps the finest collection in East Africa.',
    image: '/images/tours/Visit-Rwanda-Huye-Town-700x467_18.jpg',
    type: 'town'
  },
  {
    name: 'Karongi',
    description: 'A popular beach retreat, with hillsides covered in pines and eucalyptus serving as a backdrop to the sparkling lake.',
    image: '/images/tours/Visit-Rwanda_-Lake-Kivu-Drone-of-Islands-700x525_20.jpg',
    type: 'town'
  },
  {
    name: 'Kibeho',
    description: 'A significant religious site and pilgrimage destination.',
    image: '/images/tours/Visit-Rwanda-Kibeho-Church-Credit-Elena-Hermosa-700x467_18.jpg',
    type: 'town'
  },
  {
    name: 'Kigali',
    description: "The capital city is pleasantly low key yet dynamic and progressive. It's green, clean and safe with meaningful culture and remarkable drive.",
    image: '/images/tours/Visit-Rwanda_-Kigali-Skyline-to-CBD-700x467_21.jpg',
    type: 'town'
  },
  {
    name: 'Musanze',
    description: "A hassle-free and buzzing city with plenty of choice for eating out, ATMs, vibrant nightlife, markets and artisanal trades.",
    image: '/images/tours/Visit-Rwanda-Musanze-Drone-Sunset-700x525_19.jpg',
    type: 'town'
  },
  {
    name: 'Nyagatare',
    description: 'A convenient base to explore the Akagera National Park for those on a restricted budget or averse to camping.',
    image: '/images/tours/Visit-Rwanda-Akagera-Lion-in-Tree-1-e1533313181412-700x461_20.jpg',
    type: 'town'
  },
  {
    name: 'Nyanza',
    description: "Home to the King's Palace - a reconstruction of the traditional royal thatched dwelling shaped like a beehive.",
    image: '/images/tours/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-700x467_19.jpg',
    type: 'town'
  },
  {
    name: 'Rubavu',
    description: 'A waterfront town on the shores of Lake Kivu with red, sandy beaches and an easygoing tropical character.',
    image: '/images/tours/Visit-Rwanda-Rubavu-Beach-Credit-Jule-Lumma-700x467_18.jpg',
    type: 'town'
  },
  {
    name: 'Rusizi',
    description: 'A small town on the border with the Democratic Republic of the Congo and the closest town to Nyungwe National Park.',
    image: '/images/tours/Visit-Rwanda-Rusizi-District-700x467_18.jpg',
    type: 'town'
  },
  // National Parks
  {
    name: 'Akagera National Park',
    description: "Home to the Big Five, these relatively warm and low-lying plains form Rwanda's safari region.",
    image: '/images/tours/Visit-Rwanda-Akagera-Three-Zebra-700x467_17.jpg',
    type: 'park'
  },
  {
    name: 'Gishwati Mukura National Park',
    description: 'The two small forests have recently been granted national park status, offering wildlife and community-based activities.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Activities_Chimpanzee_Trek_6853_MASTER-700x467_19.jpg',
    type: 'park'
  },
  {
    name: 'Nyungwe National Park',
    description: 'An ancient rainforest with incredible biodiversity including chimpanzees, primates, birds, orchids and butterflies.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Activities_Canopy_Walk_2918_MASTER-700x467_17.jpg',
    type: 'park'
  },
  {
    name: 'Volcanoes National Park',
    description: 'The premium destination for gorilla tracking with plenty of side activities.',
    image: '/images/tours/Visit-Rwanda_-Volcanoes-National-Park-Silverback-in-Bamboo-1-700x467_19.jpg',
    type: 'park'
  },
  // Other Destinations
  {
    name: 'Lake Kivu',
    description: "One of Africa's Great Lakes, offering beautiful beaches, water sports, and island hopping opportunities.",
    image: '/images/tours/Visit-Rwanda_-Lake-Kivu-Kayak-to-Islands-1-700x394_17.jpg',
    type: 'other'
  }
]

const experiences: Experience[] = [
  // Wildlife Experiences
  {
    name: 'Birdwatching',
    description: "Spot some of Rwanda's 700+ bird species across various habitats.",
    image: '/images/tours/Variable-Sunbrird-Nyungwe-Gisakura-ICS-700x455_17.jpg',
    category: 'wildlife'
  },
  {
    name: 'Coffee',
    description: "Experience Rwanda's coffee culture and production process.",
    image: '/images/tours/Green-coffee-beans-700x467_17.jpg',
    category: 'wildlife'
  },
  {
    name: 'Gorilla Tracking',
    description: 'Track mountain gorillas in their natural habitat in Volcanoes National Park.',
    image: '/images/tours/Visit-Rwanda-Gorilla-Trackers-1920x1280.jpg',
    category: 'wildlife'
  },
  {
    name: 'Primate Tracking',
    description: 'Observe various primates including chimpanzees and golden monkeys.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Activities_Chimpanzee_Trek_6853_MASTER-700x467_20.jpg',
    category: 'wildlife'
  },
  {
    name: 'Safari',
    description: 'Experience wildlife viewing in Akagera National Park.',
    image: '/images/tours/Visit-Rwanda-Akagera-Lion-in-Tree-1-e1533313181412-700x461_19.jpg',
    category: 'wildlife'
  },
  {
    name: 'Tea',
    description: "Visit tea plantations and learn about Rwanda's tea production.",
    image: '/images/tours/rwanda-16-700x466_17.jpg',
    category: 'wildlife'
  },
  // Cultural Experiences
  {
    name: 'Ethnographic Museum',
    description: "Learn about Rwanda's cultural heritage.",
    image: '/images/tours/Visit-Rwanda-Huye-Town-700x467_17.jpg',
    category: 'cultural'
  },
  {
    name: 'Imigongo',
    description: 'Traditional geometric art form.',
    image: '/images/tours/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-700x467_18.jpg',
    category: 'cultural'
  },
  {
    name: 'Intore Dancing',
    description: 'Traditional Rwandan dance performances.',
    image: '/images/tours/Visit-Rwanda-Kibeho-Church-Credit-Elena-Hermosa-700x467_17.jpg',
    category: 'cultural'
  },
  {
    name: "King's Palace",
    description: 'Visit the traditional royal palace in Nyanza.',
    image: '/images/tours/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-700x467_19.jpg',
    category: 'cultural'
  },
  {
    name: 'Kwita Izina',
    description: 'Annual baby gorilla naming ceremony.',
    image: '/images/tours/Visit-Rwanda-Kwita-Izina-Baby-Gorilla-2-700x467_17.jpg',
    category: 'cultural'
  },
  // Adventure Experiences
  {
    name: 'Canopy Walkway',
    description: 'Experience Nyungwe Forest from above.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Lifestyle_Canopy_Walk_0019_MASTER-1-700x467_18.jpg',
    category: 'adventure'
  },
  {
    name: 'Caving',
    description: 'Explore underground caves.',
    image: '/images/tours/Musanze-Caves-700x466_17.jpg',
    category: 'adventure'
  },
  {
    name: 'Cycling',
    description: "Explore Rwanda's hills and trails by bicycle.",
    image: '/images/tours/Visit-Rwanda_-Congo-Nile-Trail-bike-700x467_18.jpg',
    category: 'adventure'
  },
  {
    name: 'Helicopter Tours',
    description: "Aerial tours of Rwanda's landscapes.",
    image: '/images/tours/Visit-Rwanda-Helicopter-Safari-Charter-700x525_17.jpg',
    category: 'adventure'
  },
  {
    name: 'Hiking',
    description: 'Trek through national parks and forest trails.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Lifestyle_Man_Jogging_2289_MASTER-700x467_1.jpg',
    category: 'adventure'
  },
  {
    name: 'Kayaking',
    description: 'Paddle on Lake Kivu.',
    image: '/images/tours/Visit-Rwanda_-Lake-Kivu-Kayak-to-Islands-1-700x394_17.jpg',
    category: 'adventure'
  },
  {
    name: 'Paramotor',
    description: 'See Rwanda from the air.',
    image: '/images/tours/Visit-Rwanda-Paramotoring-Huye-700x467_17.jpg',
    category: 'adventure'
  }
]

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [destinationType, setDestinationType] = useState("all")
  const [experienceCategory, setExperienceCategory] = useState("all")

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = destinationType === "all" || destination.type === destinationType
    return matchesSearch && matchesType
  })

  const filteredExperiences = experiences.filter((experience) => {
    const matchesSearch = experience.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = experienceCategory === "all" || experience.category === experienceCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedElement animationType="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Rwanda Tour Experiences</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the diverse destinations and unique experiences that make Rwanda a remarkable destination.
              From vibrant cities to pristine national parks, immerse yourself in the heart of Africa.
            </p>
          </AnimatedElement>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search destinations and experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="destinations" className="space-y-8">
          <TabsList className="flex justify-center space-x-2">
            <TabsTrigger value="destinations" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Destinations</span>
            </TabsTrigger>
            <TabsTrigger value="experiences" className="flex items-center gap-2">
              <Compass className="h-4 w-4" />
              <span>Experiences</span>
            </TabsTrigger>
          </TabsList>

          {/* Destinations Tab */}
          <TabsContent value="destinations" className="space-y-8">
            <div className="flex justify-center space-x-4">
              <Button
                variant={destinationType === "all" ? "default" : "outline"}
                onClick={() => setDestinationType("all")}
              >
                All Destinations
              </Button>
              <Button
                variant={destinationType === "town" ? "default" : "outline"}
                onClick={() => setDestinationType("town")}
              >
                Towns
              </Button>
              <Button
                variant={destinationType === "park" ? "default" : "outline"}
                onClick={() => setDestinationType("park")}
              >
                National Parks
              </Button>
              <Button
                variant={destinationType === "other" ? "default" : "outline"}
                onClick={() => setDestinationType("other")}
              >
                Other
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <AnimatedElement
                  key={destination.name}
                  animationType="cardReveal"
                  delay={index * 0.1}
                >
                  <Card className="overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {destination.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </TabsContent>

          {/* Experiences Tab */}
          <TabsContent value="experiences" className="space-y-8">
            <div className="flex justify-center space-x-4">
              <Button
                variant={experienceCategory === "all" ? "default" : "outline"}
                onClick={() => setExperienceCategory("all")}
              >
                All Experiences
              </Button>
              <Button
                variant={experienceCategory === "wildlife" ? "default" : "outline"}
                onClick={() => setExperienceCategory("wildlife")}
              >
                Wildlife
              </Button>
              <Button
                variant={experienceCategory === "cultural" ? "default" : "outline"}
                onClick={() => setExperienceCategory("cultural")}
              >
                Cultural
              </Button>
              <Button
                variant={experienceCategory === "adventure" ? "default" : "outline"}
                onClick={() => setExperienceCategory("adventure")}
              >
                Adventure
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExperiences.map((experience, index) => (
                <AnimatedElement
                  key={experience.name}
                  animationType="cardReveal"
                  delay={index * 0.1}
                >
                  <Card className="overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <img
                        src={experience.image}
                        alt={experience.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        {experience.name}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {experience.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 