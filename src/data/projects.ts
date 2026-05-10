import type { ImageMetadata } from "astro";

// Thumbnail images
import iskandarThrone from "@/images/iskandar/throne-room.webp";
import equiWorkshop from "@/images/equi-and-aca/workshop.webp";
import shatteredCastleDog from "@/images/shattered-moon/castle-dog.webp";
import gravetide1 from "@/images/gravetide/gravetide-1.webp";
import dustDeparture1 from "@/images/dust-and-departure/dust-and-departure-1.webp";

// Project Page Header images
import cavePlatforms from "@/images/shattered-moon/cave-platforms.webp";
import gravetide2 from "@/images/gravetide/gravetide-2.webp";

// All images for galeries

export type DocumentationLink = {
  title: string;
  url: string;
};

export type ProjectPageDetails = {
	headerContent: ImageMetadata | string; // Image or youtube trailer link
	contentParagraphs: string[]; // For each of these, creates a text paragraph
	documentationLinks?: DocumentationLink[]; // For each of these, creates a link to documentation or devlogs about the project
	galleryImages?: ImageMetadata[]; // For each of these, creates an image in the gallery section
};

export type Project = {
  title: string;
  shortDescription: string;
  role: string;
  tags: string[];
  thumbnailImage: ImageMetadata;
  thumbnailAltText: string;
  projectLink: string;
	projectPageDetails: ProjectPageDetails;
};

