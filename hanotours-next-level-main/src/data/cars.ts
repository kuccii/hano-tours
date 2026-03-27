import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carMinibus from "@/assets/car-minibus.jpg";

export interface Car {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  seats: number;
  luggage: number;
  pricePerDay: number;
  priceAirportTransfer: number;
  currency: string;
  rating: number;
  reviewCount: number;
  features: string[];
  description: string;
}

export const cars: Car[] = [
  {
    id: "1",
    slug: "toyota-land-cruiser",
    name: "Toyota Land Cruiser Prado",
    category: "SUV",
    image: carSuv,
    seats: 7,
    luggage: 4,
    pricePerDay: 150,
    priceAirportTransfer: 60,
    currency: "USD",
    rating: 4.9,
    reviewCount: 203,
    features: ["4WD", "Air Conditioning", "GPS Navigation", "Professional Driver", "USB Charging", "Roof Rack"],
    description: "Perfect for safari trips and rugged terrain. Our flagship SUV offers comfort, reliability, and off-road capability for exploring Rwanda's national parks.",
  },
  {
    id: "2",
    slug: "mercedes-e-class",
    name: "Mercedes E-Class",
    category: "Sedan",
    image: carSedan,
    seats: 4,
    luggage: 3,
    pricePerDay: 120,
    priceAirportTransfer: 45,
    currency: "USD",
    rating: 4.8,
    reviewCount: 167,
    features: ["Air Conditioning", "Leather Seats", "WiFi Hotspot", "Professional Driver", "USB Charging", "Bottled Water"],
    description: "Executive comfort for city transfers and business travel. Premium leather interior with a professional, uniformed chauffeur.",
  },
  {
    id: "3",
    slug: "toyota-hiace-minibus",
    name: "Toyota HiAce Minibus",
    category: "Minibus",
    image: carMinibus,
    seats: 14,
    luggage: 8,
    pricePerDay: 200,
    priceAirportTransfer: 90,
    currency: "USD",
    rating: 4.7,
    reviewCount: 134,
    features: ["Air Conditioning", "Reclining Seats", "PA System", "Professional Driver", "Large Luggage Bay", "USB Charging"],
    description: "Ideal for group tours, family trips, and corporate events. Spacious and comfortable for long-distance travel across Rwanda.",
  },
];
