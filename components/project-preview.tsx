import NextImage from "next/image";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import Link from "next/link";

import { ProjectPreviewProps } from "@/config/site";
import { getInternalPath } from "@/lib/utils";

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
          <Link
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover flex-1 font-semibold"
            href={getInternalPath(props.href)}
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
