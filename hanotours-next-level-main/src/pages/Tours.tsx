import { tours } from "@/data/tours";
import TourCard from "@/components/TourCard";

export default function Tours() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gold mb-2">Experiences</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Rwanda Tours & Experiences</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            From gorilla trekking to cultural immersions — handpicked experiences for every type of traveler.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
