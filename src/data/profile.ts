import type { IconType } from "react-icons";
import { FiLayers, FiCode, FiEdit3, FiUsers } from "react-icons/fi";
import { GrGamepad, GrBug } from "react-icons/gr";

export const expertise = [
  "GAME DESIGNER",
  "LEVEL DESIGNER",
  "QUALITY ASSURANCE",
];

export const bio =
  "Hi, I'm Ian, and I'm an aspiring game designer with a passion for creating compelling mechanics and experiences, inspired by the retro games I grew up playing. Currently looking to kickstart my career in the gaming industry, I'm eager to bring my creativity, attention to detail, and love for gameplay design to an entry-level position. Whether it's brainstorming innovative systems or diving into QA testing to ensure polished, bug-free gameplay, I'm committed to growing as a designer and contributing to every project I work on.";

export const education = "Degree (Hons) Computer Games (Design) (BCGD)";

export const skills = ["Unity Engine", "Unreal Engine (Blueprints)"];

export const heroHeading = "Crafting Immersive Gaming Experiences";

export const heroDescription =
  "I'm an aspiring game designer currently looking to start my career in the games industry. I have a degree (Hons) Computer Games (Design) (BCGD).";


export type SkillCategory = {
	title: string;
	items: string[];
	icon: IconType;
}

export const skillsAndExpertise: SkillCategory[] = [
	{
		title: "Game Design",
		items: ["Gameplay Mechanics", "Player Progression", "Economy Design", "Combat Systems"],
		icon: GrGamepad
	},
	{
		title: "Level Design",
		items: ["Environment Design", "Flow & Pacing", "Puzzle Design", "Blockout"],
		icon: FiLayers
	},
	{
		title: "Quality Assurance",
		items: ["Bug Testing", "Balance Testing", "User Testing", "Documentation"],
		icon: GrBug
	},
	{
		title: "Technical Skills",
		items: ["Unity", "Unreal Engine", "Git", "Jira"],
		icon: FiCode
	},
	{
		title: "Creative Skills",
		items: ["Narrative Design", "World Building", "UI/UX Design", "Prototyping"],
		icon: FiEdit3
	},
	{
		title: "Collaboration",
		items: ["Team Leadership", "Cross-functional", "Agile/Scrum", "Communication"],
		icon: FiUsers
	}
]
