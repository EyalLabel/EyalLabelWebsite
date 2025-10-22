"use client";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import NextImage from "next/image";
import { useState } from "react";

import { title, subtitle } from "@/components/primitives";
import { ProjectPreviewList } from "@/config/site";
import { getInternalPath } from "@/lib/utils";

const MotionDiv = motion.div;
const MotionCard = motion(Card);

export default function WebDevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extended project data with more details
  const projects = [
    {
      ...ProjectPreviewList.previews[2], // Magnus Character Sheet
      category: "Full-Stack Web App",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Live",
      features: [
        "Character Sheet Management",
        "RPG System Integration",
        "Responsive Design",
        "Real-time Updates",
        "Data Persistence",
      ],
      description:
        "A comprehensive digital character sheet application designed for tabletop RPG players. Features intuitive character creation, stat tracking, and seamless gameplay integration.",
      longDescription:
        "The Magnus Character Sheet is a sophisticated web application built with modern React and Next.js technologies. This project demonstrates full-stack development skills with a focus on user experience and data management. The application provides an intuitive interface for RPG players to create, manage, and track their characters throughout their gaming sessions. Built with TypeScript for type safety and deployed on Vercel for optimal performance.",
      challenges: [
        "Complex state management for character data",
        "Responsive design across devices",
        "Data validation and persistence",
        "User-friendly interface design",
      ],
    },
    {
      ...(ProjectPreviewList.previews.find((p) => p.title === "Monsterdle") as (typeof ProjectPreviewList.previews)[number]),
      category: "Web Game",
      technologies: ["React.js", "TypeScript", "Tailwind CSS","Express.js"],
      status: "In Development",
      features: [
        "Daily puzzle cadence",
        "Shareable results & streaks",
        "Accessible hinting system",
        "Lightweight, responsive UI",
      ],
      description:
        "A daily monster guessing game inspired by Wordle, focused on quick, satisfying play sessions.",
      longDescription:
        "Monsterdle is a Wordle-style daily guessing game where players identify a different monster each day. The project emphasizes fair hint algorithms, a snappy gameplay loop, and shareable results that encourage friendly competition.",
      challenges: [
        "Designing fair, non-spoiling hints",
        "Streak tracking and validation",
        "Scalable content pipeline for daily puzzles",
      ],
    },
  ];

  const categories = ["All", "Full-Stack Web App"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col gap-8 py-8 md:py-12 max-w-7xl mx-auto">
      {/* Header */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={title()}>Web Development Projects</h1>
        <p className={subtitle({ class: "mt-4" })}>
          Explore my web development projects and digital solutions
        </p>
      </MotionDiv>

      {/* Category Filter */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-2 justify-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            className="min-w-0"
            color="primary"
            size="sm"
            variant={selectedCategory === category ? "solid" : "bordered"}
            onPress={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </MotionDiv>

      <Divider />

      {/* Projects Grid */}
      <MotionDiv
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filteredProjects.map((project, index) => (
          <MotionCard
            key={project.index}
            animate={{ opacity: 1, y: 0 }}
            className="hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              ease: "easeOut",
            }}
          >
            {/* Project Header with Image */}
            <CardHeader className="pb-0">
              <div className="w-full space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Chip color="primary" size="sm" variant="flat">
                        {project.category}
                      </Chip>
                      <Chip color="success" size="sm" variant="flat">
                        {project.status}
                      </Chip>
                    </div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-default-600">{project.description}</p>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <NextImage
                    fill
                    alt={`${project.title} screenshot`}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={project.image}
                  />
                </div>
              </div>
            </CardHeader>

            <CardBody className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Chip key={tech} color="secondary" size="sm" variant="flat">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1 text-xs">●</span>
                      <span className="text-default-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Description */}
              <div>
                <h3 className="font-semibold mb-2">Project Overview</h3>
                <p className="text-sm text-default-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Development Challenges */}
              <div>
                <h3 className="font-semibold mb-2">Development Challenges</h3>
                <ul className="space-y-1">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-amber-500 mt-1 text-xs">⚡</span>
                      <span className="text-default-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>

            <CardFooter className="pt-0">
              <div className="flex gap-2 w-full">
                <Link
                  className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover flex-1 font-semibold"
                  href={project.href}
                >
                  <svg
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    focusable="false"
                    tabIndex={-1}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  View Project
                </Link>
              </div>
            </CardFooter>
          </MotionCard>
        ))}
      </MotionDiv>

      {/* Development Philosophy */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold">Development Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
            <CardBody>
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold mb-2">User-Centric Design</h3>
              <p className="text-sm text-default-600">
                Every web application is designed with the end user in mind,
                ensuring intuitive navigation and seamless user experiences.
              </p>
            </CardBody>
          </MotionCard>

          <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
            <CardBody>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Performance First</h3>
              <p className="text-sm text-default-600">
                Optimized code, efficient loading, and responsive design ensure
                fast, smooth experiences across all devices and platforms.
              </p>
            </CardBody>
          </MotionCard>

          <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
            <CardBody>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold mb-2">Modern Technologies</h3>
              <p className="text-sm text-default-600">
                Leveraging cutting-edge frameworks and best practices to create
                scalable, maintainable, and future-proof web applications.
              </p>
            </CardBody>
          </MotionCard>
        </div>
      </MotionDiv>

      {/* Call to Action */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 py-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-2xl font-bold">Interested in Web Development?</h2>
        <p className="text-default-600 max-w-2xl mx-auto">
          I&apos;m passionate about creating modern, responsive web applications
          that solve real-world problems. Let&apos;s collaborate on your next
          digital project!
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover"
            href={getInternalPath("/Experience")}
          >
            View My Experience
          </Link>
          <Link
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover"
            href={getInternalPath("/about")}
          >
            Get to Know Me
          </Link>
        </div>
      </MotionDiv>
    </div>
  );
}
