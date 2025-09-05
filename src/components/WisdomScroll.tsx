import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { wisdomTexts } from "@/data/wisdomData";
import { playSingingBowlSound } from "@/lib/audio";

export const WisdomScroll = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTexts, setFilteredTexts] = useState(wisdomTexts);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const currentText = filteredTexts[currentTextIndex];
  
  useEffect(() => {
    if (searchQuery) {
      const filtered = wisdomTexts.filter(
        text => 
          text.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          text.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          text.tradition.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTexts(filtered);
      setCurrentTextIndex(0);
    } else {
      setFilteredTexts(wisdomTexts);
    }
  }, [searchQuery]);
  
  const goToPreviousText = () => {
    playSingingBowlSound();
    setCurrentTextIndex((prev) => 
      prev === 0 ? filteredTexts.length - 1 : prev - 1
    );
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };
  
  const goToNextText = () => {
    playSingingBowlSound();
    setCurrentTextIndex((prev) => 
      prev === filteredTexts.length - 1 ? 0 : prev + 1
    );
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };
  
  // Rotate the prayer wheel
  const [wheelRotation, setWheelRotation] = useState(0);
  
  useEffect(() => {
    // Rotate the wheel when text changes
    setWheelRotation(prev => prev + 360);
  }, [currentTextIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sidebar with text list */}
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-primary-800 dark:text-primary-200">
              Ancient Texts
            </CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search wisdom texts..."
                className="pl-8 input-zen"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-2">
                {filteredTexts.map((text, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      currentTextIndex === index
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-surface"
                    }`}
                    onClick={() => {
                      playSingingBowlSound();
                      setCurrentTextIndex(index);
                      if (scrollRef.current) {
                        scrollRef.current.scrollTop = 0;
                      }
                    }}
                  >
                    <h3 className="font-serif font-medium">{text.title}</h3>
                    <p className="text-xs mt-1 opacity-80">{text.tradition}</p>
                  </div>
                ))}
                
                {filteredTexts.length === 0 && (
                  <div className="p-4 text-center text-muted-foreground">
                    No texts found matching your search.
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      
      {/* Main content */}
      <div className="md:col-span-2">
        {currentText ? (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-display text-primary-800 dark:text-primary-200">
                  {currentText.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentText.tradition} • {currentText.year}
                </p>
              </div>
              
              {/* Prayer wheel */}
              <div 
                className="prayer-wheel w-12 h-12"
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transition: "transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
                }}
              >
                <div className="w-full h-full rounded-full border-2 border-accent flex items-center justify-center bg-primary-50 dark:bg-primary-900">
                  <div className="w-1/2 h-1/2 rounded-full bg-accent"></div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <ScrollArea className="h-[400px]" ref={scrollRef}>
                <div className="space-y-4 pr-4">
                  {currentText.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="sacred-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Navigation controls */}
              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="outline"
                  onClick={goToPreviousText}
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Text
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {currentTextIndex + 1} of {filteredTexts.length}
                </span>
                
                <Button
                  variant="outline"
                  onClick={goToNextText}
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Next Text
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No wisdom texts found.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};