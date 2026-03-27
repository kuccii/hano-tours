import Link from "next/link";
import { getCars } from "@/lib/catalog";

export default async function CarsPage() {
  const cars = await getCars();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Car & Driver Services</h1>
      <p className="mt-2 text-neutral-600">Airport transfers, day hires, and multi-day services.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Link key={car.id} href={`/cars/${car.slug}`} className="rounded-xl bg-white p-5 shadow">
            {car.coverImage ? (
              <img src={car.coverImage} alt={car.name} className="mb-4 h-52 w-full rounded-md object-cover" />
            ) : null}
            <h2 className="text-xl font-semibold text-brand-dark">{car.name}</h2>
            <p className="mt-1 text-sm text-neutral-600">{car.category}</p>
            <p className="mt-2 text-sm text-brand-primary">${Number(car.priceAirportTransfer)} / airport transfer</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
