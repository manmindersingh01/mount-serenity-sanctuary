import { createContext, useContext, useState, ReactNode } from "react";

interface AudioContextType {
  isChantingEnabled: boolean;
  toggleChanting: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isChantingEnabled, setIsChantingEnabled] = useState(false);

  const toggleChanting = () => {
    setIsChantingEnabled(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ isChantingEnabled, toggleChanting }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};