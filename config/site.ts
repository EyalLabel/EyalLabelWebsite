import { link } from "fs";
import { title } from "process";

export type SiteConfig = typeof siteConfig;
export type ProjectPreviewProps=  {index:number, title: string, description: string, image: string, href: string};
export type ProjectPreviewList = typeof ProjectPreviewList;

export const ProjectPreviewList = {
  previews:[

    {
      index:1,
      title: "UNDEAD UNREST",
      description: "A 2D Rogue-Lite Game, Made in Unity",
      image: "./UUscreenShot.png",
      href: "/Games/UndeadUnrest",
    }
    ,
    {
      index:2,
      title: "BUBBLE BRAWL",
      description: "An Arena combat game made in Unity for the 2025 Global Game Jam",
      image: "./BBrawlThumbnail.png",
      href: "/Games/BubbleBrawl",
    }
  ]
  
};
export const siteConfig = {
  title: "Eyal Label's Personal Website",
  name: "Eyal Label",
  description: "Software Engineer, Game Developer, and Web Developer",
  navItems: [

    {
      label: "Games",
      href: "/Games",
    },
    

    {
      label: "Proffesional Experience",
      href: "/Experience",
    },
  ],
  navMenuItems: [
    {
      label: "Games",
      href: "/Games",
    },

    {
      label: "Proffesional Experience",
      href: "/Experience",
    },
  ],
  links: {
    github: "https://github.com/EyalLabel",
    linkedin: "https://www.linkedin.com/in/eyal-label/",
  },
};
