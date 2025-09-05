import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { gardenLocations } from "@/data/gardenData";
import { playSingingBowlSound } from "@/lib/audio";

export const VirtualGardenTour = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMeditationSpot, setShowMeditationSpot] = useState(false);
  
  const location = gardenLocations[currentLocation];
  
  const goToNextLocation = () => {
    playSingingBowlSound();
    setShowMeditationSpot(false);
    setCurrentLocation((prev) => 
      prev === gardenLocations.length - 1 ? 0 : prev + 1
    );
  };
  
  const goToPreviousLocation = () => {
    playSingingBowlSound();
    setShowMeditationSpot(false);
    setCurrentLocation((prev) => 
      prev === 0 ? gardenLocations.length - 1 : prev - 1
    );
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleMeditationSpot = () => {
    playSingingBowlSound();
    setShowMeditationSpot(!showMeditationSpot);
  };

  return (
    <div className="relative">
      {/* Main garden view */}
      <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-primary-300 shadow-lg">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Video overlay when playing */}
        {isPlaying && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-white text-lg font-display">Video Tour Playing...</div>
          </div>
        )}
        
        {/* Meditation spot marker */}
        {location.meditationSpot && (
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: `${location.meditationSpot.y}%`, 
              left: `${location.meditationSpot.x}%` 
            }}
            onClick={toggleMeditationSpot}
          >
            <div className="w-8 h-8 rounded-full bg-accent/70 flex items-center justify-center animate-pulse">
              <div className="w-4 h-4 rounded-full bg-accent"></div>
            </div>
          </div>
        )}
        
        {/* Meditation spot info */}
        {showMeditationSpot && location.meditationSpot && (
          <motion.div 
            className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg border border-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-lg text-primary-800 dark:text-primary-200">
              {location.meditationSpot.name}
            </h3>
            <p className="mt-1 text-sm">{location.meditationSpot.description}</p>
          </motion.div>
        )}
        
        {/* Location name overlay */}
        <div className="absolute top-4 left-4 right-4 bg-background/70 backdrop-blur-sm p-2 rounded-md">
          <h2 className="font-display text-lg text-primary-800 dark:text-primary-200">
            {location.name}
          </h2>
        </div>
      </div>
      
      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToPreviousLocation}
          className="border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex space-x-2">
          <Button 
            variant={isPlaying ? "destructive" : "default"}
            onClick={togglePlayPause}
            className={isPlaying ? "" : "bg-primary text-primary-foreground hover:bg-primary-700"}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" /> Pause Tour
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" /> Play Tour
              </>
            )}
          </Button>
          
          {location.meditationSpot && (
            <Button 
              variant="outline" 
              onClick={toggleMeditationSpot}
              className="border-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {showMeditationSpot ? "Hide Meditation Spot" : "Show Meditation Spot"}
            </Button>
          )}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToNextLocation}
          className="border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Location description */}
      <Card className="mt-4">
        <CardContent className="pt-4">
          <p className="sacred-text">{location.description}</p>
        </CardContent>
      </Card>
      
      {/* Thumbnail navigation */}
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {gardenLocations.map((loc, index) => (
          <div 
            key={index} 
            className={`cursor-pointer rounded-md overflow-hidden border-2 ${
              currentLocation === index 
                ? "border-accent" 
                : "border-transparent hover:border-primary"
            }`}
            onClick={() => {
              playSingingBowlSound();
              setCurrentLocation(index);
              setShowMeditationSpot(false);
            }}
          >
            <img 
              src={loc.thumbnail || loc.image} 
              alt={loc.name} 
              className="w-full h-16 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};