import { prisma } from "@/lib/prisma";

type QuoteInput = {
  serviceType: "TOUR" | "CAR";
  serviceId: string;
  startDate: Date;
  guestCount: number;
  addonIds?: string[];
  promoCode?: string;
};

export async function calculateQuote(input: QuoteInput) {
  const baseAmount =
    input.serviceType === "TOUR"
      ? Number((await prisma.tour.findUniqueOrThrow({ where: { id: input.serviceId } })).basePrice)
      : Number((await prisma.car.findUniqueOrThrow({ where: { id: input.serviceId } })).pricePerDay);

  let total = baseAmount * Math.max(1, input.guestCount);

  const weekday = input.startDate.getDay();
  const rules = await prisma.pricingRule.findMany({
    where: {
      serviceType: input.serviceType,
      isActive: true,
      OR: [{ dayOfWeek: null }, { dayOfWeek: weekday }],
    },
  });

  for (const rule of rules) {
    const deltaPercent = Number(rule.percentageDelta || 0);
    const deltaFixed = Number(rule.fixedDelta || 0);
    total += (total * deltaPercent) / 100 + deltaFixed;
  }

  if (input.addonIds?.length) {
    const addons = await prisma.addon.findMany({ where: { id: { in: input.addonIds }, isActive: true } });
    total += addons.reduce((sum, addon) => sum + Number(addon.price), 0);
  }

  if (input.promoCode) {
    const promo = await prisma.promoCode.findFirst({
      where: {
        code: input.promoCode.toUpperCase(),
        isActive: true,
      },
    });
    if (promo) {
      if (promo.percentageOff) {
        total -= (total * Number(promo.percentageOff)) / 100;
      }
      if (promo.fixedAmountOff) {
        total -= Number(promo.fixedAmountOff);
      }
    }
  }

  return {
    baseAmount,
    totalAmount: Math.max(0, Number(total.toFixed(2))),
  };
}
