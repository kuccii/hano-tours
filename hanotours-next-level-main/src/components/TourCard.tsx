import { Link } from "react-router-dom";
import { Star, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link to={`/tours/${tour.slug}`}>
      <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 h-full">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{tour.category}</Badge>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent h-20" />
        </div>
        <CardContent className="p-5">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{tour.subtitle}</p>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{tour.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{tour.description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {tour.duration}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {tour.groupSize}</span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-semibold text-sm">{tour.rating}</span>
              <span className="text-xs text-muted-foreground">({tour.reviewCount})</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">From </span>
              <span className="font-bold text-lg text-primary">${tour.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
