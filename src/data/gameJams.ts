import type { ImageMetadata } from "astro";
import jellyExperiment from "@/images/game-jams/jelly-experiment.gif";
import dustDeparture4 from "@/images/dust-and-departure/dust-and-departure-4.webp";

export type GameJam = {
  title: string;
  image: ImageMetadata;
  imageAlt: string;
  gameJam: string;
  members: string;
  deadline: string;
  description: string;
  technology: string;
  link: string;
  linkText: string;
};

export const gameJams: GameJam[] = [
  {
    title: "Jelly Experiment",
    image: jellyExperiment,
    imageAlt:
      "A gif of the game 'Jelly Experiment' showing a jelly character moving around a platformer level.",
    gameJam: "Solent Game Jam 2023",
    members: "5 Members",
    deadline: "7 Days",
    description:
      "A student game jam team of 5 people with the theme of 'United we stand.'",
    technology: "Unity Engine - C#",
    link: "https://prodigy13.itch.io/jelly-xperiment",
    linkText: "Click to view on itch.io",
  },
  {
    title: "Dust and Departure",
    image: dustDeparture4,
    imageAlt:
      "A screenshot of the game 'Dust and Departure' showing a tree covered landscape with a giant planet in the sky, as well as a windmil slightly off in the distance.",
    gameJam: "Global Game Jam 2025",
    members: "9 Members",
    deadline: "48 hours",
    description:
      "A team consisting of Southampton Solent students + alumni making a game for the Global Game Jam 2025.",
    technology: "Unity Engine - C#",
    link: "https://globalgamejam.org/games/2025/dust-and-departure-8",
    linkText: "Click to view on globalgamejam.org",
  },
];
