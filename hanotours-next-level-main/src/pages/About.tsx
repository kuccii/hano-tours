import { Shield, Heart, MapPin, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gold mb-2">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About HanoTours</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Born in Kigali, built for the world. We're a team of passionate Rwandans sharing our homeland with travelers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              HanoTours was founded with a simple belief: that Rwanda's breathtaking landscapes, rich culture, and warm hospitality
              deserve to be experienced through a service that matches their beauty. We combine local expertise with world-class
              standards to deliver tours and transport that exceed expectations.
            </p>
            <p className="text-lg leading-relaxed">
              Our team includes certified naturalist guides, experienced safari drivers, and dedicated travel planners who know 
              every trail, village, and hidden gem in the Land of a Thousand Hills.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Local Expertise", desc: "Our guides are born and raised in Rwanda with deep knowledge of every destination." },
              { icon: Shield, title: "Safety First", desc: "Licensed, insured, and committed to the highest safety standards in the industry." },
              { icon: Heart, title: "Personal Touch", desc: "Every trip is custom-tailored. No cookie-cutter itineraries — your adventure, your way." },
              { icon: Users, title: "Community Impact", desc: "We employ local communities and reinvest in conservation and education programs." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
