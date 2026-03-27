# Data Source Inventory and Mapping

## Inventory

- `src/data/tours.ts` -> seed baseline for tours
- `src/data/cars.ts` -> seed baseline for cars
- `src/data/testimonials.ts` -> seed baseline for testimonials
- `../hano.sql` -> primary SQL snapshot candidate (tours/cars/reviews/media)
- `../install.sql` -> secondary SQL snapshot candidate (packages/destinations)
- `../u955774755_tripv.sql` -> secondary SQL snapshot candidate
- `../u955774755_tripv (2).sql` -> secondary SQL snapshot candidate
- `../orginal_install.sql` -> historical fallback

## Canonical Mapping

- Legacy `packages`/`bravo_tours` -> `Tour`
- Legacy `package_media`/`media_files` -> `TourMedia`
- Legacy itinerary chunks -> `TourItineraryItem`
- Legacy `bravo_cars` -> `Car`
- Legacy testimonials/reviews -> `Testimonial`
- Booking-related legacy data -> `Booking`, `BookingItem`, `Payment`

## Import Strategy

1. Upsert by slug or external reference.
2. Preserve URL slugs whenever possible.
3. Import media in sorted order.
4. Write migration report with counts and skipped reason samples.

## Report Format

```json
{
  "imported_count": 0,
  "updated_count": 0,
  "skipped_count": 0,
  "failed_count": 0,
  "failure_reasons": []
}
```
