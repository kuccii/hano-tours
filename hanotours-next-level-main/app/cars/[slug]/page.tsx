import { notFound } from "next/navigation";
import { getCarBySlug } from "@/lib/catalog";
import { BookingWidget } from "@/app/components/booking-widget";

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);
  if (!car) return notFound();

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-3">
      <section className="space-y-6 lg:col-span-2">
        {car.coverImage ? (
          <img src={car.coverImage} alt={car.name} className="h-[400px] w-full rounded-xl object-cover" />
        ) : null}
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">{car.name}</h1>
          <p className="mt-2 text-neutral-700">{car.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {car.features.map((feature) => (
              <span key={feature} className="rounded-full bg-brand-sunlight px-3 py-1 text-sm text-brand-earth">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>
      <BookingWidget serviceType="CAR" serviceId={car.id} currency={car.currency} />
    </div>
  );
}
