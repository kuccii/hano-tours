import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HanoTours",
  description: "Premium tours and car booking platform.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/cars", label: "Cars" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
            <Link href="/" className="text-xl font-bold text-brand-primary">
              HanoTours
            </Link>
            <nav className="hidden gap-5 text-sm md:flex">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-brand-dark hover:text-brand-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/tours"
              className="rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white"
            >
              Book now
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
