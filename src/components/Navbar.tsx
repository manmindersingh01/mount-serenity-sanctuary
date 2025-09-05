import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useAudio } from "@/contexts/AudioContext";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { playSingingBowlSound } from "@/lib/audio";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isChantingEnabled, toggleChanting } = useAudio();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    playSingingBowlSound();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={handleNavLinkClick}
          >
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl">MS</span>
            </div>
            <span className="font-display text-xl md:text-2xl text-primary-800 dark:text-primary-200">
              Mount Serenity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks onClick={handleNavLinkClick} />
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChanting}
                title={isChantingEnabled ? "Mute Chanting" : "Enable Chanting"}
              >
                {isChantingEnabled ? (
                  <Volume2 className="h-5 w-5" />
                ) : (
                  <VolumeX className="h-5 w-5" />
                )}
              </Button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChanting}
              title={isChantingEnabled ? "Mute Chanting" : "Enable Chanting"}
            >
              {isChantingEnabled ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <NavLinks onClick={handleNavLinkClick} isMobile />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  onClick: () => void;
  isMobile?: boolean;
}

const NavLinks = ({ onClick, isMobile = false }: NavLinksProps) => {
  const location = useLocation();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/meditation", label: "Meditation" },
    { path: "/silent-retreat", label: "Silent Retreat" },
    { path: "/virtual-garden", label: "Virtual Garden" },
    { path: "/wisdom-library", label: "Wisdom Library" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            location.pathname === link.path
              ? "text-primary font-medium"
              : "text-foreground hover:text-primary transition-colors"
          } ${
            isMobile ? "block py-2 text-lg" : "text-sm font-medium"
          }`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;