import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-2xl font-serif font-bold text-primary mb-6 block">
              Trendy Kitchens
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Nashik's premier modular kitchen and custom furniture studio. We turn ordinary homes into showpiece living spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-white/70 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/70">
              <li>Modular Kitchens</li>
              <li>Kitchen Trolleys</li>
              <li>Custom Wardrobes</li>
              <li>TV Units</li>
              <li>Bedroom Furniture</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-white/70">123 Furniture Market, College Road, Nashik, Maharashtra 422005</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                <span className="text-white/70">hello@trendykitchens.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trendy Kitchens Trolley & Furniture. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}