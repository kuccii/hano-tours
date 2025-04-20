import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              Hano<span className="text-accent">Tours</span>
            </h3>
            <p className="text-white/80 mb-6">
              Your trusted travel and transportation partner in Rwanda. We provide premium services tailored to your
              needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/80 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-white/80 hover:text-accent transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-white/80 hover:text-accent transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <span className="text-white/80">KN4 AVE, PLOT 12 N970, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <span className="text-white/80">+250 788 460 359</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <span className="text-white/80">info@hanotours.rw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-primary font-medium">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Hano Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
