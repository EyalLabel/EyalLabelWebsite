import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontInSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { getInternalPath } from "@/lib/utils";
import { GithubIcon, LinkedInIcon, HeartFilledIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Eyal Label",
    "Software Engineer",
    "Game Developer",
    "Web Developer",
    "Unity",
    "React",
    "Next.js",
    "TypeScript",
    "Game Development",
    "Full Stack Developer",
  ],
  authors: [{ name: "Eyal Label" }],
  creator: "Eyal Label",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eyallabel.dev",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontInSans.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="mobile-container pt-16 flex-grow safe-area">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <footer className="w-full border-t border-divider">
              <div className="container mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        EL
                      </div>
                      <span className="font-semibold text-lg">Eyal Label</span>
                    </div>
                    <p className="text-sm text-default-600 max-w-xs">
                      Software Engineer & Game Developer passionate about
                      creating engaging digital experiences.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <Link
                        className="text-default-600 hover:text-primary"
                        href={getInternalPath("/")}
                      >
                        Home
                      </Link>
                      <Link
                        className="text-default-600 hover:text-primary"
                        href={getInternalPath("/about")}
                      >
                        About
                      </Link>
                      <Link
                        className="text-default-600 hover:text-primary"
                        href={getInternalPath("/Games")}
                      >
                        Games
                      </Link>
                      <Link
                        className="text-default-600 hover:text-primary"
                        href={getInternalPath("/Experience")}
                      >
                        Experience
                      </Link>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Connect</h3>
                    <div className="flex gap-4">
                      <Link
                        isExternal
                        aria-label="GitHub Profile"
                        className="text-default-600 hover:text-primary"
                        href={siteConfig.links.github}
                      >
                        <GithubIcon size={20} />
                      </Link>
                      <Link
                        isExternal
                        aria-label="LinkedIn Profile"
                        className="text-default-600 hover:text-primary"
                        href={siteConfig.links.linkedin}
                      >
                        <LinkedInIcon size={20} />
                      </Link>
                    </div>
                  </div>
                </div>

                <Divider className="my-6" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-default-600">
                  <p>
                    © {new Date().getFullYear()} Eyal Label. All rights
                    reserved.
                  </p>
                 
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
