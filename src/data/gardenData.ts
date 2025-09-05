export interface MeditationSpot {
  name: string;
  description: string;
  x: number; // percentage position on image (horizontal)
  y: number; // percentage position on image (vertical)
}

export interface GardenLocation {
  name: string;
  description: string;
  image: string;
  thumbnail?: string;
  meditationSpot?: MeditationSpot;
}

export const gardenLocations: GardenLocation[] = [
  {
    name: "Zen Rock Garden",
    description: "Our meticulously maintained rock garden represents the essence of simplicity and mindfulness. The carefully raked patterns around the stones symbolize the ripples of water, creating a landscape that invites contemplation and inner peace.",
    image: "/images/garden-zen.jpg",
    meditationSpot: {
      name: "Stone Meditation Bench",
      description: "This ancient granite bench has been worn smooth by generations of meditators. It's positioned to catch the morning light filtering through the eastern maple trees.",
      x: 65,
      y: 40
    }
  },
  {
    name: "Lotus Pond",
    description: "The sacred lotus flowers in this tranquil pond remind us of the Buddha's teaching that beauty and purity can emerge from muddy waters. The gentle sounds of water create a natural backdrop for meditation practice.",
    image: "/images/garden-pond.jpg",
    meditationSpot: {
      name: "Floating Meditation Platform",
      description: "This wooden platform extends slightly over the water, creating the sensation of floating. It's especially beautiful at sunrise when the lotuses begin to open.",
      x: 30,
      y: 70
    }
  },
  {
    name: "Ancient Cedar Grove",
    description: "Some of these cedar trees are over 300 years old, creating a sacred space filled with wisdom and presence. The soft carpet of needles underfoot and the filtered light create an atmosphere of natural reverence.",
    image: "/images/garden-cedar.jpg",
    meditationSpot: {
      name: "Root Throne",
      description: "Nestled between the massive roots of the oldest cedar, this natural seat has been used by practitioners for generations. The tree's energy is palpable here.",
      x: 45,
      y: 60
    }
  },
  {
    name: "Mountain Overlook",
    description: "This viewpoint offers a panoramic vista of the surrounding mountains and valleys. It's a powerful place to contemplate impermanence and the vast nature of consciousness as the light changes throughout the day.",
    image: "/images/garden-overlook.jpg",
    meditationSpot: {
      name: "Sky Meditation Platform",
      description: "This stone platform at the edge of the cliff offers unobstructed views of the sky and distant peaks. Perfect for sky-gazing meditation practices.",
      x: 75,
      y: 50
    }
  },
  {
    name: "Medicinal Herb Garden",
    description: "Our herb garden contains over 50 species of healing plants, many used in traditional Tibetan medicine. The aromatic environment engages all the senses and reminds us of the healing power of nature.",
    image: "/images/garden-herbs.jpg"
  },
  {
    name: "Prayer Flag Meadow",
    description: "Colorful prayer flags flutter in the breeze, sending blessings across the land. Each flag contains sacred mantras and prayers for peace, compassion, and enlightenment for all beings.",
    image: "/images/garden-flags.jpg",
    meditationSpot: {
      name: "Central Stone Circle",
      description: "These seven stones arranged in a circle mark a place of special energetic significance. Each stone represents one of the seven chakras.",
      x: 50,
      y: 65
    }
  }
];