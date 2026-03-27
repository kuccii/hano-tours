import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export const quoteSchema = z.object({
  serviceType: z.enum(["TOUR", "CAR"]),
  serviceId: z.string().min(1),
  startDate: z.string().datetime().or(z.string().min(8)),
  guestCount: z.number().int().min(1).max(20),
  addonIds: z.array(z.string()).optional(),
  promoCode: z.string().optional(),
});

export const createBookingSchema = quoteSchema.extend({
  travelerName: z.string().min(2),
  travelerEmail: z.string().email(),
  travelerPhone: z.string().optional(),
  totalAmount: z.number().nonnegative(),
  currency: z.string().default("USD"),
});
