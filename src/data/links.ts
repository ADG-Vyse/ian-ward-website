import type { IconType } from 'react-icons';
import { FiLinkedin, FiMail } from "react-icons/fi";

export type NavLink = {
  name: string;
  href: string;
};

export type ContactLink = {
  name: string;
  href: string;
  Icon: IconType;
};

export const navLinks: NavLink[] = [
  { name: "Projects", href: "/" },
  { name: "Game Jams", href: "/game-jams/" },
  { name: "About Me", href: "/about-me/" },
  { name: "Resume", href: "/resume/" },
];

export const contactLinks: ContactLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ian-ward-567594177/",
    Icon: FiLinkedin,
  },
  {
    name: "Email",
    href: "mailto:IanWard1991@hotmail.co.uk",
    Icon: FiMail,
  },
];
