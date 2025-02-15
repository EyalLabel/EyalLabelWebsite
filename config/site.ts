import { link } from "fs";
import { title } from "process";

export type SiteConfig = typeof siteConfig;

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
