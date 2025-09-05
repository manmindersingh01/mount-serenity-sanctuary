import { useState } from "react";
import { playSingingBowlSound } from "@/lib/audio";

export const PrayerWheel = () => {
  const [rotations, setRotations] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    playSingingBowlSound();
    
    // Add 3-5 rotations randomly
    const additionalRotations = 3 + Math.floor(Math.random() * 3);
    setRotations(rotations + additionalRotations);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="prayer-wheel relative w-20 h-20 cursor-pointer"
        onClick={spinWheel}
        style={{
          transform: `rotate(${rotations * 360}deg)`,
          transition: isSpinning ? "transform 2s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none"
        }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-accent flex items-center justify-center bg-primary-700">
          <div className="w-3/4 h-3/4 rounded-full border-2 border-accent flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-accent"></div>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-6 bg-accent rounded"></div>
      </div>
      <p className="mt-2 text-xs text-primary-200 font-serif italic">
        Om Mani Padme Hum
      </p>
    </div>
  );
};