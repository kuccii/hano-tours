import Link from "next/link";
import { getTours } from "@/lib/catalog";

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Rwanda Tours & Experiences</h1>
      <p className="mt-2 text-neutral-600">Book premium adventures with transparent pricing and instant confirmation.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Link key={tour.id} href={`/tours/${tour.slug}`} className="rounded-xl bg-white shadow">
            {tour.coverImage ? (
              <img src={tour.coverImage} alt={tour.title} className="h-56 w-full rounded-t-xl object-cover" />
            ) : null}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-brand-dark">{tour.title}</h2>
              <p className="mt-1 text-sm text-neutral-600">{tour.subtitle}</p>
              <p className="mt-3 text-sm text-brand-primary">${Number(tour.basePrice)} / person</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
