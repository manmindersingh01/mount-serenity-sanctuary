import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useAudio } from "@/contexts/AudioContext";

const Layout = () => {
  const { isChantingEnabled } = useAudio();

  useEffect(() => {
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Background chanting audio setup
    const chantingAudio = new Audio('/sounds/background-chanting.mp3');
    chantingAudio.loop = true;
    chantingAudio.volume = 0.3;

    if (isChantingEnabled) {
      chantingAudio.play().catch(error => {
        console.log("Audio autoplay was prevented:", error);
      });
    }

    return () => {
      chantingAudio.pause();
      chantingAudio.currentTime = 0;
    };
  }, [isChantingEnabled]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;