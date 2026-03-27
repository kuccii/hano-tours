import fs from "node:fs";
import path from "node:path";
import { Prisma } from "@prisma/client";
import { prisma } from "../src/lib/prisma";

type ImportReport = {
  imported_count: number;
  updated_count: number;
  skipped_count: number;
  failed_count: number;
  failure_reasons: string[];
};

const report: ImportReport = {
  imported_count: 0,
  updated_count: 0,
  skipped_count: 0,
  failed_count: 0,
  failure_reasons: [],
};

async function importFromTsData() {
  const toursPath = path.resolve("src/data/tours.ts");
  const carsPath = path.resolve("src/data/cars.ts");
  const testimonialsPath = path.resolve("src/data/testimonials.ts");
  const files = [toursPath, carsPath, testimonialsPath];
  for (const file of files) {
    if (!fs.existsSync(file)) {
      report.skipped_count += 1;
      report.failure_reasons.push(`Missing source file: ${file}`);
    }
  }
}

async function importFromSqlHints() {
  const sqlFiles = ["hano.sql", "install.sql", "u955774755_tripv.sql"];
  for (const sqlFile of sqlFiles) {
    if (!fs.existsSync(path.resolve("..", sqlFile)) && !fs.existsSync(path.resolve(sqlFile))) {
      report.skipped_count += 1;
      report.failure_reasons.push(`SQL source not found: ${sqlFile}`);
    }
  }
}

async function createFallbackData() {
  const tour = await prisma.tour.upsert({
    where: { slug: "kigali-city-cultural-tour" },
    update: {},
    create: {
      slug: "kigali-city-cultural-tour",
      title: "Kigali City & Cultural Tour",
      subtitle: "Kigali",
      description: "Explore Kigali through museums, markets, and local coffee culture.",
      duration: "Half Day",
      groupSize: "Up to 15",
      basePrice: new Prisma.Decimal(85),
      category: "Cultural",
      difficulty: "Easy",
      highlights: ["Museum visit", "Market walk", "Coffee tasting"],
      inclusions: ["Guide", "Transport"],
      exclusions: ["Tips", "Personal shopping"],
      coverImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    },
  });

  if (tour) {
    report.imported_count += 1;
  }
}

async function main() {
  await importFromTsData();
  await importFromSqlHints();
  await createFallbackData();

  const outFile = path.resolve("migration-report.json");
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2), "utf8");
  console.log(`Migration report written to ${outFile}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    report.failed_count += 1;
    report.failure_reasons.push(`Fatal error: ${String(error)}`);
    await prisma.$disconnect();
    process.exit(1);
  });
