import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-rwanda.jpg";
import { tours } from "@/data/tours";
import { cars } from "@/data/cars";
import { testimonials } from "@/data/testimonials";
import TourCard from "@/components/TourCard";
import CarCard from "@/components/CarCard";
import TestimonialCard from "@/components/TestimonialCard";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured", desc: "Fully registered tour operator" },
  { icon: Award, label: "500+ 5-Star Reviews", desc: "Trusted by travelers worldwide" },
  { icon: Clock, label: "24/7 Support", desc: "We're always here for you" },
  { icon: MapPin, label: "Local Experts", desc: "Born and raised in Rwanda" },
];

const destinations = [
  { name: "Volcanoes National Park", tagline: "Home of the Mountain Gorillas" },
  { name: "Lake Kivu", tagline: "Africa's Great Lake" },
  { name: "Nyungwe Forest", tagline: "Ancient Rainforest" },
  { name: "Akagera National Park", tagline: "Big Five Safari" },
  { name: "Kigali", tagline: "The Cleanest City in Africa" },
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Rwanda's stunning landscape"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-4 text-gold">
              Rwanda's Premier Tour & Car Service
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover the Land of<br />a Thousand Hills
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/80 leading-relaxed">
              Premium gorilla trekking, scenic tours, and reliable car services — 
              crafted for unforgettable Rwanda experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 h-13" asChild>
                <Link to="/tours">
                  Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 h-13" asChild>
                <Link to="/cars">Rent a Car</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-b">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center gap-2">
                <badge.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-sm">{badge.label}</h3>
                <p className="text-xs text-muted-foreground">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">Experiences</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Popular Tours</h2>
            </div>
            <Link to="/tours" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              View all tours <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/tours">View All Tours <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">Explore</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">From volcanic peaks to ancient rainforests — Rwanda offers adventures you won't find anywhere else.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                to="/tours"
                className="group bg-card rounded-lg p-5 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <h3 className="font-serif font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{dest.name}</h3>
                <p className="text-xs text-muted-foreground">{dest.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">Fleet</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Vehicles</h2>
            </div>
            <Link to="/cars" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              View all vehicles <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Explore Rwanda?</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            Tell us your travel dates and interests — we'll craft a personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8" asChild>
              <Link to="/contact">Build My Trip</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8" asChild>
              <Link to="/tours">Browse Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
