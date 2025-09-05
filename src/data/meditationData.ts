export interface MeditationSession {
  title: string;
  date: string;
  time: string;
  duration: string;
  teacher: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced" | "all";
  type: "guided" | "silent" | "movement" | "chanting";
}

// Generate dates for the next 30 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  return dates;
};

const dates = generateDates();

export const meditationSchedule: MeditationSession[] = [
  {
    title: "Morning Mindfulness",
    date: dates[0],
    time: "6:00 AM - 7:00 AM",
    duration: "60 min",
    teacher: "Master Tenzin",
    description: "Start your day with clarity and presence. This gentle guided meditation focuses on breath awareness and setting intentions for the day.",
    level: "all",
    type: "guided"
  },
  {
    title: "Loving-Kindness Practice",
    date: dates[0],
    time: "10:00 AM - 11:00 AM",
    duration: "60 min",
    teacher: "Sister Maya",
    description: "Cultivate compassion for yourself and others through this heart-centered meditation practice.",
    level: "all",
    type: "guided"
  },
  {
    title: "Silent Sitting",
    date: dates[0],
    time: "5:00 PM - 6:00 PM",
    duration: "60 min",
    teacher: "Brother Kai",
    description: "Experience the profound stillness of silent meditation. Brief guidance at beginning and end.",
    level: "intermediate",
    type: "silent"
  },
  {
    title: "Evening Chanting",
    date: dates[0],
    time: "8:00 PM - 9:00 PM",
    duration: "60 min",
    teacher: "Master Tenzin",
    description: "End your day with the healing vibrations of traditional chants and mantras.",
    level: "all",
    type: "chanting"
  },
  {
    title: "Sunrise Meditation",
    date: dates[1],
    time: "5:30 AM - 6:30 AM",
    duration: "60 min",
    teacher: "Brother Kai",
    description: "Greet the new day with a meditation focused on renewal and awakening.",
    level: "all",
    type: "guided"
  },
  {
    title: "Walking Meditation",
    date: dates[1],
    time: "2:00 PM - 3:30 PM",
    duration: "90 min",
    teacher: "Sister Maya",
    description: "Practice mindfulness while walking through our sanctuary gardens.",
    level: "all",
    type: "movement"
  },
  {
    title: "Deep Relaxation",
    date: dates[1],
    time: "7:00 PM - 8:00 PM",
    duration: "60 min",
    teacher: "Master Tenzin",
    description: "Release tension and enter deep relaxation with this guided body scan meditation.",
    level: "all",
    type: "guided"
  },
  {
    title: "Advanced Visualization",
    date: dates[2],
    time: "9:00 AM - 10:30 AM",
    duration: "90 min",
    teacher: "Master Tenzin",
    description: "Work with advanced visualization techniques from Tibetan Buddhist traditions.",
    level: "advanced",
    type: "guided"
  },
  {
    title: "Breath Work",
    date: dates[2],
    time: "12:00 PM - 1:00 PM",
    duration: "60 min",
    teacher: "Brother Kai",
    description: "Learn powerful breathing techniques to calm the mind and energize the body.",
    level: "all",
    type: "guided"
  },
  {
    title: "Sunset Meditation",
    date: dates[2],
    time: "6:30 PM - 7:30 PM",
    duration: "60 min",
    teacher: "Sister Maya",
    description: "A gentle practice focused on letting go and transitioning from day to evening.",
    level: "all",
    type: "guided"
  },
  {
    title: "Beginner's Mind",
    date: dates[3],
    time: "10:00 AM - 11:00 AM",
    duration: "60 min",
    teacher: "Sister Maya",
    description: "An introduction to meditation fundamentals for those new to the practice.",
    level: "beginner",
    type: "guided"
  },
  {
    title: "Sound Bath",
    date: dates[3],
    time: "3:00 PM - 4:00 PM",
    duration: "60 min",
    teacher: "Master Tenzin",
    description: "Immerse yourself in the healing vibrations of Tibetan singing bowls.",
    level: "all",
    type: "guided"
  },
  {
    title: "Full Moon Meditation",
    date: dates[14],
    time: "8:00 PM - 9:30 PM",
    duration: "90 min",
    teacher: "Master Tenzin & Sister Maya",
    description: "A special meditation ceremony honoring the energy of the full moon.",
    level: "all",
    type: "guided"
  },
  {
    title: "Day of Mindfulness",
    date: dates[20],
    time: "9:00 AM - 4:00 PM",
    duration: "7 hours",
    teacher: "All Teachers",
    description: "A full day retreat including sitting meditation, walking meditation, mindful eating, and teachings.",
    level: "all",
    type: "guided"
  }
];