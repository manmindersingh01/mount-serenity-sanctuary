import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { playSingingBowlSound } from "@/lib/audio";

interface MandalaLink {
  path: string;
  label: string;
  color: string;
  description: string;
}

const links: MandalaLink[] = [
  {
    path: "/meditation",
    label: "Meditation",
    color: "#8B7355", // Primary
    description: "Explore our meditation schedules and practices"
  },
  {
    path: "/silent-retreat",
    label: "Silent Retreat",
    color: "#D2B48C", // Secondary
    description: "Experience the power of silence and contemplation"
  },
  {
    path: "/virtual-garden",
    label: "Virtual Garden",
    color: "#556B2F", // Green
    description: "Take a virtual tour of our monastery gardens"
  },
  {
    path: "/wisdom-library",
    label: "Wisdom Library",
    color: "#8A2BE2", // Purple
    description: "Discover ancient texts and spiritual teachings"
  },
  {
    path: "/contact",
    label: "Contact",
    color: "#B22222", // Red
    description: "Find directions and get in touch with us"
  }
];

export const MandalaNavigation = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleClick = () => {
    playSingingBowlSound();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-primary flex items-center justify-center z-10">
        <span className="font-display text-primary-foreground text-lg">Journey</span>
      </div>

      {/* Mandala links */}
      {links.map((link, index) => {
        const angle = (index * (360 / links.length) * Math.PI) / 180;
        const radius = 37; // % of container width
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={link.path}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) translate(${x}%, ${y}%)`,
            }}
          >
            <Link to={link.path} onClick={handleClick}>
              <motion.div
                className="mandala-nav group relative"
                style={{ backgroundColor: link.color }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-display">
                  <span className="text-sm md:text-base">{link.label}</span>
                </div>
                
                {/* Description tooltip */}
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background border border-border p-2 rounded-md shadow-md w-48 text-center z-20 pointer-events-none"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : -5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm">{link.description}</p>
                </motion.div>
              </motion.div>
            </Link>
          </div>
        );
      })}

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-2 border-primary/30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border-2 border-primary/30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-primary/30"></div>
    </div>
  );
};