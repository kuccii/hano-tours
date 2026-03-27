import { useParams, Link } from "react-router-dom";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Briefcase, Check, ChevronLeft } from "lucide-react";

export default function CarDetail() {
  const { slug } = useParams();
  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Vehicle Not Found</h1>
        <Button asChild><Link to="/cars">Back to Cars</Link></Button>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[40vh] md:h-[50vh]">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-10 text-primary-foreground">
            <Link to="/cars" className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
              <ChevronLeft className="h-4 w-4" /> All Vehicles
            </Link>
            <Badge className="mb-3 bg-secondary text-secondary-foreground">{car.category}</Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold">{car.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {car.seats} Seats</span>
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-primary" /> {car.luggage} Luggage</span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-gold text-gold" /> {car.rating} ({car.reviewCount} reviews)
                </span>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">About This Vehicle</h2>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-0 shadow-elevated">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-4">Pricing</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-sm text-muted-foreground">Airport Transfer</span>
                        <span className="font-bold text-lg">${car.priceAirportTransfer}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-sm text-muted-foreground">Full Day Hire</span>
                        <span className="font-bold text-lg">${car.pricePerDay}</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div>
                        <label className="text-xs font-medium text-foreground mb-1 block">Service Type</label>
                        <select className="w-full px-3 py-2 rounded-md border bg-background text-sm">
                          <option>Airport Transfer</option>
                          <option>Full Day Hire</option>
                          <option>Multi-Day Package</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-foreground mb-1 block">Date</label>
                        <input type="date" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
                      </div>
                    </div>
                    <Button className="w-full mb-3" size="lg">Book This Vehicle</Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/contact">Request a Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
