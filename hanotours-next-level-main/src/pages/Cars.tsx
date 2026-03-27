import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";

export default function Cars() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gold mb-2">Fleet</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Car & Driver Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Airport transfers, day hires, and multi-day packages with professional drivers and premium vehicles.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
