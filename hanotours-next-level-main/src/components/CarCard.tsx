import { Link } from "react-router-dom";
import { Star, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Link to={`/cars/${car.slug}`}>
      <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 h-full">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={car.image}
            alt={car.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">{car.category}</Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{car.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{car.description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {car.seats} seats</span>
            <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {car.luggage} bags</span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-semibold text-sm">{car.rating}</span>
              <span className="text-xs text-muted-foreground">({car.reviewCount})</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">From </span>
              <span className="font-bold text-lg text-primary">${car.priceAirportTransfer}</span>
              <span className="text-xs text-muted-foreground">/trip</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
