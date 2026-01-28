import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-neutral pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-accent mb-4">Masterline</h3>
            <p className="text-muted/80 leading-relaxed mb-6">
              Bespoke tailoring for the modern gentleman. We craft more than just suits; we craft confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-neutral hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-neutral hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-neutral mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted/80 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-muted/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/services" className="text-muted/80 hover:text-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-neutral mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted/80">Bespoke Suits</li>
              <li className="text-muted/80">Custom Shirts</li>
              <li className="text-muted/80">Wedding Attire</li>
              <li className="text-muted/80">Expert Alterations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-neutral mb-4">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted/80">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span>123 Tailor's Lane,<br />Fashion District, NY 10018</span>
              </li>
              <li className="flex items-center gap-3 text-muted/80">
                <Phone size={20} className="text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted/80">
                <Mail size={20} className="text-accent shrink-0" />
                <span>hello@masterline.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted/60">
          <p>&copy; {new Date().getFullYear()} Masterline Tailor. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral">Privacy Policy</a>
            <a href="#" className="hover:text-neutral">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
