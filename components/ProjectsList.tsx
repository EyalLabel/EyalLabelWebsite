import { motion } from "framer-motion";

import { ProjectPreview } from "@/components/project-preview";
import { ProjectPreviewList } from "@/config/site";

const MotionDiv = motion.div;

export function ProjectList() {
  return (
    <MotionDiv
      animate={{ opacity: 1 }}
      className="w-full"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
        {ProjectPreviewList.previews.map((preview) => (
          <motion.div
            key={preview.index}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm"
            initial={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0.1 * preview.index,
              ease: "easeOut",
            }}
          >
            <ProjectPreview {...preview} />
          </motion.div>
        ))}
      </div>
    </MotionDiv>
  );
}
