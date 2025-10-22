"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Icons from "./icons";
import { getInternalPath } from "@/lib/utils";
import { ProjectPreviewList } from "@/config/site";

export default function WebDevNavLinks() {
  const webDevLinks = ProjectPreviewList.previews.filter((p) => p.type === "web");
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 w-full">
      {webDevLinks.map((project) => {
        const isActive = pathname === project.href || pathname === getInternalPath(project.href);
        return (
          <Link
            key={project.title}
            href={getInternalPath(project.href)}
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
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <span className="hidden md:block truncate">{project.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
