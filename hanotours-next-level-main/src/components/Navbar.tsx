import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Tours", to: "/tours" },
  { label: "Cars", to: "/cars" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-sm">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+250780000000" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +250 780 000 000
            </a>
            <a href="mailto:info@hanotours.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="h-3.5 w-3.5" />
              info@hanotours.com
            </a>
          </div>
          <span className="text-primary-foreground/70">Rwanda's Premier Tour & Car Service</span>
        </div>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Hano<span className="text-secondary">Tours</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/tours">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-card overflow-hidden"
            >
              <nav className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-2 mt-3 pt-3 border-t">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <Link to="/tours" onClick={() => setOpen(false)}>Book Now</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
