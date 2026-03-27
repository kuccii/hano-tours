import { notFound } from "next/navigation";
import { getTourBySlug } from "@/lib/catalog";
import { BookingWidget } from "@/app/components/booking-widget";

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return notFound();

  const gallery = tour.media.filter((item) => item.type === "image");
  const videos = tour.media.filter((item) => item.type === "video");

  return (
    <div className="pb-16">
      <section className="relative h-[55vh] overflow-hidden">
        {tour.coverImage ? (
          <img src={tour.coverImage} alt={tour.title} className="h-full w-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-7xl px-4 text-white">
          <p className="text-sm uppercase tracking-wider text-brand-warm">{tour.category}</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{tour.title}</h1>
          <p className="mt-2 text-white/85">{tour.subtitle}</p>
        </div>
      </section>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Overview</h2>
            <p className="mt-3 leading-7 text-neutral-700">{tour.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Trip moments</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {tour.highlights.map((item) => (
                <div key={item} className="rounded-lg bg-brand-sunlight p-4 text-sm font-medium text-brand-earth">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Photo gallery</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {gallery.length ? (
                gallery.map((media) => (
                  <img
                    key={media.id}
                    src={media.url}
                    alt={media.altText ?? tour.title}
                    className="h-56 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                ))
              ) : (
                <p className="text-sm text-neutral-600">Gallery content will appear here.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Videos</h2>
            <div className="mt-4 grid gap-4">
              {videos.length ? (
                videos.map((video) => (
                  <div key={video.id} className="overflow-hidden rounded-lg bg-black">
                    <video controls className="w-full" src={video.url} />
                  </div>
                ))
              ) : (
                <p className="text-sm text-neutral-600">No videos yet for this tour.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark">Itinerary</h2>
            <div className="mt-4 space-y-3">
              {tour.itinerary.map((step) => (
                <article key={step.id} className="rounded-lg border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Day {step.dayNumber}</p>
                  <h3 className="mt-1 text-lg font-semibold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{step.description}</p>
                  {step.mediaUrl ? (
                    <img src={step.mediaUrl} alt={step.title} className="mt-3 h-44 w-full rounded-md object-cover" />
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        </div>

        <BookingWidget serviceType="TOUR" serviceId={tour.id} currency={tour.currency} />
      </div>
    </div>
  );
}
