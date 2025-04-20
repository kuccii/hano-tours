export interface Video {
  url: string
  title: string
  thumbnail: string
}

export interface View360 {
  url: string
  title: string
  thumbnail: string
}

export interface TourHighlight {
  title: string
  description: string
}

export interface TourLocation {
  name: string
  coordinates?: {
    latitude: number
    longitude: number
  }
  description: string
}

export interface TourItinerary {
  day: number
  title: string
  description: string
  activities: string[]
}

export interface Tour {
  id: string
  title: string
  description: string
  image: string
  gallery: string[]
  videos: Video[]
  view360: View360[]
  highlights: string[]
  duration: string
  location: TourLocation
  groupSize: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  price: number
  included: string[]
  notIncluded: string[]
  itinerary: TourItinerary[]
  bestTimeToVisit: string
  category: 'Wildlife' | 'Cultural' | 'Adventure' | 'Nature' | 'Combined'
  featured: boolean
} 