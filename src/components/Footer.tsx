import { Link } from "react-router-dom";
import { PrayerWheel } from "./PrayerWheel";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-xl">MS</span>
              </div>
              <span className="font-display text-xl text-primary-foreground">
                Mount Serenity
              </span>
            </Link>
            <p className="text-primary-100 text-sm max-w-xs">
              A sanctuary for spiritual growth, meditation, and inner peace in the heart of the mountains.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/meditation" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Meditation Schedule
                </Link>
              </li>
              <li>
                <Link to="/silent-retreat" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Silent Retreats
                </Link>
              </li>
              <li>
                <Link to="/virtual-garden" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Virtual Garden
                </Link>
              </li>
              <li>
                <Link to="/wisdom-library" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Wisdom Library
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-accent">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Daily Meditation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Weekend Retreats
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Mindfulness Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Yoga Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-accent transition-colors text-sm">
                  Spiritual Counseling
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-display text-lg mb-4 text-accent">Prayer Wheel</h3>
            <p className="text-primary-100 text-sm mb-4 text-center md:text-right">
              Spin the prayer wheel for blessings
            </p>
            <PrayerWheel />
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-primary-200 text-sm">
          <p>© {currentYear} Mount Serenity Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;