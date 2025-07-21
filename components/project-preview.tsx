import NextImage from "next/image";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import Link from "next/link";

import { ProjectPreviewProps } from "@/config/site";

const MotionCard = motion(Card);

export function ProjectPreview(props: ProjectPreviewProps) {
  return (
    <MotionCard
      isPressable
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-[400px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex items-center gap-2 mb-2">
          <Chip color="primary" size="sm" variant="flat">
            Project {props.index.toString().padStart(2, "0")}
          </Chip>
        </div>
        <h3 className="font-bold text-large">{props.title}</h3>
        <p className="text-tiny uppercase font-bold text-default-500">
          {props.description}
        </p>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        <motion.div
          className="relative w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <NextImage
            fill
            alt={`${props.title} screenshot`}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={props.image}
          />
        </motion.div>
      </CardBody>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button
            as={Link}
            className="flex-1 font-semibold"
            color="primary"
            href={props.href}
            startContent={
              <svg
                fill="currentColor"
                height="16"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            }
            variant="shadow"
          >
            Play Game
          </Button>
          <Button
            isIconOnly
            aria-label="More info"
            className="min-w-0"
            variant="bordered"
          >
            <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </Button>
        </div>
      </CardFooter>
    </MotionCard>
  );
}
