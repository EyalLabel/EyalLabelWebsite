"use client";

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";

import NavLinks from "./gamenavlinks";
import WebDevNavLinks from "./webdevnavlinks";
import { getInternalPath } from "@/lib/utils";

export default function SideNav() {
  const pathname = usePathname();
  const isWebDevPage = pathname.startsWith("/WebDevelopment");

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
     
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {isWebDevPage ? <WebDevNavLinks /> : <NavLinks />}
        <div className="hidden h-auto w-full grow rounded-md bg-primary-50 md:block" />
      </div>
    </div>
  );
}
