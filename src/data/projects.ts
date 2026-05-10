import type { ImageMetadata } from "astro";
import iskandarThrone from "@/images/iskandar/throne-room.webp";
import equiWorkshop from "@/images/equi-and-aca/workshop.webp";
import shatteredCastleDog from "@/images/shattered-moon/castle-dog.webp";
import gravetide1 from "@/images/gravetide/gravetide-1.webp";
import dustDeparture1 from "@/images/dust-and-departure/dust-and-departure-1.webp";

export type Project = {
  title: string;
  description: string;
  role: string;
  tags: string[];
  image: ImageMetadata;
  alt: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Iskandar The Spear of Truth",
    description:
      "A top-down action adventure game inspired by the Legend of Zelda series. Embark on a quest to rescue your kidnapped mother and uncover the truth behind her disappearance.",
    role: "Lead Game Designer",
    tags: ["Tag1", "Tag2"],
    image: iskandarThrone,
    alt: "Screenshot of Iskandar The Spear of Truth showing a dimly lit throne room with a menacing skull-adorned throne, red banners, torches, and a caged prisoner on the left.",
    link: "/work/iskandar-the-spear-of-truth/",
  },
  {
    title: "Equi & Aca",
    description:
      "A 3D action platformer inspired by Ratchet & Clank and Jak and Daxter. Play as Equi, a robot who must restore the balance between magic and machine with the help of their spirit companion, Aca.",
    role: "Gameplay Designer",
    tags: ["Tag1", "Tag2"],
    image: equiWorkshop,
    alt: "Screenshot of Equi & Aca showing Aca, a glowing purple cat-like spirit companion, floating in a sci-fi workshop environment.",
    link: "/work/equi-and-aca/",
  },
  {
    title: "Shattered Moon",
    description:
      "Traverse the monster-filled gothic streets of Plaigstead, exploring eerie buildings hiding creepier beings at every turn. Journey to The Cathedral to uncover the truth and undo the chaos gripping the city.",
    role: "Level Designer",
    tags: ["Tag1", "Tag2"],
    image: shatteredCastleDog,
    alt: "Screenshot of Shattered Moon showing a pixel art character in dark attire facing a large snarling werewolf enemy in a torchlit gothic stone corridor, with health and mana bars visible in the top left.",
    link: "/work/shattered-moon/",
  },
  {
    title: "Gravetide",
    description:
      "A retro-inspired 2D action platformer where a fledgling Knight must fight through hordes of undead enemies. Rise to the challenge and restore peace to the kingdom of Ghaltua.",
    role: "Sole Developer",
    tags: ["Tag1", "Tag2"],
    image: gravetide1,
    alt: "Screenshot of Gravetide showing a pixel art knight jumping through a vibrant outdoor level with purple stone ruins, green grass, and a misty mountain backdrop, with HUD elements in the top corners.",
    link: "/work/gravetide/",
  },
  {
    title: "Dust and Departure",
    description:
      "A 3D platformer where you wake from cryo-sleep to uncover the secrets of a world left behind. Use bubble technology to traverse the environment and discover that not everything is what it seems.",
    role: "Game Designer",
    tags: ["Tag1", "Tag2"],
    image: dustDeparture1,
    alt: "Screenshot of Dust and Departure showing a misty alien landscape with tall pine trees, a large planet looming in the sky, and a glass dome object in the foreground.",
    link: "/work/dust-and-departure/",
  },
];
