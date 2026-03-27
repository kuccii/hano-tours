export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  text: string;
  tour: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    avatar: "SM",
    rating: 5,
    text: "The gorilla trekking was the most incredible experience of my life. Our guide was knowledgeable and the whole trip was perfectly organized. HanoTours made it effortless.",
    tour: "Gorilla Trekking Experience",
  },
  {
    id: "2",
    name: "James & Lisa Chen",
    country: "United States",
    avatar: "JC",
    rating: 5,
    text: "We booked a full week with HanoTours — from airport pickup to gorilla trekking to Lake Kivu. Every detail was handled beautifully. The drivers were professional and friendly.",
    tour: "Multi-Day Rwanda Explorer",
  },
  {
    id: "3",
    name: "Pierre Dubois",
    country: "France",
    avatar: "PD",
    rating: 5,
    text: "Excellent service! The Land Cruiser was clean and comfortable for our safari. Our driver knew all the best routes and stops. Highly recommend for anyone visiting Rwanda.",
    tour: "Car Rental - Land Cruiser",
  },
  {
    id: "4",
    name: "Amara Okafor",
    country: "Nigeria",
    avatar: "AO",
    rating: 5,
    text: "As a solo female traveler, I felt completely safe and well taken care of. The Kigali city tour was fantastic — the coffee tasting was a real highlight!",
    tour: "Kigali City & Cultural Tour",
  },
];
