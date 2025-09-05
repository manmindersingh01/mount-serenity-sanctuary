import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface IncenseSmokeProps {
  position?: "left" | "right" | "center";
}

export const IncenseSmoke = ({ position = "center" }: IncenseSmokeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Position styling
  const positionStyles = {
    left: "left-4 bottom-0",
    right: "right-4 bottom-0",
    center: "left-1/2 transform -translate-x-1/2 bottom-0"
  };

  // Create smoke particles
  const createSmokeParticles = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 3;
    
    // Clear existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const delay = i * 1.5;
      const particle = document.createElement("div");
      particle.className = "smoke-animation absolute bottom-0 w-4 h-4 bg-gray-200/20 rounded-full";
      particle.style.left = `${10 + Math.random() * 10}px`;
      particle.style.animationDelay = `${delay}s`;
      container.appendChild(particle);
    }
  };
  
  useEffect(() => {
    createSmokeParticles();
    
    // Recreate particles periodically
    const interval = setInterval(createSmokeParticles, 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`absolute ${positionStyles[position]} z-10`}>
      {/* Incense stick */}
      <motion.div 
        className="w-1 h-12 bg-primary-800 rounded-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glowing tip */}
        <div className="w-2 h-2 bg-orange-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-3 h-3 bg-orange-300/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </motion.div>
      
      {/* Smoke container */}
      <div 
        ref={containerRef} 
        className="relative w-24 h-40 -mt-10"
      ></div>
    </div>
  );
};