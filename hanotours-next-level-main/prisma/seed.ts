import { Prisma } from "@prisma/client";
import { prisma } from "../src/lib/prisma";

const tours = [
  {
    slug: "gorilla-trekking-volcanoes",
    title: "Gorilla Trekking Experience",
    subtitle: "Volcanoes National Park",
    description:
      "Trek through misty bamboo forests to encounter endangered mountain gorillas in their natural habitat.",
    duration: "Full Day",
    groupSize: "Up to 8",
    basePrice: new Prisma.Decimal(1500),
    category: "Wildlife",
    difficulty: "Moderate",
    highlights: ["1-hour gorilla encounter", "Expert guide", "Park permit included"],
    inclusions: ["Park entry permit", "Professional guide", "Transport from Kigali"],
    exclusions: ["Tips", "Personal expenses", "Travel insurance"],
    meetingPoint: "Hotel pickup in Kigali",
    cancellationPolicy: "Free cancellation up to 7 days before departure.",
    coverImage:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=80",
    mapImage:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lake-kivu-retreat",
    title: "Lake Kivu Scenic Retreat",
    subtitle: "Western Rwanda",
    description: "Relax by Lake Kivu with boat tours, island visits, and lakeside dining.",
    duration: "2 Days",
    groupSize: "Up to 12",
    basePrice: new Prisma.Decimal(450),
    category: "Nature & Relaxation",
    difficulty: "Easy",
    highlights: ["Boat cruise", "Island visit", "Hot springs experience"],
    inclusions: ["Transport", "Boat tour", "Accommodation", "Meals"],
    exclusions: ["Drinks", "Tips"],
    meetingPoint: "Hotel pickup in Kigali",
    cancellationPolicy: "Free cancellation up to 5 days before departure.",
    coverImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    mapImage:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=80",
  },
];

const cars = [
  {
    slug: "toyota-land-cruiser",
    name: "Toyota Land Cruiser Prado",
    category: "SUV",
    description: "Comfortable 4WD for safari and rugged routes.",
    seats: 7,
    luggage: 4,
    pricePerDay: new Prisma.Decimal(150),
    priceAirportTransfer: new Prisma.Decimal(60),
    features: ["4WD", "Air Conditioning", "Professional Driver"],
    coverImage:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

async function main() {
  for (const tour of tours) {
    const created = await prisma.tour.upsert({
      where: { slug: tour.slug },
      update: tour,
      create: tour,
    });

    await prisma.tourMedia.createMany({
      data: [
        {
          tourId: created.id,
          type: "image",
          url: tour.coverImage!,
          altText: tour.title,
          sortOrder: 1,
        },
      ],
      skipDuplicates: true,
    });
  }

  for (const car of cars) {
    await prisma.car.upsert({
      where: { slug: car.slug },
      update: car,
      create: car,
    });
  }

  await prisma.addon.createMany({
    data: [
      { name: "Child seat", serviceType: "CAR", price: new Prisma.Decimal(10) },
      { name: "English speaking guide", serviceType: "TOUR", price: new Prisma.Decimal(35) },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
