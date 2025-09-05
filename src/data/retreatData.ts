export interface SilentRetreat {
  id: string;
  title: string;
  description: string;
  duration: string;
  dates: string;
  price: string;
  availability: "available" | "limited" | "full";
  image: string;
  features: string[];
  teacher: string;
  accommodationType: string;
  mealPlan: string;
}

export const silentRetreats: SilentRetreat[] = [
  {
    id: "weekend-silence",
    title: "Weekend of Silence",
    description: "A short but profound immersion into silence. Perfect for beginners or those with limited time who want to experience the transformative power of silent practice.",
    duration: "2 Days, 1 Night",
    dates: "Oct 15-16, Nov 12-13, Dec 10-11",
    price: "$295",
    availability: "available",
    image: "/images/retreat-weekend.jpg",
    features: [
      "Introduction to silent practice",
      "Guided meditations",
      "Nature walks",
      "Vegetarian meals",
      "Shared accommodation"
    ],
    teacher: "Sister Maya",
    accommodationType: "Shared dormitory",
    mealPlan: "Vegetarian, 3 meals per day"
  },
  {
    id: "week-contemplation",
    title: "Week of Contemplation",
    description: "Deepen your practice with a full week of silence. This retreat provides ample time to settle the mind and experience profound inner stillness.",
    duration: "7 Days, 6 Nights",
    dates: "Oct 20-26, Nov 17-23",
    price: "$895",
    availability: "limited",
    image: "/images/retreat-week.jpg",
    features: [
      "Daily meditation schedule",
      "One-on-one guidance",
      "Sacred text study",
      "Forest bathing",
      "Private or shared rooms"
    ],
    teacher: "Master Tenzin",
    accommodationType: "Private room with shared bathroom",
    mealPlan: "Organic vegetarian, 3 meals per day"
  },
  {
    id: "month-transformation",
    title: "Month of Transformation",
    description: "Our most intensive offering. This extended silent retreat allows for deep transformation and the potential to experience profound states of consciousness.",
    duration: "28 Days, 27 Nights",
    dates: "Jan 5-Feb 1",
    price: "$3,200",
    availability: "full",
    image: "/images/retreat-month.jpg",
    features: [
      "Comprehensive meditation curriculum",
      "Regular teacher interviews",
      "Integration practices",
      "Access to all sanctuary facilities",
      "Private accommodation"
    ],
    teacher: "Master Tenzin & Brother Kai",
    accommodationType: "Private cabin with ensuite bathroom",
    mealPlan: "Organic vegetarian/vegan, 3 meals per day"
  },
  {
    id: "nature-immersion",
    title: "Nature Immersion Retreat",
    description: "Combine silent practice with deep nature connection. This retreat includes guided wilderness experiences alongside traditional meditation.",
    duration: "5 Days, 4 Nights",
    dates: "Oct 5-9, Nov 2-6",
    price: "$750",
    availability: "limited",
    image: "/images/retreat-nature.jpg",
    features: [
      "Forest meditation",
      "Wilderness solo time",
      "Stargazing meditation",
      "Eco-friendly accommodation",
      "Plant-based meals"
    ],
    teacher: "Brother Kai",
    accommodationType: "Eco-lodge shared rooms",
    mealPlan: "Plant-based, locally sourced, 3 meals per day"
  }
];