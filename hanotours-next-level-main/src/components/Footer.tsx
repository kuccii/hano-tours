import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Hano<span className="text-gold">Tours</span>
            </h3>
            <p className="text-forest-foreground/70 text-sm leading-relaxed mb-6">
              Rwanda's premier tour and car service. Discover the Land of a Thousand Hills with expert guides and premium vehicles.
            </p>
            <div className="flex flex-col gap-2 text-sm text-forest-foreground/70">
              <a href="tel:+250780000000" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="h-4 w-4" /> +250 780 000 000
              </a>
              <a href="mailto:info@hanotours.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="h-4 w-4" /> info@hanotours.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Kigali, Rwanda
              </span>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2 text-sm text-forest-foreground/70">
              <li><Link to="/tours" className="hover:text-gold transition-colors">Gorilla Trekking</Link></li>
              <li><Link to="/tours" className="hover:text-gold transition-colors">Lake Kivu Retreat</Link></li>
              <li><Link to="/tours" className="hover:text-gold transition-colors">Kigali City Tour</Link></li>
              <li><Link to="/tours" className="hover:text-gold transition-colors">Nyungwe Forest</Link></li>
              <li><Link to="/tours" className="hover:text-gold transition-colors">Akagera Safari</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Car Services</h4>
            <ul className="space-y-2 text-sm text-forest-foreground/70">
              <li><Link to="/cars" className="hover:text-gold transition-colors">Airport Transfers</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Car + Driver Hire</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Group Transport</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Executive Sedan</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Safari SUVs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-forest-foreground/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Build My Trip</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-forest-foreground/50">
          <p>© {new Date().getFullYear()} HanoTours. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
