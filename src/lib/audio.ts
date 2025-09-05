// Function to play singing bowl sound
export const playSingingBowlSound = () => {
  const audio = new Audio("/sounds/singing-bowl.mp3");
  audio.volume = 0.4;
  audio.play().catch(error => {
    console.log("Audio play was prevented:", error);
  });
};