export const projects: Project[] = [
  {
    title: "Iskandar The Spear of Truth",
    shortDescription:
      "A top-down action adventure game inspired by the Legend of Zelda series. Embark on a quest to rescue your kidnapped mother and uncover the truth behind her disappearance.",
    role: "Lead Game Designer",
    tags: ["Tag1", "Tag2"],
    thumbnailImage: iskandarThrone,
    thumbnailAltText:
      "Screenshot of Iskandar The Spear of Truth showing a dimly lit throne room with a menacing skull-adorned throne, red banners, torches, and a caged prisoner on the left.",
    projectLink: "iskandar-the-spear-of-truth",
    projectPageDetails: {
      headerContent: "https://www.youtube.com/watch?v=vhmx-68ONhk",
      contentParagraphs: [
        "With Iskandar I was the lead designer and the only designer, this led to me taking on the large responsibility of designing the majority of the game's core design mechanics. This included both the player's mechanics and how the player will function as well as designing all the enemies within the game. I also had to ensure that these elements were balanced with one another to create a fun, balanced, and good player experience.",

        "An example of one of the enemies I designed was the Butcher MiniBoss, I designed the encounter so that it would be varied enough in the way that it functions to feel special above the regular level of enemies. I achieved this by giving the MiniBoss two distinct special attacks that have clear visual indicators for the player to learn to help them when fighting. The first of these special attacks is a charge attack that the MiniBoss will perform if far enough away and the attack is off cooldown, firstly the boss will stop moving a perform an animation indicting its intent to charge forwards in a straight line towards the player location, if the MiniBoss collides with the player they take damage and are knocked back, if the knockback pushes the player into some terrain they take further damage. However if the player avoids the attack and the MiniBoss in turn collides with terrain they become stunned themselves and take some damage.",

        "The second special attack is a heavy swing with the butchers knife that it wields. The MiniBoss will pull its arm back for a brief moment preparing to strike and showing a visual indicator in front of itself showing what areas will be affected by the attack. Then it swings and if the player is caught in this attack they are afflicted with a bleeding debuff which a small damage over time effect. At the same time some bandages will fly off the MiniBoss into the immediate area that if the player moves over will remove the damage over time effect. ",

        "I went with this design so that the environment around the player was as much importance to encounter as the enemy itself allowing the level design to really shine and create a more immersive and cohesive game play experience through the enemy design and combat.",
      ],
      documentationLinks: [
        {
          title: "Enemy Documentation",
          url: "https://docs.google.com/document/d/1W0u0gb8b8QGAgcvr6LyRlYsm0DIEDnF7ao3WVm4Oe3g/edit?tab=t.0",
        },
      ],
    },
  },
  {
    title: "Equi & Aca",
    shortDescription:
      "A 3D action platformer inspired by Ratchet & Clank and Jak and Daxter. Play as Equi, a robot who must restore the balance between magic and machine with the help of their spirit companion, Aca.",
    role: "Gameplay Designer",
    tags: ["Tag1", "Tag2"],
    thumbnailImage: equiWorkshop,
    thumbnailAltText:
      "Screenshot of Equi & Aca showing Aca, a glowing purple cat-like spirit companion, floating in a sci-fi workshop environment.",
    projectLink: "equi-and-aca",
    projectPageDetails: {
      headerContent: "https://www.youtube.com/watch?v=jNjJbW9zKtw",
      contentParagraphs: [
        "With Equi and Aca I was on the game design team, I was part of the team that designed the player controls/combat and the enemies. I started out by designing an elemental-based weapon system with fire, earth, water, and electricity as the elements. These would draw power from naturally occurring magic that has manifested itself in the form of minerals.",

        "One of the main things I aimed to achieve with the weapon system would be to have a robust system that can work with itself by the combination of elements or their practical functionality, for example placing a seed turret on the floor using the Earth based weapon and then using the Ice weapon to spawn an ice wall underneath lifting the turret into a higher vantage point allowing it to fire upon enemies previously hidden. ",

        "Alternatively  one of the other ideas was to have the ice wall be allowed to melted by the flame weapon creating a water effect on the floor making enemies within vulnerable to attacks from the electricity weapon.",

        "This level of inter-connectivity within the players weapon system allowed for designs and encounters that could be tackled by the player in various ways based on their creativity and preferred play style.",

        "When it came to designing the enemies i wanted to ensure there was a variety of different functionality and attack types to ensure that the combat didn’t become stale.",
      ],
      documentationLinks: [
        {
          title: "Initial Concept",
          url: "https://docs.google.com/document/d/1Vfpsiw6mmkBp4IYGJsxY81aLjyMqb2yM5t2YJgPPhVU/edit?tab=t.0",
        },
        {
          title: "Player Mechanics",
          url: "https://docs.google.com/document/d/1HdBCNfehjrGEow9M5VtSVfXds8XA5JGwkQG-u76mqEw/edit?tab=t.0",
        },
        {
          title: "Main Weapon",
          url: "https://docs.google.com/document/d/1XimqmPGqZqFGra-cLbcGVPOFQzn-LUhzmmV0qavsprY/edit?tab=t.0",
        },
        {
          title: "Enemy Designs",
          url: "https://docs.google.com/document/d/1yNsvAG9wHhX9nsseXrWJJ3I5_xdNrM6UnVVIaSMpXtE/edit?tab=t.0",
        },
      ],
    },
  },
  {
    title: "Shattered Moon",
    shortDescription:
      "Traverse the monster-filled gothic streets of Plaigstead, exploring eerie buildings hiding creepier beings at every turn. Journey to The Cathedral to uncover the truth and undo the chaos gripping the city.",
    role: "Level Designer",
    tags: ["Tag1", "Tag2"],
    thumbnailImage: shatteredCastleDog,
    thumbnailAltText:
      "Screenshot of Shattered Moon showing a pixel art character in dark attire facing a large snarling werewolf enemy in a torchlit gothic stone corridor, with health and mana bars visible in the top left.",
    projectLink: "shattered-moon",
    projectPageDetails: {
      headerContent: cavePlatforms,
      contentParagraphs: [
        "Shattered Moon was my first time working as part of a team on a game project. I was in charge of level design for this project I aimed to create an environment that was both fun and interesting to explore as one that would reward the players who spent extra time to try and find all the hidden secrets within the levels.",

        "One example was the various illusory walls hidden throughout that game that the player would actually be able to move through even though they looked like normal walls. I designed them in a way that would lead the players to expect more from certain areas than was apparent at first glace hoping to draw them into looking for whatever secrets that area holds.",

        "I took inspiration from the Metroidvania games of old and the way they designed their levels to be both challenging as well being able to tell a story just by looking at them. Subtle hints at what might have occurred here in the past and how those incidents shape the current environment.",
      ],
    },
  },
  {
    title: "Gravetide",
    shortDescription:
      "A retro-inspired 2D action platformer where a fledgling Knight must fight through hordes of undead enemies. Rise to the challenge and restore peace to the kingdom of Ghaltua.",
    role: "Sole Developer",
    tags: ["Tag1", "Tag2"],
    thumbnailImage: gravetide1,
    thumbnailAltText:
      "Screenshot of Gravetide showing a pixel art knight jumping through a vibrant outdoor level with purple stone ruins, green grass, and a misty mountain backdrop, with HUD elements in the top corners.",
    projectLink: "gravetide",
    projectPageDetails: {
      headerContent: gravetide2,
      contentParagraphs: [
        "With Gravetide my goals were to improve my skills in both the Unreal Engine and visual scripting as well as demonstrate my design skills by implementing the Kishotenketsu design philosophy. When building Gravetide I really wanted to put an emphasis on having a reason behind all the choices I made, even down to the placement of enemies and hazards.",

        "Kishotenketsu is a 4 part narrative structure often used in literature, it consists of Introduction, Development, Twist and Conclusion. I went about using this in the game design process by having mechanics introduced to the player one at a time throughout the levels following that structure of introducing the player to the new mechanic in a safe environment. Then I would develop that mechanic by having the player need to actively engage with that mechanic to progress. Then onto twist in which the mechanic is used in a different way to show they can be used or interacted with in multiple ways. Lastly is conclusion in which I would have the player engage with the mechanic in a challenging scenario to test their understanding and handling of the mechanic before moving on to the next one. Each mechanic introduced would be present in the ones introduced after outside of the introduction section of the mechanic.",

        "An example of this in action would be the moving platform i have within the game. The introduction to them is in a way that the player can interact with the mechanic whilst not needing it to progress. Then into development where the player must now actually use the new mechanic in order to progress. The twist for this mechanic was to have the player jump from moving platform to moving platform rather than just riding from point A to B. Conclusion has the player using the platforms to navigate whilst avoiding obstacles that the platforms would move the players into if they didn't act to avoid them.",

        "I let my passion for retro-inspired games shine through in the design choices I made choosing visuals and audio that evoke a sense of nostalgia.",
      ],
    },
  },
  {
    title: "Dust and Departure",
    shortDescription:
      "A 3D platformer where you wake from cryo-sleep to uncover the secrets of a world left behind. Use bubble technology to traverse the environment and discover that not everything is what it seems.",
    role: "Game Designer",
    tags: ["Tag1", "Tag2"],
    thumbnailImage: dustDeparture1,
    thumbnailAltText:
      "Screenshot of Dust and Departure showing a misty alien landscape with tall pine trees, a large planet looming in the sky, and a glass dome object in the foreground.",
    projectLink: "dust-and-departure",
    projectPageDetails: {
      headerContent: dustDeparture1,
      contentParagraphs: [
        "Dust and Departure was a small GameJam game made for the 2025 Global GameJam. It was a team of 9 consisting mostly of designers and artists we had 48 hours from start to finish to build this project. The theme for the Jam was \"Bubbles\" so we decided to take that in a literal way by having bubbles be safe zones from a harsh and toxic environment on an earth long into the future that had become inhospitable due to our neglect and treatment of the planet.",

        "I helped work on the initial GDD and base game mechanics, once that was done I took on a more technical role and worked to implement many of the system the game uses, such as the the safe zones which provided the player a reprieve from the harsh and inhospitable environment that recharges the players oxygen, our oxygen system that showed the impact of prolonged exposure to the player and indicated to them the need to find new safe zones and checkpoint systems allowing the player to respawn back to the most recent safe zone if they become stuck or remain outside for too long and their oxygen depletes to 0.",
      ],
    },
  },
];
