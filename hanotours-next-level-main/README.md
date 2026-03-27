# HanoTours Next Level

Production-oriented HanoTours platform with:
- Next.js App Router + TypeScript
- Prisma + PostgreSQL
- Flutterwave payments
- Real booking/contact/auth API flows
- Admin and customer dashboard routes

## Setup

1. Install dependencies:
   - `npm install`
2. Create env file:
   - copy `.env.example` to `.env`
3. Run Prisma:
   - `npm run prisma:generate`
   - `npm run prisma:migrate`
   - `npm run prisma:seed`
4. Start app:
   - `npm run dev`

## Data Migration

- Importer entrypoint: `npm run data:import`
- Report output: `migration-report.json`

## Key Routes

- Public: `/`, `/tours`, `/tours/[slug]`, `/cars`, `/cars/[slug]`, `/contact`, `/faq`, `/about`
- Auth: `/login`, `/register`
- Customer: `/account/bookings`
- Admin: `/admin`
