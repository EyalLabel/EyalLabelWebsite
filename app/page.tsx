"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { ProjectList } from "@/components/ProjectsList";

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
    <div className="flex flex-col gap-8 py-8 md:py-12">
      {/* Hero Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h1 className={title({ size: "lg" })}>
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eyal Label
            </span>
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Software Engineer, Game Developer & Creative Technologist
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto leading-relaxed">
            I craft engaging digital experiences through code, from interactive
            web applications to immersive games. Passionate about clean code,
            user experience, and bringing creative ideas to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            as={Link}
            className="font-semibold"
            color="primary"
            href="/about"
            size="lg"
            variant="shadow"
          >
            Learn More About Me
          </Button>
          <Button
            as={Link}
            className="font-semibold"
            href="/Experience"
            size="lg"
            variant="bordered"
          >
            View Experience
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center pt-4">
          <Button
            isExternal
            isIconOnly
            aria-label="GitHub Profile"
            as={Link}
            href={siteConfig.links.github}
            variant="light"
          >
            <GithubIcon size={24} />
          </Button>
          <Button
            isExternal
            isIconOnly
            aria-label="LinkedIn Profile"
            as={Link}
            href={siteConfig.links.linkedin}
            variant="light"
          >
            <LinkedInIcon size={24} />
          </Button>
        </div>
      </MotionDiv>

      <Divider className="my-8" />

      {/* Skills Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold">Technologies & Skills</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Chip
                className="transition-all hover:scale-105"
                color="primary"
                variant="flat"
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
          <Button
            as={Link}
            color="primary"
            href="/Games"
            size="lg"
            variant="ghost"
          >
            View All Projects
          </Button>
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
