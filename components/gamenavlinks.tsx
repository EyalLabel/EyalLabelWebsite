"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "./icons";
import { getInternalPath } from "@/lib/utils";
import { ProjectPreviewList } from "@/config/site";

export default function NavLinks() {
  const gameLinks = ProjectPreviewList.previews.filter((p) => p.type === "game");
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2 w-full">
      {gameLinks.map((game) => {
        const IconComponent = (game.icon && Icons[game.icon as keyof typeof Icons]) || Icons.SkullIcon;
        const isActive = pathname === game.href || pathname === getInternalPath(game.href);
        return (
          <Link
            key={game.title}
            href={getInternalPath(game.href)}
            className={`
              flex items-center gap-3 rounded-lg px-3 py-2 transition-all
              font-medium text-base
              bg-gradient-to-r from-primary-50 to-transparent
              hover:from-primary-100 hover:to-primary-50
              hover:shadow-md
              hover:text-primary-700
              focus:outline-none focus:ring-2 focus:ring-primary-400
              ${isActive ? "bg-primary-200 text-primary-900 shadow-lg" : "text-secondary-700"}
            `}
            style={{ minHeight: 48 }}
          >
            <span className={`flex items-center justify-center w-8 h-8 rounded-md ${isActive ? "bg-primary-300" : "bg-primary-100"}`}>
              <IconComponent className="w-6 h-6 text-primary-600" />
            </span>
            <span className="hidden md:block truncate">{game.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
