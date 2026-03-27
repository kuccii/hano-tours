import { NextResponse } from "next/server";
import { calculateQuote } from "@/lib/pricing";
import { quoteSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const quote = await calculateQuote({
    ...parsed.data,
    startDate: new Date(parsed.data.startDate),
  });

  return NextResponse.json(quote);
}
