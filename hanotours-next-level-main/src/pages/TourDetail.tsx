import { useParams, Link } from "react-router-dom";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, MapPin, Check, X, ChevronLeft } from "lucide-react";

export default function TourDetail() {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Tour Not Found</h1>
        <Button asChild><Link to="/tours">Back to Tours</Link></Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-10 text-primary-foreground">
            <Link to="/tours" className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
              <ChevronLeft className="h-4 w-4" /> All Tours
            </Link>
            <Badge className="mb-3 bg-secondary text-secondary-foreground">{tour.category}</Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2">{tour.title}</h1>
            <p className="text-primary-foreground/80">{tour.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {tour.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {tour.groupSize}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> {tour.meetingPoint}</span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-gold text-gold" /> {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Highlights</h2>
                <ul className="space-y-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{i + 1}</div>
                        {i < tour.itinerary.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-semibold text-sm">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3">Included</h3>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3">Not Included</h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"><X className="h-4 w-4 text-destructive shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cancellation */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">Cancellation Policy</h3>
                <p className="text-sm text-muted-foreground">{tour.cancellationPolicy}</p>
              </div>
            </div>

            {/* Sticky Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-0 shadow-elevated">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="text-xs text-muted-foreground">From</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl font-bold text-primary">${tour.price}</span>
                        <span className="text-sm text-muted-foreground">/ person</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div>
                        <label className="text-xs font-medium text-foreground mb-1 block">Date</label>
                        <input type="date" className="w-full px-3 py-2 rounded-md border bg-background text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-foreground mb-1 block">Guests</label>
                        <select className="w-full px-3 py-2 rounded-md border bg-background text-sm">
                          {[1,2,3,4,5,6,7,8].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <Button className="w-full mb-3" size="lg">Book Now</Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/contact">Ask a Question</Link>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">No payment required to enquire</p>
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
