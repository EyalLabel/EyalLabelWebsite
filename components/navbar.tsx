"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { fontInSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { getInternalPath } from "@/lib/utils";
import { GithubIcon, CustomLogo, LinkedInIcon } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar
      className="border-b border-divider/50 backdrop-blur-md bg-background/70"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            aria-label="Go to homepage"
            className={clsx(
              fontInSans.className,
              "flex justify-start items-center gap-2 hover:opacity-80 transition-opacity",
            )}
            href={getInternalPath("/")}
          >
            <CustomLogo />
            <span className="font-bold text-lg">Eyal Label</span>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-6 justify-start ml-6">
                  {siteConfig.navItems.map((item) => {
          const fullPath = getInternalPath(item.href);
          const isActive =
            pathname === fullPath ||
            (item.href !== "/" && pathname.startsWith(fullPath));

          return (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "relative py-2 px-1 transition-colors hover:text-primary",
                  isActive && "text-primary font-medium",
                )}
                href={fullPath}
              >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button
            isExternal
            isIconOnly
            aria-label="View GitHub profile"
            as={Link}
            className="hover:bg-default-100"
            href={siteConfig.links.github}
            variant="light"
          >
            <GithubIcon className="text-default-600" size={20} />
          </Button>
          <Button
            isExternal
            isIconOnly
            aria-label="View LinkedIn profile"
            as={Link}
            className="hover:bg-default-100"
            href={siteConfig.links.linkedin}
            variant="light"
          >
            <LinkedInIcon className="text-default-600" size={20} />
          </Button>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Button
          isExternal
          isIconOnly
          aria-label="View GitHub profile"
          as={Link}
          href={siteConfig.links.github}
          variant="light"
        >
          <GithubIcon className="text-default-600" size={20} />
        </Button>
        <ThemeSwitch />
        <NavbarMenuToggle aria-label="Toggle navigation menu" />
      </NavbarContent>

      <NavbarMenu className="pt-6">
        <div className="mx-4 mt-2 flex flex-col gap-2">
                  {siteConfig.navMenuItems.map((item, index) => {
          const fullPath = getInternalPath(item.href);
          const isActive =
            pathname === fullPath ||
            (item.href !== "/" && pathname.startsWith(fullPath));

          return (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  "w-full py-3 px-2 rounded-lg transition-colors",
                  isActive
                    ? "text-primary bg-primary-50 dark:bg-primary-950 font-medium"
                    : "text-foreground hover:text-primary hover:bg-default-100",
                )}
                href={fullPath}
                size="lg"
              >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}

          {/* Mobile Social Links */}
          <div className="flex gap-2 mt-4 px-2">
            <Button
              isExternal
              as={Link}
              href={siteConfig.links.github}
              size="sm"
              startContent={<GithubIcon size={16} />}
              variant="flat"
            >
              GitHub
            </Button>
            <Button
              isExternal
              as={Link}
              href={siteConfig.links.linkedin}
              size="sm"
              startContent={<LinkedInIcon size={16} />}
              variant="flat"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
