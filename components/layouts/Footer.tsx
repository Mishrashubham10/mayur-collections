import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground px-6 md:px-6 lg:px-12">
      <div className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Mayur Collection
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Premium men&apos;s fashion since 2025. Curating the finest denim
              and essentials for the modern gentleman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products?category=jeans"
                  className="transition-colors hover:text-accent"
                >
                  Jeans Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=t-shirts"
                  className="transition-colors hover:text-accent"
                >
                  T-Shirts Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-accent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">
              Customer Service
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shipping"
                  className="transition-colors hover:text-accent"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/size"
                  className="transition-colors hover:text-accent"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-accent"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Borivali, Mumbai, Maharashtra 400001, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 9359043986</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>Mayurk4556@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col items-center justify-between space-y-4 text-sm text-primary-foreground/60 md:flex-row md:space-y-0">
          <p>© {currentYear} Mayur Collection. All rights reserved.</p>
          <p>Crafted with passion for quality fashion</p>
        </div>
      </div>
    </footer>
  );
};