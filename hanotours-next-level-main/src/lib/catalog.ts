import { prisma } from "@/lib/prisma";

export async function getFeaturedTours() {
  return prisma.tour.findMany({
    where: { isActive: true },
    take: 6,
    include: { media: { orderBy: { sortOrder: "asc" } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getTours() {
  return prisma.tour.findMany({
    where: { isActive: true },
    include: {
      media: { orderBy: { sortOrder: "asc" } },
      itinerary: { orderBy: { dayNumber: "asc" } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getTourBySlug(slug: string) {
  return prisma.tour.findUnique({
    where: { slug },
    include: {
      media: { orderBy: { sortOrder: "asc" } },
      itinerary: { orderBy: { dayNumber: "asc" } },
    },
  });
}

export async function getCars() {
  return prisma.car.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getCarBySlug(slug: string) {
  return prisma.car.findUnique({ where: { slug } });
}

export async function getTestimonials() {
  return prisma.testimonial.findMany({ take: 8, orderBy: { createdAt: "desc" } });
}
