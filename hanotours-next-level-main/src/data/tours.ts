import tourGorilla from "@/assets/tour-gorilla.jpg";
import tourLakeKivu from "@/assets/tour-lake-kivu.jpg";
import tourKigali from "@/assets/tour-kigali.jpg";
import tourNyungwe from "@/assets/tour-nyungwe.jpg";

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  category: string;
  difficulty: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
  meetingPoint: string;
  cancellationPolicy: string;
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "gorilla-trekking-volcanoes",
    title: "Gorilla Trekking Experience",
    subtitle: "Volcanoes National Park",
    description: "Trek through misty bamboo forests to encounter endangered mountain gorillas in their natural habitat. An unforgettable once-in-a-lifetime wildlife experience guided by expert trackers.",
    image: tourGorilla,
    duration: "Full Day",
    groupSize: "Up to 8",
    price: 1500,
    currency: "USD",
    rating: 4.9,
    reviewCount: 284,
    category: "Wildlife",
    difficulty: "Moderate",
    highlights: [
      "1-hour intimate gorilla encounter",
      "Expert naturalist guide",
      "Small group (max 8 people)",
      "Park permit included",
      "Breathtaking volcanic scenery",
    ],
    inclusions: ["Park entry permit", "Professional guide", "Transport from Kigali", "Lunch", "Walking sticks & rain gear"],
    exclusions: ["Tips for guides", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Kigali Pickup", description: "Early morning pickup from your hotel. 2.5-hour scenic drive to Volcanoes National Park." },
      { day: 1, title: "Briefing & Trek", description: "Park ranger briefing, then begin your trek through bamboo forest to find a gorilla family." },
      { day: 1, title: "Gorilla Encounter", description: "Spend 1 magical hour observing gorillas. Photography permitted." },
      { day: 1, title: "Return", description: "Descend the volcano and receive your gorilla trekking certificate. Lunch and return to Kigali." },
    ],
    meetingPoint: "Hotel pickup in Kigali",
    cancellationPolicy: "Free cancellation up to 7 days before. 50% refund 3-7 days. No refund within 3 days.",
  },
  {
    id: "2",
    slug: "lake-kivu-retreat",
    title: "Lake Kivu Scenic Retreat",
    subtitle: "Western Rwanda",
    description: "Escape to the serene shores of Lake Kivu for a relaxing day of boat tours, island hopping, and lakeside dining with stunning views of the Congo Nile Trail.",
    image: tourLakeKivu,
    duration: "2 Days",
    groupSize: "Up to 12",
    price: 450,
    currency: "USD",
    rating: 4.7,
    reviewCount: 156,
    category: "Nature & Relaxation",
    difficulty: "Easy",
    highlights: ["Boat cruise on Lake Kivu", "Napoleon Island visit", "Hot springs experience", "Lakeside dining", "Congo Nile Trail views"],
    inclusions: ["Transport", "Boat tour", "1 night accommodation", "Meals", "Guide"],
    exclusions: ["Drinks", "Tips", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Drive to Kibuye", description: "Scenic drive through tea plantations to Lake Kivu." },
      { day: 1, title: "Boat Tour", description: "Afternoon boat cruise visiting Napoleon Island and its bat colonies." },
      { day: 2, title: "Hot Springs & Return", description: "Visit natural hot springs, lakeside lunch, then return to Kigali." },
    ],
    meetingPoint: "Hotel pickup in Kigali",
    cancellationPolicy: "Free cancellation up to 5 days before. 50% refund 2-5 days.",
  },
  {
    id: "3",
    slug: "kigali-city-cultural-tour",
    title: "Kigali City & Cultural Tour",
    subtitle: "Kigali",
    description: "Discover the vibrant capital of Rwanda — from the moving Genocide Memorial to bustling markets, contemporary art galleries, and world-class coffee experiences.",
    image: tourKigali,
    duration: "Half Day",
    groupSize: "Up to 15",
    price: 85,
    currency: "USD",
    rating: 4.8,
    reviewCount: 312,
    category: "Cultural",
    difficulty: "Easy",
    highlights: ["Genocide Memorial", "Kimironko Market", "Inema Art Center", "Coffee tasting", "City panoramic views"],
    inclusions: ["Transport", "Guide", "Museum entries", "Coffee tasting"],
    exclusions: ["Lunch", "Tips", "Personal shopping"],
    itinerary: [
      { day: 1, title: "Morning Tour", description: "Visit the Kigali Genocide Memorial, followed by Kimironko local market." },
      { day: 1, title: "Art & Coffee", description: "Explore Inema Arts Center and enjoy a Rwandan specialty coffee tasting." },
    ],
    meetingPoint: "Hotel pickup in Kigali",
    cancellationPolicy: "Free cancellation up to 24 hours before.",
  },
  {
    id: "4",
    slug: "nyungwe-canopy-walk",
    title: "Nyungwe Forest Canopy Walk",
    subtitle: "Nyungwe National Park",
    description: "Walk among the treetops on East Africa's only canopy walkway, suspended 50 meters above the ancient rainforest floor, surrounded by chimpanzees and rare primates.",
    image: tourNyungwe,
    duration: "2 Days",
    groupSize: "Up to 10",
    price: 380,
    currency: "USD",
    rating: 4.6,
    reviewCount: 198,
    category: "Adventure",
    difficulty: "Moderate",
    highlights: ["Canopy walkway (50m high)", "Chimpanzee tracking", "Ancient rainforest", "300+ bird species", "Waterfall hike"],
    inclusions: ["Transport", "Park fees", "Guide", "1 night accommodation", "Meals"],
    exclusions: ["Tips", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Drive to Nyungwe", description: "5-hour scenic drive through rolling hills. Afternoon canopy walk." },
      { day: 2, title: "Chimp Tracking", description: "Early morning chimpanzee tracking. Afternoon waterfall hike, then return." },
    ],
    meetingPoint: "Hotel pickup in Kigali",
    cancellationPolicy: "Free cancellation up to 5 days before.",
  },
];
