import { ProjectPreview } from "@/components/project-preview";
import { divider } from "@heroui/theme";
import { siteConfig,ProjectPreviewList } from "@/config/site";
import { ProjectPreviewProps } from "@/config/site";

export function ProjectList(){
    return(
        <div>
        <ul className=" gap-4"> 
          {ProjectPreviewList.previews.map((preview) => (
            <li key={preview.index}>
              <ProjectPreview {...preview} />
            </li>
          ))}

        </ul>
        </div>
    );
}

