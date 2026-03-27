import Link from "next/link";
import { getCars, getFeaturedTours, getTestimonials } from "@/lib/catalog";

export default async function HomePage() {
  const [tours, cars, testimonials] = await Promise.all([
    getFeaturedTours(),
    getCars(),
    getTestimonials(),
  ]);

  return (
    <div className="bg-brand-light">
      <section className="bg-brand-dark px-4 py-24 text-center text-white">
        <p className="text-sm uppercase tracking-wider text-brand-warm">Rwanda's Premier Tour & Car Service</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
          Discover Rwanda With Premium Tours And Reliable Cars
        </h1>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/tours" className="rounded-md bg-brand-primary px-5 py-3 font-semibold text-white">
            Explore Tours
          </Link>
          <Link href="/cars" className="rounded-md border border-white/40 px-5 py-3 font-semibold text-white">
            Browse Cars
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-brand-dark">Popular Tours</h2>
          <Link href="/tours" className="text-brand-primary">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.slug}`} className="overflow-hidden rounded-xl bg-white shadow">
              {tour.coverImage ? (
                <img src={tour.coverImage} alt={tour.title} className="h-52 w-full object-cover" />
              ) : null}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-dark">{tour.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{tour.subtitle}</p>
                <p className="mt-3 text-sm text-neutral-700">${Number(tour.basePrice)} / person</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="mb-8 text-2xl font-bold text-brand-dark">Cars & Drivers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Link key={car.id} href={`/cars/${car.slug}`} className="rounded-xl bg-white p-5 shadow">
              {car.coverImage ? (
                <img src={car.coverImage} alt={car.name} className="mb-4 h-48 w-full rounded-md object-cover" />
              ) : null}
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-sm text-neutral-600">{car.seats} seats · {car.luggage} bags</p>
              <p className="mt-2 text-sm text-brand-primary">${Number(car.priceAirportTransfer)} airport transfer</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold text-brand-dark">What Travelers Say</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-lg bg-white p-5 shadow">
              <p className="text-sm leading-relaxed text-neutral-700">"{item.text}"</p>
              <p className="mt-3 text-sm font-semibold text-brand-dark">{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
