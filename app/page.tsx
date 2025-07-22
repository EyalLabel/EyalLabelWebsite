"use client";

import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { ProjectList } from "@/components/ProjectsList";
import { getInternalPath } from "@/lib/utils";

const MotionDiv = motion.div;
const MotionCard = motion(Card);

export default function Home() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Unity",
    "C#",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "Game Development",
    "Web Development",
  ];

  return (
    <div className="mobile-flex-col gap-6 py-4 sm:py-8 md:py-12">
      {/* Hero Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 sm:space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-3 sm:space-y-4">
          <h1 className="mobile-text-2xl sm:text-4xl lg:text-5xl font-bold">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eyal Label
            </span>
          </h1>
          <h2 className="mobile-text-lg sm:text-xl lg:text-2xl text-default-600">
            Software Engineer, Game Developer & Creative Technologist
          </h2>
          <p className="mobile-text-base sm:text-lg text-default-600 max-w-2xl mx-auto leading-relaxed px-4">
            I craft engaging digital experiences through code, from interactive
            web applications to immersive games. Passionate about clean code,
            user experience, and bringing creative ideas to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mobile-flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4">
          <Link
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover font-semibold mobile-button w-full sm:w-auto"
            href={getInternalPath("/about")}
          >
            Learn More About Me
          </Link>
          <Link
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover font-semibold mobile-button w-full sm:w-auto"
            href={getInternalPath("/Experience")}
          >
            View Experience
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center pt-4">
          <Link
            isExternal
            aria-label="GitHub Profile"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-medium px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-10 w-10 h-10"
            href={siteConfig.links.github}
          >
            <GithubIcon size={24} />
          </Link>
          <Link
            isExternal
            aria-label="LinkedIn Profile"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-medium px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-10 w-10 h-10"
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon size={24} />
          </Link>
        </div>
      </MotionDiv>

      <Divider className="my-8" />

      {/* Skills Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 sm:space-y-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="mobile-text-xl sm:text-2xl font-bold">Technologies & Skills</h3>
        <div className="mobile-flex-wrap gap-2 justify-center max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Chip
                className="mobile-button text-sm sm:text-base"
                color="primary"
                variant="flat"
                size="sm"
              >
                {skill}
              </Chip>
            </motion.div>
          ))}
        </div>
      </MotionDiv>

      <Divider className="my-8" />

      {/* Featured Projects Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Featured Projects</h3>
          <p className="text-default-600">Check out some of my recent work</p>
        </div>

        <ProjectList />

        <div className="text-center pt-4">
          <Link
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium bg-transparent px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none border-primary text-primary data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
            href={getInternalPath("/Games")}
          >
            View All Projects
          </Link>
        </div>
      </MotionDiv>

      {/* Quick Stats */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
          <CardBody>
            <h4 className="text-3xl font-bold text-primary">2+</h4>
            <p className="text-default-600">Games Developed</p>
          </CardBody>
        </MotionCard>

        <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
          <CardBody>
            <h4 className="text-3xl font-bold text-primary">10+</h4>
            <p className="text-default-600">Technologies Mastered</p>
          </CardBody>
        </MotionCard>

        <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
          <CardBody>
            <h4 className="text-3xl font-bold text-primary">∞</h4>
            <p className="text-default-600">Lines of Code Written</p>
          </CardBody>
        </MotionCard>
      </MotionDiv>
    </div>
  );
}
