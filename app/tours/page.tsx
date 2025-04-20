"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, ArrowRight, Search, Filter, X, Check, Image as ImageIcon, 
         Video, PanelTop, ChevronLeft, ChevronRight, Compass, Maximize2, Minimize2, Play, Star, Activity } from "lucide-react"
import { AnimatedElement } from "@/components/AnimatedElement"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { tours } from "./data"
import { Tour } from "./types"

export default function ToursPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [durationFilter, setDurationFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [activeTab, setActiveTab] = useState("gallery")
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDuration = durationFilter === "all" || tour.duration.toLowerCase().includes(durationFilter)
    const matchesDifficulty = difficultyFilter === "all" || tour.difficulty.toLowerCase() === difficultyFilter
    return matchesSearch && matchesDuration && matchesDifficulty
  })

  const nextImage = useCallback(() => {
    if (!selectedTour) return
    setCurrentImageIndex((prev) => 
      prev === selectedTour.gallery.length - 1 ? 0 : prev + 1
    )
  }, [selectedTour])

  const prevImage = useCallback(() => {
    if (!selectedTour) return
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedTour.gallery.length - 1 : prev - 1
    )
  }, [selectedTour])
  
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (value === "videos") {
      // Auto-select first video if none selected
      if (selectedVideo === null && selectedTour && selectedTour.videos.length > 0) {
        setSelectedVideo(0)
      }
    }
  }

  const playVideo = (index: number) => {
    setSelectedVideo(index)
  }

  // Auto-cycle through images in gallery every 5 seconds when visible
  useEffect(() => {
    if (selectedTour && activeTab === "gallery") {
      const interval = setInterval(() => {
        nextImage()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [selectedTour, activeTab, nextImage])

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedElement animationType="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Tour Packages</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty of Rwanda with our carefully curated tour packages. From gorilla trekking to city tours,
              we offer unforgettable experiences tailored to your preferences.
            </p>
          </AnimatedElement>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={durationFilter} onValueChange={setDurationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="half">Half Day</SelectItem>
                <SelectItem value="full">Full Day</SelectItem>
                <SelectItem value="2">2 Days</SelectItem>
                <SelectItem value="3">3 Days</SelectItem>
                </SelectContent>
              </Select>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="challenging">Challenging</SelectItem>
                </SelectContent>
              </Select>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <div
              key={`tour-${tour.id}`}
              className="group cursor-pointer"
              onClick={() => router.push(`/tours/${tour.id}`)}
            >
              <AnimatedElement
                animationType="cardReveal"
                delay={index * 0.1}
              >
                <Card className="relative overflow-hidden glass-card hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img
                      src={tour.image}
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
                    <span>{tour.location.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                    <div className="mt-4">
                      <Badge variant="outline" className="mr-2">
                        {tour.difficulty}
                      </Badge>
                </div>
              </CardContent>

                  <CardFooter className="relative p-6 pt-0 flex items-center justify-end">
                    <Button 
                      variant="accent"
                      className="group/btn hover:translate-x-1 transition-transform"
                    >
                      Check it Out
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
              </CardFooter>
            </Card>
              </AnimatedElement>
            </div>
          ))}
        </div>

        {/* Tour Details Modal */}
        <Dialog 
          open={!!selectedTour} 
          onOpenChange={(open) => {
            if (!open) {
              setSelectedTour(null)
              setIsFullScreen(true)
            }
          }}
        >
          <DialogContent 
            className="fixed inset-0 w-screen h-screen p-0 m-0 rounded-none border-0 bg-white"
            style={{ transform: 'translate(0, 0)' }}
          >
            {selectedTour && (
              <div className="flex flex-col w-full h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <DialogTitle className="text-xl font-semibold text-[#1e3a8a]">
                    {selectedTour.title}
                  </DialogTitle>
                  <button
                    onClick={() => {
                      setSelectedTour(null)
                      setIsFullScreen(true)
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                {/* Tabs */}
                <Tabs 
                  value={activeTab} 
                  onValueChange={handleTabChange} 
                  className="flex-1 flex flex-col"
                >
                  <div className="border-b bg-white">
                    <div className="px-6">
                      <TabsList className="h-12 w-full bg-transparent gap-6">
                        <TabsTrigger 
                          value="gallery" 
                          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none relative h-full"
                        >
                          <div className="flex items-center gap-2">
                            <ImageIcon className="h-4 w-4" />
                            <span>Gallery</span>
                            <span className="text-sm text-gray-500">({selectedTour.gallery.length})</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a8a] scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                        </TabsTrigger>
                        <TabsTrigger 
                          value="videos" 
                          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none relative h-full"
                        >
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" />
                            <span>Videos</span>
                            <span className="text-sm text-gray-500">({selectedTour.videos.length})</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a8a] scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                        </TabsTrigger>
                        <TabsTrigger 
                          value="360view" 
                          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none relative h-full"
                        >
                          <div className="flex items-center gap-2">
                            <Compass className="h-4 w-4" />
                            <span>360° Views</span>
                            <span className="text-sm text-gray-500">({selectedTour.view360.length})</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a8a] scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                        </TabsTrigger>
                        <TabsTrigger 
                          value="details" 
                          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none relative h-full"
                        >
                          <div className="flex items-center gap-2">
                            <PanelTop className="h-4 w-4" />
                            <span>Details</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a8a] scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 relative">
                    <TabsContent 
                      value="gallery" 
                      className="absolute inset-0 m-0 flex flex-col bg-black"
                    >
                      {/* Main Image View */}
                      <div className="flex-1 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={selectedTour.gallery[currentImageIndex] || selectedTour.image}
                            alt={`${selectedTour.title} - Image ${currentImageIndex + 1}`}
                            className="max-h-[calc(100vh-9rem)] w-auto object-contain"
                          />
                        </div>
                        
                        {/* Navigation Controls */}
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:-translate-x-1" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-1" />
                        </button>

                        {/* Image Info Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                          <div className="px-6 py-4">
                            <div className="flex items-center justify-between text-white">
                              <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4 text-white/80" />
                                  <span className="text-sm">{selectedTour.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4 text-white/80" />
                                  <span className="text-sm">{selectedTour.location.name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Users className="h-4 w-4 text-white/80" />
                                  <span className="text-sm">{selectedTour.groupSize}</span>
                                </div>
                              </div>
                              <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                                <span className="text-sm font-medium">
                                  {currentImageIndex + 1} / {selectedTour.gallery.length}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Thumbnails */}
                      <div className="h-24 flex-shrink-0 border-t border-white/10">
                        <div className="h-full px-4 flex items-center">
                          <div className="flex space-x-2 overflow-x-auto py-3">
                            {selectedTour.gallery.map((img, idx) => (
                              <button
                                key={`gallery-${idx}`}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`relative flex-shrink-0 h-16 w-24 rounded-lg overflow-hidden focus:outline-none ${
                                  currentImageIndex === idx 
                                    ? "ring-2 ring-white" 
                                    : "hover:ring-2 hover:ring-white/50"
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`${selectedTour.title} thumbnail ${idx + 1}`}
                                  className="h-full w-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-black/30 transition-opacity ${
                                  currentImageIndex === idx ? "opacity-0" : "opacity-100"
                                }`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Videos Page */}
                    <TabsContent 
                      value="videos" 
                      className="absolute inset-0 flex flex-col m-0 outline-none bg-white"
                    >
                      {selectedVideo !== null && selectedTour.videos[selectedVideo] ? (
                        <div className="relative flex-grow overflow-hidden bg-black">
                          <iframe
                            src={selectedTour.videos[selectedVideo].url + "?autoplay=1&rel=0"}
                            title={selectedTour.videos[selectedVideo].title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            className="w-full h-full absolute inset-0"
                          ></iframe>
                          <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                          >
                            <X className="h-5 w-5 text-white" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex-grow overflow-y-auto">
                          <div className="container mx-auto px-4 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {selectedTour.videos.map((video, idx) => (
                                <div 
                                  key={`video-${idx}`} 
                                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                  onClick={() => playVideo(idx)}
                                >
                                  <div className="relative aspect-video">
                                    <img 
                                      src={video.thumbnail} 
                                      alt={video.title}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                                      <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <Play className="h-8 w-8 text-white ml-1" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-4 bg-white">
                                    <h4 className="font-medium text-lg text-primary mb-2">{video.title}</h4>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Video className="h-4 w-4 mr-2" />
                                      <span>Click to play video</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </TabsContent>

                    {/* 360° Views Page */}
                    <TabsContent 
                      value="360view" 
                      className="absolute inset-0 flex flex-col m-0 outline-none bg-white"
                    >
                      <div className="flex-grow overflow-y-auto">
                        <div className="container mx-auto px-4 py-8">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {selectedTour.view360.map((view, idx) => (
                              <div key={`view-${idx}`} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[4/3] relative">
                                  <iframe
                                    src={view.url}
                                    title={view.title}
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                  ></iframe>
                                  <div className="absolute top-4 right-4">
                                    <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                                      <div className="flex items-center space-x-2">
                                        <Compass className="h-4 w-4 text-primary" />
                                        <span className="text-sm font-medium text-primary">360° Interactive View</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-4 bg-white">
                                  <h4 className="font-medium text-lg text-primary mb-2">{view.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Use mouse or touch to explore the view in 360 degrees
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Details Page */}
                    <TabsContent 
                      value="details" 
                      className="absolute inset-0 flex flex-col m-0 outline-none bg-gray-50"
                    >
                      <div className="flex-grow overflow-y-auto">
                        <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6">
                              {/* Overview Section */}
                              <div className="bg-white rounded-xl p-6 shadow-sm border">
                                <div className="flex items-center justify-between mb-6">
                                  <h3 className="text-2xl font-semibold text-primary flex items-center">
                                    <span className="bg-primary/10 p-2 rounded-lg mr-3">
                                      <PanelTop className="h-6 w-6 text-primary" />
                                    </span>
                                    Tour Overview
                                  </h3>
                                  <Badge variant="outline" className="text-base px-4 py-1.5">
                                    {selectedTour.difficulty}
                                  </Badge>
                                </div>
                                <div className="flex flex-wrap gap-4 mb-6">
                                  <div className="flex items-center px-4 py-2 rounded-lg bg-gray-50">
                                    <Clock className="h-5 w-5 text-primary mr-2" />
                                    <div>
                                      <div className="text-sm font-medium">Duration</div>
                                      <div className="text-sm text-muted-foreground">{selectedTour.duration}</div>
                                    </div>
                                  </div>
                                  <div className="flex items-center px-4 py-2 rounded-lg bg-gray-50">
                                    <MapPin className="h-5 w-5 text-primary mr-2" />
                                    <div>
                                      <div className="text-sm font-medium">Location</div>
                                      <div className="text-sm text-muted-foreground">{selectedTour.location.name}</div>
                                    </div>
                                  </div>
                                  <div className="flex items-center px-4 py-2 rounded-lg bg-gray-50">
                                    <Users className="h-5 w-5 text-primary mr-2" />
                                    <div>
                                      <div className="text-sm font-medium">Group Size</div>
                                      <div className="text-sm text-muted-foreground">{selectedTour.groupSize}</div>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{selectedTour.description}</p>
                              </div>

                              {/* Highlights Section */}
                              <div className="bg-white rounded-xl p-6 shadow-sm border">
                                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                                  <span className="bg-primary/10 p-2 rounded-lg mr-3">
                                    <Star className="h-6 w-6 text-primary" />
                                  </span>
                                  Tour Highlights
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {selectedTour.highlights.map((highlight, index) => (
                                    <div key={`highlight-${index}`} className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                      <div className="flex-shrink-0 bg-primary/10 p-2 rounded-lg mr-3">
                                        <Check className="h-5 w-5 text-primary" />
                                      </div>
                                      <span className="text-muted-foreground">{highlight}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Gallery Preview */}
                              <div className="bg-white rounded-xl p-6 shadow-sm border">
                                <div className="flex items-center justify-between mb-6">
                                  <h3 className="text-2xl font-semibold text-primary flex items-center">
                                    <span className="bg-primary/10 p-2 rounded-lg mr-3">
                                      <ImageIcon className="h-6 w-6 text-primary" />
                                    </span>
                                    Photo Gallery
                                  </h3>
                                  <Button 
                                    variant="outline"
                                    className="group"
                                    onClick={() => setActiveTab('gallery')}
                                  >
                                    View All Photos
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  {selectedTour.gallery.slice(0, 4).map((img, idx) => (
                                    <div 
                                      key={`gallery-${idx}`} 
                                      className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                                      onClick={() => {
                                        setActiveTab('gallery')
                                        setCurrentImageIndex(idx)
                                      }}
                                    >
                                      <img 
                                        src={img} 
                                        alt={`${selectedTour.title} ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                      />
                                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                              <div className="space-y-6 lg:sticky lg:top-6">
                                {/* Tour Details Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border">
                                  <h4 className="text-xl font-semibold text-primary mb-6">What's Included</h4>
                                  <div className="space-y-4">
                                    <div className="flex items-start">
                                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3" />
                                      <span className="text-muted-foreground">Professional guide</span>
                                    </div>
                                    <div className="flex items-start">
                                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3" />
                                      <span className="text-muted-foreground">Transportation</span>
                                    </div>
                                    <div className="flex items-start">
                                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3" />
                                      <span className="text-muted-foreground">Entrance fees</span>
                                    </div>
                                    <div className="flex items-start">
                                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3" />
                                      <span className="text-muted-foreground">Safety equipment</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Request Quote Card */}
                                <div className="bg-primary rounded-xl p-6 text-white">
                                  <h4 className="text-xl font-semibold mb-2">Ready to Book?</h4>
                                  <p className="text-white/80 text-sm mb-6">
                                    Get a personalized quote for your preferred dates and group size.
                                  </p>
                                  <Button 
                                    variant="accent"
                                    className="w-full group"
                                  >
                                    Request Quote
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </div>

                                {/* Contact Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border">
                                  <h4 className="text-xl font-semibold text-primary mb-4">Need Help?</h4>
                                  <p className="text-sm text-muted-foreground mb-4">
                                    Have questions about this tour? Our team is ready to assist you.
                                  </p>
                                  <Button 
                                    variant="outline"
                                    className="w-full group"
                                  >
                                    Contact Us
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* No Results Message */}
        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-primary mb-2">No tours found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
        )}
      </div>
    </div>
  )
}
