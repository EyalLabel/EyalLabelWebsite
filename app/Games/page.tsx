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

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extended project data with more details
  const projects = [
    {
      ...ProjectPreviewList.previews[0],
      category: "Mobile/PC Game",
      technologies: ["Unity", "C#", "Mobile Development", "PC"],
      status: "Released",
      features: [
        "2D Roguelite Gameplay",
        "Procedural Level Generation",
        "Cross-platform Support",
        "Progressive Difficulty",
        "Combat System",
      ],
      description:
        "A thrilling 2D roguelite adventure where players battle through procedurally generated levels filled with undead enemies. Features cross-platform compatibility for both mobile and PC players.",
      longDescription:
        "Undead Unrest is a comprehensive 2D roguelite game that showcases advanced Unity development skills. The game features sophisticated procedural level generation algorithms, creating unique experiences for each playthrough. Players navigate through increasingly challenging environments while battling various undead enemies using an intuitive combat system. The game demonstrates cross-platform development expertise, ensuring smooth performance on both mobile devices and PC platforms.",
      challenges: [
        "Implementing efficient procedural generation",
        "Optimizing for mobile performance",
        "Creating engaging combat mechanics",
        "Cross-platform UI design",
      ],
    },
    {
      ...ProjectPreviewList.previews[1],
      category: "Game Jam Entry",
      technologies: ["Unity", "C#", "Game Jam", "Arena Combat"],
      status: "Game Jam 2025",
      features: [
        "Arena Combat System",
        "Multiplayer Support",
        "Dynamic Environments",
        "Real-time Combat",
        "Power-ups",
      ],
      description:
        "An intense arena combat game created during the Global Game Jam 2025. Features fast-paced multiplayer battles in dynamic bubble-themed environments.",
      longDescription:
        "Bubble Brawl was developed during the intense 48-hour Global Game Jam 2025, demonstrating rapid prototyping and game development skills. The game features an innovative arena combat system where players battle in bubble-themed environments. The project showcases ability to work under pressure, implement core gameplay mechanics quickly, and create engaging multiplayer experiences within strict time constraints.",
      challenges: [
        "48-hour development timeline",
        "Multiplayer implementation",
        "Real-time combat system",
        "Team coordination under pressure",
      ],
    },
  ];

  const categories = ["All", "Mobile/PC Game", "Game Jam Entry"];

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
        <h1 className={title()}>Game Projects</h1>
        <p className={subtitle({ class: "mt-4" })}>
          Explore my interactive game development projects and experiences
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
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Game
                </Link>
                <Button
                  aria-label="View project details"
                  className="min-w-0 px-3"
                  variant="bordered"
                >
                  <svg
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </Button>
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
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-bold mb-2">Player-Centric Design</h3>
              <p className="text-sm text-default-600">
                Every gameplay mechanic is designed with the player experience
                in mind, ensuring engaging and intuitive interactions.
              </p>
            </CardBody>
          </MotionCard>

          <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
            <CardBody>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Performance Optimization</h3>
              <p className="text-sm text-default-600">
                Clean, efficient code and smart optimization techniques ensure
                smooth gameplay across all target platforms.
              </p>
            </CardBody>
          </MotionCard>

          <MotionCard className="text-center p-6" whileHover={{ y: -5 }}>
            <CardBody>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold mb-2">Technical Excellence</h3>
              <p className="text-sm text-default-600">
                Leveraging modern development practices and design patterns to
                create maintainable and scalable game systems.
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
        <h2 className="text-2xl font-bold">Interested in Collaborating?</h2>
        <p className="text-default-600 max-w-2xl mx-auto">
          I&apos;m always excited to work on new game projects, whether it&apos;s indie
          development, game jams, or commercial projects. Let&apos;s create something
          amazing together!
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
