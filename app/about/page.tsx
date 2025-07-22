"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { getInternalPath } from "@/lib/utils";

const MotionDiv = motion.div;
const MotionCard = motion(Card);

export default function AboutPage() {
  const skills = {
    "Programming Languages": ["TypeScript", "JavaScript", "Java", "C#"],
    "Web Technologies": [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "HTML5",
      "Tailwind CSS",
    ],
    "Game Development": [
      "Unity",
      "Unreal Engine",
      "Game Design",
      "2D/3D Graphics",
      "Physics Systems",
    ],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Unity Editor", "Figma"],
  };

  const achievements = [
    {
      title: "Global Game Jam 2025",
      description: "Developed 'Bubble Brawl' - An arena combat game",
      year: "2025",
    },
    {
      title: "Indie Game Developer",
      description: "Created 'Undead Unrest' - A 2D rogue-lite game",
      year: "2024",
    },
    {
      title: "Full-Stack Development",
      description: "Built multiple web applications with modern tech stack",
      year: "22-25",
    },
  ];

  return (
    <div className="mobile-flex-col gap-6 py-4 sm:py-8 md:py-12 max-w-4xl mx-auto">
      {/* Header Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 sm:space-y-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mobile-text-3xl sm:text-4xl lg:text-5xl font-bold">About Me</h1>
        <p className="mobile-text-lg sm:text-xl text-default-600">
          Get to know more about my journey, skills, and passion
        </p>
      </MotionDiv>

      {/* Profile Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="mobile-grid gap-6 lg:gap-8 w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Profile Image & Quick Info */}
        <motion.div
          className="mobile-card bg-content1 rounded-2xl p-4 sm:p-6 shadow-sm mobile-flex-col items-center gap-4 max-w-sm mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold overflow-hidden">
            EL
          </div>
          <div className="text-center">
            <h2 className="mobile-text-xl sm:text-2xl font-bold">Eyal Label</h2>
            <p className="mobile-text-sm sm:text-base text-default-600">
              Software Engineer & Game Developer
            </p>
          </div>
          <div className="mobile-flex-wrap gap-2 justify-center">
            <Button
              isExternal
              as={Link}
              href={siteConfig.links.github}
              size="sm"
              className="mobile-button"
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
              className="mobile-button"
              startContent={<LinkedInIcon size={16} />}
              variant="flat"
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* About Description */}
        <motion.div
          className="lg:col-span-2 bg-content1 rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold">Who I Am</h3>
          <p className="text-default-700 leading-relaxed">
            I&apos;m a passionate software engineer and game developer with a
            love for creating engaging digital experiences. My journey began
            with curiosity about how games work, which led me to explore
            programming and eventually expand into full-stack web development.
          </p>
          <p className="text-default-700 leading-relaxed">
            I specialize in building interactive applications and games that
            combine technical excellence with creative design. Whether it&apos;s
            crafting a seamless web experience or designing game mechanics that
            keep players engaged, I&apos;m always focused on the end-user
            experience.
          </p>
          <p className="text-default-700 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new
            technologies, playing games for inspiration, or working on personal
            projects that challenge my creativity and technical skills.
          </p>
        </motion.div>
      </MotionDiv>

      <Divider />

      {/* Skills Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <MotionCard
              key={category}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <CardHeader>
                <h3 className="text-lg font-semibold">{category}</h3>
              </CardHeader>
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Chip key={skill} color="primary" size="sm" variant="flat">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </MotionCard>
          ))}
        </div>
      </MotionDiv>

      <Divider />

      {/* Achievements Section */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center">Key Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <MotionCard
              key={achievement.title}
              animate={{ opacity: 1, y: 0 }}
              className="hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <CardBody className="flex flex-row items-center gap-4 p-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span className="text-primary font-bold"></span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  <p className="text-default-600">{achievement.description}</p>
                </div>
              </CardBody>
            </MotionCard>
          ))}
        </div>
      </MotionDiv>

      {/* Contact CTA */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
        <p className="text-default-600 max-w-2xl mx-auto">
          I&apos;m always interested in discussing new opportunities,
          collaborating on projects, or just chatting about technology and game
          development.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            as={Link}
            color="primary"
            href={getInternalPath("/Experience")}
            size="lg"
            variant="shadow"
          >
            View My Experience
          </Button>
          <Button
            as={Link}
            href={getInternalPath("/Games")}
            size="lg"
            variant="bordered"
          >
            See My Projects
          </Button>
        </div>
      </MotionDiv>
    </div>
  );
}
