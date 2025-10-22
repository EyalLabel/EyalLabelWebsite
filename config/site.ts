export type SiteConfig = typeof siteConfig;
export type ProjectType = "game" | "web";
export type ProjectPreviewProps = {
  index: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  href: string;
  type: ProjectType;
  icon?: string; // Add icon property for game projects
};
export type ProjectPreviewList = typeof ProjectPreviewList;

export const ProjectPreviewList = {
  previews: [
    {
      index: 1,
      title: "UNDEAD UNREST",
      description: "A 2D Rogue-Lite Game, Made in Unity",
      longDescription: "UNDEAD UNREST is a fast-paced 2D rogue-lite game built in Unity. Players battle through procedurally generated levels, facing unique enemies and collecting powerful upgrades. The game features a variety of stats and possible upgrades, challenging bosses, and a variety of weapons and abilities to master.",
      image: "/UUscreenShot.png",
      href: "/Games/UndeadUnrest",
      type: "game",
      icon: "SkullIcon",
    },
    {
      index: 2,
      title: "BUBBLE BRAWL",
      description: "An Arena combat game made in Unity for the 2025 Global Game Jam",
      longDescription: "Bubble Brawl is a silly competitive arena game developed in Unity for the 2025 Global Game Jam. Players control bouncy characters in a vibrant bubble-themed arena, trying to knock each other off the map. This game was a delight to work on, and I'm proud of the result.",
      image: "/BBrawlThumbnail.png",
      href: "/Games/BubbleBrawl",
      type: "game",
      icon: "BubbleIcon",
    },
    {
      index: 3,
      title: "Magnus Character Sheet",
      description: "A web app for managing RPG character sheets.",
      longDescription: "Magnus Character Sheet is a digital tool designed for the Magnus Archives RPG. It allows players to create, manage, and track their characters, abilities, and progress. The app streamlines gameplay and enhances the tabletop experience.",
      image: "/MagnusPartSheet.png", // Update this path as needed
      href: "https://magnus-character-sheet.vercel.app/", // Update if internal
      type: "web",
    },
    {
      index: 4,
      title: "Monsterdle",
      description: "A daily monster guessing game inspired by Wordle.",
      longDescription:
        "Monsterdle is a Wordle-like web game where players guess a different monster every day. It focuses on quick, satisfying daily play sessions with fair hinting, shareable results, and streak tracking.",
      image: "/LabelUpLogo.png",
      href: "/WebDevelopment", // Placeholder; replace with project link when live
      type: "web",
    },
  ],
};

export const siteConfig = {
  title: "Eyal Label's Personal Website",
  name: "Eyal Label - Software Engineer & Game Developer",
  description:
    "Full-stack software engineer and passionate game developer specializing in Unity, React, and modern web technologies. Creating engaging digital experiences and interactive games.",
  contactEmail: "eyal.label1@gmail.com", // Replace with your actual email
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Games",
      href: "/Games",
    },
    {
      label: "Web Development",
      href: "/WebDevelopment",
    },
    {
      label: "Experience",
      href: "/Experience",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Games",
      href: "/Games",
    },
    {
      label: "Web Development",
      href: "/WebDevelopment",
    },
    {
      label: "Experience",
      href: "/Experience",
    },
  ],
  links: {
    github: "https://github.com/EyalLabel",
    linkedin: "https://www.linkedin.com/in/eyal-label/",
  },
};
