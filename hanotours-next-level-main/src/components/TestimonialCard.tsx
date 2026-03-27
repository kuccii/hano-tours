import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-card h-full">
      <CardContent className="p-6">
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-sm text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-primary text-primary-foreground">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">{testimonial.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.country} · {testimonial.tour}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
