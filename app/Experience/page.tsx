"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { getInternalPath } from "@/lib/utils";

const MotionDiv = motion.div;
const MotionCard = motion(Card);

export default function ExperiencePage() {
  const skills = {
    "Game Development": [
      "Unity Engine",
      "C#",
      "Unreal Engine",
      "Game Design",
      "3D Modeling (Maya)",
    ],
    Programming: ["C#", "Java", "JavaScript", "TypeScript", "Python"],
    Frontend: ["React", "Next.js", "CSS3", "HTML5", "Tailwind CSS"],
    Backend: ["Spring", ".NET", "Node.js", "RESTful APIs"],
    Databases: ["MySQL", "MongoDB", "IRIS", "Prisma"],
    Tools: ["Git", "Unity Editor", "VS Code", "InterSystems IRIS"],
  };

  const experiences = [
    {
      role: "Software Developer",
      company: "Matrix",
      period: "Nov 2022 - Present",
      type: "Full-time",
      achievements: [
        "Developed responsive and intuitive user interfaces for ERP systems",
        "Implemented efficient software solutions while maintaining clean, maintainable code",
        "Collaborated with cross-functional teams to deliver high-quality software products",
        "Applied object-oriented programming principles to create scalable solutions",
      ],
    },
    {
      role: "Anti-Fraud Analyst",
      company: "RSA Security",
      period: "Jun 2022 - Nov 2022",
      type: "Full-time",
      achievements: [
        "Analyzed and responded to security threats in real-time",
        "Developed automated solutions to enhance threat detection efficiency",
        "Demonstrated strong analytical and problem-solving skills",
      ],
    },
  ];

  const education = [
    {
      degree: "Game Design And Development Diploma",
      institution: "The Open University - Tel Aviv",
      period: "Jan 2024 - Jan 2025",
      focus: [
        "Unity Development",
        "Unreal Engine",
        "C# Programming",
        "Game Design Principles",
        "3D Modeling with Maya",
      ],
    },
    {
      degree: "Full-Stack Java Development",
      institution: "John Bryce - Tel Aviv",
      period: "Feb 2021 - May 2021",
      focus: [
        "Java Development",
        "MySQL Database",
        "Spring Framework",
        "React Frontend",
        "JavaScript",
      ],
    },
  ];

  const projects = [
    {
      title: "Undead Unrest",
      subtitle: "Unity Mobile/PC Game",
      description: [
        "Developed a 2D roguelite game targeting both mobile and PC platforms using Unity and C#",
        "Implemented procedural level generation and progressive difficulty scaling",
        "Created engaging combat mechanics and enemy AI behavior systems",
        "Designed cross-platform UI for touch and keyboard/mouse inputs",
        "Utilized object pooling and optimization techniques for smooth mobile performance",
      ],
    },
    {
      title: "Clear of Mind",
      subtitle: "3D Detective Game",
      description: [
        "Led development of a 3D detective game featuring interactive investigation mechanics",
        "Designed and implemented a skill-based mini-game system",
        "Created NPC interaction system with branching dialogue",
        "Developed investigation mechanics for evidence collection and analysis",
        "Implemented 3D character movement and camera controls for exploration",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-8 md:py-12 max-w-6xl mx-auto">
      {/* Header */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={title()}>Professional Experience</h1>
        <p className={subtitle({ class: "mt-4" })}>
          My journey in software and game development
        </p>
      </MotionDiv>

      {/* Professional Summary */}
      <MotionCard
        animate={{ opacity: 1, y: 0 }}
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <CardHeader>
          <h2 className="text-2xl font-bold">Professional Summary</h2>
        </CardHeader>
        <CardBody>
          <p className="text-default-700 leading-relaxed">
            Full-stack software developer with 3 years of experience in
            enterprise software development. Proven track record in developing
            efficient, scalable solutions using modern technologies. Strong
            foundation in both front-end and back-end development, with
            expertise in C#, Java, React, and Unity. Combining software
            development experience with a passion for game development, I bring
            strong problem-solving abilities and attention to detail to create
            engaging gaming and interactive experiences.
          </p>
        </CardBody>
      </MotionCard>

      {/* Contact Information */}
      <MotionCard
        animate={{ opacity: 1, y: 0 }}
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CardHeader>
          <h2 className="text-2xl font-bold">Contact Information</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-default-600">Location</p>
              <p className="font-medium">Kfar Sava, Israel</p>
            </div>
            <div>
              <p className="text-sm text-default-600">Phone</p>
              <Link
                className="font-medium text-primary hover:underline"
                href="tel:0506441480"
              >
                0506441480
              </Link>
            </div>
            <div>
              <p className="text-sm text-default-600">Email</p>
              <Link
                className="font-medium text-primary hover:underline"
                href="mailto:eyal.label1@gmail.com"
              >
                eyal.label1@gmail.com
              </Link>
            </div>
            <div className="flex gap-2">
              <Link
                isExternal
                href={siteConfig.links.github}
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-medium px-3 min-w-16 h-8 transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover"
              >
                <GithubIcon size={16} />
                GitHub
              </Link>
              <Link
                isExternal
                href={siteConfig.links.linkedin}
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-medium px-3 min-w-16 h-8 transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </Link>
            </div>
          </div>
        </CardBody>
      </MotionCard>

      {/* Technical Skills */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <MotionCard
              key={category}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold">{category}</h3>
              </CardHeader>
              <CardBody>
                <div className="flex flex-wrap gap-1">
                  {skillList.map((skill) => (
                    <Chip
                      key={skill}
                      className="text-xs"
                      color="primary"
                      size="sm"
                      variant="flat"
                    >
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

      {/* Professional Experience */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <MotionCard
              key={exp.company}
              animate={{ opacity: 1, x: 0 }}
              className="hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start w-full">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <Chip color="primary" size="sm" variant="flat">
                      {exp.type}
                    </Chip>
                    <p className="text-sm text-default-600 mt-1">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span className="text-default-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </MotionCard>
          ))}
        </div>
      </MotionDiv>

      <Divider />

      {/* Education */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-center">Education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <MotionCard
              key={edu.institution}
              animate={{ opacity: 1, y: 0 }}
              className="hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <CardHeader className="pb-2">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-sm text-default-600">{edu.period}</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex flex-wrap gap-1">
                  {edu.focus.map((subject) => (
                    <Chip
                      key={subject}
                      className="text-xs"
                      color="secondary"
                      size="sm"
                      variant="flat"
                    >
                      {subject}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </MotionCard>
          ))}
        </div>
      </MotionDiv>

      <Divider />

      {/* Game Projects */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className="text-2xl font-bold text-center">Notable Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <MotionCard
              key={project.title}
              animate={{ opacity: 1, y: 0 }}
              className="hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
            >
              <CardHeader className="pb-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-primary">{project.subtitle}</p>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span className="text-default-700">{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </MotionCard>
          ))}
        </div>
      </MotionDiv>

      {/* Additional Information */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <MotionCard>
          <CardHeader>
            <h3 className="text-lg font-bold">Languages</h3>
          </CardHeader>
          <CardBody>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Hebrew</span>
                <Chip color="success" size="sm" variant="flat">
                  Native
                </Chip>
              </div>
              <div className="flex justify-between">
                <span>English</span>
                <Chip color="success" size="sm" variant="flat">
                  Fluent
                </Chip>
              </div>
            </div>
          </CardBody>
        </MotionCard>

        <MotionCard>
          <CardHeader>
            <h3 className="text-lg font-bold">Interests</h3>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2">
              {["Game Development", "Video Games", "Technology", "Writing"].map(
                (interest) => (
                  <Chip key={interest} color="default" size="sm" variant="flat">
                    {interest}
                  </Chip>
                ),
              )}
            </div>
          </CardBody>
        </MotionCard>
      </MotionDiv>

      {/* CTA */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Ready to Collaborate?</h2>
          <p className="text-default-600 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, projects, or just
            connecting with fellow developers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover"
              href={getInternalPath("/Games")}
            >
              View My Projects
            </Link>
            <Link
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover"
              href={getInternalPath("/about")}
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
