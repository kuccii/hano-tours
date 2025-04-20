"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, X } from "lucide-react"
import Image from "next/image"
import { tours } from "../data"
import { Tour } from "../types"

export default function TourPage() {
  const params = useParams()
  const router = useRouter()
  const [tour, setTour] = useState<Tour | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("gallery")
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoAutoPlaying, setIsVideoAutoPlaying] = useState(false)

  useEffect(() => {
    const foundTour = tours.find((t: Tour) => t.id === params.id)
    if (foundTour) {
      setTour(foundTour)
      // Reset video index if there are no videos
      if (!foundTour.videos || foundTour.videos.length === 0) {
        setCurrentVideoIndex(0)
        setSelectedVideo(null)
      }
    }
  }, [params.id])

  if (!tour) {
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Tour not found</h1>
            <p className="text-gray-600">The tour you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => router.push("/tours")}>Back to Tours</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="link"
            className="group flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors"
            onClick={() => router.push("/tours")}
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-lg font-medium">Back to Tours</span>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
          <p className="text-lg text-gray-600">{tour.description}</p>
        </div>

        <Tabs 
          defaultValue="gallery" 
          className="w-full"
          onValueChange={(value) => {
            setActiveTab(value)
            setCurrentImageIndex(0)
            setSelectedVideo(null)
          }}
        >
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/5">
              {/* Main Image */}
              <div className="relative w-full h-full">
                <Image
                  src={tour.gallery[currentImageIndex]}
                  alt={`${tour.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />
                
                {/* Navigation Controls */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? tour.gallery.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === tour.gallery.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                  {currentImageIndex + 1} / {tour.gallery.length}
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto py-2 px-4">
              {tour.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-2 ring-blue-500 scale-105"
                      : "hover:ring-2 hover:ring-blue-500/50"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${tour.title} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      currentImageIndex === index ? "bg-black/0" : "bg-black/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Auto-play Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {isAutoPlaying ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Pause Slideshow</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Start Slideshow</span>
                  </>
                )}
              </button>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            {/* Main Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/5">
              {selectedVideo !== null ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={tour.videos[selectedVideo].url}
                    title={tour.videos[selectedVideo].title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    aria-label="Close video"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  {tour.videos && tour.videos[currentVideoIndex] && (
                    <>
                      <Image
                        src={tour.videos[currentVideoIndex].thumbnail}
                        alt={tour.videos[currentVideoIndex].title}
                        fill
                        className="object-cover transition-opacity duration-300"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={() => setSelectedVideo(currentVideoIndex)}
                          className="p-4 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          aria-label="Play video"
                        >
                          <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Video Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-lg font-semibold">
                          {tour.videos[currentVideoIndex].title}
                        </h3>
                        <div className="text-white/80 text-sm">
                          Video {currentVideoIndex + 1} of {tour.videos.length}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Navigation Controls */}
                  {tour.videos && tour.videos.length > 0 && (
                    <>
                      <button
                        onClick={() => setCurrentVideoIndex((prev) => (prev === 0 ? tour.videos.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                        aria-label="Previous video"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentVideoIndex((prev) => (prev === tour.videos.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                        aria-label="Next video"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Video Thumbnails */}
            <div className="flex gap-2 overflow-x-auto py-2 px-4">
              {tour.videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentVideoIndex(index);
                    setSelectedVideo(null);
                  }}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentVideoIndex === index
                      ? "ring-2 ring-blue-500 scale-105"
                      : "hover:ring-2 hover:ring-blue-500/50"
                  }`}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </div>
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      currentVideoIndex === index ? "bg-black/0" : "bg-black/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Auto-play Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsVideoAutoPlaying(!isVideoAutoPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {isVideoAutoPlaying ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Pause Slideshow</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Start Slideshow</span>
                  </>
                )}
              </button>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview Section */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                  <p className="text-gray-300 leading-relaxed">{tour.description}</p>
                </div>

                {/* Highlights Section */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary Section */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Tour Itinerary</h2>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-white/5 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-200">Morning</h3>
                        <p className="text-gray-400">Start your day with a briefing and preparation for the tour activities.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white/5 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-200">Afternoon</h3>
                        <p className="text-gray-400">Enjoy the main activities and experiences of the tour.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white/5 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-200">Evening</h3>
                        <p className="text-gray-400">Conclude the tour with a debriefing and return to your accommodation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's Included Section */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">Professional Guide</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">Transportation</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">Entrance Fees</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">Lunch & Refreshments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tour Info Card */}
                <div className="bg-white/5 p-6 rounded-lg sticky top-6">
                  <h3 className="text-xl font-bold mb-4">Tour Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium text-gray-200">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium text-gray-200">{tour.location.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Group Size</p>
                        <p className="font-medium text-gray-200">{tour.groupSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Difficulty</p>
                        <p className="font-medium text-gray-200">{tour.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ready to Book Card */}
                <div className="bg-[#e3f2fd] rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-2">Ready to Book?</h3>
                  <p className="text-gray-500 mb-6">Experience this amazing tour with our expert guides.</p>
                  <Button 
                    className="w-full bg-[#2196f3] hover:bg-[#1976d2] text-white"
                    onClick={() => router.push('/contact')}
                  >
                    Check it Out
                  </Button>
                </div>

                {/* Contact Card */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="text-gray-300 mb-4">Have questions about this tour? Our team is here to help.</p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-video">
              <iframe
                src={selectedVideo !== null && tour.videos[selectedVideo] ? tour.videos[selectedVideo].url : undefined}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
} 